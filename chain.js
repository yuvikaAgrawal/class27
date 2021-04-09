class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }
       this.chain= Constraint.create(options);
       World.add(world,this.chain);

    }
    display(){
        var pos1=this.chain.bodyA.position
        var pos2=this.chain.bodyB.position
        strokeWeight(4);
        line(pos1.x,pos1.y,pos2.x,pos2.y)
    }
}