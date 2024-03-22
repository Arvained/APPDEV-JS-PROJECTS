/*PARA SA POKEBALL*/
(function () {
    function togglePokeball(event) {
      const pokeball = document.getElementById("pokeball-1");
      if (pokeball.classList.contains("open")) {
        pokeball.classList.remove("open");
      } else {
        pokeball.classList.add("open");
      }
    }
    const button = document.getElementById("toggle-button1");
    button.addEventListener("click", togglePokeball);
  })();
  
  (function () {
    function togglePokeball(event) {
      const pokeball = document.getElementById("pokeball-2");
      if (pokeball.classList.contains("open")) {
        pokeball.classList.remove("open");
      } else {
        pokeball.classList.add("open");
      }
    }
    const button = document.getElementById("toggle-button");
    button.addEventListener("click", togglePokeball);
  })();