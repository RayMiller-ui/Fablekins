class DirectionInput {
    constructor(config){

        // this.map[e.code] store karega -> "up" store karega "ArrowUp" nahi
        this.keyPresses = [];

        // Key Mapping
        this.map = {
            "ArrowDown"  :"down",
            "ArrowUp"    :"up",
            "ArrowLeft"  :"left",
            "ArrowRight" :"right",

               "KeyS"    :"down",
               "KeyW"    :"up",
               "KeyA"    :"left",
               "KeyD"    :"right"
        }
    }

    // Person object ko latest key press chahiye to determine ki chalna kidhar hai 
    // Ye latest element of array keyPresses return kar-dega when called -> BAS...
    // Because init() ke paas hi saare listeners hai jo array modify karenge according to key pressed
    get direction() {
        return this.keyPresses[0];
    }

    
    // Saara ka saara keyPresses array handling idhar hi hoga 
    init() {

        // Key Dabega toh, Array me wo key sabse aage add hoga

        document.addEventListener("keydown", e => {
            console.log (e.code);        // [Jo daba wo dikhado] -> console me, jo key daba
            const dir = this.map[e.code];

            // (dir && this.keyPresses.indexOf(dir) === -1) Ye zahar nahi chahiye jeevan me    
            // Toh, agar koi nayi key dabi, jo VALID hai BUT keyPresses array me nahi hai -> Kardo array me add bhai
            if (dir && !this.keyPresses.includes(dir)){
                this.keyPresses.unshift(dir);
                console.log(this.keyPresses); // Latest array dikhaega -> console me, debugging....🤨
            }
        })
        

        // Key release karega toh -> keyPresses Array ke latest element ko clear karenge 

        document.addEventListener("keyup", e => {
            const dir = this.map[e.code];

            // Andar mereko index ki exact value chahiye for splice method      
            const index = this.keyPresses.indexOf(dir);
            if (index >-1){  // Valid index meaning -> if valid key pressed
                this.keyPresses.splice(index, 1);
                console.log(this.keyPresses); // Latest array dikhaega -> console me
            }
        })
    }
}