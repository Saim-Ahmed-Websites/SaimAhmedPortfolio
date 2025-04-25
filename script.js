//Navbar color changing
window.addEventListener("scroll", ()=>{
    let header = document.querySelector ("header")
    if (window.scrollY > 30) {
        header.classList.add("scrolled")
    }
    else{
        header.classList.remove("scrolled")
    }
})
//Navbar color changing

// Servies card
document.querySelectorAll('.drpdown').forEach(drop => {
  drop.addEventListener('click', function () {
    this.closest('.serviceCards').classList.toggle('active');
  });
});
// Servies card

// nav hamburger
let burger = document.querySelector(".burger");
let leftnav = document.querySelector(".leftnav");

burger.addEventListener('click',(e)=>{
  leftnav.classList.toggle('slide')
})
