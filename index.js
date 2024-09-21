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
 





 