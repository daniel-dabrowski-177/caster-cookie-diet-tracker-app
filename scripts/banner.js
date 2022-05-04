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
