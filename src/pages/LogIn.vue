<script setup lang="ts">
import LogInView from '@/views/LogInView.vue';
import SignUpView from '@/views/SignUpView.vue';
import { useDialog } from '@/composables/useDialog';
import { inject, provide } from 'vue';
import { useLogIn } from '@/composables/useLogIn';

const logInState = useLogIn();
provide('logInState', logInState);
</script>

<template>
  <LogInView v-if="logInState.loginIsVisible.value" />
  <SignUpView v-else />
</template>

<style scoped lang="scss"></style>
