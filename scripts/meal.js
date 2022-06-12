let section = document.querySelectorAll("section")
let calendar = document.querySelector(".swiper")
let main = document.querySelector("main")

let titles = document.createElement("div")
titles.classList.add("titles")
titles.innerHTML = `<p>Prots</p>
  <p>Fats</p>
  <p>Carbs</p>
  <p>Cals</p>`

let isOpen = false
let mealId
let productsId = [""]
let myProducts = [""]
let arrValues = []
let values = []
let names = ["Breakfast", "Dinner", "Supper", "Other"]
let actualDay = localStorage.getItem("actualDay")
actualDay = JSON.parse(actualDay)

// OnClick instructions for "MealName" elements
let mealName = document.querySelectorAll(".meal-name")
mealName.forEach((m) => {
  m.addEventListener("click", (e) => {
    myProducts = [""]
    let currentSection = e.target.parentElement.parentElement
    if (!isOpen) {
      section.forEach((s) => {
        s.style.display = "none"
      })
      currentSection.style.display = ""
      arrValues = []
      renderOpen(m, e)
    } else {
      section.forEach((s) => {
        s.style.display = ""
      })
      renderOpen(m, e)
    }
  })
})

// Render Values void
let renderValues = (e) => {
  let actualDay = localStorage.getItem("actualDay")
  actualDay = JSON.parse(actualDay)

  // Find and Compare Meal ID
  for (let i = 0; i < names.length; i++) {
    if (e.target.innerHTML == names[i]) {
      mealId = i
    }
  }

  // Create and prepare Array with values for "Meal Details" component
  values = actualDay.values[mealId]
  values.reverse().pop()
  let productsName = actualDay.products[mealId]
  productsName.reverse().pop()

  for (let j = 0; j < products.length; j++) {
    for (let i = 0; i < productsName.length; i++) {
      if (productsName[i] == products[j].name) {
        arrValues.push(products[j])
      }
    }
  }
  arrValues.reverse()
}

// Render Open void
let renderOpen = (m, e) => {
  let currentSection = m.parentElement.parentElement
  let lastChild = currentSection.lastChild
  let li = lastChild.querySelectorAll("li")
  currentSection.classList.toggle("chosen")
  arrValues = []
  renderValues(e, arrValues)

  // Dependencies isOpen function
  // Values are separeted for cleaner documentation
  isOpen = isOpen === false ? true : false
  isOpen
    ? (m.style.textDecoration = "underline 2px")
    : (m.style.textDecoration = "")
  isOpen
    ? currentSection.insertBefore(titles, lastChild)
    : currentSection.removeChild(titles)
  isOpen
    ? li.forEach((l) => {
        let div = l.childNodes[0]
        div.classList.add("meal-wrapper")
        let label = l.childNodes[0].childNodes[1].childNodes[3]
        label.style.display = "none"
        let bg = l.childNodes[0].childNodes[1].childNodes[1]
        bg.style.marginTop = "10px"
      })
    : li.forEach((l) => {
        let div = l.childNodes[1]
        div.classList.remove("meal-wrapper")
        let meal = l.childNodes[1]
        meal.removeChild(meal.childNodes[3])
        let label = l.childNodes[1].childNodes[1].childNodes[3]
        label.style.display = ""
        let bg = l.childNodes[1].childNodes[1].childNodes[1]
        bg.style.marginTop = ""
      })
  isOpen ? (calendar.style.display = "none") : (calendar.style.display = "")
  isOpen ? (main.style.paddingTop = "0px") : (main.style.paddingTop = "")

  // Create br between allLi elements
  for (let i = 0; i < lastChild.childNodes.length - 1; i++) {
    let allLi = lastChild.childNodes
    let br = document.createElement("br")
    let el = allLi[i].childNodes[0].parentNode
    isOpen ? el.prepend(br) : el.removeChild(el.childNodes[0])
  }

  // Create "Meal Details" component
  let MealWrapper = lastChild.querySelectorAll(".meal-wrapper")
  for (let i = 0; i < MealWrapper.length; i++) {
    let div = document.createElement("div")
    div.classList.add("product-info-wrapper")
    for (let j = 0; j < myProducts.length; j++) {
      div.innerHTML = `<div class="product-info">
      <div class="product-name">${arrValues[i].name}</div>
      <div class="product-weight">${values[i]}g</div>
      </div>
      <div class="units">
      <p>${Math.round((values[i] * arrValues[i].prots) / 100)} g</p>
      <p>${Math.round((values[i] * arrValues[i].fats) / 100)} g</p>
      <p>${Math.round(values[i] * arrValues[i].carbs) / 100} g</p>
      <p>${Math.round((values[i] * arrValues[i].calories) / 100)} cals</p>
      </div>`
    }
    MealWrapper[i].append(div)
  }
}
