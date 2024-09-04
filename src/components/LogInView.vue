<script setup lang="ts">
import type { User } from '@/types/User';
import type { View } from '@/types/View';
import { ref } from 'vue';
import utils from '@/utils/utils';

const showSignUp = ref<boolean>(false);
const warnMessage = ref<boolean>(false);
const defineView = ref<View>(utils.LogInView);

const user = ref<User>({
  email:"",
  password:""
});

const switchViews = () =>{
    showSignUp.value = !showSignUp.value;
    if (showSignUp.value !== false) {
      defineView.value = utils.SignUpView
    } else{
      defineView.value  = utils.LogInView
    }
}

const handleLogInEvent = async (user: User) => {
  if(user.email == "" || user.password == ""){
    warnMessage.value = true;
    return;
  }
  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });
    console.log(response);

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      /*router.push('/chat');*/
    } else {
      errorMessage.value = data.message;
    }
    console.log(data)
  } catch (error) {
    errorMessage.value = 'An error occurred during login';
  }
}
</script>

<template>
    <div class="main-container">
      <div class="content-container" >
        <div class="title-container">
          <h1>{{defineView.title}}</h1>
        </div>
        <div class="input-field">
          <p class="sub-title">User Name</p>
          <input v-model="user.email"
            class="input-element"
            type="email"
          />
          <p class="sub-title">Password</p>
          <input
            v-model="user.password"
            class="input-element"
            type="password"
          />
        </div>
        <p :class="warnMessage? 'warn-message-field-enable': 'warn-message-field-disable'">
          No value could be empty!
        </p>
        <div class="buttons-container">
          <button class="button" @click="switchViews" >{{defineView.firstButtonValue}}</button>
          <button class="button" @click="handleLogInEvent(user)">{{defineView.secondButtonValue}}</button>
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
    min-width: 20rem ;
    min-height: 18rem;
    z-index: 100;
    border-radius: .8rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  .animation{
    animation: register_view 1.2s ease-in-out ;
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
      border: none
    }
  }
  .warn-message-field-disable {
    font-size: 0.8rem;
    margin-bottom: 0rem;
    opacity: 0;

  }
  .warn-message-field-enable {
    color: $light-red;
    transition: .5s ease;
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
        transition: .3s ease;
      }
    }
  }
}
@keyframes register_view{
  0% {
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>