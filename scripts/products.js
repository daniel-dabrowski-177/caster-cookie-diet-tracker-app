const container = document.querySelector(".container")

for (let i = 0; i < 80; i++) {
  let div = document.createElement("div")

  div.innerHTML = `<div class="bg-icon">
  <img src="/img/icons/${products[i].name}.png" alt="" />
  </div>
  <label>
  ${products[i].name}
  </label>`

  div.classList.add("product")
  container.appendChild(div)
}

const product = document.querySelectorAll(".product")
const clicked = document.querySelectorAll(".clicked")

product.forEach((p) =>
  p.addEventListener("click", () => {
    // console.log(p.classList[0])

    if (p.classList[1] == null) {
      p.classList.add("clicked")
    } else {
      p.classList.remove("clicked")
    }
  })
)

console.log(container.childNodes)
