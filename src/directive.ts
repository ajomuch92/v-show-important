import type { DirectiveBinding } from "vue";

function setDisplay(el: HTMLElement, value: boolean) {
  const display = value ? "" : "none";
  el.style.setProperty("display", display, "important");
}

export const vShowImportant = {
  mounted(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    setDisplay(el, binding.value);
  },
  updated(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    setDisplay(el, binding.value);
  }
};