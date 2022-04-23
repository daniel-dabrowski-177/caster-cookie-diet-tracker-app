console.log(products)

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
