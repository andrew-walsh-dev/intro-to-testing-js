// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(name) {
    switch (name) {
        case "":
        case (typeof name === "boolean"):
        case (null):
        case (typeof name === "object"):
        case (typeof name === "number"):
        case (undefined):
            return "Hello, World";
        default:
            return "Hello, " + name;
    }

}
function isFive(num) {
    return num === 5;
}

//wow
function isEven(num) {
    if (num === Infinity || typeof num === "boolean" || typeof num === "object" || typeof num === "undefined") {
        return false;
    }
    else {
        return num % 2 === 0 || Number(num) % 2 === 0;
    }
}

function isVowel(char) {
    if (typeof char === "string" && char.length === 1) {
        switch (char.toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                return true;
            default:
                return false;
        }
    }
    else {
        return false;
    }
}

function add(num1, num2) {
    if ((typeof num1 === "number" || !isNaN(Number(num1))) && typeof num2 === "number" || !isNaN(Number(num2))) {
        return Number(num1) + Number(num2);
    }
    else {
        return "NaN";
    }
}