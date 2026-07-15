let container = document.getElementById("container");


function makegrid(rows, cols){
    makerows(rows,cols);
}

function makerows(rows,cols) {
    for(let i =0; i< rows; i++){
        let row =document.createElement("div");
        row.style.display ='flex';
        container.appendChild(row);
        for(let j = 0; j < cols ;j++){
            let square = document.createElement("div");
            square.classList.add("square")
            row.appendChild(square);
        }
    }
}
makegrid(16,16);
console.log("Grid created");