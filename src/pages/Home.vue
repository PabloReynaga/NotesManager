<script setup lang="ts">
import { provide } from 'vue';
import MenuButton from '@/components/MenuButton.vue';
import Dialog from '@/components/Dialog.vue';
import { useCards } from '@/composables/useCards';
import { useDialog } from '@/composables/useDialog';
import router from '@/router';

const dialogState = useDialog();
provide('dialogState', dialogState);
const cardsState = useCards();
provide('cardsState', cardsState);
</script>

<template>
  <div class="main-container">
    >
    <div class="menu-buttons-container">
      <MenuButton
        title="Own Notes"
        image-source="/NoteImg.png"
        @handle-click="router.push('/notes')"
      >
      </MenuButton>
      <MenuButton title="Chat" image-source="/ChatImg.png"></MenuButton>
      <MenuButton
        title="Shared Content"
        image-source="/SharedNoteImg.png"
      ></MenuButton>
      <MenuButton title="Settings" image-source="/SettingImg.png"></MenuButton>
    </div>

    <Dialog
      :visible="dialogState.isVisible.value"
      @closeDialog="dialogState.closeDialog"
    />
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  display: flex;
  width: 100%;
  align-items: center;
}
.menu-buttons-container {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
