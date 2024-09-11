import { ref } from 'vue';
import type { Note } from '@/types/Note';
import { Client } from '../../api/Client';

export function useCards() {
  const cardsList = ref<Note[]>([]);


  const createNote = async (NoteDTO: Note) => {
    await Client.createNote(NoteDTO)
    await getUserNotes()
  };

  const getUserNotes = async () => {
    const userId = localStorage.getItem('userId');
    const fetchedNotes = await Client.getAllNotes(userId);
    console.log(fetchedNotes);
    cardsList.value = fetchedNotes;
  }

  const deleteNote = async (id: string) => {
    console.log(id);
    await Client.deleteNote(id)
    console.log(id);
    await getUserNotes()
  };

  return {
    getUserNotes,
    createNote,
    deleteNote,
    cardsList
  };
}
