const Utilities = {
    
    withGrid (n) {
        return n*16;
    },

    asGridCords(x,y){
        return `${x*16}, ${y*16}`;
    },

    // [I can't think of a better neame]
    upcomingPosition(initialX, initialY, direction){
        let x = initialX;
        let y = initialY;
        const size = 16;

        if (direction === "up"){
            y = y - size;
        }
        if (direction === "down"){
            y = y + size;
        }
        if (direction === "right"){
            x = x + size;
        }
        if (direction === "left"){
            x = x - size;
        }

        return {x, y};
    }
}