const links = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page-view");

function showPage() {
  const page = location.hash.replace("#", "") || "shop";

  pages.forEach(section => {
    section.hidden = section.id !== page;
  });

  links.forEach(link => {
    link.classList.toggle("active", link.dataset.page === page);
  });
}

window.addEventListener("hashchange", showPage);
showPage();
