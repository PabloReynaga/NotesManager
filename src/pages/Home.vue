<script setup lang="ts">
import { inject, provide } from 'vue';
import MenuButton from '@/components/MenuButton.vue';
import Dialog from '@/components/Dialog.vue';
import { useCards } from '@/composables/useCards';
import { useDialog } from '@/composables/useDialog';
import router from '@/router';


const themeState: any = inject('themeState');
const dialogState = useDialog();
provide('dialogState', dialogState);
const cardsState = useCards();
provide('cardsState', cardsState);

</script>

<template>
  <div
    class="main-container"
    :class="[themeState.isDark.value ? 'darkmodus-active' : '']"
  >
    <div>
    </div>
    <div class="menu-buttons-container">
      <MenuButton title="Own Notes"
                  image-source="/NoteImg.png"
                  @handle-click="router.push('/notes')">
      </MenuButton>
      <MenuButton title="Chat" image-source="/ChatImg.png"></MenuButton>
      <MenuButton title="Shared Content" image-source="/SharedNoteImg.png"></MenuButton>
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
  width: 100%;
  min-height: calc(100vh - 4rem);
  justify-content: center;
}
.menu-buttons-container{
  display: flex;
  width: 100%;
  min-height: calc(100vh - 4rem);
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}


.darkmodus-active {
  background-color: $black;
}
</style>
