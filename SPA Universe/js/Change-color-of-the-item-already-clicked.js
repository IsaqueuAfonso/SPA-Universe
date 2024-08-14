document.addEventListener("DOMContentLoaded", () => {
  function updateActiveLink() {
    const { pathname } = window.location

    const links = document.querySelectorAll("nav a")

    links.forEach((links) => {
      if (links.getAttribute("href") == pathname) {
        links.classList.add("active")
      }
    })
  }

  updateActiveLink()
})
