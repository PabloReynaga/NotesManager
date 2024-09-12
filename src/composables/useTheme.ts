import { ref, watch } from 'vue';

export function useTheme() {
  const isDark = ref(true);

  const initializeTheme = () => {
    if (isDark.value === null) {
      localStorage.setItem('darkTheme', 'false');
      isDark.value = false;
      return;
    }
  };

  const changeTheme = () => {
    isDark.value = !isDark.value;
  };

  return { isDark, changeTheme, initializeTheme };
}
