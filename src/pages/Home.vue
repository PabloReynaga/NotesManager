<script setup lang="ts">
import { inject, provide } from 'vue';
import Card from '../components/Card.vue';
import NewCard from '@/components/NewCard.vue';
import Dialog from '@/components/Dialog.vue';
import { useCards } from '@/composables/useCards';
import { useDialog } from '@/composables/useDialog';
import { onMounted } from 'vue';


const themeState: any = inject('themeState');

const dialogState = useDialog();
provide('dialogState', dialogState);
const cardsState = useCards();
provide('cardsState', cardsState);

// Fetch the notes when the component is mounted
onMounted(async () => {
  await cardsState.userNotes();
});
const notesList = cardsState.cardsList;
// Access the cardsList from the cardsState
console.log(notesList.value)



</script>

<template>
  <div
    class="main-container"
    :class="[themeState.isDark.value ? 'darkmodus-active' : '']"
  >
    <div>
      <p>Notes: {{notesList.length}}</p>
      <p>Owner: ??</p>
    </div>
    <NewCard></NewCard>
    <Dialog
      :visible="dialogState.isVisible.value"
      @closeDialog="dialogState.closeDialog"
    />
    <div class="cards-container">
      <Card
        v-for="item in notesList"
        :key="item.id"
        :title="item.title"
        :content="item.content"
        :color="item.color"
        :id="item.id"
        @delete-Note="cardsState.deleteNote(item.id)"
      ></Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  min-height: 100vh;
  justify-content: center;
}

.darkmodus-active {
  background-color: $black;
}
</style>
