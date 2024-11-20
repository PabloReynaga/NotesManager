import { fetchJson } from './Fetch';
import type { NewUser, User } from '../src/types/User';
import type { Note } from '@/types/Note';

export class Client {
  static async createUser(newUser: NewUser) {
    return await fetchJson('/register', 'POST', newUser);
  }

  static async loginUser(user: User) {
    return await fetchJson('/login', 'POST', user);
  }

  static async createNote(note: Note) {
    return await fetchJson('/createNote', 'POST', note);
  }

  static async updateNote(note: Note) {
    return await fetchJson('/updateNote', 'POST', note);
  }
  static async deleteNote(noteId: string) {
    return await fetchJson(`/deleteNote/${noteId}`, 'DELETE');
  }
  static async getAllNotes(id: string) {
    return await fetchJson(`/getAllNotes/${id}`, 'GET');
  }
}
