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