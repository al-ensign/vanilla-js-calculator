import * as elements from "./dom_elements"
import { addNum } from "../math_functions/add"
import { subtractNum } from "../math_functions/subtract"
import { multiplyNum } from "../math_functions/multiply"
import { divideByNum } from "../math_functions/divide"

let histNum = ""
let currNum = ""
let result: any = null
let lastOperation = ""
let haveDot = false

elements.numberElements.forEach((number: HTMLDivElement) => {
  number.addEventListener("click", (e) => {
    e.preventDefault()

    //allows only 1 dot
    if (number.innerText === "." && !haveDot) {
      haveDot = true
    } else if (number.innerText === "." && haveDot) {
      return
    }
    //sets currNum equal to button's value and adds to the current display
    currNum += number.innerText
    elements.currDisplayElement.innerText = currNum
  })
})

elements.operationElements.forEach((operation: HTMLDivElement) => {
  operation.addEventListener("click", (e) => {
    e.preventDefault()
    //does nothing if there is no currNum
    if (!currNum) {
      return
    }

    //resets haveDot to false so that we can use float as next operand
    haveDot = false

    const operationName = operation.innerHTML
    //checks if there is data in History/Current displays and lastOperation
    if (histNum && currNum && lastOperation) {
      computeOperation()
    } else {
      result = parseFloat(currNum)
    }
    //clear CurrNum and store data in History and Temporary Result displays
    clearCurrentAddHistory(operationName)
    lastOperation = operationName
    console.log(lastOperation)
  })
})

elements.computeElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum || !histNum) {
    return
  }
  haveDot = false
  computeOperation()
  clearCurrentAddHistory()
  elements.currDisplayElement.innerText = result
  elements.tempResDisplayElement.innerText = ""
  currNum = result
  histNum = ""
})

elements.clearAllElement.addEventListener("click", (e) => {
  e.preventDefault()
  elements.histDisplayElement.innerText = ""
  elements.currDisplayElement.innerText = ""
  elements.tempResDisplayElement.innerText = ""
  currNum = ""
  histNum = ""
  result = ""
  lastOperation = ""
})

function clearCurrentAddHistory(name = "") {
  /* 
  1) stores currNum and operation in History 
  2) assigns it to History display
  3) clears currNum and Current display
  4) adds value to the Temporary Result display
  */
  histNum += currNum + " " + name + " "
  elements.histDisplayElement.innerText = histNum
  currNum = ""
  elements.currDisplayElement.innerText = ""
  elements.tempResDisplayElement.innerText = result
}

function computeOperation() {
  let prevNum = parseFloat(result)
  let currentNum = parseFloat(currNum)
  switch (lastOperation) {
    case "x":
      result = multiplyNum(prevNum, currentNum)
      break
    case "/":
      result = divideByNum(prevNum, currentNum)
      break
    case "+":
      result = addNum(prevNum, currentNum)
      break
    case "-":
      result = subtractNum(prevNum, currentNum)
      break
    default:
      return
  }
}
