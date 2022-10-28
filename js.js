const container = document.querySelector('.container')

function createDivs(rows, cols) {
    // container.style.setProperty('--grid-rows', rows);
    // container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

createDivs(16, 16);

const squares = document.querySelectorAll('.square')

squares.forEach(function(square) {
    square.addEventListener('click', function changeColor(e) {
        square.style.backgroundColor = 'black';
    })
});