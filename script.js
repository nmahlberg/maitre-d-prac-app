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
    document.getElementById("tip1").innerHTML = "$" + Number(Number(tip) * Number(amount));
    document.getElementById("tax").innerHTML = "$" + Number(Number(amount) * .06225);
    document.getElementById("total").innerHTML = "$" + Number(Number(amount) + (Number(amount) * .06225) + (Number(amount) * Number(tip)));
    

}