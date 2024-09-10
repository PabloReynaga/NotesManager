import { ref } from 'vue';
import type { Note } from '@/types/Note';
import { Client } from '../../api/Client';

export function useCards() {
  const cardsList = ref<Note[]>([]);


  const createNote = async (NoteDTO: Note) => {
    await Client.createNote(NoteDTO)
    await userNotes()
  };

  const userNotes = async () => {
    const userId = localStorage.getItem('userId');
    const fetchedNotes = await Client.getAllNotes(userId);
    console.log(fetchedNotes);
    cardsList.value = fetchedNotes;
  }

  const deleteNote = (id: string) => {
    cardsList.value = cardsList.value.filter((note) => note.id !== id);
  };

  return {
    userNotes,
    createNote,
    deleteNote,
    cardsList
  };
}
