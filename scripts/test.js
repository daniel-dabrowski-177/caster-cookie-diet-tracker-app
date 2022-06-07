let banner = document.querySelector(".banner")
let sw = document.querySelector(".swiper")

banner.addEventListener("click", () => {
  switch (sw.style.height) {
    case "115px":
      sw.style.height = "500px"
      break
    case "500px":
      sw.style.height = "115px"
      break
    default:
      sw.style.height = "115px"
  }
})
