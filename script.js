const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const inputColor = document.querySelector(".input__color")
const tools = document.querySelectorAll(".tool")
const sizeButtons = document.querySelector(".button__size")
const buttonClear = document.querySelector(".button__clear")

let brushSize = 20

ctx.fillStyle = "#000"

let isPainting = false

canvas.addEventListener("mousedown", ({ clientX, clientY }) => {
    draw(clientX, clientY)
    isPainting = true
})

canvas.addEventListener("mousemove", ({ clientX, clientY }) => {
    if (isPainting) {
        draw(clientX, clientY)
    }
})

canvas.addEventListener("mouseup", ({ clientX, clientY }) => {
    isPainting = false
})

const draw = (x, y) => {
    ctx.beginPath()
    ctx.arc(x-canvas.offsetLeft, y- canvas.offsetTop, brushSize / 2, 0, 2 * Math.PI) 
    ctx.fill() 
}

