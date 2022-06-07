let renderMeals = () => {
  let section = document.querySelectorAll("section")

  let actualDay = localStorage.getItem("actualDay")
  actualDay = JSON.parse(actualDay)

  for (let i = 0; i < 4; i++) {
    section[i].children[1].remove()
    let newUl = document.createElement("ul")
    newUl.innerHTML = `<img class="add" src="img/tools/add.svg" />`
    section[i].append(newUl)
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < actualDay.products[i].length; j++) {
      let li = document.createElement("li")
      let ul = document.querySelectorAll("ul")

      li.innerHTML = `<div class="img-bg">
          <img src="img/icons/${actualDay.products[i][j]}.png" alt="" />
        </div>
          <label>${actualDay.values[i][j]}g</label>`
      ul[i].prepend(li)
    }
  }

  let ul = document.querySelectorAll("ul")
  let Breakfast = ul[0].parentNode.children[0].children[0].textContent
  let Dinner = ul[1].parentNode.children[0].children[0].textContent
  let Supper = ul[2].parentNode.children[0].children[0].textContent
  let Other = ul[3].parentNode.children[0].children[0].textContent
  let Meals = [Breakfast, Dinner, Supper, Other]

  let add = document.querySelectorAll(".add")

  add.forEach((e) => {
    e.addEventListener("click", (e) => {
      let actualMeal =
        e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent
      localStorage.setItem("actualMeal", actualMeal)
      location.href = "pages/backpack.html"
    })
  })
}
