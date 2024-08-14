function imageSwap() {
  const statusLink = window.location.pathname
  const body = document.querySelector("body")

  if (statusLink == "") {
    body.style.backgroundImage =
      "url('./assets/images/mountains-universe-1.png')"
  }
  else if (statusLink == "/The-Universe") {
    body.style.backgroundImage =
      "url('./assets/images/mountains-universe02.png')"
  }
  else if (statusLink == "/Exploitation") {
    body.style.backgroundImage =
      "url('./assets/images/mountains-universe-3.png')"
  }
}

imageSwap()
