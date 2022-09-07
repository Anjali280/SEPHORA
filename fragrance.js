var fragrance_obj = JSON.parse(localStorage.getItem("fragrance_products")) || [];
display_fragrance(fragrance_obj);

function display_fragrance(frag_array){
    console.log(frag_array);
    console.log(frag_array.length);
    document.getElementById("product_display").innerHTML = "";
    frag_array.map(function(elem,index){
        var div2 = document.createElement("div");
        var image = document.createElement("img");
        image.setAttribute("src",elem.image_url);
        image.setAttribute("atl",elem.brand);
        var name = document.createElement("h4");
        name.innerText = elem.brand;
        var info = document.createElement("p");
        info.innerText = elem.description;
        var value = document.createElement("h4");
        value.innerText = elem.price; 
        var add_to_cart = document.createElement("button");
        add_to_cart.innerText = "Add to Cart";
        add_to_cart.setAttribute("class","cart_bag");
        add_to_cart.addEventListener("click",function(){
            add_pro_cart_fun(elem);
        });
        var add_to_bag = document.createElement("button");
        add_to_bag.innerText = "Add to Bag"; 
        add_to_bag.addEventListener("click",function(){
            add_pro_bag_fun(elem);
        });
        add_to_bag.setAttribute("class","cart_bag");
        div2.append(image,name,info,value,add_to_cart,add_to_bag);
        document.getElementById("product_display").append(div2);
    });

}

var cartProducts = JSON.parse(localStorage.getItem("cart_products"))|| [];

function add_pro_cart_fun(elem){
      
  cartProducts.push(elem);
  localStorage.setItem("cart_products",JSON.stringify(cartProducts));
}

var bagProducts = JSON.parse(localStorage.getItem("bag_products"))|| [];

function add_pro_bag_fun(elem){
      
  bagProducts.push(elem);
  localStorage.setItem("bag_products",JSON.stringify(bagProducts));
}

function filter_fun(){
    filter_gender_fun();
    filter_brand_fun();
    filter_skintype_fun();
    sort_price_fun();
    var gender_filtered = fragrance_obj;  
    function filter_gender_fun(){
        selected_gender = document.getElementById("filter_gender").value;
        gender_filtered = fragrance_obj.filter(function(elem){
            if(selected_gender === "all"){
                return 1;
            }

            return elem.tag === selected_gender;
        });
        
        //display_skincare(gender_filtered);
    }

    var brand_filtered = gender_filtered;
    function filter_brand_fun(){
        var selected_brand = document.getElementById("filter_brand").value;
        brand_filtered = gender_filtered.filter(function(elem){
            if(selected_brand === "all"){
                return 1;
            }
            return elem.brand === selected_brand;
        });
        //console.log(brand_filtered);
    }
    //display_skincare(brand_filtered);

    var skintype_filtered = brand_filtered;
    function filter_skintype_fun(){
        var selected_skintype = document.getElementById("filter_skin_type").value;
        skintype_filtered = brand_filtered.filter(function(elem){
            if(selected_skintype === "all"){
                return 1;
            }

            return elem.skin_type === selected_skintype;
        });
        //display_fragrance(skintype_filtered);
    }
    
    function sort_price_fun(){
        if(document.getElementById("sort_price").value == 'high'){
            skintype_filtered.sort(function(a,b){
            if(parseInt(a.price)>parseInt(b.price)) return -1;
            if(parseInt(a.price)<parseInt(b.price)) return 1;
            return 0;
          });
        }
  
        if(document.getElementById("sort_price").value == 'low'){
            skintype_filtered.sort(function(a,b){
            if(parseInt(a.price)>parseInt(b.price)) return 1;
            if(parseInt(a.price)<parseInt(b.price)) return -1;
            return 0;
          }); 
        }
        display_fragrance(skintype_filtered);
      }
}

var fragrance_array = [
    //WOMEN
    {
        tag : "WOMEN",
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/YH3FKFOQIBK/1655184233762/1.jpg",
        brand : "Dior",
        description : "Miss dior eau de parfume",
        price : "10099",
        size : "100",
        skin_type : "Normal",
    },
    {
        tag : "WOMEN",
        image_url : "https://cdn04.nnnow.com/web-images/medium/styles/1FKGIZZQQT8/1637735288244/1.jpg",
        brand : "Dior",
        description : "ure poison eau de parfume",
        price : "99999",
        size : "150",
        skin_type : "Normal",
    },
    {
        tag : "WOMEN",
        image_url : "https://cdn14.nnnow.com/web-images/medium/styles/GX1INCBAMS6/1487245292188/1.jpg",
        brand : "Forest Essentials",
        description : "Cool water sea rose eau de toilette",
        price : "6099",
        size : "200",
        skin_type : "dry",
    },
    {
        tag : "WOMEN",
        image_url : "https://cdn03.nnnow.com/web-images/medium/styles/P4FI87Z9XKE/1607690426098/1.jpg",
        brand : "Forest Essentials",
        description : "My fifth avenue de parfume",
        price : "5599",
        size : "100",
        skin_type : "Oily",
    },
    {
        tag : "WOMEN",
        image_url : "https://cdn14.nnnow.com/web-images/medium/styles/JNDWBL8HTUR/1605083781849/1.jpg",
        brand : "Forest Essentials",
        description : "5th avenue eau de parfume",
        price : "4999",
        size : "150",
        skin_type : "Combination",
    },
    {
        tag : "WOMEN",
        image_url : "https://cdn17.nnnow.com/web-images/medium/styles/KW1A17FQVOD/1496292880002/1.jpg",
        brand : "Clinique",
        description : "Pleasures eau de parfume",
        price : "5999",
        size : "200",
        skin_type : "Oily",
    },


    //MEN
    {
        tag : "MEN",
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/EF52ORZ4CS9/1637736332494/1.jpg",
        brand : "Dior",
        description : "Homme intense eau de parfume",
        price : "7999",
        size : "100",
        skin_type : "Oily",
    },
    {
        tag : "MEN",
        image_url : "https://cdn02.nnnow.com/web-images/medium/styles/T0RTJDW68XH/1637735756306/1.jpg",
        brand : "Dior",
        description : "Eau sauvage eau de toilette",
        price : "8099",
        size : "150",
        skin_type : "Dry",
    },
    {
        tag : "MEN",
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/YRLW7QZFTEA/1637735894017/1.jpg",
        brand : "Dior",
        description : "Sauvage parfume",
        price : "1099",
        size : "200",
        skin_type : "Dry",
    },
    {
        tag : "MEN",
        image_url : "https://cdn03.nnnow.com/web-images/medium/styles/V1Q5H9E07BM/1604476359414/1.jpg",
        brand : "Clinique",
        description : "Clinique eau de toilette",
        price : "8999",
        size : "100",
        skin_type : "Normal",
    },

    {
        tag : "MEN",
        image_url : "https://cdn02.nnnow.com/web-images/medium/styles/2XR0S3IS5BE/1487245292170/1.jpg",
        brand : "Clinique",
        description : "Clinique Euphoria eau de toilette",
        price : "5999",
        size : "150",
        skin_type : "Normal",
    },
    {
        tag : "MEN",
        image_url : "https://cdn03.nnnow.com/web-images/medium/styles/O23NQ2FZELN/1614232406460/1.jpg",
        brand : "Forest Essentials",
        description : "",
        price : "6599",
        size : "200",
        skin_type : "Combination",
    },
];

localStorage.setItem("fragrance_products", JSON.stringify(fragrance_array));