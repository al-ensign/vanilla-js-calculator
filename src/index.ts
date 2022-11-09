import { Button } from "./ui/button"
import "./style/style.css"

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

//create buttons div
const buttonsDiv = document.createElement("div")
buttonsDiv.className = "buttons"

//add buttonsDiv to calculatorDiv
calculator.appendChild(buttonsDiv)

//create all buttons
const mc = new Button("btn", "mc", "mc")
mc.init()
const mPlus = new Button("btn", "mPlus", "m+")
mPlus.init()
const mMinus = new Button("btn", "mMinus", "m-")
mMinus.init()
const mr = new Button("btn", "mr", "mr")
mr.init()
const ac = new Button("btn", "ac", "ac")
ac.init()
const percent = new Button("btn", "percent", "&#37")
percent.init()
const divide = new Button("btn special", "divide", "&#247")
divide.init()
const square = new Button("btn", "square", "x&#178")
square.init()
const cube = new Button("btn", "cube", "x&#179")
cube.init()
const anyPower = new Button("btn", "anyPower", "x&#x207F")
anyPower.init()
const seven = new Button("btn", "seven", "7")
seven.init()
const eight = new Button("btn", "eight", "8")
eight.init()
const nine = new Button("btn", "nine", "9")
nine.init()
const multiply = new Button("btn special", "multiply", "&#215")
multiply.init()
const tenPowerX = new Button("btn", "tenPowerX", "10<sup>x</sup>")
tenPowerX.init()
const root = new Button("btn", "root", "&#8730")
root.init()
const cubicRoot = new Button("btn", "cubicRoot", "<sup>3</sup>&#8730")
cubicRoot.init()
const four = new Button("btn", "four", "4")
four.init()
const five = new Button("btn", "five", "5")
five.init()
const six = new Button("btn", "six", "6")
six.init()
const plus = new Button("btn special", "plus", "&#43")
plus.init()
const nRoot = new Button("btn", "nRoot", "<sup>n</sup>&#8730")
nRoot.init()
const divideByX = new Button("btn", "divideByX", "&#x215F<sub>x</sub>")
divideByX.init()
const factorial = new Button("btn", "factorial", "!x")
factorial.init()
const one = new Button("btn", "one", "1")
one.init()
const two = new Button("btn", "two", "2")
two.init()
const three = new Button("btn", "three", "3")
three.init()
const minus = new Button("btn special", "minus", "&#8722")
minus.init()
const empty = document.createElement("div")
empty.className = "empty span-3"
buttonsDiv.appendChild(empty)

const changeSign = new Button("btn", "changeSign", "&#177")
changeSign.init()
const dot = new Button("btn", "dot", ".")
dot.init()
const zero = new Button("btn", "zero", "0")
zero.init()
const equal = new Button("btn special", "equal", "&#61")
equal.init()
