<script setup lang="ts">
import { inject } from 'vue';

const dialogState: any = inject('dialogState');

const showDialog = () => {
  dialogState.openDialog();

};
</script>

<template>
  <button class="card" @click="showDialog">
    <p class="text-content">create a new card!</p>
  </button>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  height: 25rem;
  width: 25rem;
  margin: 3rem;
  background-color: $white;
  border-radius: 0.3rem;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  border: 0.2rem dotted $black;
  cursor: pointer;
  color: $black;
}
</style>
