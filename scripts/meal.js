let section = document.querySelectorAll("section")
let titles = document.createElement("div")
titles.classList.add("titles")
titles.innerHTML = `<p>Prots</p>
<p>Fats</p>
<p>Carbs</p>
<p>Cals</p>`

let isOpen = false

let renderOpen = (m, e) => {
  let currentSection = m.parentElement.parentElement
  let lastChild = currentSection.lastChild
  let li = lastChild.querySelectorAll("li")
  currentSection.classList.toggle("chosen")

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
      })
    : li.forEach((l) => {
        let div = l.childNodes[1]
        div.classList.remove("meal-wrapper")
        let meal = l.childNodes[1]
        meal.removeChild(meal.childNodes[3])
      })

  for (let i = 0; i < lastChild.childNodes.length - 1; i++) {
    let allLi = lastChild.childNodes
    let br = document.createElement("br")
    let el = allLi[i].childNodes[0].parentNode
    isOpen ? el.prepend(br) : el.removeChild(el.childNodes[0])
  }

  let MealWrapper = lastChild.querySelectorAll(".meal-wrapper")
  for (let i = 0; i < MealWrapper.length; i++) {
    let div = document.createElement("div")
    div.classList.add("product-info-wrapper")
    div.innerHTML = `<div class="product-info">
      <div class="product-name">Pepsi</div>
      <div class="product-weight">95g</div>
      </div>
      <div class="units">
      <p>145g</p>
      <p>145g</p>
      <p>145g</p>
      <p>145g</p>
      </div>`
    MealWrapper[i].append(div)
  }
}

let mealName = document.querySelectorAll(".meal-name")
mealName.forEach((m) => {
  m.addEventListener("click", (e) => {
    let currentSection = e.target.parentElement.parentElement
    if (!isOpen) {
      section.forEach((s) => {
        s.style.display = "none"
      })
      currentSection.style.display = ""
      renderOpen(m, e)
    } else {
      section.forEach((s) => {
        s.style.display = ""
      })
      renderOpen(m, e)
    }
  })
})
