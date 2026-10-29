// Keep a visible focus indicator for keyboard navigation.
const enableKeyboardFocus = (event) => {
  if (event.key === "Tab") {
    document.body.classList.add("user-is-tabbing");
    window.removeEventListener("keydown", enableKeyboardFocus);
    window.addEventListener("mousedown", disableKeyboardFocusOnce);
  }
};
const disableKeyboardFocusOnce = () => {
  document.body.classList.remove("user-is-tabbing");
  window.removeEventListener("mousedown", disableKeyboardFocusOnce);
  window.addEventListener("keydown", enableKeyboardFocus);
};
window.addEventListener("keydown", enableKeyboardFocus);
