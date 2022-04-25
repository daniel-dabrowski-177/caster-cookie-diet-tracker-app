const container = document.querySelector(".container")
const home = document.querySelector(".icon-center")
let count = 0

const localStorageContent = localStorage.getItem("names")
let names

if (localStorageContent === null) {
  names = [""]
} else {
  names = JSON.parse(localStorageContent)
}

for (let i = 0; i < 80; i++) {
  let div = document.createElement("div")

  if (names.includes(products[i].name, 1)) {
    div.classList.add("clicked")
  }

  div.innerHTML = `<div class="bg-icon">
  <img src="/img/icons/${products[i].name}.png" alt="" />
  </div>
  <label>${products[i].name}</label>`

  div.classList.add("product")
  container.appendChild(div)
}

const product = document.querySelectorAll(".product")
const clicked = document.querySelectorAll(".clicked")

product.forEach((p) =>
  p.addEventListener("click", () => {
    let productName = p.children[1].textContent
    console.log("sth")

    if (p.classList[1] == null) {
      count++
      p.classList.add("clicked")
      names.push(productName)
      localStorage.setItem("names", JSON.stringify(names))
    } else {
      p.classList.remove("clicked")
      count--
      let pos = names.indexOf(productName)
      names.splice(pos, 1)
      localStorage.setItem("names", JSON.stringify(names))
    }
  })
)
