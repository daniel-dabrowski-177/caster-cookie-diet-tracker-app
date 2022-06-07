let swiperWrapper = document.querySelector(".swiper-wrapper")

let week = ["M", "T", "W", "T", "F", "S", "S"]
let count = "1"

const date = new Date()
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
const today = new Date().getDate()

console.log(lastDay)

const firstFetchPoint = new Date(date.getFullYear() - 2, 0)
const lastFetchPoint = new Date(date.getFullYear() + 1, 11)

// firstFetchPoint < lastFetchPoint
let currentDate = ""
let numberOfWeeks = ""

let howManyMonths = () => {
  console.log(firstFetchPoint.getFullYear())
  console.log(firstFetchPoint.getMonth())
  console.log(firstFetchPoint.getDate())
  console.log(firstFetchPoint.getDay())

  for (let i = 0; currentDate <= lastFetchPoint; i++) {
    currentDate = new Date(
      firstFetchPoint.getFullYear(),
      firstFetchPoint.getMonth(),
      firstFetchPoint.getDay() + i
    )

    console.log(currentDate)
    // console.log(i)
    // console.log(currentDate.getFullYear())
    // console.log(currentDate.getMonth())
    // console.log(currentDate.getFullYear())
    // console.log(currentDate.getDate())
    numberOfWeeks++
  }
  console.log(numberOfWeeks)
}

howManyMonths()

for (j = 0; j < 6; j++) {
  let swiperSlide = document.createElement("div")
  swiperSlide.classList.add("swiper-slide")

  swiperWrapper.append(swiperSlide)

  for (let i = 0; i < 7; i++) {
    let day = document.createElement("div")
    day.classList.add("day")

    day.innerHTML = `
<div class="letter">${week[i]}</div>
<div class="number">${count}</div>
<div class="activity">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`

    if (count == "25") {
      day.classList.add("firstDay")
    }

    if (count == today) {
      day.classList.add("today")
      swiper.activeIndex = j
    }

    if (count < lastDay) {
      count++
    } else {
      count = "1"
    }
    swiperSlide.append(day)
  }
}

let firstDay = document.querySelectorAll(".firstDay")
let label = document.querySelector("label")

let foo = () => {
  firstDay.forEach((d) => {
    if (d.parentNode.classList[1] == "swiper-slide-active") {
      label.innerHTML = "June"
    } else {
      label.innerHTML = "May"
    }
  })
}

swiperWrapper.addEventListener("touchmove", () => {
  foo()
})
