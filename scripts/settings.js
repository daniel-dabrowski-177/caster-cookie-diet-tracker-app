let btn = document.querySelector("button")
btn.addEventListener("click", () => {
  localStorage.clear()
  location.href = "/index.html"
})
