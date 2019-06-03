// simplest implementation that passes
//function addition() {
//    return 42;
//}

//function addition(numOne, numTwo) {
//    return numOne + numTwo;
//}

function addition(numOne, numTwo) {
    if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne + numTwo;
    } else {
        return "Error!";   
    }
}