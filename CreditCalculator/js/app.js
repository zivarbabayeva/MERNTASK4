
var years = document.getElementById("period")
var price = document.getElementById("price");
var TotalPrice = document.getElementById("totalinterest");
var value = document.getElementById('price').value;
var percent = document.getElementById("percent");


function creditCalculator() {
    var price, month;
    var percent, TotalPrice;
    var percent = value * percent / 100;
    var Price = document.getElementById("price").value;
    var list = document.getElementById("period");
    month = list.options[list.selectedIndex].value
    AllPrice=TotalPrice+percent
    TotalPrice=price/month;

    MonthlyPercent = AllPrice/month;

    document.querySelector("#Result").innerHTML = "Debt price: " + TotalPrice + "<br>" +
        "MonthlyPercent: " + MonthlyPercent.toFixed(2);


}