// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa4";
import { md3 } from "vuetify/blueprints";
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "default",
    themes: {
      default: {
        dark: false,
        colors: {
          primary: "#582f2f",
          secondary: "#ffaf00",
          menuColor2: "#ba6000",
          disable: "#7d7169",
          logoColor1: "#7d7169",
          // info: "",
          // submit: "#582f2f",
          // cancel: "#ba6000",
          // import: "#582f2f",
          // export: "#ba6000",
          // light: "#ffaf00",

          // navText: "",
          // thead: "",
        },
      },
    },
  },

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});
