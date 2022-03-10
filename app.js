console.log("JS is working")

const gridList = document.querySelectorAll(".grid");


for(let i =0; i < gridList.length; i++){
    addGridIcon(gridList[i])
}

function addGridIcon (oneGrid){ // Named function to hoist to the top
    oneGrid.addEventListener('click', () => {
        console.log("clicked on grid")
        let icon = document.createElement('i');
        icon.classList.add("fa-solid");
        icon.classList.add("fa-x");
        icon.classList.add("fa-6x");
        oneGrid.appendChild(icon);
    })
}