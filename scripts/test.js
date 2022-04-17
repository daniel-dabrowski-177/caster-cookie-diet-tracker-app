let banner = document.querySelector(".banner")
let sw = document.querySelector(".swiper")

console.log("works")
// banner.addEventListener("click", () => {

// })

sw.style.height = "135px"
banner.addEventListener("click", () => {
  sw.style.height = "250px"
})
