var userNum = prompt("Enter the number in which you would like the fibonacci sequence to go up to.")
var start = 1;
var finalNum = 0;
var tempNum;
//added counter so output would show F0, F1, F2...
var counter = 0;
document.write("<table>");
document.write("<tr><th>Number</th><th>Fibonacci Number</th></tr>");
while (userNum > 0) {
    tempNum = start;
    start = start + finalNum;
    finalNum = tempNum;
    userNum--;
    document.write("<tr><td>" + "F" + counter++ + "</td><td>" + finalNum + "</td></tr>");
}