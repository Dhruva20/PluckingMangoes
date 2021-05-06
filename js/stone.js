class Stone{
constructor(x,y,radius){
    var options = {
        isStatic : false,
        density: 1.2,
        friction : 1,
        restitution : 0
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("images/stone.png");
    this.body = Bodies.circle(x,y,radius/2,options);
    World.add(world,this.body);

}
display(){
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   imageMode(CENTER)
   image(this.image,0,0,this.radius,this.radius);
   pop();
   
}
}
