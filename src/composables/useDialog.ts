import { ref } from 'vue';

export function useDialog() {
  const isVisible = ref<boolean>(false);
  const dialogElement = ref<HTMLDialogElement | null>(null);

  const openDialog = () => {
    isVisible.value = true;
    dialogElement.value?.showModal();
  };

  const closeDialog = () => {
    isVisible.value = false;
    dialogElement.value?.close();
  };

  return {
    isVisible,
    openDialog,
    closeDialog,
    dialogElement
  };
}
