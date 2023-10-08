let drawingInProgress = false
let cellClicked = false

function drawLine(cell) {
    let originalBackgroundColor

    cell.addEventListener('mouseenter', () => {
        originalBackgroundColor = getComputedStyle(cell).backgroundColor

        cell.style.backgroundColor = getSelectedColor()
    })

    cell.addEventListener('mousedown', () => {
        drawingInProgress = true
        cellClicked = true
    })

    cell.addEventListener('mouseover', () => {
        if (drawingInProgress) {
            paintCell(cell)
        }
    })

    cell.addEventListener('mouseup', () => {
        drawingInProgress = false
    })

    cell.addEventListener('mouseleave', () => {
        if (cellClicked === false) {
            cell.style.backgroundColor = originalBackgroundColor
        }
        cellClicked = false
    })
}
