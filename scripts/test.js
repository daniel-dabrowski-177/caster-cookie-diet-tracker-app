let banner = document.querySelector(".banner")
let sw = document.querySelector(".swiper")

console.log("works")
// banner.addEventListener("click", () => {

// })

banner.addEventListener("click", () => {
  // sw.style.height = "250px"

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
