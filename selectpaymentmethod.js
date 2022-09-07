document.querySelector("#credit").addEventListener("click",funcredit)

    function funcredit(){
        console.log("done")
        document.querySelector(".popupcard").classList.add("open-popup")
        var B=document.querySelector("#container")
            B.style.opacity="30%" }
   


    var closepop=document.querySelector("#cross").addEventListener("click",funclosepop)

    function funclosepop(){
        document.querySelector(".popupcard").classList.remove("open-popup")
        var B=document.querySelector("#container")
            B.style.opacity="100%"
        }
                   
     var inputBox=document.querySelector("#inputcard")
     var inputBox1=document.querySelector("#ipdate")
     var inputBox2=document.querySelector("#ipcvv")
    
    document.querySelector("#btnlower").addEventListener("click",completepayment)
    function completepayment(){
        window.location.href="otp.html"
    }          