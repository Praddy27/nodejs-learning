var myVar = 100;

function WhoIsThis() {
    var myVar= 200;

    console.log("myVar = " + myVar); // 200
    //console.log(this)
    console.log("this.myVar = " + this.myVar); // undefined, since 
}

//WhoIsThis();

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function(){
      console.log(this.firstName)
      return this;
    },
    myVar: 30,
    f1: WhoIsThis
};

const person2 = {
    firstName: "pradeep"
}

let test_fn = person.fullName.bind(person2);
console.log(person.firstName)
console.log(test_fn())

// let {id,b, ...c} = person;
// console.log(id,b,c);
// (function(){
//     var myVar = 3;
//     console.log(this.myVar)
//     console.log(myVar)
// })();

//console.log(person.fullName());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//Prototype