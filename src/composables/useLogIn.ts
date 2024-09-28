import { ref } from 'vue';

export function useLogIn() {
  const loginIsVisible = ref<boolean>(true);

  const switchView = () => {
    loginIsVisible.value = !loginIsVisible.value;
  };

  return {
    switchView,
    loginIsVisible
  };
}
