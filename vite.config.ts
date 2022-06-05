import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; //  @types/node -> npm i @types/node -D

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"), // 設置 `@` 指向 `src` 目錄
        },
    },
    base: "./", // 設置打包路徑
    server: {
        port: 4000, // 設置服務啓動端口號
        open: true, // 設置服務啓動時是否自動打開瀏覽器
        cors: true, // 允許跨域

        // 設置代理，根據我們項目實際情況配置
        proxy: {
            "/lorem-image": {
                target: "https://picsum.photos",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace("/lorem-image/", "/"),
            },
            //   '/api': {
            //     target: 'http://xxx.xxx.xxx.xxx:8000',
            //     changeOrigin: true,
            //     secure: false,
            //     rewrite: (path) => path.replace('/api/', '/')
            //   }
        },
    },
});
