class Sand {
    constructor(x,y){
        options = {
            restitution : 1.3,
            friction : 5,
            density : 1
        }
        this.body = Bodies.rtectangle(x,y,30,60);
        this.width = 30;
        this.height = 60; 
    }
    display(){
    
    }
    }