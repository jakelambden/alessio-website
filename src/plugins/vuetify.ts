// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, type ThemeDefinition } from 'vuetify';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    error: '#FFFFFF',
    info: '#FFFFFF',
    success: '#FFFFFF',
    warning: '#FFFFFF',
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#212121',
    primary: '#FF0000',
    secondary: '#00FF00',
    error: '#000000',
    info: '#000000',
    success: '#000000',
    warning: '#000000',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'darkTheme',
    themes: {
      lightTheme,
      darkTheme,
    }
  }
})