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
 

 
 //js for shop button
 const side=document.getElementById('side');
 side.addEventListener("click",()=> {
     window.location.href = "shop.html";
});
 //js for shop button
 const side2=document.getElementById('side2');
 side2.addEventListener("click",()=> {
     window.location.href = "index.html";
});
    // js for  shop button
    const shop=document.getElementById('shop');
    shop.addEventListener("click",()=> {
    window.location.href = "shop.html";
});

// js for upper slide
const upper=document.getElementById('upper');
upper.addEventListener('click', () => {
    // Scroll the window to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});
//
const previous = document.getElementById('previous');
previous.addEventListener("click", () => {
    window.location.href = "index.html";
});
//upper
const up = document.getElementById('upper');
up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//js for shop.html
function scrollToServices(item){
    document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
    
};

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default anchor behavior

       // Get the target section
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'start' // Align the top of the section
    });
    // Close the menu after clicking (optional)
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});