<script setup></script>

<template>
  <div class="nav-bar">
    <div class="title-container">
      <h1>Notes Manager</h1>
    </div>
    <div class="switch-container">
      <div class="switch-button-container">
        <button class="switch-button"></button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-between;
  height: 4rem;
  background-color: $primary;
}
.switch-container {
  height: 100%;
}
.switch-button-container {
  background-color: $secondary;
  width: 50px;
  height: 25px;
  border: 30px;
  border-radius: 30px;
}
.switch-button {
  height: 25px;
  width: 25px;
  border-radius: 30px;
  background-color: $tan;
  border: none;
  cursor: pointer;
}
</style>
