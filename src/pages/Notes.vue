<script setup lang="ts">
import { inject, onMounted, provide } from 'vue';
import { useCards } from '@/composables/useCards';
import Card from '@/components/Card.vue';
import { useDialog } from '@/composables/useDialog';
import Dialog from '@/components/Dialog.vue';
import type { Note } from '@/types/Note';

const cardsState = useCards();
provide('cardsState', cardsState);

const dialogState = useDialog();
provide('dialogState', dialogState);

const fetchState = inject('fetchState');

onMounted(async () => {
  await fetchState.getUserNotes();
});

const notesList = fetchState.cardsList;

const updateNote = (note: Note) => {
  dialogState.enableEditButton.value = true;
  dialogState.NoteDTO.value = note;
  dialogState.openDialog();
};
</script>

<template>
  <div class="main-container">
    <button
      class="add-new-card-button"
      @click="
        dialogState.openDialog();
        dialogState.enableEditButton.value = false;
      "
    >
      <p>Create a new note!</p>
    </button>

    <Dialog
      :visible="dialogState.isVisible.value"
      @closeDialog="dialogState.closeDialog"
    />
    <Card
      v-for="item in notesList"
      :key="item._id"
      :title="item.title"
      :content="item.content"
      :color="item.color"
      :id="item.id"
      @delete-Note="cardsState.deleteNote(item._id)"
      @update-note="updateNote(item)"
    ></Card>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  height: auto;
  .add-new-card-button {
    height: 20rem;
    width: 18rem;
    margin: 1rem;
    border: dotted $black 0.2rem;
    border-radius: 0.3rem;
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>
