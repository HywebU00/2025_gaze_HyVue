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
          secondary: "#a3948b",

          // info: "",
          submit: "#582f2f",
          cancel: "#a3948b",
          import: "#582f2f",
          export: "#a3948b",
          light: "#ffaf00",
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
