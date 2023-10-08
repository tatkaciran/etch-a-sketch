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

    const selectColorButtons = document.querySelector('.color-palette-buttons')

    function createColorButton(color) {
        const button = document.createElement('button')
        button.classList.add('color-btn')
        button.alt = color.name
        button.style.backgroundColor = color.name

        button.addEventListener('click', () => {
            changeSelectedColor(color.value)
        })
        return button
    }

    colorDatas.forEach(color => {
        const button = createColorButton(color)

        selectColorButtons.appendChild(button)
    })
}
