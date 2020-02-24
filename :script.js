function calc(){
    let tip = document.getElementById("percent").value;
    let amount = document.getElementById("amount").value;
    if (tip == "") {
        alert("Enter something for tip please");
    }
    if (amount == "") {
        alert("Enter something for amount please");
    }
    if (tip > 1) {
        tip = tip / 100;
    }
    alert(tip * amount);
    document.getElementById("tip1").innerHTML = "$" + tip * amount;
    document.getElementById("tax").innerHTML = "$" + amount * .06225;
    document.getElementById("total").innerHTML = "$" + amount + (amount * .06225) + (amount * tip);
    return false;

}