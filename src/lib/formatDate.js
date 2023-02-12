export function formatDate(dateString) {
  // en-US
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('zh-Hans-CN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
