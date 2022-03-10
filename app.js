console.log("JS is working")
console.log("branch")

const playerOneWins = document.getElementById('player-one-wins')

const playerTwoWins = document.getElementById('player-two-wins')


// Boolean to determine who's turn it is - start with player 1 - X
let isCirclePlayerTurn = false;
let restartRequired = false;

const gridList = document.querySelectorAll(".grid");
const WINNINGCOMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

for (let i = 0; i < gridList.length; i++) {
    addGridIconEventListener(gridList[i])
}

function addGridIconEventListener(oneGrid) {
    // Named function to hoist to the top
    oneGrid.addEventListener("click", () => {

        // console.log(oneGrid.classList)
        // Boolean to see if the grid is used (grab the class)
        isUsed = oneGrid.classList[2] === "used";
        // console.log("Grid is being occupied by " + oneGrid.classList[1])

        if (!isUsed) {
            let icon = document.createElement("i");
            icon.classList.add("fa-solid");
            icon.classList.add("fa-6x");

            if (isCirclePlayerTurn) {
                icon.classList.add("fa-o");
                // keep track of what is inside of the grid (o being placed)
                oneGrid.classList.add("o")
            } else {
                icon.classList.add("fa-x");
                oneGrid.classList.add("x")
            }
            // Once icon is made - place in the grid
            oneGrid.appendChild(icon);
            
            // Set grid to used (add used class)
            oneGrid.classList.add("used")

            

            if(currentPlayerWins()){
                if(isCirclePlayerTurn){
                    console.log("Player 2 wins (o)")
                    playerTwoWins.innerText++
                    restartRequired = true;
                    while(restartRequired){}
                    // todo: prevent player from clicking anywhere else 

                } else{
                    console.log("Player 1 wins (x)")
                    playerOneWins.innerText++
                    restartRequired = true;
                    while(restartRequired){}
                    // todo: prevent player from clicking anywhere else 
                }   

            } else{
                // Now check if a draw
                if(isADraw()){
                    console.log("It's a Draw!!")
                }
                // Continue
            }

            // Switch turns
            isCirclePlayerTurn = !isCirclePlayerTurn;
            

            
        } else {
            console.log("This Grid is used")
        }
    });
}



function currentPlayerWins() {
    // grab all the indexes for the current player from gridList
    const currentPlayerPositions = grabCurrentPlayerPositions();
    console.log(currentPlayerPositions);
    //loop through winning combination
   return hasWinningCombination(currentPlayerPositions);
    // check if there is a winning combination from current player indexes
    // use indexOF.
    //If win console.log "Player ... wins"
    //Else console.log ("No winning combination")

} 

function grabCurrentPlayerPositions() {
    const playerPositions = [];
    let iconToLookFor;
    if (isCirclePlayerTurn) {
        iconToLookFor = "o"
    } else { 
        iconToLookFor = "x"
    }

    for(let position = 0; position < gridList.length; position++){
        if( gridList[position].classList[1] === iconToLookFor){
            playerPositions.push(position)
        }
    }

    return playerPositions;
}

function hasWinningCombination(currentPlayerPositions){
    for (const oneCombo of WINNINGCOMBINATIONS) {
        if(currentPlayerPositions.includes(oneCombo[0]) && currentPlayerPositions.includes(oneCombo[1]) && currentPlayerPositions.includes(oneCombo[2])){ 
            console.log("Winning combination found!")
            return true;
        }
    }
    // Never finds winning combo (i.e never )
    return false;
}


function isADraw() {
  for (const oneGrid of gridList) {
    if (oneGrid.classList[2] != "used") {
        // Found an empty spot
        return false;
    }
  }
  // All spaces occupied
  return true;
}

const restartButton = document.querySelector(".restart-button");




function handleRestartButtonClick () {
    console.log(gridList);
    console.log("restart button clicked");
    for (const oneGrid of gridList) {
        oneGrid.classList.remove('used')
        oneGrid.classList.remove('x')
        oneGrid.classList.remove('o')
        if (oneGrid.firstElementChild) {
            oneGrid.firstElementChild.remove()
        }
        isCirclePlayerTurn = false;
    }
    restartRequired = false;
}

restartButton.addEventListener("click", handleRestartButtonClick);


// Player name
const form = document.getElementById('playerOneDetails');
const playerOneInput = document.getElementById('playerOneName');

function updatePlayerOneName () {
    console.log(form.elements['playerOneName'].value);
    // Can set player One Name here!!
}

playerOneInput.addEventListener("input", updatePlayerOneName);
