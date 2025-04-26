      // nav color changer
      window.addEventListener("scroll", () => {
        let header = document.querySelector("header");
        if (window.scrollY > 30) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
      // Servies card
      document.querySelectorAll(".drpdown").forEach((drop) => {
        drop.addEventListener("click", function () {
          this.closest(".serviceCards").classList.toggle("active");
        });
      });
      // Servies card

      // nav hamburger
      let burger = document.querySelector(".burger");
      let leftnav = document.querySelector(".leftnav");

      burger.addEventListener("click", (e) => {
        leftnav.classList.toggle("slide");
      });
      window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        if (loader) {
          loader.classList.add("hidden");
        }
      });