<script setup lang="ts">
import { inject } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required:true,
    default:''
    },
  imageSource: {
    type: String,
    required:true,
    default:'/LogOutImg.png'
  },
  }
)

const emits = defineEmits(['handle-click']);

const handleClick = () =>{
  emits('handle-click')
}

</script>

<template>
  <button class="card" @click="handleClick">
    <p class="text-content">{{ props.title }}</p>
    <img class="img" :src=props.imageSource>
  </button>

</template>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  height: 20rem;
  width: 20rem;
  background-color: $white;
  border-radius: 0.3rem;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  border: none;
  cursor: pointer;
  color: $black;
  font-size: 1.5rem;
  overflow: hidden;
  .img{
    height: 100%;
    position: absolute;
    transform: translateY(-100%);
    z-index: 1;
  }
  p{
    padding: 0.3rem;
    border-radius: 0.4rem;
  }
  &:hover img{
    transition: .5s ease-in;
    transform: translateY(0%);

  }
  &:hover p{
    transition: .5s ease-in;
    z-index: 100;
    color: $white;
    background-color: $black;
    padding: 0.4rem;
  }
}
</style>
