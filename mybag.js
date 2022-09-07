let cartstore = JSON.parse(localStorage.getItem("cart_sephora")) || [];
console.log(cartstore);
cartstore.forEach(function(elem) {
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
    let prodname = document.createElement("h4");
    prodname.setAttribute("id","prodname");
    prodname.innerText = elem.description;
    indiv2.append(brandname,prodname);
    indiv2.setAttribute("id","secondbox");
    //second box

    //Third box
    let indiv3 = document.createElement("div");
    let qtybox = document.createElement("div");
    let qty = document.createElement("p");
    qty.innerText = "Qty:";
    qtybox.append(qty);
    indiv3.append(qtybox);
    indiv3.setAttribute("id","thirdbox");
    //Third box

    // Final box for price
    let indiv4 = document.createElement("div");
    let pricebox = document.createElement("div");
    let price = document.createElement("h4");
    price.innerText = "Rs." + elem.price;
    pricebox.append(price);
    indiv4.append(pricebox);
    indiv4.setAttribute("id","fourthbox");
    // Final box for price
    
    // putting all prod items inside prod cont
    prodcont.append(indiv1,indiv2,indiv3,indiv4);
    // putting all prod items inside prod cont
 
    //finally adding product content into actual div inside html
    let prodlist = document.getElementById("prodlist");
    prodlist.append(prodcont);
     //finally adding product content into actual div inside html
})

// implement move to favourite and remove button and functionality
// deign and implement right part of the checkout bar
// color/font size and ad br tag
