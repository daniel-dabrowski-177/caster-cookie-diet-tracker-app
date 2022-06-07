let grams = document.querySelectorAll("input")[0]
let cals = document.querySelectorAll("input")[1]
let multiplier = ""

let meals = ["Breakfast", "Dinner", "Supper", "Other"]
let ul = document.querySelector("ul")
let chooseButtons = document.querySelector(".chooseButtons")
chooseButtons.style.display = "block"
chooseButtons.style.height = "170px"

let actualDay = localStorage.getItem("actualDay")
let actualMeal = localStorage.getItem("actualMeal")
actualDay = JSON.parse(actualDay)
// console.log(actualDay.products)

for (let i = 0; i <= 3; i++) {
  if (actualMeal == meals[i]) {
    for (let j = 1; j <= actualDay.products[i].length - 1; j++) {
      console.log(actualDay.products[i][j])
      let newLi = document.createElement("li")
      newLi.innerHTML = `<div class="img-wrapper">
      <div class="img-bg">
        <img src="../img/icons/${actualDay.products[i][j]}.png" alt="" />
      </div>
      <label>${actualDay.products[i][j]}</label>
    </div>
    <div class="input-wrapper">
      <div class="text">
        <input type="text" placeholder="100"  />
        <label>grams</label>
      </div>
      <div class="text">
        <input type="text" placeholder="100" />
        <label>calories</label>
      </div>
    </div>`

      ul.append(newLi)
    }
  }
}

// grams.addEventListener("input", (e) => {
//   const value = e.target.value
//   console.log(value)

//   cals.value = multiplier * value
// })

// cals.addEventListener("input", (e) => {
//   const value = e.target.value
//   console.log(value)

//   grams.value = multiplier * value
// })
