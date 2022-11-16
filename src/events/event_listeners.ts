import * as elements from "./dom_elements"

let histNum = ""
let currNum = ""
let result = null
let lastOperation = ""
let haveDot = false

elements.numberElements.forEach((number: HTMLDivElement) => {
  number.addEventListener("click", (e) => {
    e.preventDefault()

    if (number.innerText === "." && !haveDot) {
      haveDot = true
    } else if (number.innerText === "." && haveDot) {
      return
    }
    console.log(e.target)
    currNum += number.innerText
    elements.currDisplayElement.innerText = currNum
  })
})
