input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let timer = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 3)
let enemy = game.createSprite(randint(0, 5), 0)
enemy.turn(Direction.Right, 90)
basic.forever(function () {
    timer += 1
    if (timer == 10) {
        timer = 0
        enemy.move(1)
    }
    if (enemy.get(LedSpriteProperty.Y) == 4) {
        enemy.set(LedSpriteProperty.X, randint(0, 5))
        enemy.set(LedSpriteProperty.Y, 0)
    }
    if (enemy.isTouching(sprite)) {
        game.gameOver()
    }
})
