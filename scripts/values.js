let confirmBtn = document.querySelector(".confirm")
let productsName = [""]
let productsCals = [""]
let productsGrams = [""]

let meals = ["Breakfast", "Dinner", "Supper", "Other"]
let ul = document.querySelector("ul")
let chooseButtons = document.querySelector(".chooseButtons")
chooseButtons.style.display = "block"
chooseButtons.style.height = "170px"

let actualDay = localStorage.getItem("actualDay")
let actualMeal = localStorage.getItem("actualMeal")
actualDay = JSON.parse(actualDay)

for (let i = 0; i <= 3; i++) {
  if (actualMeal == meals[i]) {
    for (let j = 1; j <= actualDay.products[i].length - 1; j++) {
      productsName.push(actualDay.products[i][j])

      let newLi = document.createElement("li")
      newLi.innerHTML = `<div class="img-wrapper">
      <div class="img-bg">
        <img src="../img/icons/${actualDay.products[i][j]}.png" alt="" />
      </div>
      <label>${actualDay.products[i][j]}</label>
    </div>
    <div class="input-wrapper">
      <div class="text">
        <input type="number" placeholder="100"  />
        <label>grams</label>
      </div>
      <div class="text">
        <input type="number" placeholder="100" />
        <label>calories</label>
      </div>
    </div>`
      ul.append(newLi)
    }
  }
}

for (let i = 1; i < productsName.length; i++) {
  for (let j = 0; j < products.length; j++) {
    if (productsName[i].includes(products[j].name)) {
      productsCals.push(products[j].calories)
    }
  }
}

let li = document.querySelectorAll("li")
for (let i = 0; i < li.length; i++) {
  let grams = li[i].children[1].children[0].children[0]
  let cals = li[i].children[1].children[1].children[0]
  cals.placeholder = productsCals[i + 1]

  grams.addEventListener("input", (e) => {
    const value = e.target.value
    cals.value = Math.round((productsCals[i + 1] / 100) * value)
  })

  cals.addEventListener("input", (e) => {
    const value = e.target.value
    grams.value = Math.round((100 / productsCals[i + 1]) * value)
  })

  confirmBtn.addEventListener("click", () => {
    if (grams.value == "") {
      productsGrams.push(grams.placeholder)
    } else {
      productsGrams.push(grams.value)
    }

    for (let i = 0; i <= 3; i++) {
      if (actualMeal == meals[i]) {
        actualDay.values[i] = productsGrams

        localStorage.setItem(actualDay.date, JSON.stringify(actualDay))
        localStorage.setItem("actualDay", JSON.stringify(actualDay))
      }
    }
  })
}
