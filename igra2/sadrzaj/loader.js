export const load={
    fontovi:()=>
    {
        loadFont("Round","./asseti/Round9x13.ttf")
    },
    asseti:()=>{
        loadSprite("gore","./asseti/Arrow_Up_Key_Dark.png")
        loadSprite("dole","./asseti/Arrow_Down_Key_Dark.png")
        loadSprite("lijevo","./asseti/Arrow_Left_Key_Dark.png")
        loadSprite("desno","./asseti/Arrow_Right_Key_Dark.png")
        loadSprite("space","./asseti/Space_Key_Dark.png")
        loadSprite("sumapozadina","./asseti/Forest_Background_0.png")
        loadSprite("logo","./asseti/Logo.png")
        loadSprite("bridge","./asseti/Bridge.png")
        loadSprite("coin","./asseti/Coin.png")
        loadSprite("trava-tileset","./asseti/Grass_Tileset.png", {
        sliceX: 3,
        sliceY: 4,
        anims:{
            tl: 0,
            tm: 1,
            tr: 2,
            ml: 3,
            mm: 4,
            mr: 5,
            bl: 6,
            bm: 7,
            br: 8

        }     
        }),
        loadSprite("trava-oneway-tileset", "./asseti/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              bl: 6,
              bm: 7,
              br: 8,
            }
          })
          loadSprite("voda", "./asseti/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
              talas: {
                from: 0,
                to: 7,
                speed: 16,
                loop: true,
              },
            },
          })
          loadSprite("player", "./asseti/Player.png", {
            sliceX: 4,
            sliceY: 6,
            anims: {
              idle: {
                from: 0,
                to: 3,
                loop: true,
              },
              run: {
                from: 4,
                to: 7,
                loop: true,
              },
              "jump-up": 8,
              "jump-down": 9,
            },
          })
    },
    zvukovi:()=>{
        loadSound("potvrdaKI","./zvukovi/confirm-ui.wav")
    }
}