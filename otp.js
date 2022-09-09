var price = localStorage.getItem("checkoutprice") || 0;
var userdetails = JSON.parse(localStorage.getItem("useraddress")) || "";

showmobnum();
function showmobnum(){
    // event.preventDefault();
    var selectele = document.getElementById("showphonenumber");
    selectele.innerText = userdetails.nam6 + " for Rs. " + price;
}

document.querySelector("form").addEventListener("submit",checkotp);
function checkotp(){
    event.preventDefault();
    var text = document.getElementById("otptext").value;
    if(text == 1234){
        document.getElementById("result").innerText = "payment successful!";
    }else{
        document.getElementById("result").innerText = "Wrong OTP";
    }
}