// dark and light theme functionallity
const darkBtn = document.getElementById("theme-dark-btn");
const lightBtn = document.getElementById("theme-light-btn");
export function initTheme() {
  const isDark = localStorage.getItem("theme") === "dark";
  document.documentElement.classList.toggle("dark", isDark);

  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark", true);
      localStorage.setItem("theme", "dark");
    });
  }

  if (lightBtn) {
    lightBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark", false);
      localStorage.setItem("theme", "");
    });
  }
}

darkBtn.addEventListener("click", () => {
  initTheme();
});

lightBtn.addEventListener("click", () => {
  initTheme();
});
