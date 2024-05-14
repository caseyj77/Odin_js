// the best way to define an object is to use the object literal syntax

const myObject = {
    property: 'Value!', //key:value pairs
    otherProperty: 77,
    "obnoxious property": function() {
        // what the function does
    }
};

// two ways of getting the information out of the objects
// dot notation
myObject.property; // 'Value!' is the result

// bracket notation
myObject["obnoxious property"]; //returns the function


//example 
const playerOne = {
    name: "Tim",
    marker: "X",
};

const playerTwo = {
    name: "Jenn",
    marker: "O",
};

function printName(player) {
    console.log(player.name);
}

function gameOver(winningPlayer){
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!")
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName();
player2.sayName();
