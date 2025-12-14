function navbarsjs(){
let mainBtn = document.querySelector(".main-btn");
let leftMenu = document.querySelector(".left-menu");
let rightMenu = document.querySelector(".right-menu");
let leftItems = document.querySelectorAll(".left-item");
let subBoxes = document.querySelectorAll(".sub-box"); 
mainBtn.addEventListener("mouseenter",() => {
leftMenu.style.display = "block";
});
// When hover left menu
leftMenu.addEventListener("mouseenter", () => {
leftMenu.style.display = "block";
});
// Hide menus when mouse leaves both menus
leftMenu.addEventListener("mouseleave", () => {
setTimeout(() => {
if (!rightMenu.matches(":hover")) {
leftMenu.style.display = "none";
rightMenu.style.display = "none";
}
}, 100);
});

rightMenu.addEventListener("mouseleave", () => {
leftMenu.style.display = "none";
rightMenu.style.display = "none";
});

// Left item hover → show right content
leftItems.forEach(item => {
item.addEventListener("mouseenter", () => {
const target = item.getAttribute("data-target");
rightMenu.style.display = "block";
subBoxes.forEach(box => box.style.display = "none");
document.getElementById(target).style.display = "block";
});
});


}
navbarsjs();

// mobile navbar

function openMenu() {
document.getElementById("mobileMenu").classList.add("active");
document.getElementById("categoryMenu").style.display = "none";
}

function closeMenu() {
document.getElementById("mobileMenu").classList.remove("active");
closeSubMenu(); // reset submenu
}

function openSubMenu() {
document.getElementById("mainMenu").style.display = "none";
document.getElementById("categoryMenu").style.display = "block";
}

function closeSubMenu() {
document.getElementById("mainMenu").style.display = "block";
document.getElementById("categoryMenu").style.display = "none";
}

//whatspp chats
let navbarforlab=document.getElementById("navlab");
let topBtn = document.getElementById("topBtn");
window.onscroll = function () {
if (document.documentElement.scrollTop > 10) {
topBtn.style.display = "flex";
navbarforlab.style.marginTop="-55px"
} else {
topBtn.style.display = "none";
navbarforlab.style.marginTop="-8px"
}
};
topBtn.onclick = function () {
window.scrollTo({
top: 0,
behavior:"smooth"
});
};


const freshfruitsproducts=[{
    id:11,
    name:"tomato",
    image:"./vegetablesimage/tomato.jpg",
    price:100,

},{
    id:12,
    name:"Green peas",
    image:"./vegetablesimage/green peas.jpg",
    price:150,
},{
    id:13,
    name:"Ginger",
    image:"./vegetablesimage/giner.jpg",
    price:80,

},{
    id:14,
    name:"JackFruits",
      image:"./vegetablesimage/jackfruits.jpg",
     price:70,
},{
    id:15,
    name:"keerai",
      image:"./vegetablesimage/keerai.jpg",
     price:65,
},{
       id:16,
    name:"lemon",
      image:"./vegetablesimage/lemon.jpg",
     price:195,

},{
      id:17,
     name:"onion",
      image:"./vegetablesimage/onion.jpg",
     price:98,
    
},{
      id:18,
     name:"Ootycarrot",
      image:"./vegetablesimage/ootycarrot.jpg",
     price:110,
    
},{
        id:19,
     name:"Bitterground",
      image:"./vegetablesimage/bittergourd.jpg",
     price:120,
},{
    id:20,
    name:"Ivy gourd",
    image:"./vegetablesimage/ivy gourd.jpeg",
     price:130,
}];



function showProducts(products){
    let fruitscontain = "";

    if(products.length === 0){
        fruitscontain = `<h5 class="text-center text-danger">No products found</h5>`;
    }

    products.forEach(item => {
        fruitscontain += `
            
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        
            <div class="card product-card text-center p-3 h-100">
                <img src="${item.image}" class="img-fluid mb-2" alt="${item.name}">
                <h6>${item.name}</h6>
                <select class="form-select my-2">
                    <option>1 kg</option>
                </select>
                <p class="fw-bold text-success">₹ ${item.price}</p>
                <button onclick="addToCart(${item.id})" class="btn btn-outline-success  addtocartbtn" id="#addtocartbuttn"; onmouseover="onhovering()">Add to Cart</button>
            </div>
    
        </div>`
        
        ;
    });

    document.getElementById("freshfruitscontainer").innerHTML =fruitscontain;
}

// load all products initially
showProducts(freshfruitsproducts);

function searchProducts(){
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const filteredProducts = freshfruitsproducts.filter(freshfruitsproducts =>
        freshfruitsproducts.name.toLowerCase().includes(searchValue)
    );
    showProducts(filteredProducts);
}

function mobilesearchproducts(){

    const searchcontent= document.getElementById("mobilesearchInput").value.toLowerCase();
     const mobilefilteredProducts = freshfruitsproducts.filter(freshfruitsproducts =>
        freshfruitsproducts.name.toLowerCase().includes(searchcontent)
     );
     showProducts(mobilefilteredProducts);

}


function onhovering(){
let addtocart=document.querySelectorAll(".addtocartbtn");
addtocart.forEach(cart=>{
cart.addEventListener("mouseenter",()=>{
if (cart.matches(":hover")) {
cart.innerHTML=`<i class="bi bi-cart-plus"></i>`
}
})
cart.addEventListener("mouseleave",()=>{
cart.innerHTML=`Add to Cart`
})
})

};


//add to cart process


 function addToCart(id){
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let item = freshfruitsproducts.find(p => p.id === id);

        let exist = cart.find(c => c.id === id);

        if(exist){
            exist.qty++;
        }else{
            cart.push({ ...item, qty: 1 });
        }
          localStorage.setItem("cart", JSON.stringify(cart));
          
        
    }
//   


//navbarcartquantity

function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  document.getElementById("cartCount").innerText = totalQty;
}
updateCartBadge()


//navbartcartupdate
function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").innerText = totalQty;
     document.getElementById("").innerText = totalQty;
}
updateCartBadge()


