<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: ''
  },
  title: {
    type: String,
    required: true,
    default: ''
  },
  content: {
    type: String,
    required: true,
    default: ''
  },
  color: {
    type: String,
    required: true,
    default: ''
  }
});

const emits = defineEmits(['update-Note', 'delete-Note']);

const deleteNote = () => {
  emits('delete-Note');
};
const updateNote = () => {
  emits('update-Note');
};
</script>
<template>
  <div class="card content-container">
    <div class="card-body">
      <div class="title-container">
        <h1 class="title">{{ props.title }}</h1>
      </div>
      <div class="content-container">
        <p>{{ props.content }}</p>
      </div>
      <div class="buttons-container">
        <button class="buttons" @click="updateNote">Edit</button>
        <button class="buttons" @click="deleteNote">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  height: 20rem;
  min-width: 18rem;
  margin: 1rem;
  border-radius: 0.3rem;
  .card-body {
    height: 100%;
    width: 100%;
    .title-container {
      color: $black;
      background-color: v-bind(color);
      border-radius: 0.3rem 0.3rem 0rem 0rem;
      text-align: center;
      .title {
        padding: 1rem;
        color: $black;
        width: 16rem;
        white-space: nowrap; /* Prevent text from wrapping to the next line */
        overflow: hidden; /* Hide the overflowed text */
        text-overflow: ellipsis; /* Add '...' at the end */
      }
    }
    .content-container {
      display: flex;
      height: 65%;
      width: 16rem;
      margin: auto;
      overflow-y: auto;
      word-break: break-all;
    }
    .buttons-container {
      display: flex;

      justify-content: right;
      .buttons {
        border-radius: 0.5rem;
        border-color: transparent;
        height: 1.5rem;
        width: 5rem;
        margin-top: 0.5rem;
        margin-right: 0.4rem;
        cursor: pointer;
      }
    }
  }
}
</style>
