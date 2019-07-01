var link = document.querySelector(".button-map");

var linkModal = document.querySelector(".button-feedback");

var linkBuy = document.querySelectorAll(".buy-button");

var linkBuy = document.querySelectorAll(".buy-button");

var popup = document.querySelector(".modal-feedback");

var close = popup.querySelector(".close-feedback");

var form = popup.querySelector("form");

var map = document.querySelector(".modal-map");

var map_btn = document.querySelector(".map");

var close_map = map.querySelector(".close-map");

 var cart = document.querySelector(".modal-cart");

var cart_btn = document.querySelectorAll(".buy-button");

var close_cart = cart.querySelector(".close-cart");



linkModal.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.add("modal-show");
 name.focus();
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
});
form.addEventListener("submit", function (evt) {
evt.preventDefault();
});
map_btn.addEventListener("click", function (evt) {
evt.preventDefault();
map.classList.add("modal-show");
});

close_map.addEventListener("click", function (evt) {
evt.preventDefault();
map.classList.remove("modal-show");
});

for(var i = 0; i < linkBuy.length; i++){
  linkBuy[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  cart.classList.add("modal-show");
  });
}

close_cart.addEventListener("click", function (evt) {
evt.preventDefault();
cart.classList.remove("modal-show");
});
