let container = document.querySelector(".container")

let actualDay = localStorage.getItem("actualDay")
let actualMeal = localStorage.getItem("actualMeal")

actualDay = JSON.parse(actualDay)
// console.log(actualDay)
// console.log(actualMeal)

let MealsName = {
  1: "Breakfast",
  2: "Dinner",
  3: "Supper",
  4: "Other",
}

let virtualArray = [""]

let applyButton = document.querySelector(".applyButton")
let removeButton = document.querySelector(".removeButton")
let chooseButtons = document.querySelector(".chooseButtons")

for (let i = 0; i <= 4; i++) {
  if (actualMeal == MealsName[i]) {
    virtualArray = actualDay.products[i - 1]
    // console.log(virtualArray)

    for (let i = 0; i <= products.length; i++) {
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
          for (let i = 0; i <= 4; i++) {
            if (actualMeal == MealsName[i]) {
              localStorage.setItem(actualDay.date, JSON.stringify(actualDay))
              localStorage.setItem("actualDay", JSON.stringify(actualDay))
            }
          }
          if (virtualArray == "") {
            location.href = "../index.html"
          } else {
            location.href = "/pages/values.html"
          }
        })

        removeButton.addEventListener("click", () => {
          for (let i = 0; i < 4; i++) {
            if (actualMeal == MealsName[i]) {
              localStorage.setItem(actualDay.date, `[""]`)
              location.reload()
            }
          }
        })
      })
      container.appendChild(div)
    }
  }
}
