import { ref } from 'vue'
import type { Note } from '@/types/Note'
import utils from '@/utils/utils'

export function useCards() {
  const cardsList = ref<Array<Note>>([])

  const createNote = (NoteDTO: Note) => {
    NoteDTO.id = utils.generateUniqueId()
    const newNote: Note = { ...NoteDTO }
    cardsList.value.unshift(newNote)
    console.log(newNote)
  }

  const deleteNote = (id: string) => {
    cardsList.value = cardsList.value.filter((note) => note.id !== id)
  }

  return {
    cardsList,
    createNote,
    deleteNote
  }
}