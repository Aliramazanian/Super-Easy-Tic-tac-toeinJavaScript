const gameboard = document.getElementById("gameboard");
const infoDisplay = document.getElementById("info");

const startCell = [
 "", "", "", "", "", "", "", "", ""
]

let go = "circle"
infoDisplay.textContent = "circle goes first"


function creatBoard () {
 startCell.forEach((cell , index) => {
  const cellElement = document.createElement("div")
  cellElement.classList.add("square")
  cellElement.id =index
  cellElement.addEventListener("click", addGO )
  gameboard.append(cellElement)
 })
}
creatBoard()


function addGO (e) {
 const goDisplay = document.createElement("div")
 goDisplay.classList.add(go)
 e.target.append(goDisplay)
go = go === "circle" ? "cross" : "circle"

infoDisplay.textContent = " it is now " + go +" 's go."
e.target.removeEventListener("click", addGO )
checkScore()
}

function checkScore() {
 const allSquare = document.querySelectorAll(".square")
 // console.log(allSquare)
 const winningCombos =[
  [0,1,2], [3,4,5,],[6,7,8],
  [0,3,6],[1,4,7], [2,5,8],
  [0,4,8],[2,4,6]
 ]
winningCombos.forEach(array => {

const circleWins = array.every(cell =>
  allSquare[cell].firstChild?.classList.contains("circle") )
  if (circleWins){
   infoDisplay.textContent ="circle Wins!"
   allSquare.forEach(square => square.replaceWith(square.cloneNode(true)) )
   return
  }
})
winningCombos.forEach(array => {
 const crossWins = array.every(cell =>
  allSquare[cell].firstChild ?.classList.contains("cross"))
 if (crossWins) {
  infoDisplay.textContent = "cross Wins!"
  allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
  return
 }
})

}