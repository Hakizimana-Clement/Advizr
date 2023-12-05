import { resolve } from "path";
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        dashboard: resolve(__dirname, "./src/dashboard/index.html"),
        // dashboard: resolve(__dirname, "dashboard/index.html"),
      },
    },
  },
};
