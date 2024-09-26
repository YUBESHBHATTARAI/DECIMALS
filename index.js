//js 
 const hamburger = document.getElementById('hamburger');
 const mobileNav = document.getElementById('mobile-nav');
 
 if (hamburger && mobileNav) {
     hamburger.addEventListener('click', () => {
         mobileNav.classList.toggle('-translate-x-full');
     });
 } else {
     console.error('Elements with IDs "hamburger" or "mobile-nav" not found.');
 }
 

 //  section
 const section=document.getElementById('section');
 
 const side=document.getElementById('side');
side.addEventListener("click", ()=> {
    window.location.href = "section.html";
});


// upper slide
const upper=document.getElementById('upper');
upper.addEventListener('click', () => {
    // Scroll the window to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});

