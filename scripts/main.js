let selectedColor = 'rgb(0, 0, 255)'
const changeSelectedColor = color => (selectedColor = color)
const getSelectedColor = () => selectedColor

function main() {
    createGrid()
    creatColorPalette()
    createGridResizeMenu()
}

main()
