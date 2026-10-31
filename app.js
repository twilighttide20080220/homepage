"use strict";

// The public site is deliberately static: no session calls, private data, storage, or analytics.
(() => {
  const selector = document.getElementById("site-theme");
  if (!selector) return;
  selector.addEventListener("change", () => {
    if (["dark", "light", "system"].includes(selector.value)) document.body.dataset.theme = selector.value;
  });
})();
