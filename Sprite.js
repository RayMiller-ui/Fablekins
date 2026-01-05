class Sprite{
    constructor(config){

        //set up the image 
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //set up the shadow 
        this.shadow = new Image();
        this.useShadow = config.useShadow ?? true; 
        this.useFullImage = config.useFullImage ?? false;

  
        if (this.useShadow){
            this.shadow.src = config.shadowsrc ?? "/images/characters/shadow.png";
        }
        this.shadow.onload = () =>{
            this.isShadowLoaded = true;
        } 
            
        //confgure animation and initial state
        this.animations = config.animation ?? {

            // DEFAULT FRAME CYCLE 
            "idle-down": [[0,0]],
            "walk-down": [[1,0],[0,0],[3,0],[0,0]], // 2nd frame, 1st frame[same as 3rd], last frame then back to 1st frame for interpolation

            //"idle-up":  [[0,2]],
            //"walk-up": [[1,2],[0,2],[3,2],[0,2]], //new character
            "idle-right":  [[0,2]],
            "walk-right": [[1,2],[0,2],[3,2],[0,2]],

            // "idle-right":[[0,1]],
            //"walk-right": [[1,1],[0,1],[3,1],[0,1]], //new character
            "idle-left":[[0,1]],
            "walk-left": [[1,1],[0,1],[3,1],[0,1]],

            // "idle-left": [[0,3]],
            // "walk-left": [[1,3],[0,3],[3,3],[0,3]]
            "idle-up": [[0,3]],
            "walk-up": [[1,3],[0,3],[3,3],[0,3]] //new character

        } 

        this.currentAnimation = config.currentAnimation ?? "idle-down";  
        this.currentAnimationFrame = config.currentAnimationFrame ?? 0;
        this.animationSpeed = config.animationSpeed ?? 16; //Speed of a spritesheet animation [no. of game loops a frame needs to run.]
        this.animationFrameDuration = this.animationSpeed; //Duration of each frame 
        //this.tileSize = config.tileSize ?? 32;  // Not sure about this

        //Referencing game object
        this.gameObject = config.gameObject;

    }

    // This will give me the exact frame to show
    get frame(){
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(animation){

        // Restarting everything when aniimation updates
        if (this.currentAnimation != animation){
            this.currentAnimation = animation; // [== 😭]
            this.currentAnimationFrame = 0; 
            this.animationFrameDuration = this.animationSpeed; 
        }
    }


    // Will get called after each draw, So everything will feed dynamically each frame in get frame getter
    updateAnimationProgress(){

        //downticking animationFrameDuration 
        if (this.animationFrameDuration > 0){
            this.animationFrameDuration -=1;
            return;
        }

        //Resetting the FrameDuration
        this.animationFrameDuration = this.animationSpeed;
        this.currentAnimationFrame += 1;

        if (this.frame == undefined){
            this.currentAnimationFrame = 0;
        }
    }

    draw(ctx, CameraPerson) {
        const x = this.gameObject.x - 8 + Utilities.withGrid(10.5) - CameraPerson.x;
        const y = this.gameObject.y - 18 + Utilities.withGrid(6) - CameraPerson.y;
      
        // Draw shadow if enabled
        this.useShadow && this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
      
        // NORMAL ANIMATED MODE
        const [frameX, frameY] = this.frame;
      
        this.isLoaded && ctx.drawImage(
          this.image,
          frameX * 64,
          frameY * 64,
          64,
          64,
          x,
          y,
          32,
          32
        );
      
        this.updateAnimationProgress();
      }
      

    
}