import { Button } from "./button"

//create calculator div
const calculatorDiv = document.createElement("div")
calculatorDiv.className = "calculator"
calculatorDiv.id = "main"
document.body.appendChild(calculatorDiv)

//select calculatorDiv from HTML
const calculator = document.querySelector(".calculator")

//create screen div
const screenDiv = document.createElement("div")
screenDiv.className = "calc-screen"

//add screenDiv to calculatorDiv
calculator.appendChild(screenDiv)

//add history, current num and temp result to calc-screen
const historyDisplayDiv = document.createElement("div")
historyDisplayDiv.className = "calc-screen history"
historyDisplayDiv.id = "history-screen"
screenDiv.appendChild(historyDisplayDiv)

const currentDisplayDiv = document.createElement("div")
currentDisplayDiv.className = "calc-screen current"
currentDisplayDiv.id = "current-screen"
screenDiv.appendChild(currentDisplayDiv)

const tempResultDisplayDiv = document.createElement("div")
tempResultDisplayDiv.className = "calc-screen temp-result"
tempResultDisplayDiv.id = "temp-res-screen"
screenDiv.appendChild(tempResultDisplayDiv)

//create buttons div
const buttonsDiv = document.createElement("div")
buttonsDiv.className = "buttons"

//add buttonsDiv to calculatorDiv
calculator.appendChild(buttonsDiv)

//create all buttons
const mc = new Button("btn", "mc", "mc")
const mPlus = new Button("btn", "mPlus", "m+")
const mMinus = new Button("btn", "mMinus", "m-")
const mr = new Button("btn", "mr", "mr")
const ac = new Button("btn", "ac", "ac")
const percent = new Button("btn operation", "percent", "&#37")
const divide = new Button("btn operation special", "divide", "/")
const square = new Button("btn", "square", "x&#178")
const cube = new Button("btn", "cube", "x&#179")
const anyPower = new Button("btn", "anyPower", "x&#x207F")
const seven = new Button("btn number", "seven", "7")
const eight = new Button("btn number", "eight", "8")
const nine = new Button("btn number", "nine", "9")
const multiply = new Button("btn operation special", "multiply", "x")
const tenPowerX = new Button("btn", "tenPowerX", "10<sup>x</sup>")
const root = new Button("btn", "root", "&#8730")
const cubicRoot = new Button("btn", "cubicRoot", "<sup>3</sup>&#8730")
const four = new Button("btn number", "four", "4")
const five = new Button("btn number", "five", "5")
const six = new Button("btn number", "six", "6")
const plus = new Button("btn operation special", "plus", "+")
const nRoot = new Button("btn", "nRoot", "<sup>n</sup>&#8730")
const divideByX = new Button("btn", "divideByX", "&#x215F<sub>x</sub>")
const factorial = new Button("btn", "factorial", "!x")
const one = new Button("btn number", "one", "1")
const two = new Button("btn number", "two", "2")
const three = new Button("btn number", "three", "3")
const minus = new Button("btn operation special", "minus", "-")

const empty = document.createElement("div")
empty.className = "empty span-3"
buttonsDiv.appendChild(empty)

const changeSign = new Button("btn", "changeSign", "&#177")
const dot = new Button("btn number", "dot", ".")
const zero = new Button("btn number", "zero", "0")
const equal = new Button("btn special", "equal", "&#61")
