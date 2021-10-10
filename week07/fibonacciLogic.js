function fibonacciSequence() {
    var userNum = prompt("Enter the number in which you would like the fibonacci sequence to go up to.")
    var start = 1;
    var finalNum = 0;
    var tempNum;
    //added counter so output would show F0, F1, F2...
    var counter = 0;

    while(userNum > 0) {
        tempNum = start;
        start = start + finalNum;
        finalNum = tempNum;
        userNum--;
        document.write("<p>F" + counter++ + ": " + finalNum + "</p>");
    }

}

// This is so the function triggers once the HTML document has loaded
window.onload = function() {
    fibonacciSequence();
  };