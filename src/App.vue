<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { useTheme } from '@/composables/useTheme';
import { provide } from 'vue';
import { useFetch } from '@/composables/useFetch';

const fetchState = useFetch();
provide('fetchState', fetchState);

const themeState = useTheme();
provide('themeState', themeState);
themeState.initializeTheme();
</script>
<template>
  <Navbar></Navbar>
  <div class="app-container">
    <RouterView />
  </div>
  <footer></footer>
</template>

<style lang="scss">
.app-container {
  display: flex;
  min-height: 100%;
  width: 100%;
}
.content-container {
  background-color: $content-container-light;
}
.darkModeActive {
  background-color: #2b2b2bfc;
}
</style>
