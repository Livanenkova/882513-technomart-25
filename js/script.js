var link = document.querySelector(".button-map");

      var popup = document.querySelector(".modal-feedback");

      var close = popup.querySelector(".close-feedback");

      var form = popup.querySelector("form");

      var name = popup.querySelector("[feedback-user-name=name]");

      var email = popup.querySelector("[feedback-user-email=email]");


      link.addEventListener("click", function (evt) {
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

       if (!login.value || !password.value) {
      evt.preventDefault();
      console.log("Нужно ввести e-mail ");
    }
