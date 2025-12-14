function navbarsjs(){


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
//navbarjsover

// Every wonders js 
let glow =document.getElementById("glowimage");
let glowtext=document.getElementById("glowtext");
glow.addEventListener("mouseenter",()=>{
glowtext.style.display="block"
});
glow.addEventListener("mouseleave",()=>{
glowtext.style.display="none"
});

let snacksimgae=document.getElementById("snacksimgae");
let snackstext=document.getElementById("snackscontent");

snacksimgae.addEventListener( "mouseenter",()=>{
snackstext.style.display="block"
});
snacksimgae.addEventListener("mouseleave",()=>{
snackstext.style.display="none"
});

let Nutritiousimage=document.getElementById("Nutritiousimage");
let Nutritioustext=document.getElementById("Nutritioustext");
Nutritiousimage.addEventListener( "mouseenter",()=>{
Nutritioustext.style.display="block"
});
Nutritiousimage.addEventListener("mouseleave",()=>{
Nutritioustext.style.display="none"
});


let divineimage=document.getElementById("divineimage");
let divinetext=document.getElementById("divinetext");

divineimage.addEventListener( "mouseenter",()=>{
divinetext.style.display="block"
});
divineimage.addEventListener("mouseleave",()=>{
divinetext.style.display="none"
});

let fabricimage=document.getElementById("fabricimage");
let fabrictext=document.getElementById("fabrictext");

fabricimage.addEventListener("mouseenter",()=>{
fabrictext.style.display="block"
});
fabricimage.addEventListener("mouseleave",()=>{
fabrictext.style.display="none"
});


//daily needs js 
let Freshenersimage =document.getElementById("Freshenersimage");
let Freshenerstext=document.getElementById("Freshenerstext");

Freshenersimage.addEventListener( "mouseenter",()=>{
Freshenerstext.style.display="block"
});
Freshenersimage.addEventListener("mouseleave",()=>{
Freshenerstext.style.display="none"
});


let oralcareimage =document.getElementById("oralcareimage");
let oralproductext=document.getElementById("oralproductext");

oralcareimage.addEventListener( "mouseenter",()=>{
oralproductext.style.display="block"
});
oralcareimage.addEventListener("mouseleave",()=>{
oralproductext.style.display="none"
});

let westernmaniaimage =document.getElementById("westernmaniaimage");
let weternmaniatext =document.getElementById("weternmaniatext");

westernmaniaimage.addEventListener( "mouseenter",()=>{
weternmaniatext.style.display="block"
});
westernmaniaimage.addEventListener("mouseleave",()=>{
weternmaniatext.style.display="none"
});

let bathneedimage  =document.getElementById("bathneedimage");
let bathtext =document.getElementById("bathtext");

bathneedimage.addEventListener( "mouseenter",()=>{
bathtext.style.display="block"
});
bathneedimage.addEventListener("mouseleave",()=>{
bathtext.style.display="none"
});

let soothingimage =document.getElementById("soothingimage");
let soothingtext =document.getElementById("soothingtext");

soothingimage.addEventListener( "mouseenter",()=>{
soothingtext.style.display="block"
});
soothingimage.addEventListener("mouseleave",()=>{
soothingtext.style.display="none"
});


//homepageadtocart start

const homeProductData = {
infant: [
{
img: "./images/fruits.jpg",
name: "Himalaya Baby Cream",
size: ["50 ml", "100 ml"],
price: "₹103"
},
{
img: "https://via.placeholder.com/200",
name: "Himalaya Baby Massage Oil",
size: ["100 ml", "200 ml"],
price: "₹136"
},
{
img: "https://via.placeholder.com/200",
name: "Himalaya Diaper Rash Cream",
size: ["50 gm", "100 gm"],
price: "₹145"
}
],

choco: [
{ img:"./images/fruits.jpg", name:"Kitkat Party Pack", size:["10 pcs"], price:"₹120" },
{ img:"https://via.placeholder.com/200", name:"Dairy Milk Silk", size:["60 gm"], price:"₹85" },
{ img:"https://via.placeholder.com/200", name:"Ferrero Rocher 3 pc", size:["3 pcs"], price:"₹150" }
],

hair: [
{ img:"https://via.placeholder.com/200", name:"Dove Shampoo", size:["180 ml"], price:"₹210" },
{ img:"https://via.placeholder.com/200", name:"Loreal Conditioner", size:["180 ml"], price:"₹199" },
{ img:"https://via.placeholder.com/200", name:"Livon Serum", size:["50 ml"], price:"₹250" }
],

men: [
{ img:"https://via.placeholder.com/200", name:"Beardo Oil", size:["30 ml"], price:"₹300" },
{ img:"https://via.placeholder.com/200", name:"Nivea Men Cream", size:["150 ml"], price:"₹190" },
{ img:"https://via.placeholder.com/200", name:"Park Avenue Deodorant", size:["150 ml"], price:"₹160" }
],
};


//home add to cart content
const slider = document.getElementById("productSlider");
// LOAD PRODUCTS FUNCTION
function loadProducts(cat) {
slider.innerHTML = "";
homeProductData[cat].forEach(p => {
slider.innerHTML +=`
<div class="product-box">
<img src="${p.img}" width="150" class="d-block mx-auto mb-2">
<h6>${p.name}</h6>
<select class="form-select mt-2 mb-2">
${p.size.map(s => `<option>${s}</option>`).join("")}
</select>
<p class="fw-bold text-danger">${p.price}</p>
<button class="btn  w-100 addtocart" onmouseover="onhovering()">Add to Cart</button>
</div>
`;
});
}

// DEFAULT LOAD
loadProducts("infant");
// CATEGORY CLICK
document.querySelectorAll(".catbuttons").forEach(btn => {
btn.addEventListener("click", () => {
document.querySelectorAll(".catbuttons").forEach(x => x.classList.remove("active"));
btn.classList.add("active");
loadProducts(btn.dataset.cat);
});
});

// SLIDER ARROWS
document.querySelector(".arrow-left").onclick = () => slider.scrollLeft -= 300;
document.querySelector(".arrow-right").onclick = () => slider.scrollLeft += 300;

function onhovering(){
let addtocart=document.querySelectorAll(".addtocart");
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

// home add to cart over

//navbarcartquantity
function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").innerHTML = totalQty;
}
updateCartBadge()