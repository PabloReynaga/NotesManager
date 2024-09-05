import { fetchJson, fetchResponse } from './fetch';
import { exampleStore } from '../store/store';
import type { Note } from '@/types/Note';
export let dataGetExample: Note;
export let getImageData: Note;

export class Client {
  static async getExamples(userId?: number): Promise<Note> {
    return fetchJson<Note[]>(`/items${userId ? `?id=${userId}` : ''}`).then(
      (value) => {
        exampleStore.set(value);
        dataGetExample = value;
        return dataGetExample;
      }
    );
  }
  static async getExampleAbleById(id: number): Promise<Note> {
    return fetchJson<Note[]>(`/items/${id}`, 'GET').then((value) => {
      exampleStore.set(value);
      dataGetExample = value;
      return dataGetExample;
    });
  }
  static async getExampleItemById(id: number): Promise<Note> {
    return fetchJson<Note[]>(`/items/view/${id}`, 'GET').then((value) => {
      exampleStore.set(value);
      dataGetExample = value;
      return dataGetExample;
    });
  }
  static async getItemByUserId(userId: number): Promise<Note> {
    return fetchJson<Note[]>(`/items/${userId}`, 'GET').then((value) => {
      exampleStore.set(value);
      dataGetExample = value;
      return dataGetExample;
    });
  }

  //Send image id to be able to find out the file_name in order to show the right image in edit view
  static async getImage(imageId: String): Promise<Note> {
    return fetchJson<Note[]>(`/images/${imageId}`, 'GET').then((value) => {
      exampleStore.set(value);
      getImageData = value;
      return getImageData;
    });
  }

  static async createUser(example: Note) {
    return await fetchJson('/users', 'POST', example);
  }
  static async authenticationUser(example: Note) {
    return await fetchJson('/auth', 'POST', example);
  }

  static async createExample(example: Note) {
    return await fetchJson('/items', 'POST', example);
  }

  static async updateExample(example: Note) {
    await fetchJson('/items', 'PUT', example);
  }
  static updateImage(image: Note) {
    fetchJson('/images', 'PUT', image);
  }

  static async deleteItem(id: number) {
    await fetchResponse(`/images/${id}`, 'DELETE');
  }

  static async createImage(image: Note): Promise<Note> {
    return await fetchJson('/images', 'POST', image);
  }
}
