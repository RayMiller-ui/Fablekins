class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects;

        this.walls = config.walls;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowersrc;

        this.upperImage = new Image();
        this.upperImage.src = config.uppersrc;

        // DOT SYSTEM
        this.totalDots = 30;
        this.dotsCollected = 0;
        this.activeDot = null;
    }

    drawLowerImg(ctx, CameraPerson){
        ctx.drawImage(this.lowerImage, 
            Utilities.withGrid(10.5) - CameraPerson.x, 
            Utilities.withGrid(6) - CameraPerson.y
        );
    }

    drawUpperImg(ctx, CameraPerson){
        ctx.drawImage(this.upperImage, 
            Utilities.withGrid(10.5) - CameraPerson.x, 
            Utilities.withGrid(6) - CameraPerson.y
        );
    }

    isSpaceTaken(currentX, currentY, direction){
        const {x,y} = Utilities.upcomingPosition(currentX, currentY, direction);
        return this.walls[`${x}, ${y}`] ?? false;
    }

    // SPAWING MY LITTLE DOTS
    spawnDot() {
        if (this.dotsCollected >= this.totalDots) return;
      
        const x = Utilities.withGrid(
          Math.floor(Math.random() * 37) + 5
        );
        const y = Utilities.withGrid(
          Math.floor(Math.random() * 32) + 5
        );
      
        // Avoid spawning inside walls
        if (this.walls[`${x}, ${y}`]) { //[Utilities.asGridCords(39,2)] this format
          this.spawnDot();
          return;
        }
      
        this.activeDot = new Dot({
          x,
          y,
          src: "/images/dot.png", // red dot image
        });
      
        this.gameObjects.dot = this.activeDot;

        // Debug
        console.log(`Dot spawned at ${x / 16}, ${y / 16}`)
      }

      // MY LITTLE DOTS ARE CONSUMED
      removeDot(dot) {
        delete this.gameObjects.dot;
        this.activeDot = null;
      
        this.dotsCollected++;
      
        updateDotCounter(this.dotsCollected, this.totalDots);
      
        if (this.dotsCollected === this.totalDots) {
          showWinMessage();
        } else {
          this.spawnDot();
        }
      }
      
      
}


    // Accesible anywhere, dependencies complete honi chahiye bas
    // This defines all the maps in the scene
    // [Pata nahi kya hoga future me iska -> But working 👍]
    
    window.OverworldMaps = {

        NorthStreet: {
            lowersrc: "/images/maps/DemoMap_03.jpeg",
            uppersrc: "/images/maps/DemoMap_Upper_04.jpeg",
            gameObjects:{
                hero: new Person({
                    x:Utilities.withGrid(15),
                    y:Utilities.withGrid(13),
                    src:"/images/characters/people/HQ.png",
                    isPlayerControlled:true,
                }),
                npc: new Person({
                    x:Utilities.withGrid(32),
                    y:Utilities.withGrid(3),
                    src:"/images/characters/people/HQ.png",
                    isPlayerControlled:false,
                })   

            },

            //Collision Location Inputs
            walls: Colliders.Forest
        }

    }