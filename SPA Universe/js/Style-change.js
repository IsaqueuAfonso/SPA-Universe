function styleChange() {
  if (window.location.pathname == "/") {
    document.getElementById("app").classList.add("home")
    document.getElementById("app").classList.remove("text")
  }
}
styleChange()
