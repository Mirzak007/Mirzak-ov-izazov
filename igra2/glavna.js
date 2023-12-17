import { Igrac } from "./entiteti/Igrac.js"
import { level1raspored,level1mapping } from "./glavnisadrzaj/Level1/level1raspored.js"
import kaboom from "./library/kaboom.mjs"
import { kimenadzer } from "./sadrzaj/KImenadzer.js"
import { Kamera } from "./sadrzaj/Kamera.js"
import { Level } from "./sadrzaj/Level.js"
import { load } from "./sadrzaj/loader.js"
kaboom({
    width: 1280,
    height: 720,
    letterbox: true,
    debug: false,
  })
load.fontovi()
load.zvukovi()
load.asseti()

const scenes={
    meni:()=>{
      kimenadzer.prikaziglavnimeni()
    },
    controls:()=>{
        kimenadzer.prikazimenizakontrola()
    },
    1: () => {
        const Level1=new Level()
        Level1.drawBackground("sumapozadina")
        Level1.drawMapLayout(level1raspored, level1mapping)
        const igrac=new Igrac()
        {
            1500,
            100,
            400,
            650,
            3,
            1,
            false
        }
       
        Level1.drawWaves("voda", "talas")
        
    },
    2: () => {

    },
    3: () => {

    },
    gameover:()=>{

    },
    end:()=>{

    }
    
}
for(const key in scenes)
{
    scene(key,scenes[key])
}

go("meni")
