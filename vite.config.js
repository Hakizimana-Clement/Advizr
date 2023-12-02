import { resolve } from "path";
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        dashboard: resolve(__dirname, "dasthboard/index.html"),
      },
    },
  },
};
