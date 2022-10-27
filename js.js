const container = document.querySelector('.container')

function createDivs(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (row * cols); i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

createDivs(rows, cols);