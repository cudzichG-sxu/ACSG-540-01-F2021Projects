var globalTotal = 0.00;
const salesTax = 0.05;

function calculateCostPlusTax() {
    //calculate sales tax
    var calculatedTax = globalTotal * salesTax;
    //add calculated amount from tax to raw total
    var finalSaleAmount = (Math.round((globalTotal + calculatedTax) * 100) / 100)
    //display alert with raw total plus tax
    alert("Your total cost is: $" + finalSaleAmount + " including sales tax");
    return false;
}


function calculateRawCost() {
    var checkInput = document.getElementById("fruitForm");
    for (var i = 0; i < checkInput.length; i++) {
        //Calculates cost depending on if the checkbox was checked or not
        checkInput[i].onchange = function() {
            //ternary operator is best friend, if checked is true multiply by 1, otherwise by -1
            var add = this.value * (this.checked ? 1 : -1);
            globalTotal = parseFloat(globalTotal) + add;
            //display total minus tax, math.round to keep it at 2 decimal points
            document.getElementById("totalCostMinusTax").value = "$" + Math.round(globalTotal * 100) / 100;
        }
    }
}