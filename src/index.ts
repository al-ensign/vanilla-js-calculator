import { Button } from "./ui/button"
// import * as styles from "./style/style.css"

//create calculator div
const calculatorDiv = document.createElement("div")
calculatorDiv.className = "calculator"
calculatorDiv.id = "main"
document.body.appendChild(calculatorDiv)

//select calculatorDiv from HTML
const calculator = document.querySelector(".calculator")

//create screen div
const screenDiv = document.createElement("div")
calculatorDiv.className = "calc-screen"

//add screenDiv to calculatorDiv
calculator.appendChild(screenDiv)

//create buttons div
const buttonsDiv = document.createElement("div")
buttonsDiv.className = "buttons"

//add buttonsDiv to calculatorDiv
calculator.appendChild(buttonsDiv)

//create all buttons
const mc = new Button("btn", "mc", "mc")

// const mPlus = new Button("btn", "mPlus", "m+")
// const mMinus = new Button("btn", "mMinus", "m-")
// const mr = new Button("btn", "mr", "mr")
// const ac = new Button("btn", "ac", "ac")
// const percent = new Button("btn", "percent", "&#37")
// const divide = new Button("btn special", "divide", "&#247")
// const square = new Button("btn", "square", "x&#178")
// const cube = new Button("btn", "cube", "x&#179")
// const anyPower = new Button("btn", "anyPower", "x&#x207F")
// const seven = new Button("btn", "seven", "7")
// const eight = new Button("btn", "eight", "8")
// const nine = new Button("btn", "nine", "9")
// const multiply = new Button("btn special", "multiply", "&#215")
// const tenPowerX = new Button("btn", "tenPowerX", "10<sup>x</sup>")
// const root = new Button("btn", "root", "&#8730")
// const cubicRoot = new Button("btn", "cubicRoot", "<sup>3</sup>&#8730")
// const four = new Button("btn", "four", "4")
// const five = new Button("btn", "five", "5")
// const six = new Button("btn", "six", "6")
// const plus = new Button("btn special", "plus", "&#43")
// const nRoot = new Button("btn", "nRoot", "<sup>n</sup>&#8730")
// const divideByX = new Button("btn", "divideByX", "&#x215F<sub>x</sub>")
// const factorial = new Button("btn", "factorial", "!x")
// const one = new Button("btn", "one", "1")
// const two = new Button("btn", "two", "2")
// const three = new Button("btn", "three", "3")
// const minus = new Button("btn special", "minus", "&#8722")

// const empty = document.createElement("div")
// empty.className = "empty span-3"

// const changeSign = new Button("btn", "changeSign", "&#177")
// const dot = new Button("btn", "dot", ".")
// const zero = new Button("btn", "zero", "0")
// const equal = new Button("btn", "equal", "&#61")
mc.init()
console.log(mc)
