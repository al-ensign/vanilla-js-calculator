import * as elements from "./dom_elements"

let histNum = ""
let currNum = ""
let result: any = null
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

elements.operationElements.forEach((operation: HTMLDivElement) => {
  operation.addEventListener("click", (e) => {
    e.preventDefault()

    if (!currNum) {
      return
    }
    haveDot = false
    const operationName = operation.innerText
    if (histNum && currNum && lastOperation) {
      //do math
    } else {
      result = parseFloat(currNum)
    }
    clearCurrentAddHistory(operationName)
  })
})

function clearCurrentAddHistory(name = "") {
  histNum += currNum + " " + name + " "
  elements.histDisplayElement.innerText = histNum
  currNum = ""
  elements.currDisplayElement.innerText = ""
  elements.tempResDisplayElement.innerText = result
}
