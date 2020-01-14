// Full Name stored in variable
var fullname = "Cesar Juarez";

// Number of states stored in constant
const num_states = 50;

// Result of adding 5+4 stored in variable
var result = 5+4;

function sayHello() {
    alert('Hello World')
}

sayHello()

function checkAge (name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page")
    } else{
        console.log("")
    } 
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegetables = ["potatoes", "lettuce", "tomatoes", "bell peppers", "spinach", "kale", "green beans"]

for (let i = 0; i < vegetables.length; ++i) {
    console.log(vegetables[i]);
}

var database = {
    victim1: {
        name: "Leonardo",
        age: 24,
    },

    victim2: {
        name: "Michelangelo",
        age: 25,
    },

    victim3: {
        name: "Raphael",
        age: 16,
    },

    victim4: {
        name: "Donatello",
        age: 17,
    },

    victim5: {
        name: "Aristotle",
        age: 69,
    }
}

const keys = Object.values(database)
for (const key of keys) {
    var x = key.name
    var y = key.age
    checkAge(x,y)
}



function getLength(word){
    let wordLength = word.length;
    return wordLength
}

wordLength = getLength("Hello World")
if ((wordLength % 2) == 1) {
    console.log("The World is an odd place!")
} else{
    console.log("The World is nice and even!")
}