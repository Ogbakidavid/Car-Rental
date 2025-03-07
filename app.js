const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-toggle]");
const menuLinks = document.querySelector("[data-menu]");
const overlay = document.querySelector("[data-overlay");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    overlay.classList.toggle("active");
});

menuLinks.addEventListener("click", function() {
    menuLinks.classList.remove("active");
    menu.setAttribute("class", "navbar__toggle");
    overlay.classList.remove("active");
});

window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});



const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("active");

const price = ["225", "450", "375", "600", "750", "255"];
const priceEL = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
    if(eventName === "slideChangeTransitionStart"){
        const index = args && args[0].realIndex;
        console.log("Swiper index:", index);
        if(index !== undefined) {
            priceEL.innerHTML = price[index];
            selectCards.forEach(item => {
            item.classList.remove("active");
            });
            selectCards[index].classList.add("active");
            console.log("Updated price:", price[index]);
            console.log("Updated active card:", selectCards[index]);
        } else {
            console.log("Index is undefined");
        } 
    } else {
        console.log("Event name is not slideChangeTransitionStart");
    }
}

const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        depth: 500,
        modifier: 1,
        scale: 0.95,
        slideShadows: false,
        stretch: -100,
    },

    on: {
        slideChangeTransitionStart: function() {
            updateSwiperImage("slideChangeTransitionStart", [this]);
        }
    }
})

const banner = document.querySelector(".banner__wrapper");

const bannerContent = Array.from(banner.children)

bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
})

// =========== Scroll Reveal =============
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 400,
});

sr.reveal(`h1, .story-title, .download__img, .news-title`);

sr.reveal(`.form-content`, {
    delay: 1000,
});

sr.reveal(`.content__img, .location__btn`, {
    delay: 1500,
});

sr.reveal(`.about__title`, {
    origin: 'top',
});

sr.reveal(`.about__card-1`, {
    origin: 'left',
    delay: 600,
    distance: '60px',
    interval: 100,
});

sr.reveal(`.about__card-2`, {
    origin: 'right',
    delay: 800,
    distance: '80px',
    interval: 200,
});

sr.reveal(`.location__title`, {
    origin: 'left'
});

sr.reveal(`.location__desc, .download-title`, {
    origin: 'left',
    delay: 700,
});

sr.reveal(`.location__img`, {
    origin: 'right',
    delay: 1200,
});

sr.reveal(`.story-card`, {
    delay: 1200,
    distance: '100px',
    interval: 300,
})

sr.reveal(`.download__link`, {
    origin: 'left',
    delay: 1200,
})

sr.reveal(`.form-news`, {
    delay: 1000,
})

sr.reveal(`.footer__container`, {
    delay: 1500,
})
