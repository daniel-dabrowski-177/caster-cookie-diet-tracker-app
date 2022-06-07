let renderDefault = () => {
  let section = document.querySelectorAll("section")
  let actualDay = localStorage.getItem("actualDay")
  actualDay = JSON.parse(actualDay)

  // Create new Ul & add "addButton"
  for (let i = 0; i < 4; i++) {
    section[i].children[1].remove()
    let newUl = document.createElement("ul")
    newUl.innerHTML = `<img class="add" src="img/tools/add.svg" />`
    section[i].append(newUl)
  }

  // console.log(actualDay)

  // Create function for "add" button
  let add = document.querySelectorAll(".add")
  add.forEach((e) => {
    e.addEventListener("click", (e) => {
      let actualMeal =
        e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent
      // console.log(actualMeal)
      localStorage.setItem("actualMeal", actualMeal)
      location.href = "pages/backpack.html"
    })
  })

  // Set Label of Calendar to today Date as default
  let dayData = actualDay.date
  let swiperEl = document.querySelector(".swiper")
  dayData = dayData.split(".", 3)
  let calendarDay = dayData[0]

  dayData = dayData[1].split("0", 2)

  let calendarMonth = month[dayData[1]]

  swiperEl.children[0].textContent = null
  swiperEl.children[0].textContent = calendarDay + " " + calendarMonth

  // let actualDay = localStorage.getItem("actualDay")
  // actualDay = JSON.parse(actualDay)

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
}
