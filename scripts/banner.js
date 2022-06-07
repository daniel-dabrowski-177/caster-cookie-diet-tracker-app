let banner = document.querySelector(".banner")
let sw = document.querySelector(".swiper")
sw.style.height = "135px"

banner.addEventListener("click", () => {
  switch (sw.style.height) {
    case "135px":
      sw.style.height = "500px"
      break
    case "500px":
      sw.style.height = "135px"
      break
    default:
      sw.style.height = "135px"
  }
})

let iconRight = document.querySelector(".icon-right")

iconRight.addEventListener("click", () => {
  localStorage.setItem("Breakfast", `[""]`)
  localStorage.setItem("Dinner", `[""]`)
  localStorage.setItem("Supper", `[""]`)
  localStorage.setItem("Other", `[""]`)
  localStorage.setItem("sesionName", `Breakfast`)
  location.reload()
})
