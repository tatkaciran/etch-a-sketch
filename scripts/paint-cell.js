function paintCell(cell) {
    const white = 'rgb(255, 255, 255)'
    const selectedWhiteColor = getSelectedColor() === white

    function resetCountAttribute(cell) {
        cell.setAttribute('count', (0).toString())
    }

    function updateCountAttribute(cell) {
        let count = cell.getAttribute('count')

        if (count === null) {
            count = 0
        } else {
            count = parseInt(count)

            if (count < 9) {
                count += 1
            } else {
                count = 9
            }
        }

        cell.setAttribute('count', count.toString())
        return count
    }

    const getRandomColor = () => {
        const getRandomValue = () => {
            return Math.floor(Math.random() * 256)
        }

        let r = getRandomValue()
        let g = getRandomValue()
        let b = getRandomValue()

        return `rgb(${r},${g},${b})`
    }

    const addDarknessToColor = color => {
        const count = updateCountAttribute(cell)

        const addDarknessToValue = (val = 0) => {
            val -= count * (val * 0.1111112)
            console.log(val)
            return Math.min(Math.max(val, 0), 255)
        }

        const rgbMatch = color.match(/\d+/g)

        let red = parseInt(rgbMatch[0])
        let green = parseInt(rgbMatch[1])
        let blue = parseInt(rgbMatch[2])

        red = addDarknessToValue(red)
        green = addDarknessToValue(green)
        blue = addDarknessToValue(blue)

        return `rgb(${red},${green},${blue})`
    }

    const color = addDarknessToColor(
        isRandomColor ? getRandomColor() : getSelectedColor()
    )

    if (selectedWhiteColor) {
        resetCountAttribute(cell)
    }

    cell.style.backgroundColor = selectedWhiteColor ? white : color
}
