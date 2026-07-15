let container = document.getElementById("container");
let currentcolor = "black";

document.querySelectorAll('.boxbutt button').forEach(btn => {
    btn.addEventListener('click', () =>{
        currentcolor = btn.id
    });
});

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
            square.addEventListener("mouseover", () =>{
                square.style.backgroundColor = currentcolor;
            });
            row.appendChild(square);
        }
    }
}
function getGridSize() {
    let size;

    do {
        size = Number(prompt("Enter grid size (1-100):"));
    } while (size < 1 || size > 100 || isNaN(size));

    container.innerHTML = "";
    makegrid(size, size);
}
document.getElementById("resizeBtn").addEventListener("click", getGridSize);

makegrid(16,16);