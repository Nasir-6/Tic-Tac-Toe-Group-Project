console.log("JS is working")


// Boolean to determine who's turn it is - start with player 1 - X
let isCirclePlayer = false;

const gridList = document.querySelectorAll(".grid");
const WINNINGCOMBINAITONS = [
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
            console.log("Setting Grid Icon");
            let icon = document.createElement("i");
            icon.classList.add("fa-solid");
            icon.classList.add("fa-6x");

            if (isCirclePlayer) {
                icon.classList.add("fa-o");
                // keep track of what is inside of the grid (o being placed)
                oneGrid.classList.add("o")
            } else {
                icon.classList.add("fa-x");
                oneGrid.classList.add("x")
            }
            // Once icon is made - place in the grid
            oneGrid.appendChild(icon);

            checkIfCurrentPlayerWin();

            // Switch turns
            isCirclePlayer = !isCirclePlayer;

            // Set grid to used (add used class)
            oneGrid.classList.add("used")
        } else {
            console.log("This Grid is used")
        }
    });
}

function grabCurrentPlayerPositions() {
    const playerPositions = [];
    let iconToLookFor;
    if (isCirclePlayer) {
        iconToLookFor = "o"
    } else { 
        iconToLookFor = "x"
    }

    for(let index = 0; index < gridList.length; index++){
        let oneGrid = gridList[index];
        if( oneGrid.classList[1] === iconToLookFor){
            playerPositions.push(index)
        }
    }
    return playerPositions;
}


function checkIfCurrentPlayerWin() {
    // grab all the indexes for the current player from gridList
    const currentPlayerPositions = grabCurrentPlayerPositions();
    console.log(currentPlayerPositions);
    //loop through winning combination

    // check if there is a winning combination from current player indexes
    // use indexOF.
    //If win console.log "Player ... wins"
    //Else console.log ("No winning combination")

} 