// ==========================
// Navbar Scroll & Hide Logic
// ==========================
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Change navbar background on scroll
    if (currentScroll > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.25)";
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.15)";
    }

    // Hide navbar when scrolling down
    if (currentScroll > lastScrollTop && currentScroll > 80) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});



const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = mobileMenu.querySelectorAll("a");

// Toggle on hamburger click
menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileMenu.classList.toggle("show");
    // Also toggle slide-in effect for mobile menu
    mobileMenu.style.right = mobileMenu.classList.contains("show") ? "0%" : "-100%";
});

// Close menu when clicking any link
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        mobileMenu.classList.remove("show");
        menuToggle.classList.remove("active");
        mobileMenu.style.right = "-100%";
    });
});

// Close menu on link click (for any .mobile-menu a not already handled)
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        menuToggle.classList.remove("active");
        mobileMenu.style.right = "-100%";
    });
});

// ==========================
// Smooth Scrolling
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ==========================
// Portfolio Filtering
// ==========================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        portfolioItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = 1, 50);
            } else {
                item.style.opacity = 0;
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});


// scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
const homeSection = document.getElementById("home");

// Show button when user scrolls past Home section
window.addEventListener("scroll", function () {
    const homeHeight = homeSection.offsetHeight;
    if (window.scrollY > homeHeight) {
        scrollTopBtn.style.display = "block";
        scrollTopBtn.style.opacity = "1";
    } else {
        scrollTopBtn.style.opacity = "0";
        setTimeout(() => {
            scrollTopBtn.style.display = "none";
        }, 300); // Matches transition time
    }
});

// Smooth scroll to top
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// ==========================
// Testimonial Carousel (Swiper)
// ==========================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// ==========================
// Contact Card Click Animation
// ==========================
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.96)';
        setTimeout(() => card.style.transform = '', 150);
    });
});
