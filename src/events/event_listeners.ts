import * as elements from "./dom_elements"
import { addNum } from "../math_functions/add"
import { subtractNum } from "../math_functions/subtract"
import { multiplyNum } from "../math_functions/multiply"
import { divideByNum } from "../math_functions/divide"
import { squarePow } from "../math_functions/square_pow"
import { cubePow } from "../math_functions/cube_pow"
import { anyPow } from "../math_functions/any_pow"
import { nthRoot } from "../math_functions/nth_root"
import { factorialNum } from "../math_functions/factorial"
import { squareRoot } from "../math_functions/square_root"
import { cubicRoot } from "../math_functions/cubic_root"
import { tenPowX } from "../math_functions/ten_pow_x"
import { oneByX } from "../math_functions/one_xth"
import { percentOfNum } from "../math_functions/percent"

let histNum = ""
let currNum = ""
let result: any = null
let lastOperation = ""
let haveDot = false

let memoryNum = "0"

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
  })
})

elements.computeElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum && !histNum) {
    return
  }
  haveDot = false
  if (currNum && !histNum) {
    clearCurrentAddHistory()
    elements.currDisplayElement.innerText = currNum
    elements.tempResDisplayElement.innerText = ""
    result = ""
    histNum = ""
    elements.histDisplayElement.innerText = ""
  } else if (!currNum && histNum) {
    clearCurrentAddHistory()
    currNum = result
    elements.currDisplayElement.innerText = currNum
    elements.tempResDisplayElement.innerText = ""
    result = ""
    histNum = ""
    elements.histDisplayElement.innerText = ""
  } else {
    computeOperation()
    clearCurrentAddHistory()
    elements.currDisplayElement.innerText = result
    elements.tempResDisplayElement.innerText = ""
    currNum = result
    histNum = ""
  }
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

elements.changeSignElement.addEventListener("click", (e) => {
  e.preventDefault()
  currNum = (-parseFloat(currNum)).toString()
  elements.currDisplayElement.innerText = currNum
})

elements.squareElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }
  let currentNum = parseFloat(currNum)
  result = squarePow(currentNum).toString()
  const operationName = "^2"
  clearCurrentAddHistory(operationName)
})

elements.cubeElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }
  let currentNum = parseFloat(currNum)
  result = cubePow(currentNum).toString()
  const operationName = "^3"
  clearCurrentAddHistory(operationName)
})

elements.factorialElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }
  let currentNum = parseFloat(currNum)
  result = factorialNum(currentNum).toString()
  const operationName = "!"
  clearCurrentAddHistory(operationName)
})

elements.rootElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }
  let currentNum = parseFloat(currNum)
  result = squareRoot(currentNum).toString()
  const operationName = "Square Root"
  clearCurrentAddHistory(operationName)
})

elements.cubicRootElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }
  let currentNum = parseFloat(currNum)
  result = cubicRoot(currentNum).toString()
  const operationName = "Cubic Root"
  clearCurrentAddHistory(operationName)
})

elements.tenPowerXElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }
  let currentNum = parseFloat(currNum)
  result = tenPowX(currentNum).toString()
  const operationName = "10 ^"
  clearCurrentAddHistory(operationName)
})

elements.divideByXElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }
  let currentNum = parseFloat(currNum)
  result = oneByX(currentNum).toString()
  const operationName = "1 / "
  clearCurrentAddHistory(operationName)
})

elements.mPlusElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }

  let currentNum = parseFloat(currNum)
  let memoryNumFloat = parseFloat(memoryNum)
  memoryNum = addNum(memoryNumFloat, currentNum).toString()
})

elements.mMinusElement.addEventListener("click", (e) => {
  e.preventDefault()
  if (!currNum) {
    return
  }

  let currentNum = parseFloat(currNum)
  let memoryNumFloat = parseFloat(memoryNum)
  memoryNum = subtractNum(memoryNumFloat, currentNum).toString()
})

elements.mcElement.addEventListener("click", (e) => {
  e.preventDefault()
  memoryNum = "0"
})

elements.mrElement.addEventListener("click", (e) => {
  e.preventDefault()
  currNum = memoryNum
  elements.currDisplayElement.innerHTML = currNum
})

function clearCurrentAddHistory(name = "") {
  /* 
  1) stores currNum and operation in History 
  2) assigns it to History display
  3) clears currNum and Current display
  4) adds value to the Temporary Result display
  */
  if (name === "10 ^" || name === "1 / ") {
    histNum = name + " " + currNum + " "
  } else {
    histNum += currNum + " " + name + " "
  }
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
    case "^":
      result = anyPow(prevNum, currentNum)
      break
    case "n-th Root":
      result = nthRoot(prevNum, currentNum)
      break
    case "%":
      result = percentOfNum(prevNum, currentNum)
      break
    default:
      return
  }
}
