import { ref, watch } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  const initializeTheme = () => {
    const localStorageIsDark = localStorage.getItem('darkTheme');
    if (localStorageIsDark === null) {
      localStorage.setItem('darkTheme', 'false');
      isDark.value = false;
    } else {
      isDark.value = localStorageIsDark === 'true';
    }
  };

  const changeTheme = () => {
    isDark.value = !isDark.value;
    localStorage.setItem('darkTheme', isDark.value.toString());
  };

  watch(isDark, (newVal) => {
    if (newVal) {
      document.body.classList.add('darkModeActive');
    } else {
      document.body.classList.remove('darkModeActive');
    }
  });

  return { isDark, changeTheme, initializeTheme };
}
