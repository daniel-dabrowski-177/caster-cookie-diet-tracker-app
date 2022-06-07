let container = document.querySelector(".container")

let Breakfast = localStorage.getItem("Breakfast")
let Dinner = localStorage.getItem("Dinner")
let Supper = localStorage.getItem("Supper")
let Other = localStorage.getItem("Other")

let MealsName = ["Breakfast", "Dinner", "Supper", "Other"]
let Items = [Breakfast, Dinner, Supper, Other]

let virtualArray = [""]

let applyButton = document.querySelector(".applyButton")
let removeButton = document.querySelector(".removeButton")
let chooseButtons = document.querySelector(".chooseButtons")

for (let i = 0; i < MealsName.length; i++) {
  if (localStorage.sesionName == MealsName[i]) {
    virtualArray = Items[i]
    virtualArray = JSON.parse(virtualArray)

    for (let i = 0; i < products.length; i++) {
      // 1. Create divs
      let div = document.createElement("div")
      div.innerHTML = `<div class="bg-icon">
          <img src="/img/icons/${products[i].name}.png" alt="" />
          </div>
          <label>${products[i].name}</label>`

      // 2. Add "clicked" class
      div.classList.add("product")
      if (virtualArray.includes(products[i].name)) {
        div.classList.add("clicked")
      }

      // 3. Add onClick to div
      // 4. virtualArray Add & Remove product from array
      div.addEventListener("click", (i) => {
        chooseButtons.style.display = "block"

        if (div.classList[1] == null) {
          div.classList.add("clicked")
          virtualArray.push(div.children[1].textContent)
        } else {
          div.classList.remove("clicked")
          let pos = virtualArray.indexOf(div.children[1].textContent)
          virtualArray.splice(pos, 1)
        }

        // 4.1 Apply or Discard changes
        applyButton.addEventListener("click", () => {
          for (let i = 0; i < MealsName.length; i++) {
            if (localStorage.sesionName == MealsName[i]) {
              localStorage.setItem(MealsName[i], JSON.stringify(virtualArray))
            }
          }
          // console.log(virtualArray)
          location.href = "../index.html"
        })
        removeButton.addEventListener("click", () => {
          for (let i = 0; i < MealsName.length; i++) {
            if (localStorage.sesionName == MealsName[i]) {
              localStorage.setItem(MealsName[i], `[""]`)
              location.reload()
            }
          }
        })
      })
      container.appendChild(div)
    }
  }
}
