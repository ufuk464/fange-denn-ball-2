input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Korb.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Korb.change(LedSpriteProperty.X, 1)
})
let Ball = 0
let Korb: game.LedSprite = null
Korb = game.createSprite(2, 4)
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    Ball = 0
})
