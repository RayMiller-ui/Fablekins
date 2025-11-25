class GameObject{
    constructor(config){
        this.x=config.x || 0;
        this.y=config.y || 0;

        //changes for directions 
        //hard-coded currently
        this.direction = config.direction ?? "down";
    
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "./images/characters/people/hero.png",
            useShadow: config.useShadow ?? true,
            animation: null,
            currentAnimation: null,
            currentAnimationFrame: null,
        })
    }

    update() {

    }
} 