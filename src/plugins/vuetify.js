import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using

Vue.use(Vuetify);

const theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
}
export default new Vuetify({
  theme: {
      options: {
        dark: theme,
        light: theme,
      },
    themes: {
      light: {
        primary: '#FBAF0E',
        secondary: '#1732C8',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark:{
        primary: '#FBAF0E'
      }
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'md',
  },
});
