const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

const cardColorOptions: any = [
  { name: 'Soft Blue', value: '#6C91C2' },
  { name: 'Sage Green', value: '#8AA399' },
  { name: 'Dusty Rose', value: '#D0A5A5' },
  { name: 'Muted Lavender', value: '#B8A9C9' },
  { name: 'Warm Gray', value: '#A8A8A8' },
  { name: 'Teal', value: '#588B8B' },
  { name: 'Terracotta', value: '#C97C5D' }
];

export default { generateUniqueId, cardColorOptions };
