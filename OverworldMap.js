class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects;

        this.walls = config.walls;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowersrc;

        this.upperImage = new Image();
        this.upperImage.src = config.uppersrc;
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