class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
   this.map = null; // Initialization pe define karenge isko
 }


  //Defining the game Loop

  startGameLoop(){
    const step = () => {

      //Clearing the canvas -> [Clears the whole canvar, har frame pe]
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //Camera focused character object
      const CameraPerson = this.map.gameObjects.hero;

      //Draws Lower image over the map -> [Layer 1]
      this.map.drawLowerImg(this.ctx, CameraPerson);

      //Updates everything before drawing 
      Object.values(this.map.gameObjects).forEach(e => {
        e.update({
          pressedKey: this.DirectionInput.direction,
        })
      })

      //Draws game objects -> [Main Object]
      Object.values(this.map.gameObjects).forEach(e => {
        //object.x += 1;
        e.update({
          pressedKey: this.DirectionInput.direction,
        })
        e.sprite.draw(this.ctx, CameraPerson);
      })

      //Draws Upper image over the map -> [Foreground, sabko cover karega]
      this.map.drawUpperImg(this.ctx, CameraPerson);

      requestAnimationFrame(() => {
        step();
      })

    }

    step();
  }


  //Starting the init ()

  init() {

    this.map = new OverworldMap(window.OverworldMaps.NorthStreet);

    this.DirectionInput = new DirectionInput();
    this.DirectionInput.init();
    this.startGameLoop();
    

  //---------------------------[OLD CODE -> HARDCODED]--------------------------------------//

  //-----------------------------------------------Background Image 

  // const image = new Image();
  // image.onload = () => {
  //   this.ctx.drawImage(image,0,0)
  // };
  // image.src = "/images/maps/DemoLower.png";

  //-----------------------------------------------Place some game objects

  // const hero = new GameObject({
  // x:5,
  // y:6,
  // useShadow:true,
  // })

  // const npc1 = new GameObject({
  // x:7,
  // y:8,
  // src:"/images/characters/people/npc1.png",
  // })

  //-----------------------------------------------Drawing these Game Objects

 }
}
