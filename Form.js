class Form{
    constructor(){
        this.button = createButton("PLAY");
        this.input = createInput("");
        this.saludo = createElement("h3");
        this.encabezado = createElement("h1");
        this.nombre = createElement("h3");
        this.reset = createButton("Reset");
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.saludo.hide();
        this.encabezado.hide();
        this.nombre.hide();
    }
    display(){
        background(bg);

        this.encabezado.html("Juego de carreras de autos");
        this.nombre.html("Escribe tu nombre aquí");

        this.encabezado.position(width/2-190,75);
        this.nombre.position(width/2-105,260);
        this.input.position(width/2-100,displayHeight/2-80);
        this.button.position(width/2-35,displayHeight/2);
        this.reset.position(width-100,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            //console.log(playerCount);
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.saludo.html("Hola "+player.name);
            this.saludo.position(displayWidth/2-80,displayHeight/4);
        });
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0);
            location.reload();
        });
    }
}