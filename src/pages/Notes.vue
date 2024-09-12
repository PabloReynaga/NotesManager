<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import { useCards } from '@/composables/useCards';
import Card from '@/components/Card.vue';
import { inject } from 'vue';
import { useDialog } from '@/composables/useDialog';
import Dialog from '@/components/Dialog.vue';

const cardsState = useCards();
provide('cardsState', cardsState);

const dialogState = useDialog();
provide('dialogState', dialogState);

onMounted(async () => {
  await cardsState.getUserNotes();
});
const notesList = cardsState.cardsList;
const themeState: any = inject('themeState');
</script>

<template>
  <div class="main-container">
    <button class="add-new-card-button" @click="dialogState.openDialog()">
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
