var f1 = function() {
    this.name = "Adhithya";

    this.obj = {
        name: "Pradeep",
        fn: function() {
            console.log("Name:", this.name);
        },
        arrowFn: () => {
            console.log("Name:", this);
        }
    }
    //return this;
}

const a = {
    f: f1
}

console.log(a.f());
//console.log(new f1());

var test = new f1();
console.log(test.obj.fn())
console.log(test.obj.arrowFn())