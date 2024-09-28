import { inject } from 'vue';
import { Client } from '../../api/Client';

export function useCards() {
  const fetchState = inject('fetchState');

  const deleteNote = async (id: string) => {
    await Client.deleteNote(id);
    await fetchState.getUserNotes();
  };

  return {
    deleteNote
  };
}
