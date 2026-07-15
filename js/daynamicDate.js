// Js file for SideBar Dynamic Date

export function displayPersianDate() {
  const mobileDate = document.getElementById("mobile-date");
  const sidebarDate = document.getElementById("sidebar-date");
  const date = new Date();

  // gets the date
  const basePersianDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  // render the date for moblie and desktop
  if (sidebarDate) {
    sidebarDate.textContent = basePersianDate;
  }

  if (mobileDate) {
    mobileDate.textContent = "امروز، " + basePersianDate;
  }
}
