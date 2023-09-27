export const useBuyExperience = async () => {
  const headers = useRequestHeaders(['cookie']);
  const route = useRoute()
  try {
    await $fetch('/api/v1/buy-experience', { method: 'POST', headers, query: { ...route.query, name: route.name }, body: { action: 'Comprar VazExperience' } })
  } finally {
    window.open('https://sun.eduzz.com/2091427');
  }
}