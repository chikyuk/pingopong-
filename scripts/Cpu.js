class Cpu{ 
    constructor(c, bola){
        this.c = c;
        this.bola = bola;
        this.largura = 20;
        this.altura = 100;
        this.x=(this.c.canvas.width - this.largura - 80);
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;
        this.inicioX = this.x;
        this.inicioY = this.y;
        this.meioY = Math.random() * this.altura;

        this.padImage = new Image ();
        this.padImage.width = 100;
        this.padImage.height = 100;
        this.padImage.src = "assets/estrela.webp"
        this.padImage.addEventListener('load',() =>{

        });
        

    }
    management() // o pad cpu se mexe caso a bola esteja na metade do campo da CPU e vindo em direção a ela
    {
        if ((this.bola.dirX > 0) && (this.bola.x > (this.c.canvas.width/2)))
        {
            if (this.bola.y + (this.bola.altura/2) > (this.y+this.meioY))
                this.y += this.vel;
            if (this.bola.y + (this.bola.altura/2) < (this.y+this.meioY))
                this.y -= this.vel;
        }
        else
        {
            if (this.y > this.inicioY){
                this.y -= this.vel
            }
            if (this.y < this.inicioY){
                this.y += this.vel
            }

        }
        //colisão
        if ((this.x <= this.bola.x + this.bola.largura) && (this.x + this.largura >= this.bola.x)
            && ((this.y + this.altura >= this.bola.y) && (this.y <= this.bola.altura+ this.bola.y)))
            {
                this.bola.dirX = -1;
                this.bola.dirY = ((this.bola.y + (this.bola.altura/2))-(this.y +(this.altura/2)))/16;
                this.meioY = Math.random() * this.altura;
            }

    }
    draw(){
        this.management();
        this.c.drawImage(this.padImage, this.x, this.y,this.padImage.width, this.padImage.height)
    }
   
}






