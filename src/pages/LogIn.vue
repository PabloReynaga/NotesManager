<script setup lang="ts">
import LogInView from '@/components/LogInView.vue';
import SignUpView from '@/components/SignUpView.vue';
import { useDialog } from '@/composables/useDialog';
import { provide } from 'vue';

const dialogState = useDialog();
provide('dialogState', dialogState);
</script>

<template>
  <LogInView v-if="dialogState.logInVisible.value" />
  <SignUpView v-else />
</template>

<style scoped lang="scss"></style>
