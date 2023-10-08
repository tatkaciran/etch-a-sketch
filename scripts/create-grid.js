function createCell() {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    return cell
}

function createGrid(size = 8) {
    const grid = document.getElementById('grid')
    grid.innerHTML = ''
    grid.style = `
         display: grid;
         grid-template-columns: repeat(${size}, 1fr);
         grid-template-rows: repeat(${size}, 1fr);
         width: 560px;
         height: 560px;`
    for (let i = 0; i < size * size; i++) {
        const cell = createCell()
        grid.appendChild(cell)
    }
}
