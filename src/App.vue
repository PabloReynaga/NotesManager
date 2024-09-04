<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { useTheme } from '@/composables/useTheme';
import { inject, provide } from 'vue';

const themeState = useTheme();
provide('themeState', themeState);

</script>
<template>
  <Navbar></Navbar>
  <RouterView />
</template>

<style lang="scss" scoped>

</style>
