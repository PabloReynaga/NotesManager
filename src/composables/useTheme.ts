import { ref, watch } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  const changeTheme = () => {
    isDark.value = !isDark.value
  }

  watch(isDark, () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return { isDark, changeTheme }
}