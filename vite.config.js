import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { chats } from "./src/mock/chats.js";
import { messages } from "./src/mock/messages.js";
import { currentMessage } from "./src/mock/current-message.js";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        chats,
        currentMessage,
        messages,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        base: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "src/pages/404.html"),
        500: resolve(__dirname, "src/pages/500.html"),
        login: resolve(__dirname, "src/pages/sign-in.html"),
        signUp: resolve(__dirname, "src/pages/sign-up.html"),
        profile: resolve(__dirname, "src/pages/profile.html"),
        passwordEdit: resolve(__dirname, "src/pages/password-edit.html"),
        avatarUpload: resolve(__dirname, "src/pages/avatar-upload.html"),
        messenger: resolve(__dirname, "src/pages/messenger.html"),
        addUser: resolve(__dirname, "src/pages/add-user.html"),
        deleteUser: resolve(__dirname, "src/pages/delete-user.html"),
      },
    },
  },
});
