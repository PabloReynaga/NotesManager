<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { provide } from 'vue'
import {useTheme} from '@/composables/useTheme'
import Card  from './components/Card.vue'
import NewCard from '@/components/NewCard.vue'
import Dialog from '@/components/Dialog.vue'
import { useCards } from '@/composables/useCards'
import { useDialog } from '@/composables/useDialog'

const themeState = useTheme()
provide('themeState', themeState)

const cardsState = useCards()
provide('cardsState', cardsState)

const dialogState = useDialog()
provide('dialogState', dialogState)

</script>

<template>
    <Navbar></Navbar>
    <div class="main-container" :class="[themeState.isDark.value? 'darkmodus-active' : '']">
      <NewCard @createNote="cardsState.createNote"></NewCard>
      <Dialog :visible="dialogState.isVisible.value" @closeDialog="dialogState.closeDialog" />
      <div class="cards-container">
        <Card v-for="item in cardsState.cardsList.value"
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
.main-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  min-height: 100vh;
  justify-content: center;
}

.darkmodus-active{
  background-color: $black;
}

</style>
