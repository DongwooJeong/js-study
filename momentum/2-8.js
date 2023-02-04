function sayHello(nameOfPerson){
    console.log(nameOfPerson);
}

sayHello("dw");
sayHello("dongs");

function sayHello2(nameOfPerson, age){
    console.log("Hello my name is "+ nameOfPerson + " and I'm " + age);
}

sayHello2("dw", 10);
sayHello2("dongs", 11);

function plus(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a / b);
}

plus(8,60);
divide(98,20);

const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("Hello "+ otherPersonsName + " Nice to meet you");
    },
}

console.log(player.name);
player.sayHello("lynn");