<script setup lang="ts">
import { ref, inject, type Ref } from 'vue'
import type { Note } from '@/types/Note'

const cardsState:any = inject('cardsState')
const themeState:any = inject('themeState')
const dialogState:any = inject('dialogState')

const NoteDTO:Ref<Note> = ref<Note>({ id:"" ,title: "", color: "", content: "" });
const inputChecker = ref<boolean>(false)

const createNote = (NoteDto:Note) => {
  if( NoteDTO.value.content != "" && NoteDTO.value.color != "" && NoteDTO.value.title != ""){
    cardsState.createNote(NoteDto)
    resetNoteDTO()
    inputChecker.value = false
    dialogState.closeDialog()

  }else {
    inputChecker.value = true
  }
}

const closeDialog = () => {
  inputChecker.value = false
  dialogState.closeDialog()
};


const resetNoteDTO = () => {
  NoteDTO.value.id = ""
  NoteDTO.value.title = ""
  NoteDTO.value.color = ""
  NoteDTO.value.content = ""
}

</script>

<template>
  <dialog :ref="dialogState.dialogElement" class="dialog" :class="[themeState.isDark.value? 'dialog-darkmodus' : '']">
    <div class="card">
          <div class="content-container">
            <div class="title-container">
              <h1>Create new card!</h1>
            </div>
            <div class="input-field">
              <p class="sub-title">Select title:</p>
              <input v-model="NoteDTO.title" v-bind:id="NoteDTO.id" class="input-element" type="text">
            </div>
            <div class="input-field">
              <p class="sub-title">Note:</p>
              <textarea v-model="NoteDTO.content" type="text"></textarea>
            </div>
            <div class="input-field">
              <p class="sub-title">Select a color:</p>
              <select v-model="NoteDTO.color">
                <option>#ff0066</option>
                <option>blue</option>
                <option>yellow</option>
              </select>
            </div>
            <p class="message-empty-field" v-if="inputChecker">No value could be empty!</p>
            <div class="buttons-container">
              <button class="button " @click="createNote(NoteDTO)">Create</button>
              <button class="button " @click="closeDialog">Close</button>
            </div>
          </div>

    </div>
  </dialog>

</template>

<style scoped lang="scss">
.dialog::backdrop{
  background-color: $black;
  opacity:.9;
}
.dialog{
  border-color: transparent;
  border-radius: .4rem;
  height: 30rem;
  width: 28rem;
}
.dialog-darkmodus{
  background-color: $darkmodus-navbar;
  color: $white;
  .message-empty-field{
    color: $white;
  }
}
.message-empty-field{
  position: absolute;
  color: red;
  font-size: .8rem;
}
.card {
  display: flex;
  height: 25rem;
  width: 28rem;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  color: $black;
  text-align: left;
  .title-container{
    margin-bottom: 1rem;
  }
  .input-field{
    margin-bottom: 1rem;
    .sub-title{
      margin-bottom: .8rem;
    }
    textarea{
      width: 15rem;
      height: 10rem;
      border-radius: .4rem;
      resize: none;
    }
    .input-element{
      width: 15rem;
      height: 1.5rem;
      border-radius: .4rem;
    }
    select{
      width: 15rem;
      border-radius: .4rem;
      height: 2rem;
      font-size: .8rem;
    }
  }
  .buttons-container{
    display: block;
    padding-top: 1.5rem;
    float: right;
    .button{
      border-radius: .5rem;
      border-color: transparent;
      height: 1.5rem;
      width: 4.5rem;
      margin-right: .4rem;
      cursor: pointer;
    }
  }
}
</style>