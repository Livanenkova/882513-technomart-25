for(var linkBuy=document.querySelectorAll(".buy-button"),cart=document.querySelector(".modal-cart"),cart_btn=document.querySelectorAll(".buy-button"),close_cart=cart.querySelector(".close-cart"),i=0;i<linkBuy.length;i++)linkBuy[i].addEventListener("click",function(t){t.preventDefault(),cart.classList.add("modal-show")});close_cart.addEventListener("click",function(t){t.preventDefault(),cart.classList.remove("modal-show")});
