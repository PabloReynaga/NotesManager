<script setup lang="ts">
import type { NewUser } from '@/types/User';
import { inject, ref } from 'vue';
import router from '@/router';
import auth from '../services/auth.ts';
import { Client } from '../../api/Client';

const showWarnMessage = ref<boolean>(false);
const warnMessage = ref<string>('');
const logInState: any = inject('logInState');
const passwordVerification = ref<string>('');

const user = ref<NewUser>({
  userName: '',
  email: '',
  password: ''
});

const handleSignUpEvent = async (user: NewUser) => {
  if (
    user.userName == '' ||
    user.email == '' ||
    user.password == '' ||
    passwordVerification.value == ''
  ) {
    warnMessage.value = 'No value could be empty.';
    showWarnMessage.value = true;
    return;
  }
  if (user.password !== passwordVerification.value) {
    warnMessage.value = 'Passwords do not match.';
    showWarnMessage.value = true;
    return;
  }
  try {
    const resp = await Client.createUser(user);
    console.log(resp);
    if (resp.isLogined) {
      localStorage.setItem('userId', resp.userId);
      auth.authState.value = true;
      auth.saveToken(resp.token);
      await router.push('/home');
    } else {
      console.log(resp.message);
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
        <h1>Sign Up</h1>
      </div>
      <div class="input-field">
        <p class="sub-title">User Name</p>
        <input v-model="user.userName" class="input-element" type="email" />
        <p class="sub-title">Email</p>
        <input v-model="user.email" class="input-element" type="email" />
        <p class="sub-title">Password</p>
        <input v-model="user.password" class="input-element" type="password" />
        <p class="sub-title">Repeat Password</p>
        <input
          v-model="passwordVerification"
          class="input-element"
          type="password"
        />
      </div>
      <p
        :class="
          showWarnMessage
            ? 'warn-message-field-enable'
            : 'warn-message-field-disable'
        "
      >
        {{ warnMessage }}
      </p>
      <div class="buttons-container">
        <button class="first button" @click="logInState.switchView">Log In</button>
        <button class="second button" @click="handleSignUpEvent(user)">
          Accept
        </button>
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
  color: $black;
  text-align: left;
  z-index: 0;
  backdrop-filter: blur(1px);
  .content-container {
    text-align: center;
    margin: auto;
    min-width: 18rem;
    height: 26rem;
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
    color: $darkmodus-navbar;
    transition: 0.5s ease;
    margin-bottom: 0.5rem;
    opacity: 1;
    height: auto; /* Alternatively, you can use a fixed height if preferred */
  }
  .buttons-container {
    width: 100%;
    display: flex;
    .first {
      float: left;
      background: transparent;
      font-size: 0.6rem;
    }
    .second {
      margin-left: 12%;
      &:hover {
        background-color: darken(rgb(212, 193, 185), 10%);
        transition: 0.3s ease;
      }
    }
    .button {
      text-decoration-line: underline;
      border-radius: 0.5rem;
      border-color: transparent;
      height: 1.5rem;
      width: 4.5rem;
      cursor: pointer;
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
