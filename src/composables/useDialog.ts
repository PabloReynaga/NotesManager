import { ref } from 'vue';
import type { Note } from '@/types/Note';
import { inject } from 'vue';
import { Client } from '../../api/Client';

export function useDialog() {
  const isVisible = ref<boolean>(false);
  const dialogElement = ref<HTMLDialogElement | null>(null);
  const NoteDTO = ref<Note>({ userId: '', title: '', color: '', content: '' });
  const inputValidator = ref<boolean>(false);
  const enableEditButton = ref<boolean>(false);

  const fetchState = inject('fetchState');

  const openDialog = () => {
    isVisible.value = true;
    dialogElement.value?.showModal();
  };

  const closeDialog = () => {
    isVisible.value = false;
    dialogElement.value?.close();
    resetNoteDTO();
  };

  const createNote = async (NoteDTO: Note) => {
    NoteDTO.userId = localStorage.getItem('userId');
    console.log(NoteDTO);
    if (NoteDTO.userId == null) {
      throw new Error('UserID not found.');
    }
    if (NoteDTO.content != '' && NoteDTO.color != '' && NoteDTO.title != '') {
      console.log(NoteDTO);
      await fetchState.createNote(NoteDTO);
      inputValidator.value = false;
      resetNoteDTO();
      closeDialog();
    } else {
      inputValidator.value = true;
    }
  };
  const updateNote = async (note: Note) => {
    await Client.updateNote(note);
    closeDialog();
  };

  const resetNoteDTO = () => {
    NoteDTO.value = { userId: '', title: '', color: '', content: '' };
  };

  return {
    isVisible,
    openDialog,
    closeDialog,
    dialogElement,
    createNote,
    NoteDTO,
    inputValidator,
    enableEditButton,
    updateNote
  };
}
