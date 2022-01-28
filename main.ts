input.onButtonPressed(Button.A, function () {
    if (Lilo.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let Lilo: game.LedSprite = null
Lilo = game.createSprite(2, 2)
game.setScore(0)
basic.forever(function () {
    Lilo.move(1)
    Lilo.ifOnEdgeBounce()
    if (game.score() < 5) {
        basic.pause(700)
    } else if (game.score() >= 5 && game.score() < 10) {
        basic.pause(500)
    } else if (game.score() >= 10 && game.score() < 20) {
        basic.pause(400)
    } else {
        basic.pause(300)
    }
})
