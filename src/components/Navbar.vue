<script setup lang="ts">
import { inject } from 'vue';
import auth from '@/services/auth';


const themeState: any = inject('themeState');

const changeTheme = () => {
  themeState.changeTheme();
};
</script>

<template>
  <div class="nav-bar" :class="[themeState.isDark.value ? 'nav-bar-darkmodus' : '']">
    <div class="title-container">
      <h1 class="page-title">Notes Manager</h1>
    </div>
    <div class="switch-container">
      <div class="switch-button-container">
        <button class="switch-button" @click="changeTheme()"></button>
        <button class="log-out-button" v-if="auth.authState.value" @click="auth.removeToken('authToken')">
          <img class="LogOutImg" src="/public/LogOutImg.png" alt="img" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  background-color: $primary;
  .page-title {
    font-size: 2rem;
    color: $black;
    transform: translateX(1rem);
  }
  .switch-container{
    display: flex;
    width: 10rem;
    justify-content: right;
    .switch-button-container {
      position: relative;
      background-color: $secondary;
      width: 3rem;
      height: 1.5rem;
      border-radius: 2.5rem;
      transform: translateX(-1rem);
      margin-left: 5rem;
      .switch-button {
        float: left;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 2.5rem;
        background-color: $tan;
        border: none;
        cursor: pointer;
        transition: 0.5s ease-in-out;

      }
      .button-active {
        float: right;
      }
      .log-out-button{
        position: absolute;
        font-size: .6rem;
        background: transparent;
        border: none;
        right: -1rem;
        bottom: -3.0rem;
        cursor: pointer;
        .LogOutImg{
          height: 1.2rem;
        }
      }
    }

  }
}

.nav-bar-darkmodus {
  background: $darkmodus-navbar;
  .page-title {
    color: $black;
  }
  .switch-button-container {
    background-color: $black;
    .switch-button {
      transform: translateX(1.5rem);
      background-color: $darkmodus-button-navbar;
    }
  }
}
</style>
