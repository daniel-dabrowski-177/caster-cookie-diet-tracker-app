const container = document.querySelector(".container")
let count = 0

for (let i = 0; i < 80; i++) {
  let div = document.createElement("div")

  div.innerHTML = `<div class="bg-icon">
  <img src="/img/icons/${products[i].name}.png" alt="" />
  </div>
  <label>${products[i].name}</label>`

  div.classList.add("product")
  container.appendChild(div)
}

const product = document.querySelectorAll(".product")
const clicked = document.querySelectorAll(".clicked")

const localStorageContent = localStorage.getItem("names")

let names
if (localStorageContent === null) {
  names = []
} else {
  names = JSON.parse(localStorageContent)
}

product.forEach((p) =>
  p.addEventListener("click", () => {
    let productName = p.children[1].textContent

    if (p.classList[1] == null) {
      p.classList.add("clicked")
      count++

      names.push(productName)
      localStorage.setItem("names", JSON.stringify(names))
    } else {
      p.classList.remove("clicked")
      count--

      let pos = names.indexOf(productName)
      names.splice(pos, 999)
      localStorage.setItem("names", JSON.stringify(names))
    }
  })
)
console.log(names)

// console.log(product[2].children[1].textContent)

// console.log(localStorage)
// console.log(clicked.parentNode)
// console.log(container.childNodes[2])

// Product name //
// console.log(container.childNodes[2].children[1].innerHTML)
