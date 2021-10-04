
function promptUserForNumbers() {
    var firstNum;
    var secondNum;
    var thirdNum;
    //Three do while loops does seem a bit over kill, not sure how to check 3 prompt values
    // to ensure that the user entered in a valid number for each one
    //I wanted to serve an error message to the user if they entered in something wrong and then reprompt them.
    //Albeit, this does trap the user in a quagmire where they can't cancel out of the prompt, I'll keep as is and do some 
    //research if time permits.
    do {
        firstNum = prompt("Input your first number");
    } while (isNaN(parseFloat(firstNum)) || firstNum === "");

    do {
        secondNum = prompt("Input your second number");
    } while (isNaN(parseFloat(secondNum)) || secondNum === "");

    do {
        thirdNum = prompt("Input your third number");
    } while (isNaN(parseFloat(thirdNum)) || thirdNum === "");

    var firstMaxCheck = Math.max(firstNum, secondNum);
    var finalMaxCheck = Math.max(firstMaxCheck, thirdNum);
    document.getElementById('finalOutput').innerHTML = "The biggest number out of " + firstNum + ", " + secondNum + ", " + " and " + thirdNum + " is " + finalMaxCheck;

    //document.write writes a completely new webpage by itself from what it looks like, so my do it again! button is removed 
    //Once the function hits this line, I decided to replace it with document.getElementById instead so the 
    //do it again button is retained.
    //document.write("<p>The max of " + firstNum + ", " + secondNum + ", " + " and " + thirdNum + " is " + finalMaxCheck + "</p>");
}

//This is so the function loads once the HTML document has loaded
window.onload = function() {
    promptUserForNumbers();
  };