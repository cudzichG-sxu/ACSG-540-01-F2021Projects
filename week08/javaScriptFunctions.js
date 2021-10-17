function first_vowel(stringActual) {
    //grabs all existing vowels in this universe as far as I know
    var allVowels = "aeiouyAEIOUY";
    var indexActual = -1;

    //loop through the string checking each character if it's a vowel
    //if so break from the loop and store the index as indexActual
    for (let i = 0; i < stringActual.length; i++) {
        //compare each vowel inside the string to the current 
        //character of the input, if a vowel is found, break from the 
        //loop and store the index
        if (allVowels.indexOf(stringActual.charAt(i)) !== -1) {
            indexActual = i;
            break;
        }
    }
    //grab the input from the user and display it on the webpage
    document.getElementById('inputFromFirstVowel').innerHTML = "Your input was " + stringActual;

    return "The index of the first vowel is: " + indexActual;

}
//so I did this originally since I was slightly confused on how to grab array input from a user
// I went off the idea that some users might not know what an array is, so this first method takes in the users input as a 
//string and handles all the dirty work with converting the input into an array that users typically don't care about.
function counterFromString(numsActual) {
    //I wanted to use a dictionary as a return since 
    // it makes sense to me in terms of the returns
    //ended up biting me back since I had to return a string 
    var dictReturn = [];
    //all counters
    var lessThanZeroCounter = 0;
    var equalToZeroCounter = 0;
    var greaterThanZeroCounter = 0;
    //convert string into an array split by comma
    let toNumArr = numsActual.split(",");
    //loop through the array and check each element to see if it's 
    //greater than 0, less than 0, or equal to 0.
    for (let i = 0; i < toNumArr.length; i++) {
        var currentElement = toNumArr[i];

        switch (true) {
            case (currentElement < 0):
                lessThanZeroCounter++;
                break;
            case (currentElement > 0):
                greaterThanZeroCounter++;
                break;
            default:
                equalToZeroCounter++;
                break;
        }
    }

    // set the values for each key in the dictionary
    dictReturn['lessThanZero'] = lessThanZeroCounter;
    dictReturn['equalToZero'] = equalToZeroCounter;
    dictReturn['greaterThanZero'] = greaterThanZeroCounter;
    
    //grab users input and display it on the web page
   document.getElementById('inputFromCounter').innerHTML = "Your input was " + numsActual;

   //concat all values from the dictionary to one nice tidy final String
   //as you saw on the html page, the element that I'm writing to is a <pre><pre/>
   //since it respects the lines breaks, unlike a <p><p/> element
    let finalString = "Less than 0:" + dictReturn['lessThanZero'] + "\n" + "Equal than 0:" + dictReturn['equalToZero'] + "\n" + "Greater than 0:" + dictReturn['greaterThanZero'];

    return finalString;

}

//here I'm using a form for input, which was a pain, but technically it's array input like the 
//assignment requires? Same logic as the method above, just using an array which I hope is valid 
//since I learned that numsActual is actually a nodeList of HTMLInputElements.... whack.
function counterFromArr(numsActual) {
    var dictReturn = [];
    var lessThanZeroCounter = 0;
    var equalToZeroCounter = 0;
    var greaterThanZeroCounter = 0;
    //this converts numsActual to an array, since it's actually a nodeList
    let ArrFromNodeList = Array.from(numsActual)
    var stringToReturn = "";
    for (let i = 0; i < ArrFromNodeList.length; i++) {
        //grab the value from the HTML Element at index i
        var currentElement = ArrFromNodeList[i].value;
        //this is used to display the input to the user at the end
        // concating each value to a string for a nice clean output
        stringToReturn += " " + (currentElement.toString());
        switch (true) {
            case (currentElement < 0):
                lessThanZeroCounter++;
                break;
            case (currentElement > 0):
                greaterThanZeroCounter++;
                break;
            default:
                equalToZeroCounter++;
                break;
        }
    }

    dictReturn['lessThanZero'] = lessThanZeroCounter;
    dictReturn['equalToZero'] = equalToZeroCounter;
    dictReturn['greaterThanZero'] = greaterThanZeroCounter;
   document.getElementById('inputFromCounterArr').innerHTML = "Your input was " + stringToReturn;
    let finalString = "Less than 0:" + dictReturn['lessThanZero'] + "\n" + "Equal than 0:" + dictReturn['equalToZero'] + "\n" + "Greater than 0:" + dictReturn['greaterThanZero'];

    return finalString;

}

//helper method since I went with a form for this
//This grabs each value from the input fields in the form
function counterFromArrHelper() {
    var arrInput = document.getElementsByName('array[]');
    return counterFromArr(arrInput);
}

//so this I had to look up, I wanted to allow the user 
//to append a new field to the form. I'm looking at this from the 
//eyes of a user that doesn't know anything about the assignment, they just stumbled 
//upon this webpage.
// since I declared an input field in the form, from what I understand this just essentially 
//clones it and appends it to the form itself on button click... pretty crazy!
//I just wish the input fields would be blank and not populated with the previous input.
document.addEventListener('DOMContentLoaded', function() {
(function() {
    var button=document.getElementById("addMoreElements");
    button.addEventListener('click', function(event) {
       event.preventDefault();
       var cln = document.getElementsByClassName("arrElements")[0].cloneNode(true);
       document.getElementById("counterList").insertBefore(cln,this);
       return false;
    });
 })();
});

//reverser function, takes in a number and spits it back out in reverse
function reverser(numActual) {
    //converts the number into an array
    let toArr = Array.from(String(numActual), Number);
    document.getElementById('inputFromReverser').innerHTML = "Your input was " + numActual;
    return "The test number reversed is: " + toArr.reverse().join("");

}