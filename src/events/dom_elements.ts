//Get all DOM elements for numbers and operations
export const numberElements =
  document.querySelectorAll<HTMLDivElement>(".number")
export const operationElements =
  document.querySelectorAll<HTMLDivElement>(".operation")
export const mcElement = document.getElementById("mc") as HTMLDivElement | null
export const mPlusElement = document.getElementById(
  "mPlus"
) as HTMLDivElement | null
export const mMinusElement = document.getElementById(
  "mMinus"
) as HTMLDivElement | null
export const mrElement = document.getElementById("mr") as HTMLDivElement | null
export const clearAllElement = document.getElementById(
  "ac"
) as HTMLDivElement | null
export const computeElement = document.getElementById(
  "equal"
) as HTMLDivElement | null

export const squareElement = document.getElementById(
  "square"
) as HTMLDivElement | null
export const cubeElement = document.getElementById(
  "cube"
) as HTMLDivElement | null
export const anyPowerElement = document.getElementById(
  "anyPower"
) as HTMLDivElement | null
export const tenPowerXElement = document.getElementById(
  "tenPowerX"
) as HTMLDivElement | null
export const rootElement = document.getElementById(
  "root"
) as HTMLDivElement | null
export const cubicRootElement = document.getElementById(
  "cubicRoot"
) as HTMLDivElement | null
export const nRootElement = document.getElementById(
  "nRoot"
) as HTMLDivElement | null
export const divideByXElement = document.getElementById(
  "divideByX"
) as HTMLDivElement | null
export const factorialElement = document.getElementById(
  "factorial"
) as HTMLDivElement | null
export const changeSignElement = document.getElementById(
  "changeSign"
) as HTMLDivElement | null

//Get calc screens: history, current, temp result
export const histDisplayElement = document.getElementById(
  "history-screen"
) as HTMLDivElement | null
export const currDisplayElement = document.getElementById(
  "current-screen"
) as HTMLDivElement | null
export const tempResDisplayElement = document.getElementById(
  "temp-res-screen"
) as HTMLDivElement | null
