export function displayPersianDate() {
  const mobileDate = document.getElementById("mobile-date");
  const sidebarDate = document.getElementById("sidebar-date");
  const date = new Date();

  const basePersianDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  if (sidebarDate) {
    sidebarDate.textContent = basePersianDate;
  }

  if (mobileDate) {
    mobileDate.textContent = "امروز، " + basePersianDate;
  }
}
