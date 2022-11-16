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
