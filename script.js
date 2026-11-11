nn.on('load', () =>  {
      //scene
  kaplay({
    focus: false,
    background: [255, 0, 255]
    
  })
  setGravity(10)
  setGravityDirection(vec2(2, -1))
  
  const sprite1 = add([
    circle(60),
    pos(100, 100),
    area(),
    color( 100, 200, 255),
    move(20, 30),
    "sprite1"
  ])
  loadBean();
  
  const bean = add([
    sprite("bean"),
    pos(50, 500),
    scale(4),
    area(),
    body(),
    "bean"
  ])
  
  loadSprite("btfly", "assets/btfly.png")
  const bfly = add([
    sprite("btfly"),
    "bfly"
  ])
  
  const label = make([
    rect(400, 200),
    pos(400, 500),
    color(BLACK),
    rotate(90),
    anchor("center")
  ]);
  
  label.add([
    text("Hello World!")]);
  add(label)


loadSprite("cat", "assets/kat.png")
const cat = add([
  sprite('cat'),
  pos(200, 300),
  area()
])

loadSprite("green", "assets/B_Potion.png",{
  sliceX: 2,
  sliceY: 3,
  anims: {
    idle: {
      from:0, 
      to: 4,
      
    }
  }
  
});
  
const green = add([
  sprite('green'),
  pos(200, 100),
  scale(5),
  area(),
  body({
    isStatic:true
  })
])

 /** drawSprite({ 
  sprite:"green", 
  pos:vec(100, 200),
  anim: "idle",
  frame: 0, 
  
}) **/

green.onAnimEnd((anim) => {
    if (anim === "idle") {
    green.play("idle")
    }
  });
      green.play("idle")
  
  loadMusic("bg", "assets/bgmusic.wav");
  loadSound("beanV", "assets/bean_voice.wav");
  
  add([
    text("oh [blue]hi[/blue]", {
      size: 48, 
      width: 300, 
      font: "sans_serif",
      styles: {
        "blue": {
          color: rgb(0, 110, 255),
        }
      }
    }),
    color(0, 255, 0),
    pos(200, 600),
  ])
  
  loop(0.5, () => {const bfly=
              add([ sprite("btfly"),
                  pos(rand(vec2(0), vec2(width(), height()))),
    ])
    wait(2, () => {
      destroy(bfly);
  })
  
  }
              
              )
  
  
  //controller
  onKeyDown('right', () => {
    cat.move(50,0)
  })
    onKeyDown('left', () => {
    cat.move(-50,0)
  })
    onKeyDown('up', () => {
    cat.move(0,-50)
  })
    onKeyDown('down', () => {
    cat.move(0,50)
  })
  
  
  //area
  cat.onCollide("bean", () => {
    destroy(cat)
  })
   //play music
  onKeyPress("right", () => {
    play("beanV", {
      volume:0.25,
      pan:1.0
    })
  })
  
    onKeyPress("left", () => {
    play("beanV", {
      volume:0.25,
      pan:-1.0
    })
  })

  let bgPlaying = null;
      onMousePress(() => {
        if (!bgPlaying) {
          bgPlaying = play("bg",
            {
            loop: true,
            volume: 0.25, 
          });
          return;
        }
        if (bgPlaying.paused) {
          bgPlaying.play();
        }
        else {
          bgPlaying.paused = true;
        }
      })
  
  //physics
  add([
    pos(0, 800),
    rect(500, 400),
    color(BLUE),
    opacity(0.5),
    area(),
    buoyancyEffector({
      surfaceLevel: 200,
      density: 6,
      flowAngle: 45, 
    })
  ])
})