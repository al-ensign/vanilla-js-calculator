import { Button } from "./ui/button"

//create buttons div
const buttonsDiv = document.createElement("div")
buttonsDiv.className = "buttons"

//add buttonsDiv to Body
document.body.appendChild(buttonsDiv)

//create all buttons
const mc = new Button("button", "btn", "mc", "m") //remove <p>
const mPlus = new Button("button", "btn", "mPlus", `<p>m+</p>`)
const mMinus = new Button("button", "btn", "mMinus", `<p>m-</p>`)
const mr = new Button("button", "btn", "mr", `<p>mr</p>`)
const ac = new Button("button", "btn", "ac", `<p>ac</p>`)
const percent = new Button("button", "btn", "percent", `<p>&#37</p>`)
const divide = new Button("button", "btn special", "divide", `<p>&#247</p>`)
const square = new Button("button", "btn", "square", `<p>x&#178</p>`)
const cube = new Button("button", "btn", "cube", `<p>x&#179</p>`)
const anyPower = new Button("button", "btn", "anyPower", `<p>x&#x207F</p>`)
const seven = new Button("button", "btn", "seven", `<p>7</p>`)
const eight = new Button("button", "btn", "eight", `<p>8</p>`)
const nine = new Button("button", "btn", "nine", `<p>9</p>`)
const multiply = new Button("button", "btn special", "multiply", `<p>&#215</p>`)
const tenPowerX = new Button(
  "button",
  "btn",
  "tenPowerX",
  `<p>10<sup>x</sup></p>`
)
const root = new Button("button", "btn", "root", `<p>&#8730</p>`)
const cubicRoot = new Button(
  "button",
  "btn",
  "cubicRoot",
  `<p><sup>3</sup>&#8730</p>`
)
const four = new Button("button", "btn", "four", `<p>4</p>`)
const five = new Button("button", "btn", "five", `<p>5</p>`)
const six = new Button("button", "btn", "six", `<p>6</p>`)
const plus = new Button("button", "btn special", "plus", `<p>&#43</p>`)
const nRoot = new Button("button", "btn", "nRoot", `<p><sup>n</sup>&#8730</p>`)
const divideByX = new Button(
  "button",
  "btn",
  "divideByX",
  `<p>&#x215F<sub>x</sub></p>`
)
const factorial = new Button("button", "btn", "factorial", `<p>!x</p>`)
const one = new Button("button", "btn", "one", `<p>1</p>`)
const two = new Button("button", "btn", "two", `<p>2</p>`)
const three = new Button("button", "btn", "three", `<p>3</p>`)
const minus = new Button("button", "btn special", "minus", `<p>&#8722</p>`)

const empty = document.createElement("div")
empty.className = "empty span-3"

const changeSign = new Button("button", "btn", "changeSign", `<p>&#177</p>`)
const dot = new Button("button", "btn", "dot", `<p>.</p>`)
const zero = new Button("button", "btn", "zero", `<p>0</p>`)
const equal = new Button("button", "btn", "equal", `<p>&#61</p>`)

//add buttons to buttonsDiv

console.log(mc.id)
