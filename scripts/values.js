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
// console.log(actualDay.products)

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

    // confirmBtn.addEventListener("click", () => {
    //   console.log(productsName)
    //   console.log(productsCals)
    //   console.log(productsGrams)
    //   console.log(actualDay.values[i])
    //   console.log(i)

    //   // actualDay.values[i] = productsCals
    // })
  }
}

for (let i = 0; i < products.length; i++) {
  if (productsName.includes(products[i].name)) {
    // console.log(products[i].calories)
    productsCals.push(products[i].calories)
  }
}

let li = document.querySelectorAll("li")

for (let i = 0; i < li.length; i++) {
  let grams = li[i].children[1].children[0].children[0]
  let cals = li[i].children[1].children[1].children[0]

  cals.placeholder = productsCals[i + 1]

  grams.addEventListener("input", (e) => {
    const value = e.target.value
    // console.log(value)

    cals.value = Math.round((productsCals[i + 1] / 100) * value)

    // productsGrams[i + 1] = value
    // console.log(productsGrams)
  })

  cals.addEventListener("input", (e) => {
    const value = e.target.value
    // console.log(value)

    grams.value = Math.round((100 / productsCals[i + 1]) * value)

    // productsCals[i + 1] = value
    // console.log(productsCals)
  })

  confirmBtn.addEventListener("click", () => {
    if (grams.value == "") {
      productsGrams.push(grams.placeholder)
    } else {
      productsGrams.push(grams.value)
    }

    for (let i = 0; i <= 3; i++) {
      if (actualMeal == meals[i]) {
        console.log(productsGrams)
        console.log(actualDay.values[i])

        actualDay.values[i] = productsGrams
        console.log(actualDay)

        localStorage.setItem(actualDay.date, JSON.stringify(actualDay))
        localStorage.setItem("actualDay", JSON.stringify(actualDay))
      }
    }
  })
}
