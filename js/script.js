document.addEventListener("DOMContentLoaded", function () {
    let swipers = [];
    function initSwipers() {
        const sliderElements = document.querySelectorAll('.slider-content');
        if (window.innerWidth <= 768) {
            sliderElements.forEach((slider, index) => {
                if (!slider.classList.contains('swiper-initialized')) {
                    const paginationElement = slider.querySelector('.swiper-pagination-content');
                    if (paginationElement) {
                        swipers[index] = new Swiper(slider, {
                            autoHeight: true,
                            slidesPerView: 1,
                            spaceBetween: 25,
                            pagination: {
                                el: paginationElement,
                                clickable: true,
                            },
                        });
                    }
                }
            });
        } else {
            swipers.forEach((swiper, index) => {
                if (swiper) {
                    swiper.destroy(true, true);
                    swipers[index] = null;
                }
            });
        }
    }
    initSwipers();
    window.addEventListener('resize', initSwipers);

    const header = document.querySelector('.header');
    function handleScroll() {
    if (window.scrollY > 10) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll()


    const headerMenuButton = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    headerMenuButton.addEventListener('click', ()=>{
        headerMenuButton.classList.toggle('active');
        headerMenu.classList.toggle('active');
    })

    const headerUserButton = document.querySelector('.header__user-button');
    const headerUserButtonFooter = document.querySelector('.header__user-button-footer');
    const headerUserContainer = document.querySelector('.header__user-container');
    const headerUserContent = document.querySelector('.header__user-content');
    const headerUserClose = document.querySelector('.header__user-close');
    headerUserButton.addEventListener('click', ()=>{
        event.stopPropagation();
        headerUserContainer.classList.toggle('active');
    });
    headerUserButtonFooter.addEventListener('click', ()=>{
        headerUserContainer.classList.toggle('active');
        headerMenuButton.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
    headerUserClose.addEventListener('click', ()=>{
        headerUserContainer.classList.remove('active');
    })

    document.addEventListener('click', (event) => {
        if (!headerUserContent.contains(event.target) && !headerUserButton.contains(event.target) && !headerUserButtonFooter.contains(event.target)) {
            headerUserContainer.classList.remove('active');
        }
    });

    const HeaderUserButtons = document.querySelectorAll(".header__user-select");
    const HeaderUserForms = document.querySelectorAll(".header__user-form");
    HeaderUserButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            HeaderUserButtons.forEach(btn => btn.classList.remove("active"));
            HeaderUserForms.forEach(form => form.classList.remove("active"));
            button.classList.add("active");
            HeaderUserForms[index].classList.add("active");
        });
    });
});


if (document.querySelector('.logoBlock__slider')) {
    const logoBlockSliderElements = document.querySelector('.logoBlock__slider');
    const logoBlockPaginationElement = logoBlockSliderElements.querySelector('.swiper-pagination-content');
    let logoBlockSlider = new Swiper(logoBlockSliderElements, {
        autoHeight: true,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: logoBlockPaginationElement,
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 6,
            },
            1280: {
                slidesPerView: 8,
            }
        }
    });
}