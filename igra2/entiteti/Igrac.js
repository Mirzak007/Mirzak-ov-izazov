export class Igrac{
    constructor(
        posX,
        posY,
        speed,
        jumpForce,
        nbLives,
        currentLevelScene,
        isInTerminalScene
      ) {
        this.isInTerminalScene = isInTerminalScene
        this.currentLevelScene = currentLevelScene
        this.makePlayer(posX, posY)
        this.speed = speed
        this.jumpForce = jumpForce
        this.lives = nbLives
        this.previousHeight = this.gameObj.pos.y
      }
    
      makePlayer(x, y) {
        this.initialX = x
        this.initialY = y
        this.gameObj = add([
          sprite("player", { anim: "idle" }),
          area({ shape: new Rect(vec2(0, 3), 8, 8) }),
          anchor("center"),
          pos(x, y),
          scale(4),
          body(),
          "player",
        ])
      }
    
}