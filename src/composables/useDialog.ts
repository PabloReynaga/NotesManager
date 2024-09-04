import { ref } from 'vue';

export function useDialog() {
  const isVisible = ref<boolean>(false);
  const dialogElement = ref<HTMLDialogElement | null>(null);
  const logInVisible =  ref<boolean>(true)

  const openDialog = () => {
    isVisible.value = true;
    dialogElement.value?.showModal();
  };

  const closeDialog = () => {
    isVisible.value = false;
    dialogElement.value?.close();
  };

  const switchDialog = () => {
    logInVisible.value = !logInVisible.value
    console.log(logInVisible.value)
  }

  return {
    isVisible,
    openDialog,
    closeDialog,
    dialogElement,
    switchDialog,
    logInVisible
  };
}
