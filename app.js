console.log("JS is working")

// Boolean to determine who's turn it is - start with player 1 - X
let isCirclePlayer = false;

const gridList = document.querySelectorAll(".grid");


for(let i =0; i < gridList.length; i++){
    addGridIconEventListener(gridList[i])
}

function addGridIconEventListener (oneGrid){ // Named function to hoist to the top
    oneGrid.addEventListener('click', () => {
        console.log("clicked on grid")
        let icon = document.createElement('i');
        icon.classList.add("fa-solid");
        icon.classList.add("fa-6x");

        if(isCirclePlayer){
            icon.classList.add("fa-o");
        } else{
            icon.classList.add("fa-x");
        }
        // Once icon is made - place in the grid
        oneGrid.appendChild(icon);
        // Switch turns
        isCirclePlayer = !isCirclePlayer;
    })
}