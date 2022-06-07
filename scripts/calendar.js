let swiperEl = document.querySelector(".swiper")
let swiperWrapper = document.querySelector(".swiper-wrapper")

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
let week = ["M", "T", "W", "T", "F", "S", "S"]
let count = "1"

const today = new Date()

const lastDay = new Date(today.getFullYear() - 2, today.getMonth(), 0)

const firstFetchPoint = new Date(
  today.getFullYear() - 2,
  today.getMonth(),
  -lastDay.getDay() + 1
)
const lastFetchPoint = new Date(today.getFullYear() + 1, 11)

// firstFetchPoint < lastFetchPoint
let currentDay = ""
let currentWeek = ""
let numberOfDays = ""
let numberOfWeeks = ""
let i = 0

for (let i = 0; currentDay <= lastFetchPoint; i++) {
  let swiperSlide = document.createElement("div")
  swiperSlide.classList.add("swiper-slide")
  swiperWrapper.append(swiperSlide)

  for (let h = 0; h < 7; h++) {
    currentDay = new Date(
      firstFetchPoint.getFullYear(),
      firstFetchPoint.getMonth(),
      firstFetchPoint.getDate() + i
    )

    let day = document.createElement("div")
    day.classList.add("day")
    day.innerHTML = `
          <div class="letter">${week[h]}</div>
          <div class="number" data="${currentDay.toLocaleDateString()}">${currentDay.getDate()}</div>
          <div class="activity">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>`

    if (
      currentDay.getDate() == today.getDate() &&
      currentDay.getMonth() == today.getMonth() &&
      currentDay.getFullYear() == today.getFullYear()
    ) {
      day.classList.add("today")
      swiper.activeIndex = numberOfDays
    }
    swiperSlide.append(day)
    i++
  }
  i--
  numberOfDays++
}

/////////////////////////////////////////////////////////////////

// // Actual Date
// let date = new Date().toLocaleDateString()
// console.log(date)

// // Array Constructor Template
// let arr = {
//   date: date,
//   products: {
//     0: ["apple", "asparagus", "avocado"],
//     1: ["bacon", "banana", "beans"],
//     2: ["biscuit", "blueberries", "bread"],
//     3: [""],
//     // ["broccoli", "nutella", "cabbage"],
//   },
//   values: {
//     0: [60, 15, 12],
//     1: [65, 125, 128],
//     2: [630, 125, 112],
//     3: [630, 175, 112],
//   },
// }

// console.log(arr)

// // Array get productName & productValue
// console.log(arr)
// console.log(arr.products[1][2])
// console.log(arr.values[1][2])

// // Stringify & Save to localStorage...
// arr = JSON.stringify(arr)
// localStorage.setItem(date, arr)

// // ...Get it back as an Array
// let Data = localStorage.getItem(date)
// Data = JSON.parse(Data)
// console.log(Data)

// // Custom Product Constructor
// let myProducts = ["broccoli", "nutella", "cabbage"]
// Data.products[3] = myProducts
// console.log(Data)

// // Key: Data,
// // Value: Object

/////////////////////////////////////////////////////////////////

let days = document.querySelectorAll(".day")
days.forEach((d) => {
  d.addEventListener("click", () => {
    let dayData = d.children[1].attributes[1].nodeValue
    let arr = {
      date: dayData,
      products: {
        0: [""],
        1: [""],
        2: [""],
        3: [""],
      },
      values: {
        0: [""],
        1: [""],
        2: [""],
        3: [""],
      },
    }

    if (localStorage.getItem(dayData) == null) {
      arr = JSON.stringify(arr)
      localStorage.setItem(dayData, arr)
    }
  })
})
