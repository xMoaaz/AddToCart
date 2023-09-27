// Set Variables
var products = document.querySelectorAll('.list li');
var cart = document.getElementById('cart');
var btn = document.querySelector('#btn');
var totalPrice = document.querySelector('#totalPrice')
var result = 0

products.forEach(function(item){
    item.onclick = function() {
        cart.innerHTML += item.textContent + " --- "
        if(cart.innerHTML != "") {
            btn.style.display = "block"
        }

        result += +item.getAttribute('price')
    }
    
})

btn.onclick = function() {
    totalPrice.innerHTML = result + "LE";
}

