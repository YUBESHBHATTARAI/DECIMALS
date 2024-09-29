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
 
 const side=document.getElementById('side');
 side.addEventListener("click",()=> {
     window.location.href = "shop.html";
});
    
    const shop=document.getElementById('shop');
    shop.addEventListener("click",()=> {
    window.location.href = "shop.html";
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

//clothes
const clothes=document.getElementById('clothes');
clothes.addEventListener('click', () => {
    // Scroll the window to the center
    window.scrollTo({
       top: 40,
        behavior: 'smooth' // Smooth scrolling
    });
});




document.getElementById("clothes").addEventListener("click", function() {
    // Calculate the center of the page
    const x = (document.documentElement.scrollWidth - window.innerWidth) / 2;
    
    // Scroll to the center
    window.scrollTo({
        top: "glass",
        
        behavior: "smooth" // For smooth scrolling
    });
});
