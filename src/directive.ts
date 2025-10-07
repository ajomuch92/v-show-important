import type { DirectiveBinding } from "vue";

const originalDisplayMap = new WeakMap<HTMLElement, string>();

function setDisplay(el: HTMLElement, value: boolean) {
  if (value) {
    const originalDisplay = originalDisplayMap.get(el);
    el.style.setProperty("display", originalDisplay ?? "", "important");
  } else {
    if (!originalDisplayMap.has(el)) {
      const currentDisplay = el.style.display || getComputedStyle(el).display;
      originalDisplayMap.set(el, currentDisplay);
    }
    el.style.setProperty("display", "none", "important");
  }
}

export const vShowImportant = {
  mounted(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    setDisplay(el, binding.value);
  },
  updated(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    setDisplay(el, binding.value);
  },
  unmounted(el: HTMLElement) {
    originalDisplayMap.delete(el);
  }
};