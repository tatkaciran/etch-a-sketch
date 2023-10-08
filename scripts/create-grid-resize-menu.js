function createGridResizeMenu() {
    const gridSizes = [8, 16, 32, 64, 100]
    const gridResizeButtons = document.querySelector(
        'select#grid-resize-buttons'
    )

    for (const size of gridSizes) {
        const option = document.createElement('option')
        option.innerHTML = `${size} X ${size}`
        option.value = size
        gridResizeButtons.appendChild(option)
    }

    gridResizeButtons.addEventListener('change', function () {
        const selectedSize = gridResizeButtons.value

        createGrid(selectedSize)
    })
}