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
    primary: '#FF0000',
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
    background: '#000000',
    surface: '#121212',
    primary: '#FF0000',
    "primary-variant": '#AA0000',
    secondary: '#03DAC6',
    error: '#CF6679',
    "on-primary": '#000000',
    "on-secondary": '#000000',
    "on-background": '#FFFFFF',
    "on-surface": '#FFFFFF',
    "on-error": '#000000',
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