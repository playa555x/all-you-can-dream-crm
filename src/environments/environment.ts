export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  },
  mapbox: {
    accessToken: '' // Fügen Sie Ihren Mapbox-Zugriffstoken hier ein
  },
  features: {
    enableAnalytics: true,
    enableNotifications: true,
    enableOfflineMode: true,
    enableDarkMode: true
  },
  version: '1.0.0',
  buildDate: new Date().toISOString()
}; 