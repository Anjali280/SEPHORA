document.querySelector("form").addEventListener("submit",mySol);
function mySol(){
    event.preventDefault();
    var nam1 = document.getElementById("name1").value;
    var nam2 = document.getElementById("name2").value;
    var nam3 = document.getElementById("name3").value;
    var nam4 = document.getElementById("name4").value;
    var nam5 = document.getElementById("name5").value;
    var nam6 = document.getElementById("name6").value;
    var useradress = {
       nam1: nam1,
       nam2: nam2,
       nam3: nam3,
       nam4: nam4,
       nam5: nam5,
       nam6: nam6,
    }
    localStorage.setItem("useraddress",JSON.stringify(useradress));
    window.location.href='payment.html'; 
    console.log("hari");
}
var finalprice = localStorage.getItem("checkoutprice");
var targetpos = document.getElementById("finalprice");
targetpos.innerText = finalprice;