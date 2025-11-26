class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowersrc;

        this.upperImage = new Image();
        this.upperImage.src = config.uppersrc;
    }

    drawLowerImg(ctx, CameraPerson){
        ctx.drawImage(this.lowerImage, Utilities.withGrid(10.5) - CameraPerson.x, Utilities.withGrid(6) - CameraPerson.y);
    }

    drawUpperImg(ctx, CameraPerson){
        ctx.drawImage(this.upperImage, Utilities.withGrid(10.5) - CameraPerson.x, Utilities.withGrid(6) - CameraPerson.y)
    }
}


    // Accesible anywhere, dependencies complete honi chahiye bas
    // This defines all the maps in the scene
    // [Pata nahi kya hoga future me iska -> But working 👍]
    
    window.OverworldMaps = {

        // FUTURE PLANS

        // DemoRoom: {
        //     lowersrc: "/images/maps/DemoLower.png",
        //     uppersrc: "/images/maps/DemoUpper.png",
        //     gameObjects:{
        //         hero: new Person({
        //             x:Utilities.withGrid(5),
        //             y:Utilities.withGrid(6),
        //             useShadow:true,
        //         }),
        //         npc1: new Person({
        //             x:Utilities.withGrid(7),
        //             y:Utilities.withGrid(8),
        //             src:"/images/characters/people/npc1.png",
        //         })
        //     }
        // },

        // Kitchen: {
        //     lowersrc: "/images/maps/KitchenLower.png",
        //     uppersrc: "/images/maps/KitchenUpper.png",
        //     gameObjects:{
        //         hero: new Person({
        //             x:Utilities.withGrid(5),
        //             y:Utilities.withGrid(6),
        //             isPlayerControlled:true,
        //         }),
        //         npc1: new Person({
        //             x:Utilities.withGrid(7),
        //             y:Utilities.withGrid(8),
        //             src:"/images/characters/people/npc1.png",
        //         })
        //     }
        // },

        NorthStreet: {
            lowersrc: "/images/maps/TestWalkingMapLower.png",
            uppersrc: "/images/maps/TestWalkingMapUpper.png",
            gameObjects:{
                hero: new Person({
                    x:Utilities.withGrid(5),
                    y:Utilities.withGrid(6),
                    src:"/images/characters/people/HQ.png",
                    isPlayerControlled:true,
                }),
                npc: new Person({
                    x:Utilities.withGrid(3),
                    y:Utilities.withGrid(5),
                    src:"/images/characters/people/HQ.png",
                    isPlayerControlled:false,
                })
            }
        }

    }