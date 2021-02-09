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
        case (Number(name) !== NaN):
        case (undefined):
            return "Hello, World";
        default:
            return "Hello, " + name;
    }

}
function isFive(num) {
    if (num === 5) {
        return true;
    }
    else {
        return false;
    }
}