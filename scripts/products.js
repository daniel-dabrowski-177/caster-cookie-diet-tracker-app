const container = document.querySelector(".container")
const home = document.querySelector(".icon-center")
let count = 0

let Breakfast = localStorage.getItem("Breakfast")
let Dinner = localStorage.getItem("Dinner")
let Supper = localStorage.getItem("Supper")
let Other = localStorage.getItem("Other")

switch (localStorage.sesionName) {
  case "Breakfast":
    if (Breakfast === null) {
      Breakfast = [""]
    } else {
      Breakfast = JSON.parse(Breakfast)
    }
    for (let i = 0; i < 80; i++) {
      let div = document.createElement("div")

      if (Breakfast.includes(products[i].name, 1)) {
        div.classList.add("clicked")
      }
      div.innerHTML = `<div class="bg-icon">
        <img src="/img/icons/${products[i].name}.png" alt="" />
        </div>
        <label>${products[i].name}</label>`

      div.classList.add("product")
      container.appendChild(div)
    }
    break
  case "Dinner":
    if (Dinner === null) {
      Dinner = [""]
    } else {
      Dinner = JSON.parse(Dinner)
    }
    for (let i = 0; i < 80; i++) {
      let div = document.createElement("div")

      if (Dinner.includes(products[i].name, 1)) {
        div.classList.add("clicked")
      }
      div.innerHTML = `<div class="bg-icon">
        <img src="/img/icons/${products[i].name}.png" alt="" />
        </div>
        <label>${products[i].name}</label>`

      div.classList.add("product")
      container.appendChild(div)
    }
    break
  case "Supper":
    if (Supper === null) {
      Supper = [""]
    } else {
      Supper = JSON.parse(Supper)
    }
    for (let i = 0; i < 80; i++) {
      let div = document.createElement("div")

      if (Supper.includes(products[i].name, 1)) {
        div.classList.add("clicked")
      }
      div.innerHTML = `<div class="bg-icon">
        <img src="/img/icons/${products[i].name}.png" alt="" />
        </div>
        <label>${products[i].name}</label>`

      div.classList.add("product")
      container.appendChild(div)
    }
    break
  case "Other":
    if (Other === null) {
      Other = [""]
    } else {
      Other = JSON.parse(Other)
    }
    for (let i = 0; i < 80; i++) {
      let div = document.createElement("div")

      if (Other.includes(products[i].name, 1)) {
        div.classList.add("clicked")
      }
      div.innerHTML = `<div class="bg-icon">
        <img src="/img/icons/${products[i].name}.png" alt="" />
        </div>
        <label>${products[i].name}</label>`

      div.classList.add("product")
      container.appendChild(div)
    }
    break
}

const product = document.querySelectorAll(".product")
const clicked = document.querySelectorAll(".clicked")
const chooseButtons = document.querySelector(".chooseButtons")

product.forEach((p) =>
  p.addEventListener("click", () => {
    let productName = p.children[1].textContent

    switch (localStorage.sesionName) {
      case "Breakfast":
        console.log("Breakfast")
        if (p.classList[1] == null) {
          count++
          p.classList.add("clicked")
          Breakfast.push(productName)
          localStorage.setItem("Breakfast", JSON.stringify(Breakfast))
        } else {
          p.classList.remove("clicked")
          count--
          let pos = Breakfast.indexOf(productName)
          Breakfast.splice(pos, 1)
          localStorage.setItem("Breakfast", JSON.stringify(Breakfast))
        }
        if (count > 0) {
          chooseButtons.style.display = "inherit"
        } else {
          chooseButtons.style.display = "none"
        }
        console.log(count)
        break
      case "Dinner":
        console.log("Dinner")
        if (p.classList[1] == null) {
          count++
          p.classList.add("clicked")
          Dinner.push(productName)
          localStorage.setItem("Dinner", JSON.stringify(Dinner))
        } else {
          p.classList.remove("clicked")
          count--
          let pos = Dinner.indexOf(productName)
          Dinner.splice(pos, 1)
          localStorage.setItem("Dinner", JSON.stringify(Dinner))
        }
        if (count > 0) {
          chooseButtons.style.display = "inherit"
        } else {
          chooseButtons.style.display = "none"
        }
        console.log(count)
        break
      case "Supper":
        console.log("Supper")
        if (p.classList[1] == null) {
          count++
          p.classList.add("clicked")
          Supper.push(productName)
          localStorage.setItem("Supper", JSON.stringify(Supper))
        } else {
          p.classList.remove("clicked")
          count--
          let pos = Supper.indexOf(productName)
          Supper.splice(pos, 1)
          localStorage.setItem("Supper", JSON.stringify(Supper))
        }
        if (count > 0) {
          chooseButtons.style.display = "inherit"
        } else {
          chooseButtons.style.display = "none"
        }
        console.log(count)
        break
      case "Other":
        console.log("Other")
        if (p.classList[1] == null) {
          count++
          p.classList.add("clicked")
          Other.push(productName)
          localStorage.setItem("Other", JSON.stringify(Other))
        } else {
          p.classList.remove("clicked")
          count--
          let pos = Other.indexOf(productName)
          Other.splice(pos, 1)
          localStorage.setItem("Other", JSON.stringify(Other))
        }
        if (count > 0) {
          chooseButtons.style.display = "inherit"
        } else {
          chooseButtons.style.display = "none"
        }
        console.log(count)
        break
    }
  })
)

/////////////////////////////////////////////////////////////

let applyButton = document.querySelector(".applyButton")
let removeButton = document.querySelector(".removeButton")

applyButton.addEventListener("click", () => {
  location.href = "../index.html"
  count = 0
})

removeButton.addEventListener("click", () => {
  count = 0
  localStorage.setItem(localStorage.sesionName, `[""]`)
  location.reload()
})
