const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36)
}
export default { generateUniqueId }