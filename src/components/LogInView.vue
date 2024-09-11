<script setup lang="ts">
import type { User } from '@/types/User';
import { inject, ref } from 'vue';
import auth from '@/services/auth';
import router from '@/router';
import { Client } from '../../api/Client';

const dialogState: any = inject('dialogState');
const warnMessage = ref<boolean>(false);
const themeState: any = inject('themeState');

const user = ref<User>({
  userName: '',
  password: ''
});

const handleLogInEvent = async (user: User) => {
  if (user.name == '' || user.password == '') {
    warnMessage.value = true;
    return;
  }
  try {
    const resp = await Client.loginUser(user)
    console.log(resp)
    if (resp.isLogined) {
      auth.authState.value = true;
      localStorage.setItem('userId', resp.userId);
      auth.saveToken(resp.token);
      await router.push('/home');
    } else {
      console.log(resp.message);
    }
  } catch (error) {
    console.log(error);
    errorMessage.value = 'An error occurred during login';
  }
};
</script>

<template>
  <div class="main-container" :class="[themeState.isDark.value ? 'darkmodus-active' : '']" >
    <div class="content-container">
      <div class="title-container">
        <h1>Log In</h1>
      </div>
      <div class="input-field">
        <p class="sub-title">User Name</p>
        <input v-model="user.userName" class="input-element" type="email" />
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
        <button class="button first" @click="dialogState.switchDialog()">Sign Up</button>
        <button class="button second" @click="handleLogInEvent(user)">Accept</button>
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
    width: 100%;
    display: flex;
    .first{
      float: left;
      background: transparent;
      font-size: .6rem;
    }
    .second{
      margin-left: 16%;
      &:hover {
        background-color: darken(rgb(212, 193, 185), 10%);
        transition: 0.3s ease;
      }
    }
    .button {
      text-decoration-line: underline ;
      border-radius: 0.5rem;
      border-color: transparent;
      height: 1.5rem;
      width: 4.5rem;
      cursor: pointer;

    }
  }
}
.darkmodus-active {
  background-color: $black;
  color: $white;
  .first{
    color: white;
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
