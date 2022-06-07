// let meals = [Breakfast, Dinner, Supper, Other]

// Here we get Arrays as a string
let Breakfast = localStorage.getItem("Breakfast")
let Dinner = localStorage.getItem("Dinner")
let Supper = localStorage.getItem("Supper")
let Other = localStorage.getItem("Other")

// Here we translate Arrays to objects
Breakfast = JSON.parse(Breakfast)
Dinner = JSON.parse(Dinner)
Supper = JSON.parse(Supper)
Other = JSON.parse(Other)

///////////////////////////////////////////////////////////

let Meals = [Breakfast, Dinner, Supper, Other]

let ul = document.querySelectorAll("ul")

for (let i = 0; i < 4; i++) {
  for (let j = 1; j < Meals[i].length; j++) {
    let li = document.createElement("li")

    li.innerHTML = `<li>
          <div class="img-bg">
            <img src="img/icons/${Meals[i][j]}.png" alt="" />
          </div>
            <label>60g</label>
        </li>`
    ul[i].prepend(li)
  }
}

ul.forEach((i) => {
  i.addEventListener("click", (e) => {
    // console.log(Meals)
  })
})

///////////////////////////////////////////////////////////

let add = document.querySelectorAll(".add")

add.forEach((e) => {
  e.addEventListener("click", (e) => {
    let SectionName =
      e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent
    localStorage.setItem("sesionName", SectionName)
    location.href = "pages/backpack.html"
  })
})
