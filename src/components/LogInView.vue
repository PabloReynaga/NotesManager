<script setup lang="ts">
import type { authUser } from '@/types/authUser';
import { inject, ref } from 'vue';
import auth from '@/services/auth';
import router from '@/router';

const dialogState: any = inject('dialogState');
const warnMessage = ref<boolean>(false);

const user = ref<authUser>({
  name: '',
  password: ''
});

const handleLogInEvent = async (user: authUser) => {
  if (user.name == '' || user.password == '') {
    warnMessage.value = true;
    return;
  }
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: user.name, password: user.password })
    });
    const data = await response.json();
    if (response.ok) {
      auth.saveToken(data.token);
      await router.push('/home');
      router.go();
    } else {
      console.log(data.message);
    }
  } catch (error) {
    errorMessage.value = 'An error occurred during login';
  }
};
</script>

<template>
  <div class="main-container">
    <div class="content-container">
      <div class="title-container">
        <h1>Log In</h1>
      </div>
      <div class="input-field">
        <p class="sub-title">User Name</p>
        <input v-model="user.name" class="input-element" type="email" />
        <p class="sub-title">Password</p>
        <input v-model="user.password" class="input-element" type="password" />
      </div>
      <p
        :class="
          warnMessage ? 'warn-message-field-enable' : 'warn-message-field-disable'
        "
      >
        No value could be empty!
      </p>
      <div class="buttons-container">
        <button class="button" @click="dialogState.switchDialog()">Sign Up</button>
        <button class="button" @click="handleLogInEvent(user)">Enter</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
  height: calc(100% - 4rem);
  width: 100%;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  color: $black;
  text-align: left;
  z-index: 0;
  backdrop-filter: blur(1px);
  background-color: $white;
  .content-container {
    text-align: center;
    margin: auto;
    min-width: 20rem;
    min-height: 18rem;
    z-index: 100;
    border-radius: 0.8rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  .animation {
    animation: register_view 1.2s ease-in-out;
  }
  .title-container {
    margin: 1rem;
  }
  .input-field {
    display: block;
    .sub-title {
      margin-bottom: 0.8rem;
    }
    .input-element {
      width: 80%;
      margin-bottom: 1rem;
      height: 1.5rem;
      border-radius: 0.4rem;
      border: none;
    }
  }
  .warn-message-field-disable {
    font-size: 0.8rem;
    margin-bottom: 0rem;
    opacity: 0;
  }
  .warn-message-field-enable {
    color: $light-red;
    transition: 0.5s ease;
    margin-bottom: 1rem;
    opacity: 1;
    height: auto; /* Alternatively, you can use a fixed height if preferred */
  }
  .buttons-container {
    float: right;
    .button {
      border-radius: 0.5rem;
      border-color: transparent;
      height: 1.5rem;
      width: 4.5rem;
      margin-right: 1rem;
      cursor: pointer;
      &:hover {
        background-color: darken(rgb(212, 193, 185), 10%);
        transition: 0.3s ease;
      }
    }
  }
}
@keyframes register_view {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
