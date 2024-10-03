<script setup lang="ts">
import { inject } from 'vue';

const themeState: any = inject('themeState');
const dialogState: any = inject('dialogState');

const NoteDTO = dialogState.NoteDTO;
</script>

<template>
  <dialog
    :ref="dialogState.dialogElement"
    class="dialog"
    :class="[themeState.isDark.value ? 'dialog-darkmodus' : '']"
  >
    <div class="card">
      <div class="container-content">
        <div class="title-container">
          <h1>Create new card!</h1>
        </div>
        <div class="input-field">
          <p class="sub-title">Select title:</p>
          <input v-model="NoteDTO.title" class="input-element" type="text" />
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
        <p class="message-empty-field" v-if="dialogState.inputValidator.value">
          No value could be empty!
        </p>
        <div class="buttons-container">
          <button
            class="button"
            @click="dialogState.createNote(NoteDTO)"
            v-if="!dialogState.enableEditButton.value"
          >
            Create
          </button>
          <button class="button" v-else @click="dialogState.updateNote(NoteDTO)">
            Edit
          </button>
          <button class="button" @click="dialogState.closeDialog">Close</button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped lang="scss">
.dialog::backdrop {
  background-color: $black;
  opacity: 0.9;
}
.dialog {
  border-color: transparent;
  border-radius: 0.4rem;
  height: 30rem;
  width: 20rem;
}
.dialog-darkmodus {
  color: $white;
  .message-empty-field {
    color: $white;
  }
}
.message-empty-field {
  position: absolute;
  color: red;
  font-size: 0.8rem;
}
.card {
  display: flex;
  height: 25rem;
  width: 100%;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  color: $black;
  text-align: left;
  .title-container {
    margin-bottom: 1rem;
  }
  .input-field {
    margin-bottom: 1rem;
    .sub-title {
      margin-bottom: 0.8rem;
    }
    textarea {
      width: 15rem;
      height: 10rem;
      border-radius: 0.4rem;
      resize: none;
    }
    .input-element {
      width: 15rem;
      height: 1.5rem;
      border-radius: 0.4rem;
      border: black 1px solid;
    }
    select {
      width: 15rem;
      border-radius: 0.4rem;
      height: 2rem;
      font-size: 0.8rem;
    }
  }
  .buttons-container {
    display: block;
    padding-top: 1.5rem;
    float: right;
    .button {
      border-radius: 0.5rem;
      border-color: transparent;
      height: 1.5rem;
      width: 4.5rem;
      margin-right: 0.4rem;
      cursor: pointer;
    }
  }
}
</style>
