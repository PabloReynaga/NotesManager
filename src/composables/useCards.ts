import { inject, ref } from 'vue';
import type { Note } from '@/types/Note';
import { Client } from '../../api/Client';
import { useFetch as Fetch } from '@/composables/useFetch';

export function useCards() {
  const fetchState = inject('fetchState');

  const deleteNote = async (id: string) => {
    await Client.deleteNote(id);
    await fetchState.getUserNotes()
  };

  return {
    deleteNote,
  };
}
