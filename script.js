document.getElementById('container').onchange = function () {
    let bill = Number(document.getElementById('mealTotal').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;
    let tipValue = bill * (tipPercent / 100);
    let newBillTotal = bill + tipValue;
    let newBillEach = (bill + tipValue) / split;
    let tipEach = tipValue / split;


    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    document.getElementById('tipTotal').innerHTML = "$" + tipValue.toFixed(2);
    document.getElementById('tipAmt').innerHTML = "$" + tipEach.toFixed(2);
    document.getElementById('billTotal').innerHTML = "$" + newBillTotal.toFixed(2);
    document.getElementById('billTotalPP').innerHTML = "$" + newBillEach.toFixed(2);
}