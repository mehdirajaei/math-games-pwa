export default {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
  manifest: {
    name: 'Math Games - دبیرستان',
    short_name: 'MathGames',
    description: 'سه بازی آموزشی ریاضی برای دبیرستانی‌ها',
    theme_color: '#0ea5a4',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
}