const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const inputColor = document.querySelector(".input__color")
const tools = document.querySelectorAll(".tool")
const sizeButtons = document.querySelector(".button__size")
const buttonClear = document.querySelector(".button__clear")

let brushSize = 50

canvas.addEventListener("mousedown", (event) => { 
    const { clientX, clientY } = event
    draw(clientX, clientY)
})

const draw = (x, y) => {
    ctx.fillStyle = "#000"
    ctx.fillRect (x, y, brushSize, brushSize)
}

