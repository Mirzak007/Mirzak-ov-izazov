class KImenadzer{
    prikazisvjetlecuKIPoruku(content,position)
    {
        const poruka=add([text(content,{
            size:24,
            font:"Round"
        }),
        area(),
        anchor("center"),
        pos(position),
        opacity(),
        state("svijetli", ["svijetli", "nesvijetli"])

    ])
    poruka.onStateEnter("svijetli", async()=>{
        await tween(
        poruka.opacity,
        0,
        0.5,
        (noviopacity)=>poruka.opacity=noviopacity,
        easings.linear
    )
    poruka.enterState("nesvijetli")
    })

    poruka.onStateEnter("nesvijetli", async()=>{
        await tween(
        poruka.opacity,
        1,
        0.5,
        (noviopacity)=>poruka.opacity=noviopacity,
        easings.linear
    )
    poruka.enterState("svijetli")
    })
    }

    prikaziglavnimeni()
    {
        add([sprite("sumapozadina"),scale(4)])
        add([sprite("logo"),
        area(),
        anchor("center"),
        pos(center().x, center().y-180),
        scale(4)])
    
        this.prikazisvjetlecuKIPoruku(
        
            "Pritisni [Enter] da zapocnes igru",
            vec2(center().x,center().y+270)
        )

        onKeyPress("enter", ()=>{
            play("potvrdaKI" , { speed:1.5})
            go("controls")
        })
    }
    prikazimenizakontrola()
    {
        add([sprite("sumapozadina"),
        scale(4)
    ])
    add([
        text("Kontrole", { font:"Round",size:50}),
        area(),
        anchor("center"),
        pos(center().x-10, center().y-200)
    ])
    const dugmadzakontrole=add([pos(center().x+30,center().y)])
    dugmadzakontrole.add([sprite("gore"),pos(0, -80)])
    dugmadzakontrole.add([sprite("dole")])
    dugmadzakontrole.add([sprite("lijevo"), pos(-80, 0)])
    dugmadzakontrole.add([sprite("desno"), pos(80, 0)])
    dugmadzakontrole.add([text("Kretanje", { font:"Round",size:28}),pos(-20, 100)])
    dugmadzakontrole.add([sprite("space"), pos(-245, 0)])
    dugmadzakontrole.add([text("Skakanje", { font:"Round",size:28}),pos(-265, 100)])
    this.prikazisvjetlecuKIPoruku(
        "Pritisni [Enter] da zapocnes igru",
        vec2(center().x, center().y + 270)
    )
    onKeyPress("enter", () => {
        play("potvrdaKI", { speed: 1.5 })
        go(1)
      })
}
   
}

export const kimenadzer=new KImenadzer()