input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(attempts)
        game.gameOver()
    } else {
        attempts += -1
    }
})
input.onButtonPressed(Button.B, function () {
    speed += -50
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (game.isGameOver()) {
        if (attempts >= 90) {
            music.play(music.stringPlayable("G F G A - F E D ", 352), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.stringPlayable("B A G F D F D C ", 52), music.PlaybackMode.UntilDone)
        }
    } else {
        music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 348), music.PlaybackMode.UntilDone)
    }
})
let sprite: game.LedSprite = null
let attempts = 0
attempts = 100
let speed = 600
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(speed)
})
