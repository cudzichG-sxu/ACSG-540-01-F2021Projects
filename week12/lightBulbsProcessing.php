<!DOCTYPE html>
<!--lightBulbsProcessing.php, purpose of document is exercise 9.10 for ACSG-540-01 class at Saint Xavier University
Created by: Greg Cudzich on 2021-11-13 -->
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Processing lightBulbsForm.html form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php
        $userAmounts = array(
            "four25Watt" => (int)$_POST["four25Watt"],
            "eight25Watt" => (int)$_POST["eight25Watt"],
            "four25WattLongLife" => (int)$_POST["four25WattLongLife"],
            "eight25WattLongLife" => (int)$_POST["eight25WattLongLife"]
        );
        $name = $_POST["name"];
        $paymentType = $_POST["paymentType"];

        $userAmountKeys = array_keys($userAmounts);
       $userAmountVals = array_values($userAmounts);
       $totalPrice = 0;
       $totalItems = 0;
       $four25Watt = 0;
       $eight25Watt = 0;
       $four25WattLongLife = 0;
       $eight25WattLongLife = 0;
        foreach($userAmounts as $key => $values) {
            switch ($key) {
                case "four25Watt":
                    $four25Watt += $values;
                    break;
                case "eight25Watt":
                    $eight25Watt += $values;
                    break;
                case "four25WattLongLife":
                    $four25WattLongLife += $values;
                    break;
                case "eight25WattLongLife":
                    $eight25WattLongLife += $values;
                    break;
                default:
                    break;
            }
            $totalItems  += $values; 
        }

    $four25WattCost = number_format((2.39 * $four25Watt), 2, '.', '');
    $eight25WattCost = number_format((4.29 * $eight25Watt), 2, '.', '');
    $four25WattLongLifeCost = number_format((3.95 * $four25WattLongLife), 2, '.', '');
    $eight25WattLongLifeCost = number_format((7.49 * $eight25WattLongLife), 2, '.', '');

    $totalPrice = $four25WattCost + $eight25WattCost + $four25WattLongLifeCost + $eight25WattLongLifeCost;
    $calculatedTax = $totalPrice * 0.062;
    $finalSaleAmount = number_format(((float)$calculatedTax + (float)$totalPrice), 2, '.', '');
    ?>
    <h4>Customer: </h4>
    <?php
    print("$name <br>");
    ?>
    <table>
        <caption>Order Summary</caption>
        <tr>
    <th>Product</th>
    <th>Per Unit Price</th>
    <th>Amount Ordered</th>
    <th>Item Cost</th>
</tr>
<tr>
    <td>Four 25-watt light bulbs</td>
    <td>$2.39</td>
    <td><?php print("$four25Watt"); ?></td>
    <td><?php print("$four25WattCost"); ?></td>

</tr>
<tr>
    <td>Eight 25-watt light bulbs</td>
    <td>$4.29</td>
    <td><?php print("$eight25Watt"); ?></td>
    <td><?php print("$eight25WattCost"); ?></td>
</tr>
<tr>
    <td>Four 25-watt long-life light bulbs</td>
    <td>$3.95</td>
    <td><?php print("$four25WattLongLife"); ?></td>
    <td><?php print("$four25WattLongLifeCost"); ?></td>
</tr>
<tr>
    <td>Eight 25-watt long-life light bulbs</td>
    <td>$7.49</td>
    <td><?php print("$eight25WattLongLife"); ?></td>
    <td><?php print("$eight25WattLongLifeCost"); ?></td>
</tr>
    </table>

    <?php
    print "You ordered $totalItems light bulbs <br>";
    printf ("Your total cost is: $ %5.2f <br>", $finalSaleAmount);
    print"You paid using a  $paymentType account <br>";
    ?>
</body>
</html>