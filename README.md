# v-show-important

A simple Vue 3 directive that works like `v-show`, but forces the `display` property with `!important`.

---

## 📦 Installation

```bash
npm install v-show-important
# or
yarn add v-show-important
# or
pnpm add v-show-important
```

---

## 🚀 Usage

### 1. Register globally

In your main entry file (e.g., `main.ts` or `main.js`):

```ts
import { createApp } from "vue";
import App from "./App.vue";
import vShowImportant from "v-show-important";

const app = createApp(App);
app.use(vShowImportant);
app.mount("#app");
```

Now you can use the directive anywhere in your templates:

```vue
<template>
  <div v-show-important="isVisible">
    This element will use `display: none !important` when hidden.
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(true);
</script>
```

---

### 2. Use locally (optional)

If you prefer to register the directive manually inside a component:

```vue
<template>
  <div v-show-important="isVisible">Hello world</div>
</template>

<script setup lang="ts">
import { vShowImportant } from "v-show-important";
import { ref } from "vue";

const isVisible = ref(false);
</script>

<script lang="ts">
export default {
  directives: {
    showImportant: vShowImportant
  }
};
</script>
```

---

## 🧩 Description

The directive behaves like Vue’s built-in `v-show`, but uses `!important` to make sure styles from other sources (like utility frameworks or CSS overrides) don’t hide your element unintentionally.

Under the hood, it sets:

```css
display: none !important;
```

or clears it when visible.

---

## ⚙️ TypeScript Support

The package includes full TypeScript declarations out of the box.  
You can safely import and use it in any TypeScript Vue 3 project.


## 💡 Notes

- Works only with **Vue 3**.
- Does not modify transitions or animations from `v-show`.
- Perfect for use with Tailwind CSS or other frameworks that often override display properties.

---

**Made with ❤️ for Vue developers**
