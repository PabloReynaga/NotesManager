<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { useTheme } from '@/composables/useTheme';
import { provide, ref } from 'vue';
import { watch } from 'vue';
import { useFetch } from '@/composables/useFetch';

const fetchState = useFetch();
provide('fetchState', fetchState);

const themeState = useTheme();
provide('themeState', themeState);
themeState.initializeTheme();

watch(
  () => themeState.isDark.value,
  (newValue) => {
    appBackgroundColor.value = newValue ? '#2B2B2BFC' : '#C6C6C6FF';
  }
);

const appBackgroundColor = ref(themeState.isDark.value ? '#2B2B2BFC' : '#C6C6C6FF');
</script>
<template>
  <Navbar></Navbar>
  <div
    class="app-container"
    :class="themeState.isDark.value ? 'darkModeActive' : ''"
    :style="{ '--app-background-color': appBackgroundColor }"
  >
    <RouterView />
  </div>
</template>

<style lang="scss">
.app-container {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: var(--app-background-color);
}
.content-container {
  background-color: $content-container-light;
}
.darkModeActive {
  .content-container {
    p,
    h1 {
      color: black;
    }
    .first {
      color: white;
    }
    background-color: $content-container-light;
  }
}
</style>
