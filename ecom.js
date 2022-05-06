let cartIcon = document.querySelector("#cart-icon")
let cartMenu = document.querySelector(".cart")
let cartRemove = document.querySelector("#close-cart")

cartIcon.onclick = () =>{
    cartMenu.classList.add("active");
};
cartRemove.onclick = () =>{
    cartMenu.classList.remove("active");
};




// cart working.js
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready()
}

function ready(){
    var removeCartButton = document.getElementsByClassName("cart-remove");
    console.log(removeCartButton)
    for(var i = 0; i < removeCartButton.length; i++){
        var button = removeCartButton[i]
        button.addEventListener("click",removeCartItem)
    }
}

//remove item from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}

