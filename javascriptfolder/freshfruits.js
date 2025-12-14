let mainBtn = document.querySelector(".main-btn");
let leftMenu = document.querySelector(".left-menu");
let rightMenu = document.querySelector(".right-menu");
let leftItems = document.querySelectorAll(".left-item");
let subBoxes = document.querySelectorAll(".sub-box"); 
mainBtn.addEventListener("mouseenter", () => {
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
    id:1,
    name:"Blueberry",
    image:"./freshfruitsimages/blueberry.jpg",
    price:290,

},{
    id:2,
    name:"Apple",
    image:"./freshfruitsimages/apple royal gala.jpeg",
    price:379,
},{
    id:3,
    name:"apricots",
    image:"./freshfruitsimages/Apricots.png",
    price:259,

},{
    id:4,
    name:"longonfruit",
     image:"./freshfruitsimages/longon fruit.jpg",
     price:355,
},{
    id:5,
    name:"papayasalad",
      image:"./freshfruitsimages/papaya salad.jpg",
     price:200,
},{
       id:6,
    name:"pineapple",
      image:"./freshfruitsimages/pineapple.jpg",
     price:288,

},{
      id:7,
     name:"pomegranate",
      image:"./freshfruitsimages/pomegranate salad 1pac.jpg",
     price:350,
    
},{
      id:8,
     name:"Redpears",
      image:"./freshfruitsimages/redpears.jpg",
     price:250,
    
},{
        id:9,
     name:"Guava",
      image:"./freshfruitsimages/thailand guava.jpg",
     price:180,
},{
    id:10,
    name:"watermelon",
      image:"./freshfruitsimages/watermelon.jpg",
     price:280,
}];




// function showProducts() {
//     let freshfruitscontainer = " ";

//     freshfruitsproducts.forEach(fruits => {
//         freshfruitscontainer += `
//         <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//             <div class="card product-card h-100 text-center p-3">

//                 <img src="${fruits.image}" class="card-img-top img-fluid" alt="${fruits.name}">

//                 <div class="card-body">
//                     <h6>${fruits.name}</h6>

//                     <select class="form-select mb-2">
//                         <option>1 Pc</option>
//                     </select>

//                     <p class="fw-bold text-success mb-3">₹ ${fruits.price}</p>

//                     <button class="btn btn-outline-success add-btn">+</button>
//                 </div>

//             </div>
//         </div>
//         `;
//     });

//     document.getElementById("freshfruitscontainer").innerHTML = freshfruitscontainer;
// }

//showProducts();


function showProducts(products){
    let html = "";

    if(products.length === 0){
        html = `<h5 class="text-center text-danger">No products found</h5>`;
    }

    products.forEach(item => {
        html += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card product-card text-center p-3 h-100">
                <img src="${item.image}" class="img-fluid mb-2" alt="${item.name}">
                <h6>${item.name}</h6>
                <select class="form-select my-2">
                    <option>1 Pc</option>
                </select>
                <p class="fw-bold text-success">₹ ${item.price}</p>
                <button class="btn btn-outline-success  addtocartbtn"id="addtocartbtn" onmouseover="onhovering()" >Add to Cart</button>
            </div>
        </div>`;
    });

    document.getElementById("freshfruitscontainer").innerHTML = html;
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