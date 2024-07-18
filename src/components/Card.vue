<script setup lang="ts">
const props = defineProps({
  id: {
    type:String,
    required: true,
    default: ""
  },
  title: {
    type:String,
    required: true,
    default: ""
  },
  content: {
    type:String,
    required: true,
    default: ""
  },
  color: {
    type:String,
    required: true,
    default: ""
  },
})

const emits = defineEmits(['edit-Card', 'delete-Note']);

const deleteNote = () => {
  emits('delete-Note')
}

</script>
<template>
  <div class="card">
    <div class="card-body">
      <div class="title-container">
        <h1 class="title">{{props.title}}</h1>
      </div>
      <div class="content-container">
        <p>{{props.content}}</p>
      </div>
      <div class="buttons-container">
        <button class="buttons ">Edit</button>
        <button class="buttons " @click="deleteNote">Delete</button>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.card{
  height: 25rem;
  width: 25rem;
  margin: 3rem;
  background-color: $white;
  border-radius: .3rem;
  .card-body{
    height: 100%;
    width: 100%;
    .title-container{
      color: $black;
      background-color: v-bind(color);
      border-radius:  .3rem .3rem 0rem 0rem;
      text-align: center;
      .title{
        padding: 1rem;
        color: $black;
      }
    }
    .content-container{
      display: flex;
      height: 75%;
      width: 95%;
      margin: auto;
      overflow-y: auto;
      word-break: break-all;

    }
    .buttons-container{
      display: flex;

      justify-content: right;
      .buttons{
        border-radius: .5rem;
        border-color: transparent;
        height: 1.5rem;
        width: 5rem;
        margin-right: .4rem;
        cursor: pointer;
      }
    }
  }
}


</style>