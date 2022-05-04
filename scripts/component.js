let meals = ["Breakfast", "Dinner", "Supper", "Other"]

let Breakfast = localStorage.getItem("Breakfast")
let Dinner = localStorage.getItem("Dinner")
let Supper = localStorage.getItem("Supper")
let Other = localStorage.getItem("Other")

Breakfast = JSON.parse(Breakfast)
Dinner = JSON.parse(Dinner)
Supper = JSON.parse(Supper)
Other = JSON.parse(Other)

let products = (i) => {
  switch (i) {
    case 0:
      let case0 = ""
      for (let j = 1; j < Breakfast.length; j++) {
        case0 += `<li>
                  <div class="img-bg">
                    <img src="img/icons/${Breakfast[j]}.png" alt="" />
                  </div>
                    <label>25g</label>
                </li>`
      }
      return case0
      break
    case 1:
      let case1 = ""
      for (let j = 1; j < Dinner.length; j++) {
        case1 += ` <li>
                  <div class="img-bg">
                    <img src="img/icons/${Dinner[j]}.png" alt="" />
                  </div>
                    <label>25g</label>
                </li>`
      }
      return case1
      break
    case 2:
      let case2 = ""
      for (let j = 1; j < Supper.length; j++) {
        case2 += ` <li>
                  <div class="img-bg">
                    <img src="img/icons/${Supper[j]}.png" alt="" />
                  </div>
                    <label>25g</label>
                </li>`
      }
      return case2
      break
    case 3:
      let case3 = ""
      for (let j = 1; j < Other.length; j++) {
        case3 += `<li>
                  <div class="img-bg">
                    <img src="img/icons/${Other[j]}.png" alt="" />
                  </div>
                    <label>25g</label>
                </li>`
      }
      return case3
      break
  }
}

const main = document.querySelector("main")
for (let i = 0; i < meals.length; i++) {
  let section = document.createElement("section")

  section.innerHTML = `
          <div class="labels">
            <div class="meal-name">${meals[i]}</div>
            <div class="meal-total">Total: 0kcal</div>
          </div>
          <ul>
              ${products(i)}
            <img class="add" src="img/tools/add.svg">
          </ul>
          `
  main.appendChild(section)
}

///////////////////////////////////////////////////////////

let add = document.querySelectorAll(".add")

add.forEach((e) => {
  e.addEventListener("click", (e) => {
    let SectionName =
      e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent
    localStorage.setItem("sesionName", SectionName)
    console.log(SectionName)
    location.href = "pages/backpack.html"
  })
})

let iconRight = document.querySelector(".icon-right")

iconRight.addEventListener("click", () => {
  localStorage.setItem("Breakfast", `[""]`)
  localStorage.setItem("Dinner", `[""]`)
  localStorage.setItem("Supper", `[""]`)
  localStorage.setItem("Other", `[""]`)
  localStorage.setItem("sesionName", "Breakfast")
  location.reload()
})
