input.onButtonPressed(Button.A, function () {
    Lilo.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Lilo.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    Lilo.move(1)
})
let Lilo: game.LedSprite = null
Lilo = game.createSprite(2, 2)
