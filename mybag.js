let cartstore = JSON.parse(localStorage.getItem("cart_products")) || [];
console.log(cartstore);
display(cartstore);
function display(cartstore){
    document.getElementById("numberofproducts").innerHTML = "("+cartstore.length+")";
    let prodlist = document.getElementById("prodlist");
        prodlist.innerHTML = "";
                var sum = 0;
    cartstore.forEach(function(elem,index) {
        


        let prodcont = document.createElement("div");
        prodcont.setAttribute("id","productcontent");
    
        // first box
        let img = document.createElement("img");
        img.setAttribute("src",elem.image_url);
        img.setAttribute("id","smallimage");
        let indiv1 = document.createElement("div");
        indiv1.append(img);
        indiv1.setAttribute("id","firstbox");
        //first box
    
        //second box
        let indiv2 = document.createElement("div");
        let brandname = document.createElement("p");
        brandname.setAttribute("id","brandname");
        brandname.innerText = elem.brand;
        brandname.style.color = "#686f7a";
        brandname.style.fontSize = ".66667rem";
        brandname.style.fontWeight = "400";
        let prodname = document.createElement("h5");
        prodname.setAttribute("id","prodname");
        prodname.innerText = elem.description;
        let removetext = document.createElement("p");
        removetext.innerText = "Remove";
        removetext.addEventListener("click",function(){
          addToWhishlist(index);
        });
        removetext.setAttribute("id","addtowhishlist");
        indiv2.append(brandname,prodname,removetext);
        indiv2.setAttribute("id","secondbox");
        //second box
    
        //Third box
        let indiv3 = document.createElement("div");
        let qtybox = document.createElement("div");
        let qty = document.createElement("p");
        qty.innerText = "Add more";
        qty.addEventListener("click",function(){
            addeletolist(elem);
        })
        qty.setAttribute("id","addmore");
        qtybox.append(qty);
        indiv3.append(qtybox);
        indiv3.setAttribute("id","thirdbox");
        //Third box
    
        // Final box for price
        let indiv4 = document.createElement("div");
        let pricebox = document.createElement("div");
        let price = document.createElement("h5");
        price.innerText = "Rs." + elem.price;
        price.setAttribute("id","boxprodprice");
        pricebox.append(price);
        indiv4.append(pricebox);
        indiv4.setAttribute("id","fourthbox");
        // Final box for price
        
        // putting all prod items inside prod cont
        prodcont.append(indiv1,indiv2,indiv3,indiv4);
        // putting all prod items inside prod cont
     
        //finally adding product content into actual div inside html
        
        let hr = document.createElement("hr");
        hr.style.color = "grey";
        prodlist.append(prodcont,hr);
         //finally adding product content into actual div inside html

        sum = sum + elem.price;
        
    }) 


        // var summary = document.getElementById("checkoutbutton");
        // summary.innerText = "";
        // var sumshow = document.createElement("h4");
        // sumshow.innerText = sum;
        // summary.append(sumshow);
        document.getElementById("priceshow").innerText =  sum;
        document.getElementById("finalprice").innerText =  sum;
}
// implement move to favourite and remove button and functionality
// deign and implement right part of the checkout bar
// color/font size and ad br tag

function addToWhishlist(index){
    cartstore.splice(index,1);
    display(cartstore);
    document.getElementById("afterdiscountprice").innerText ="Rs."+ 0;
    localStorage.setItem("cart_products",JSON.stringify(cartstore));
}

 document.getElementById("couponbut").addEventListener("click",couponfunc);
 function couponfunc(){
    var coupcont = document.getElementById("couponint").value;
    if(coupcont === "masai30"){
        var currprice = document.getElementById("priceshow").innerText;
        var discountprice = Number(currprice) * 3/10;
        var finalprice = currprice - discountprice;
        document.getElementById("afterdiscountprice").innerText ="- Rs."+ discountprice;
        document.getElementById("finalprice").innerText = finalprice;
    }else if(coupcont === "BEAUTY10" || coupcont === "beauty10"){ 
        var currprice = document.getElementById("priceshow").innerText;
        var discountprice = Number(currprice) * 1/10;
        var finalprice = currprice - discountprice;
        document.getElementById("afterdiscountprice").innerText ="- Rs."+ discountprice;
        document.getElementById("finalprice").innerText = finalprice;
    }else{
        alert("Enter Valid code");
    }
 }
 document.getElementById("checkoutbutton").addEventListener("click",setFinalPrice);
function setFinalPrice(){
    var totprice = document.getElementById("finalprice").innerHTML;
    localStorage.setItem("checkoutprice",totprice);
    
}

function addeletolist(elem){
    cartstore.push(elem);
    display(cartstore);
    localStorage.setItem("cart_products",JSON.stringify(cartstore));
}
// windows.location.herf = "";
localStorage.setItem("logindetail","false");
localStorage.setItem("curruser","hari");

var logintrue = localStorage.getItem("logindetail") || "false";
if(logintrue == "true"){
    var curruser = localStorage.getItem("curruser");
    document.getElementById("logindetailsp").innerHTML = curruser;
}else{
    document.getElementById("logindetailsp").innerHTML = "Login";
     document.getElementById("logindetails").addEventListener("click",redirtologin);
}

function redirtologin(){
    document.getElementById("logindetailsp").innerHTML = "redirected";
}
