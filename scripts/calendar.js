let swiperEl = document.querySelector(".swiper")
let swiperWrapper = document.querySelector(".swiper-wrapper")

let week = ["M", "T", "W", "T", "F", "S", "S"]
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
let pickedDay

const today = new Date()
const lastDay = new Date(today.getFullYear() - 2, today.getMonth(), 0)
const firstFetchPoint = new Date(
  today.getFullYear() - 2,
  today.getMonth(),
  -lastDay.getDay() + 1
)
const lastFetchPoint = new Date(today.getFullYear() + 1, 11)

let currentDay = ""
let numberOfDays = ""
let i = 0
let arr = {
  date: today.toLocaleDateString(),
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

renderDefault()

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

let days = document.querySelectorAll(".day")

days.forEach((d) => {
  d.addEventListener("click", (e) => {
    days.forEach((el) => {
      el.classList.remove("pickedDay")
    })

    let dayData = d.children[1].attributes[1].nodeValue
    let actualDay = localStorage.getItem("actualDay")
    actualDay = JSON.parse(actualDay)

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
    arr = JSON.stringify(arr)

    if (localStorage.getItem(dayData) == null) {
      localStorage.setItem(dayData, arr)
      localStorage.setItem("actualDay", arr)
    } else {
      let actualData = localStorage.getItem(dayData)
      localStorage.setItem("actualDay", actualData)
    }

    renderDefault()
    d.classList.add("pickedDay")
  })
})
