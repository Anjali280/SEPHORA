var cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

var cart = document.getElementById('cart');
if(cartProduct.length == 0){
   cartValue();
}
else{
   
    cartValue();
}

// var loggedInUser = JSON.parse(localStorage.getItem("userName")) || [];
// console.log(loggedInUser);

// document.getElementById("user").innerText =loggedInUser[0].name;


document.getElementById('items').innerText =cartProduct.length+" items";
document.getElementById('items').style.fontSize="12px";

function cartValue(){
    var total = localStorage.getItem("total");
   

    document.getElementById("total").innerText ="Rs. "+total;
    document.getElementById("totals").innerText ="Rs "+total;
    document.getElementById("pay").innerText ="Rs"+total;
    document.getElementById("check").value ="Pay Rs"+total;
}



function remove(index){
    cartProduct.splice(index,1);
    displayProduct();
    localStorage.setItem("cart",JSON.stringify(cartProduct));
}

function refreshPage(){
    window.location.reload();
}

document.getElementById("check").addEventListener("click", goForward);

function goForward(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var date  = document.getElementById("date").value;
    var cvv = document.getElementById("cvv").value;
    var cardName = document.getElementById("cardName").value;
    var checkbox = document.getElementById("checkbox").value;

    console.log(name, cvv, cardName, checkbox)

    if(cardNumber == "" || cvv == "" || name == "" || date == "" || cardName == ""){
        alert("Please Enter All Details!");
    }
    else{
        window.location.href = "otp.html"
    }
}