// makeup -> face,Eye,Lip,Cheek,Nail_makeup,Makeup_Accessories,vegan:
// For gender - Male, Female 
// For skin type - Normal, Oily, Dry, Combination

var makeup_array = [
    {
        tag: "Face" ,
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/7C1N04O5PPK/1655201666947/1.jpg",
        brand: "Huda Beauty",
        description: "Easy Bake Loose Setting Powder Mini - Banana Bread",
        price: 1650,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Face" ,
        image_url : "https://cdn19.nnnow.com/web-images/medium/styles/2PXZRRLJAKQ/1605088422828/1.jpg",
        brand: "Benefit Cosmetics",
        description: "The POREfessional Face Primer",
        price: 1240,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Face" ,
        image_url : "https://cdn07.nnnow.com/web-images/medium/styles/ERGA41B2X2B/1486990662464/1.jpg",
        brand: "Stila",
        description: "One Step Correct",
        price: 3300,
        gender: "Female",
        skin_type: "Oily",
    },
    {
        tag: "Face" ,
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/NKFTM3JWAAA/1567658646121/1.jpg",
        brand: "Huda Beauty",
        description: "Overachiever Concealer - 24G Peanut Butter",
        price: 2520,
        gender: "Female",
        skin_type: "Dry",
    },
    {
        tag: "Face" ,
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/CD6YDBZQCJU/1591176802146/1.jpg",
        brand: "Sephora Collection",
        description: "Pore And Fine Line Filler",
        price: 1550,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Face" ,
        image_url : "https://cdn00.nnnow.com/web-images/medium/styles/3FWCGQ8LJPQ/1496667063572/1.jpg",
        brand: "Sephora Collection",
        description: "Mineral Foundation Compact - D25",
        price: 1200,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Face" ,
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/CFBY3RR8BXM/1605172428538/1.jpg",
        brand: "Sephora Collection",
        description: "Care Foundation - 24 N Neutral Medium",
        price: 1800,
        gender: "Female",
        skin_type: "Dry",
    },
    {
        tag: "Face" ,
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/XU1BPDLED6C/1593767829705/1.jpg",
        brand: "Sephora Collection",
        description: "Smoothing And Brightening Powder",
        price: 1480,
        gender: "Female",
        skin_type: "Oily",
    },
    
    {
        tag: "Eye" ,
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/XYA2KMWFEY2/1568981198049/1.jpg",
        brand: "Benefit Cosmetics",
        description: "Precisely, My Brow Pencil - 3.75 - Warm Medium Brown",
        price: 2390,
        gender: "Feale",
        skin_type: "Normal",
    },
    {
        tag: "Eye" ,
        image_url : "https://cdn03.nnnow.com/web-images/medium/styles/YXIMS5V76MI/1622458093797/1.jpg",
        brand: "Foreo",
        description: "Mini Eye Primer",
        price: 1490,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Eye" ,
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/7LPFL2SW91K/1632204148062/1.jpg",
        brand: "Sephora Collection",
        description: "12H Colorful Contour Eye Pencil (Waterproof) - 01 Black Lace (Matte)",
        price: 1000,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Eye" ,
        image_url : "https://cdn09.nnnow.com/web-images/medium/styles/V8R32K8UZ4B/1605089862012/1.jpg",
        brand: "Benefit Cosmetics",
        description: "Roller Lash Curling Mascara Mini - Black",
        price: 1240,
        gender: "Female",
        skin_type: "Dry",
    },
    {
        tag: "Eye" ,
        image_url : "https://cdn09.nnnow.com/web-images/medium/styles/JS0V9J1D7T4/1602069322312/1.jpg",
        brand: "Sephora Collection",
        description: "Colorblock Felt Eye Liner - 01 Ink Splash",
        price: 1000,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Eye" ,
        image_url : "https://cdn14.nnnow.com/web-images/medium/styles/0PNESJMK0SH/1585660398356/1.jpg",
        brand: "Stila",
        description: "Smudge Stick Waterproof Eye Liner - Damsel",
        price: 2400,
        gender: "Female",
        skin_type: "Oily",
    },
    {
        tag: "Eye" ,
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/HL30HBWJ5C7/1610447773879/1.jpg",
        brand: "Benefit Cosmetics",
        description: "Roller Liner Matte Liquid Eyeliner - Black",
        price: 2190,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Eye" ,
        image_url : "https://cdn04.nnnow.com/web-images/medium/styles/P8WKE4M0WJM/1603970726294/1.jpg",
        brand: "Sephora Collection",
        description: "Intense Ink Waterproof Liquid Eyeliner - 01 Satin Deep Black",
        price: 1320,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Lip" ,
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/LF9B8BFLIIQ/1519382076017/1.jpg",
        brand: "Sephora Collection",
        description: "Cream Lip Stain - 41 Vintage Rosewood",
        price: 1220,
        gender: "Female",
        skin_type: "Oily",
    },
    {
        tag: "Lip" ,
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/7HL5GOOCM9Z/1606375837442/1.jpg",
        brand: "Sephora Collection",
        description: "Lip Balm - Watermelon",
        price: 592,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Lip" ,
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/D0KN0LPAQC7/1606376778875/1.jpg",
        brand: "Sephora Collection",
        description: "Lip Scrub - Dragon Fruit",
        price: 592,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Lip" ,
        image_url : "https://cdn13.nnnow.com/web-images/medium/styles/A8G6MLDJJNX/1539589327442/1.jpg",
        brand: "Sephora Collection",
        description: "Cream Lip Stain - 94 Cherry Moon",
        price: 1220,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Lip" ,
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/C9O312F9HFG/1539589327445/1.jpg",
        brand: "Sephora Collection",
        description: "Cream Lip Stain - 80 Honeymoon",
        price: 1220,
        gender: "Female",
        skin_type: "Dry",
    },
    {
        tag: "Lip" ,
        image_url : "https://cdn10.nnnow.com/web-images/medium/styles/NHQO3R3X9M3/1533203888871/1.jpg",
        brand: "Sephora Collection",
        description: "#Lipstories Lip Stick - 09 Labyrinth City",
        price: 850,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Lip" ,
        image_url : "https://cdn14.nnnow.com/web-images/medium/styles/DK06L9PZF5K/1631615922987/1.jpg",
        brand: "Huda Beauty",
        description: "Power Bullet Cream Glow -Bossy Brown Empress",
        price: 1995,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Lip" ,
        image_url : "https://cdn11.nnnow.com/web-images/medium/styles/JAFUP5CZG2J/1653300487771/1.jpg",
        brand: "Huda Beauty",
        description: "Liquid Matte Ultra-Comfort Transfer-Proof Lip Stick - Icon",
        price: 1900,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Cheek" ,
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/5CSIO59KJUE/1658901572600/1.jpg",
        brand: "Foreo",
        description: "Puff Paint - Tan",
        price: 2100,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Cheek" ,
        image_url : "https://cdn17.nnnow.com/web-images/medium/styles/J6K1KP8D7YM/1595478174813/1.jpg",
        brand: "Sephora Collection",
        description: "Colorful Blush - 06 Flirt It Up",
        price: 1440,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Cheek" ,
        image_url : "https://cdn12.nnnow.com/web-images/medium/styles/1KL70L0RX12/1653470791179/1.jpg",
        brand: "Stila",
        description: "Putty Blush Bronzer Duo - Bronzed Petunia",
        price: 3300,
        gender: "Female",
        skin_type: "Oily",
    },
    {
        tag: "Cheek" ,
        image_url : "https://cdn14.nnnow.com/web-images/medium/styles/EXV863QQVX5/1583388355411/1.jpg",
        brand: "Benefit Cosmetics",
        description: "High Beam Complexion Highlighter - Satiny Pink",
        price: 1720,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Cheek" ,
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/8YSX9DGULKR/1612354590779/1.jpg",
        brand: "Huda Beauty",
        description: "Tantour Contour & Bronzer Cream - Fair",
        price: 2500,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Cheek" ,
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/WBC0G2TG6MA/1655707422047/1.jpg",
        brand: "Benefit Cosmetics",
        description: "Hoola Matte Bronzer Travel Size Mini - Hoola",
        price: 1630,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Cheek" ,
        image_url : "https://cdn03.nnnow.com/web-images/medium/styles/HN214DZTI05/1595478174807/1.jpg",
        brand: "Sephora Collection",
        description: "Colorful Blush - 29 Fascinated",
        price: 1400,
        gender: "Female",
        skin_type: "Dry",
    },
    {
        tag: "Cheek" ,
        image_url : "https://cdn12.nnnow.com/web-images/medium/styles/1KL70L0RX12/1653470791179/1.jpg",
        brand: "Stila",
        description: "Putty Blush Bronzer Duo - Bronzed Petunia",
        price: 3300,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Nailmakeup" ,
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/1O7T64B0PJ9/1583391378166/1.jpg",
        brand: "Sephora Collection",
        description: "4-Step Buffer",
        price: 380,
        gender: "Female",
        skin_type: "Oily",
    },
    {
        tag: "Nailmakeup" ,
        image_url : "https://cdn15.nnnow.com/web-images/medium/styles/YH2P21FRGZT/1518073456699/1.jpg",
        brand: "Sephora Collection",
        description: "Nourishing Cuticle Care",
        price: 900,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Nailmakeup" ,
        image_url : "https://cdn10.nnnow.com/web-images/medium/styles/JDV714RL1OH/1539586268872/1.jpg",
        brand: "Sephora Collection",
        description: "Color Hit Nail Polish - L178 Rose Bouquet",
        price: 440,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Nailmakeup" ,
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/ZHG9P0YI7RD/1602229677315/1.jpg",
        brand: "Sephora Collection",
        description: "Color Hit Nail Polish - L201 Summer Nostalgia",
        price: 440,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Nailmakeup" ,
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/TA8AJY4P8IM/1602229677290/1.jpg",
        brand: "Sephora Collection",
        description: "Color Hit Nail Polish - L202 Faded Walls",
        price: 440,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Nailmakeup" ,
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/TCOOI9JQ1AM/1518007568868/1.jpg",
        brand: "Sephora Collection",
        description: "Protection Base Coat For Nail",
        price: 660,
        gender: "Female",
        skin_type: "Oily",
    },
    {
        tag: "Nailmakeup" ,
        image_url : "https://cdn00.nnnow.com/web-images/medium/styles/SAGN0SO8BYW/1602229677313/1.jpg",
        brand: "Sephora Collection",
        description: "Color Hit Nail Polish - L200 Palm Leaf",
        price: 440,
        gender: "Female",
        skin_type: "Dry",
    },
    {
        tag: "Nailmakeup" ,
        image_url : "https://cdn16.nnnow.com/web-images/medium/styles/Q617QUL5AL3/1602229677293/1.jpg",
        brand: "Sephora Collection",
        description: "Color Hit Nail Polish - L199 Chic  Tropique",
        price: 440,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Makeupaccessories" ,
        image_url : "https://cdn02.nnnow.com/web-images/medium/styles/USW3I7NTGRE/1583393866808/1.jpg",
        brand: "Sephora Collection",
        description: "Organic Cotton Pads",
        price: 320,
        gender: "Female",
        skin_type: "Oily",
    },
    {
        tag: "Makeupaccessories" ,
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/1O7T64B0PJ9/1583391378166/1.jpg",
        brand: "Sephora Collection",
        description: "4-Step Buffer",
        price: 380,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Makeupaccessories" ,
        image_url : "https://cdn13.nnnow.com/web-images/medium/styles/MA46GGIYAG0/1588243022862/1.jpg",
        brand: "Benefit Cosmetics",
        description: "Brow Grooming Tweezer & Brush",
        price: 2070,
        gender: "Female",
        skin_type: "Dry",
    },
    {
        tag: "Makeupaccessories" ,
        image_url : "https://cdn02.nnnow.com/web-images/medium/styles/VTO8JVRW77F/1631616249436/1.jpg",
        brand: "Huda Beauty",
        description: "GloWish Bronzing Powder Brush",
        price: 2350,
        gender: "Female",
        skin_type: "Combination",
    },
    {
        tag: "Makeupaccessories" ,
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/BLGOSBRPO52/1567571330433/1.jpg",
        brand: "Huda Beauty",
        description: "Face Conceal & Blend Dual-Ended Brush",
        price: 1995,
        gender: "Female",
        skin_type: "Dry",
    },
    {
        tag: "Makeupaccessories" ,
        image_url : "https://cdn10.nnnow.com/web-images/medium/styles/RU1UWVX0TTA/1636383743531/1.jpg",
        brand: "Foreo",
        description: "LUNA 3 for Combination Skin",
        price: 18900,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Makeupaccessories" ,
        image_url : "https://cdn06.nnnow.com/web-images/medium/styles/GSPWW7H4WPV/1635851229309/1.jpg",
        brand: "Foreo",
        description: "ESPADA™ Blue Light Acne Treatment - Pink",
        price: 13900,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Makeupaccessories" ,
        image_url : "https://cdn13.nnnow.com/web-images/medium/styles/IN62GHTXOY8/1491393101968/1.jpg",
        brand: "Foreo",
        description: "24 Double Ended Illuminating Powder Brush",
        price: 3840,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Vegan" ,
        image_url : "https://cdn13.nnnow.com/web-images/medium/styles/K6QHZVJ43H6/1600069770420/1.jpg",
        brand: "Sephora Collection",
        description: "Size Up Immediate Supersized Volume Mascara",
        price: 950,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Vegan" ,
        image_url : "https://cdn18.nnnow.com/web-images/medium/styles/CFBY3RR8BXM/1605172428538/1.jpg",
        brand: "Sephora Collection",
        description: "Care Foundation - 24 N Neutral Medium",
        price: 1800,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Vegan" ,
        image_url : "https://cdn10.nnnow.com/web-images/medium/styles/JSWWXYGP1TD/1605172428550/1.jpg",
        brand: "Sephora Collection",
        description: "Care Foundation - 20 N Neutral Medium",
        price: 1800,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Vegan" ,
        image_url : "https://cdn03.nnnow.com/web-images/medium/styles/GQ496N8OBXA/1605172428541/1.jpg",
        brand: "Sephora Collection",
        description: "Care Foundation - 10 N Neutral Light",
        price: 1800,
        gender: "Feamle",
        skin_type: "Normal",
    },
    {
        tag: "Vegan" ,
        image_url : "https://cdn12.nnnow.com/web-images/medium/styles/GGX0OA2SZQZ/1602578402902/1.jpg",
        brand: "Sephora Collection",
        description: "Size Up Waterproof Mascara - Ultra Black",
        price: 1320,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Vegan" ,
        image_url : "https://cdn01.nnnow.com/web-images/medium/styles/V8222Q2QQDM/1605172428544/1.jpg",
        brand: "Sephora Collection",
        description: "Care Foundation - 14 P Pink Light",
        price: 1800,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Vegan" ,
        image_url : "https://cdn05.nnnow.com/web-images/medium/styles/OQ49Q8DYR7Q/1603951073580/1.jpg",
        brand: "Sephora Collection",
        description: "Care Foundation - 16 Y Golden Light",
        price: 1800,
        gender: "Female",
        skin_type: "Normal",
    },
    {
        tag: "Vegan" ,
        image_url : "https://cdn11.nnnow.com/web-images/medium/styles/UYXYYA25WAO/1603970726287/1.jpg",
        brand: "Sephora Collection",
        description: "Care Foundation - 52 P Pink Tan",
        price: 1440,
        gender: "Female",
        skin_type: "Normal",
    },
    ]
    // Brand names - I have used - Sephora Collection, Mac Cosmetics, Foreo , Stila , Benefit Cosmetics ,Bobby Brown,SmashBox, Huda Beauty
    // makeup -> Face,Eye,Lip,Cheek,Nailmakeup,Makeupaccessories,Vegan: -- tagsha
    // For gender - Male, Female 
    // For skin type - Normal, Oily, Dry, Combination

    localStorage.setItem("makeup_products",JSON.stringify(makeup_array));
    var makeup_obj = JSON.parse(localStorage.getItem("makeup_products")) || [];
    display(makeup_obj);
    
    function display(makeup_array){
        console.log(makeup_array);
         console.log(makeup_array.length);
        
        document.getElementById("product_display").innerHTML = "";
        makeup_array.map(function(elem,index){
            console.log(elem.brand);
            var div2 = document.createElement("div");
            var image = document.createElement("img");
            image.setAttribute("src",elem.image_url);
            image.setAttribute("atl",elem.brand);
            var name = document.createElement("h4");
            name.innerText = elem.brand;
            var info = document.createElement("p");
            info.innerText = elem.description;
            var value = document.createElement("h4");
            value.innerText = "Rs. " + elem.price; 
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
        
        var gender_filtered = makeup_obj;  
        function filter_gender_fun(){
            selected_gender = document.getElementById("filter_gender").value;
            gender_filtered = makeup_obj.filter(function(elem){
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
            display(skintype_filtered);
          }
    }
    