import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";
import { createApp } from "vue";

const app = createApp();

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
};
