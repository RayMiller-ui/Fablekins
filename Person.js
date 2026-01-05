class Person extends GameObject{
    constructor(config){
        super(config);
        this.remainingMovement = 0;

        this.isPlayerControlled = config.isPlayerControlled ?? false;

        this.directionUpdate = {
            "up"   :["y", -1],
            "down" :["y", 1],
            "right":["x", 1],
            "left" :["x",-1]
        }

        this.baseSpeed = 144;     // movement speed
        this.speed = 144;

         
    }


    // BELOW FUNCTIONS ARE CALLED DIRECTLY INSIDE update() PRESENT HERE.
    // THESE FUNCTIONS NEVER USED OUTSIDE THIS SCRIFT FILE 

    // Character position updates
    updatePosition(deltaTime) {
        //const speed = 144; // pixels per second
        const speed = this.speed;

        const [axis, change] = this.directionUpdate[this.direction];
      
        const movement = Math.min(
          speed * deltaTime,
          this.remainingMovement
        );
      
        this[axis] += change * movement;
        this.remainingMovement -= movement;

        // Snap exactly to tile at the end
        if (this.remainingMovement <= 0) {
          this.x = this.targetX;
          this.y = this.targetY;
          this.remainingMovement = 0;
        }

      }
      

    // Sprite sheet animation updates
    updateSprite(state){

        const speedRatio = this.speed / this.baseSpeed;

        // Lower animationSpeed = faster animation
        this.sprite.animationSpeed = Math.max(4, Math.round(16 / speedRatio));

        // Case when character want to stop
        if (this.isPlayerControlled && this.remainingMovement === 0 && !state.pressedKey){
            this.sprite.setAnimation("idle-"+this.direction);
            return;
        }

        if (this.remainingMovement > 0){
            this.sprite.setAnimation("walk-"+this.direction);
        }
    }

    startBehaviour(state, behaviour){

        // Sets the direction coming from whatever direction [method] passed in behaviour parameter [object]
        this.direction = behaviour.direction;

        if (behaviour.type === "walk"){
            //console.log(state.map.isSpaceTaken(this.x, this.y, this.direction));
            const { x, y } = Utilities.upcomingPosition(this.x, this.y, this.direction);

            if (state.map.walls[`${x}, ${y}`]) {
                return;
            }

            this.remainingMovement = 16;
            this.targetX = x;
            this.targetY = y;

        }
    }

    // EVERY PERSON UPDATE HAPPENS HERE 
    // THIS WILL BE USED IN OVERWORLD TO UPDATE THE PERSON'S STATE
    update(state) {
        if (this.remainingMovement > 0){
            this.updatePosition(state.deltaTime || 0);
          }
          
        this.updateSprite(state);

        if (this.isPlayerControlled && this.remainingMovement === 0 && state.pressedKey){ 
            this.startBehaviour(state, {
                type: "walk",
                direction: state.pressedKey,
            })
        }
    }

    
   
}