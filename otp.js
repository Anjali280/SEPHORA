document.getElementById("enterOtp").addEventListener("click", getOtp);
function getOtp(){
    event.preventDefault();
    var otp = document.getElementById("otpInput").value;
    console.log(otp);
    if(otp == 703865){
        window.location.href = "order.html";
        // localStorage.setItem("orderOtp", otp);
        // console.log(otp)
    }
    else if(otp == ""){
        alert("Enter OTP !");
    }
    else{
        alert("Wrong OTP !");
    }
}