let qty = 1;
let price = 114;

function changeQty(val){
    qty += val;
    if(qty < 1) qty = 1;
    document.getElementById("qty").value = qty;
    document.getElementById("totalPrice").innerText = (qty * price).toFixed(2);
    document.getElementById("summaryTotal").innerText = (qty * price).toFixed(2);
}