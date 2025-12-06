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
         
    }


    // BELOW FUNCTIONS ARE CALLED DIRECTLY INSIDE update() PRESENT HERE.
    // THESE FUNCTIONS NEVER USED OUTSIDE THIS SCRIFT FILE 

    // Character position updates
    updatePosition () {
            const [axis, change] = this.directionUpdate[this.direction];
            //console.log ([axis, change]);
            this[axis] += change;
            this.remainingMovement -= 1;
    }

    // Sprite sheet animation updates
    updateSprite(state){

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
            if (state.map.isSpaceTaken(this.x, this.y, this.direction)){
                return;
            }
            this.remainingMovement = 16;
        }
    }

    // EVERY PERSON UPDATE HAPPENS HERE 
    // THIS WILL BE USED IN OVERWORLD TO UPDATE THE PERSON'S STATE
    update(state) {
        if (this.remainingMovement > 0){
            this.updatePosition();
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