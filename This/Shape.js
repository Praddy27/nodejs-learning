class Shape{
    constructor(length, breath){
        this.length = length;
        this.breath = breath;
        this.obj = {
            length,breath
        }
        //this.arrowArea = this.arrowArea(this);
    }

    area(){
        return this.length * this.breath;
    }
}

s1 = new Shape(3,4);
console.log(s1.area());

//console.log(s1.arrowArea());
