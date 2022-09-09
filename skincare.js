
var skincare_obj = JSON.parse(localStorage.getItem("skincare_products")) || [];
display_skincare(skincare_obj);

function display_skincare(skin_array){
    console.log(skin_array);
    document.getElementById("product_display").innerHTML = "";
    skin_array.map(function(elem,index){
        var div2 = document.createElement("div");
        var image = document.createElement("img");
        image.setAttribute("src",elem.image_url);
        image.setAttribute("atl",elem.brand);
        var name = document.createElement("h4");
        name.innerText = elem.brand;
        var info = document.createElement("p");
        info.innerText = elem.description;
        var div3 = document.createElement("div");
        div3.setAttribute("id","rupees_value")
        var rupees = document.createElement("h4");
        rupees.innerText = "Rs. - ";
        var value = document.createElement("h4");
        value.innerText = elem.price;
        div3.append(rupees,value); 
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
        div2.append(image,name,info,div3,add_to_cart,add_to_bag);
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
    var gender_filtered = skincare_obj;  
    function filter_gender_fun(){
        selected_gender = document.getElementById("filter_gender").value;
        gender_filtered = skincare_obj.filter(function(elem){
            if(selected_gender === "all"){
                return 1;
            }

            return elem.gender === selected_gender;
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
        //display_skincare(skintype_filtered);
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
        display_skincare(skintype_filtered);
    }
}


var skincare_array = [
    //MOISTURIZERS
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn02.nnnow.com/web-images/medium/styles/EEC0JNQHILF/1604298678086/1.jpg",
        brand : "Clinique",
        description : "Moisture Surge™ Intense 72H Lipid-Replenishing Hydrator",
        price : "1899",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
        brand : "Forest Essentials",
        description : "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
        price : "2099",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/0B1WN63C5F7/1487240983367/1.jpg",
        brand : "Clinique",
        description : "Even Better Skin Tone Correcting MOISTURIZERS SPF 20",
        price : "2999",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn11.nnnow.com/web-images/medium/styles/8KBXRZQGXX7/1636699226904/1.jpg",
        brand : "Mario Badescu",
        description : "Buttermilk MOISTURIZERS",
        price : "1599",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn06.nnnow.com/web-images/medium/styles/LEBUDDYXJG9/1636700669414/1.jpg",
        brand : "Mario Badescu",
        description : "Facial Spray With Aloe, Herbs And Rosewater",
        price : "999",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn02.nnnow.com/web-images/medium/styles/KN9EL2PAM3Y/1612250574433/1.jpg",
        brand : "Forest Essentials",
        description : "Eladi Teenage Day Cream With SPF",
        price : "1399",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/VC95H9UINJ3/1585571862868/1.jpg",
        brand : "Pixi",
        description : "Rose Glow Mist",
        price : "1199",
        gender : "Male",
        skin_type : "Dry",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn19.nnnow.com/web-images/medium/styles/U6MDI8RFII5/1585571862867/1.jpg",
        brand : "Pixi",
        description : "Hydrating Milky Mist",
        price : "3999",
        gender : "Male",
        skin_type : "Dry",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn07.nnnow.com/web-images/medium/styles/F4TXVHMNKHB/1566551690915/1.jpg",
        brand : "Sephora Collection",
        description : "All Dry Hydrator",
        price : "499",
        gender : "Male",
        skin_type : "Combination",
    },
    {
        tag : "MOISTURIZERS",
        image_url : "https://cdn00.nnnow.com/web-images/medium/styles/ZQ7Q6LNI8TE/1652089092179/1.jpg",
        brand : "Sephora Collection",
        description : "Nourishing MOISTURIZERS with prebiotics",
        price : "899",
        gender : "Male",
        skin_type : "Combination",
    },
    //CLEANSERS
    {
        tag : "CLEANSERS",
        image_url : "https://cdn09.nnnow.com/web-images/medium/styles/9NY0C83T5FJ/1593084196288/1.jpg",
        brand : "Clinique",
        description : "Take the day off cleansing balm",
        price : "1199",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/G9J0XP7L5IK/1494572046858/1.jpg",
        brand : "Clinique", 
        description : "Liquid facial soap - Combination oily to oliy",
        price : "1499",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/X55FUUTFIBV/1585571862872/1.jpg",
        brand : "Pixi",
        description : "Glow tonic", 
        price : "1299",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/ITXIPNQAWY8/1585571862845/1.jpg",
        brand : "Pixi",
        description : "Peel & Polish Resurfacing concentrate",
        price : "2199",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn10.nnnow.com/web-images/medium/styles/J6QHNF8V3R4/1626067212265/1.jpg",
        brand : "Sephora Collection",
        description : "Smoothing Cleanser",
        price : "1200",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn02.nnnow.com/web-images/medium/styles/USW3I7NTGRE/1583393866808/1.jpg",
        brand : "Sephora Collection",
        description : "Organic Cotton pads",
        price : "319",
        gender : "Female",
        skin_type : "Dry",
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn09.nnnow.com/web-images/medium/styles/KG8JJIY4Y7C/1593757512690/1.jpg",
        brand : "Forest Essentials",
        description : "Refreshing cleansing water",
        price : "1199",
        gender : "Male",
        skin_type : "Dry", 
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn09.nnnow.com/web-images/medium/styles/LK8JYTR9UEY/1593684983302/1.jpg",
        brand : "Forest Essentials",
        description : "Waso quick gentle Cleanser",
        price : "1999",
        gender : "Male",
        skin_type : "Dry"
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn08.nnnow.com/web-images/medium/styles/UD015JZXBCL/1637558111457/1.jpg",
        brand : "Dior",
        description : "Capture total super potent cleanser",
        price : "4999",
        gender : "Male",
        skin_type : "Combination",
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn17.nnnow.com/web-images/medium/styles/CUV1ZK7TXO2/1637555492181/1.jpg",
        brand : "Dior",
        description : "Hydra life lotion to foam - fresh cleanser",
        price : "3299",
        gender : "Male",
        skin_type : "Combination",
    },
    {
        tag : "CLEANSERS",
        image_url : "https://cdn17.nnnow.com/web-images/medium/styles/CUV1ZK7TXO2/1637555492181/1.jpg",
        brand : "Dior",
        description : "Hydra life lotion to foam - fresh cleanser",
        price : "3299",
        gender : "Male",
        skin_type : "Combination",
    },

    //TREATMENT & HIGH TECH TOOLS
    {
        tag : "TREATMENT & HIGH TECH TOOLS",
        image_url : "https://cdn17.nnnow.com/web-images/medium/styles/K3VYOYGWCJY/1604478015053/1.jpg",
        brand : "Sephora Collection",
        description : "Face mask - pineapple",
        price : "359",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "TREATMENT & HIGH TECH TOOLS",
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/D0KN0LPAQC7/1606376778875/1.jpg",
        brand : "Sephora Collection",
        description : "Lips scrub - dragon fruit",
        price : "499",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "TREATMENT & HIGH TECH TOOLS",
        image_url : "https://cdn12.nnnow.com/web-images/medium/styles/VXHK10O6MEY/1637558489590/1.jpg",
        brand : "Dior",
        description : "Capture totale eye cream",
        price : "4999",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "TREATMENT & HIGH TECH TOOLS",
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/TWAFUPITHAC/1637558111494/1.jpg",
        brand : "Dior",
        description : "Hydra life cooling hydration sorbet eye",
        price : "2499",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "TREATMENT & HIGH TECH TOOLS",
        image_url : "https://cdn05.nnnow.com/web-images/medium/styles/E5UZP44SGKD/1661238431370/1.jpg",
        brand : "Forest Essentials",
        description : "Kisskiss bee glow tint lip balm",
        price : "3999",
        gender : "Female",
        skin_type : "Dry",
    },
    {
        tag : "TREATMENT & HIGH TECH TOOLS",
        image_url : "https://cdn05.nnnow.com/web-images/medium/styles/DN2S33UD07V/1661238431340/1.jpg",
        brand : "Forest Essentials",
        description : "Abeille Royale advanced youth oil",
        price : "2399",
        gender : "Male",
        skin_type : "Dry",
    },
    {
        tag : "TREATMENT & HIGH TECH TOOLS",
        image_url : "https://cdn11.nnnow.com/web-images/medium/styles/6W70Z8802VL/1620198731364/1.jpg",
        brand : "Clinique",
        description : "Blanc Divine intense brightnening spot corrector",
        price : "2199",
        gender : "Male",
        skin_type : "Combination",
    },
    {
        tag : "TREATMENT & HIGH TECH TOOLS",
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/R57CWX4E4DS/1620198775946/1.jpg",
        brand : "Clinique",
        description : "Lintemporel blossom glow boosting mask",
        price : "2299",
        gender : "Male",
        skin_type : "Combination",
    },
    //"MASKS
    {
        tag : "MASKS",
        image_url : "https://cdn13.nnnow.com/web-images/medium/styles/CYQ6YM3FRPY/1604477899654/1.jpg",
        brand : "Sephora Collection",
        description : "Foot mask - coconut",
        price : "420",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "MASKS",
        image_url : "https://cdn17.nnnow.com/web-images/medium/styles/S1FZOVGS9T4/1604478015072/1.jpg",
        brand : "Sephora Collection",
        description : "Charcoal Nose strip",
        price : "600",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "MASKS",
        image_url : "https://cdn03.nnnow.com/web-images/medium/styles/KISBCXPBVUB/1585571862851/1.jpg",
        brand : "Pixi",
        description : "FortifEYE firming eye patches",
        price : "2499",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "MASKS",
        image_url : "https://cdn04.nnnow.com/web-images/medium/styles/546DCOPEHVB/1591862447401/1.jpg",
        brand : "Pixi",
        description : "Glow glycolic boots - brightening infusion sheet mask",
        price : "1099",
        gender : "Female",
        skin_type : "Dry",
    },
    {
        tag : "MASKS",
        image_url : "https://cdn11.nnnow.com/web-images/medium/styles/IYQXAT62ASG/1636700669798/1.jpg",
        brand : "Mario Badescu",
        description : "Super collagen mask",
        price : "399",
        gender : "Male",
        skin_type : "Combination",
    },
    {
        tag : "MASKS",
        image_url : "https://cdn13.nnnow.com/web-images/medium/styles/75FMGM1LRF7/1636699889207/1.jpg",
        brand : "Mario Badescu",
        description : "Healing & soothing mask",
        price : "999",
        gender : "Male",
        skin_type : "Dry",
    },

    //Bath & Shower
    {
        tag : "BATH & SHOWER",
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/QERTLLK6BCJ/1612251897120/1.jpg",
        brand : "Forest Essentials",
        description : "Silkening shower wash - mashobara wild honey",
        price : "999",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "BATH & SHOWER",
        image_url : "https://cdn05.nnnow.com/web-images/medium/styles/O0NNBGX3A4P/1612250574420/1.jpg",
        brand : "Forest Essentials",
        description : "Ultra rich body lotion",
        price : "899",
        gender : "Female",
        skin_type : "Dry",
    },
    {
        tag : "BATH & SHOWER",
        image_url : "https://cdn11.nnnow.com/web-images/medium/styles/TU5S1MDMTKQ/1615874938098/1.jpg",
        brand : "Forest Essentials",
        description : "Ultra rich body milk - oudh & green Tea",
        price : "1099",
        gender : "Female",
        skin_type : "Oily",
    },
    {
        tag : "BATH & SHOWER",
        image_url : "https://cdn14.nnnow.com/web-images/medium/styles/EEIJ27BZZTL/1636699241571/1.jpg",
        brand : "Mario Badescu",
        description : "Drying lotion",
        price : "1999",
        gender : "Male",
        skin_type : "Oily",
    },
    {
        tag : "BATH & SHOWER",
        image_url : "https://cdn13.nnnow.com/web-images/medium/styles/MNVR2ADSC9A/1636700674036/1.jpg",
        brand : "Mario Badescu",
        description : "Rose body soap",
        price : "999",
        gender : "Male",
        skin_type : "Combination",
    },
    {
        tag : "BATH & SHOWER",
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/9INB4DV33LY/1636699226813/1.jpg",
        brand : "Mario Badescu",
        description : "",
        price : "999",
        gender : "Male",
        skin_type : "Combination",
    },

    //BODY MOISTURIZERS
    {
        tag : "BODY MOISTURIZERS",
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/PRTB9W7SXKM/1644914354439/1.jpg",
        brand : "Sephora Collection",
        description : "Hand balm with shea butter",
        price : "2099",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "BODY MOISTURIZERS",
        image_url : "https://cdn00.nnnow.com/web-images/medium/styles/7DMGGVEBGTG/1533206306028/1.jpg",
        brand : "Sephora Collection",
        description : "Hand balm almond",
        price : "1599",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "BODY MOISTURIZERS",
        image_url : "https://cdn05.nnnow.com/web-images/medium/styles/O0NNBGX3A4P/1612250574420/1.jpg",
        brand : "Forest Essentials",
        description : "Ultra rch body lotion",
        price : "1299",
        gender : "Female",
        skin_type : "Dry",
    },
    {
        tag : "BODY MOISTURIZERS",
        image_url : "https://cdn11.nnnow.com/web-images/medium/styles/TU5S1MDMTKQ/1615874938098/1.jpg",
        brand : "Forest Essentials",
        description : "ultra - rich body milk",
        price : "3299",
        gender : "Female",
        skin_type : "Dry",
    },
    {
        tag : "BODY MOISTURIZERS",
        image_url : "https://cdn14.nnnow.com/web-images/medium/styles/EEIJ27BZZTL/1636699241571/1.jpg",
        brand : "Mario Badescu",
        description : "Drying lotion",
        price : "999",
        gender : "Male",
        skin_type : "Oily",
    },
    {
        tag : "BODY MOISTURIZERS",
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/9INB4DV33LY/1636699226813/1.jpg",
        brand : "Mario Badescu",
        description : "Special cucumber lotion",
        price : "899",
        gender : "Male",
        skin_type : "Combination",
    },

    //VEGAN
    {
        tag : "VEGAN",
        image_url : "https://cdn02.nnnow.com/web-images/medium/styles/E0ANC9EFYPI/1605193380207/1.jpg",
        brand : "Sephora Collection",
        description : "Gentle eye and lip makeup remover",
        price : "1599",
        gender : "Female",
        skin_type : "Normal",
    },
    {
        tag : "VEGAN",
        image_url : "https://cdn10.nnnow.com/web-images/medium/styles/5CPKFRTG7GD/1604477892837/1.jpg",
        brand : "Sephora Collection",
        description : "Gentle PH balancing toner",
        price : "1399",
        gender : "Female",
        skin_type : "Normal",
    },
];

localStorage.setItem("skincare_products", JSON.stringify(skincare_array));