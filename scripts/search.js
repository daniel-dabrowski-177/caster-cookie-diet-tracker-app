const searchInput = document.querySelector("#search")

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()

  for (let i = 0; i < 80; i++) {
    const item = product[i].childNodes[2].textContent

    if (item.includes(value)) {
      product[i].classList.remove("hide")
    } else {
      product[i].classList.add("hide")
    }
  }
})
