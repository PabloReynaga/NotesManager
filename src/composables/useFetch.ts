import { Client } from '../../api/Client';
import { ref } from 'vue';
import type { Note } from '@/types/Note';

export function useFetch() {
  const cardsList = ref<Note[]>([]);

  const getUserNotes = async () => {
    const userId = localStorage.getItem('userId');
    const fetchedNotes = await Client.getAllNotes(userId);
    console.log(fetchedNotes);
    cardsList.value = fetchedNotes;
  };

  const createNote = async (NoteDTO: Note) => {
    await Client.createNote(NoteDTO);
    await getUserNotes();
  };

  return {
    createNote,
    getUserNotes,
    cardsList
  };
}
