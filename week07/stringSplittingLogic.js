function splitUserString() {
    var userString = prompt("Please enter a setence to have the words be sorted alphabetically.");

    //sort array normally, this will throw off the alphabetical sort since uppercase letters will always show
    //up first before lowercase
    var sortedWordArr = userString.split(' ').sort();

    //sort case insensitive, so 'The' and 'the' show up in the same location after the sort
    var caseInsensitiveWordArr = userString.split(' ').sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))

    //using regex to replace and periods, commas, question marks, and exclamation points from the sentence
    //so the final sorted string looks cleaner
    var finalCaseSensitiveString = sortedWordArr.join(" ").replace(/[ ,.?!]/g, " ");
    var finalCaseInsensitiveString = caseInsensitiveWordArr.join(" ").replace(/[ ,.?!]/g, " ");

    document.write("<p>Here is the original sentence: " + userString + "</p>");
    document.write("<p>Here is the sentence with each word sorted case sensitive: " + finalCaseSensitiveString + ".</p>");
    document.write("<p>Here is the sentence with each word sorted case insensitive: " + finalCaseInsensitiveString + ".</p>");

}

// This is so the function triggers once the HTML document has loaded
window.onload = function() {
    splitUserString();
  };
  