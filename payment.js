// localStorage.setItem("checkoutprice",2000);
var price = localStorage.getItem("checkoutprice") || 0;
console.log(price);
var userdetails = JSON.parse(localStorage.getItem("useraddress")) || "";
display();
function display(){
    var amount = document.getElementById("finalprice");
    amount.innerText = price;
    // var show = document.getElementById("showusername");
    // show.innerText = userdetails.nam1;
}

document.querySelector("form").addEventListener("submit",mySol_value);

function mySol_value(){
    event.preventDefault();
    window.location.href='otp.html';
}