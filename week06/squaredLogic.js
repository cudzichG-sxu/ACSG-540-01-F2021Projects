document.write("<table>");
document.write("<tr><th>Current Number</th><th>The Number Squared</th><th>The Number Cubed</th></tr>");
for(var i = 5; i <= 15; i++){
    var squaredNum = Math.pow(i, 2);
    var cubedNum = Math.pow(i, 3);
    document.write("<tr><td class=tr1>" + i + "</td><td class=tr2>" + squaredNum + "</td><td class=tr3>" + cubedNum + "</td></tr>");
}