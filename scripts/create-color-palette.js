let isRandomColor = false
let isEraser = false

function creatColorPalette() {
    const colorDatas = [
        {
            name: 'black',
            value: 'rgb(0, 0, 0)',
        },
        {
            name: 'white',
            value: 'rgb(255, 255, 255)',
        },
        {
            name: 'red',
            value: 'rgb(255, 0, 0)',
        },
        {
            name: 'blue',
            value: 'rgb(0, 0, 255)',
        },
        {
            name: 'green',
            value: 'rgb(0, 255, 0)',
        },
        {
            name: 'yellow',
            value: 'rgb(255, 255, 0)',
        },
        {
            name: 'orange',
            value: 'rgb(255, 165, 0)',
        },
        {
            name: 'pink',
            value: 'rgb(255, 192, 203)',
        },
        {
            name: 'purple',
            value: 'rgb(128, 0, 128)',
        },
        {
            name: 'random',
            value: 'rgb(155, 65, 0)',
        },
        {
            name: 'eraser',
            value: 'rgb(255, 255, 255)',
        },
    ]

    const showCurrentColor = color => {
        const currentColor = document.querySelector('.current-color')

        currentColor.innerText =
            color.name === 'random' || color.name === 'eraser' ? color.name : ''

        currentColor.style.backgroundColor = color.value
    }

    let isToolButtons = false
    const selectColorButtons = document.querySelector('.color-palette-buttons')
    const otherButtons = document.querySelector('.other-buttons')

    function createColorButton(color) {
        const button = document.createElement('button')
        button.classList.add('color-btn')
        button.alt = color.name
        button.style.backgroundColor = color.name

        if (color.name === 'random' || color.name === 'eraser') {
            isToolButtons = true
            button.classList.add(color.name)
            button.innerHTML = color.name
        }

        button.addEventListener('click', () => {
            if (color.name === 'random') {
                isRandomColor = true
            } else {
                isRandomColor = false
            }

            if (color.name === 'eraser') {
                isEraser = true
            } else {
                isEraser = false
            }

            showCurrentColor(color)
            changeSelectedColor(color.value)
        })

        return button
    }

    colorDatas.forEach(color => {
        const button = createColorButton(color)

        if (isToolButtons) {
            otherButtons.appendChild(button)
        } else {
            selectColorButtons.appendChild(button)
        }
    })
}
