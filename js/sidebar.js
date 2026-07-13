// side bar interativity and functionallity | opening and closing side bar | date
const hamburgerMenuBtn = document.getElementById("hamburger-menu-btn");
const mainSidebar = document.getElementById("main-sidebar");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const sidebarDate = document.getElementById("sidebar-date");
const mobileDate = document.getElementById("mobile-date");

export function openSidebar() {
  if (mainSidebar && sidebarBackdrop) {
    mainSidebar.classList.remove("right-[-274px]");
    mainSidebar.classList.add("right-0");
    sidebarBackdrop.classList.remove("hidden");
    setTimeout(() => {
      sidebarBackdrop.classList.remove("opacity-0");
      sidebarBackdrop.classList.add("opacity-100");
    }, 10);
  }
}

export function closeSidebar() {
  if (mainSidebar && sidebarBackdrop) {
    mainSidebar.classList.remove("right-0");
    mainSidebar.classList.add("right-[-274px]");
    sidebarBackdrop.classList.remove("opacity-100");
    sidebarBackdrop.classList.add("opacity-0");
    setTimeout(() => {
      sidebarBackdrop.classList.add("hidden");
    }, 300);
  }
}

export function displayPersianDate() {
  const date = new Date();

  const basePersianDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  if (sidebarDate) {
    sidebarDate.textContent = basePersianDate;
  }

  if (mobileDate) {
    mobileDate.textContent = "امروز، " + basePersianDate;
  }
}

export function initSidebar() {
  if (hamburgerMenuBtn) hamburgerMenuBtn.addEventListener("click", openSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeSidebar);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener("click", closeSidebar);

  displayPersianDate();
}

initSidebar();
