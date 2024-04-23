documentsSliders = document.querySelectorAll('section.documents div.swiper')
projectsSlider = document.querySelector('section.projects div.swiper')
servicesSlider = document.querySelector('section.services div.swiper')
personalSlider = document.querySelector('section.personal div.swiper')
newsSlider = document.querySelector('section.news div.swiper')
advantagesSlider = document.querySelector('section.advantages div.swiper')
aboutSlider = document.querySelector('section.about div.swiper')

documentsSliders.forEach( documentSlider => {
    
    new Swiper(documentSlider, {
        slidesPerView: 2,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        scrollbar: {
            el: documentSlider.parentNode.querySelector('div.swiper-scrollbar')
        },
        navigation: {
            nextEl: documentSlider.parentNode.querySelector('div.swiper-navigation > *:last-child'),
            prevEl: documentSlider.parentNode.querySelector('div.swiper-navigation > *:first-child'),
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            }
        }
    })

})

new Swiper( servicesSlider, {
    slidesPerView: 1.5,
    spaceBetween: 11,
    watchSlidesProgress: true,
    scrollbar: {
        el: servicesSlider.parentNode.querySelector('div.swiper-scrollbar')
    },
    navigation: {
        nextEl: servicesSlider.parentNode.querySelector('div.swiper-navigation > *:last-child'),
        prevEl: servicesSlider.parentNode.querySelector('div.swiper-navigation > *:first-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 11
        }
    }
})

new Swiper( projectsSlider, {
    slidesPerView: 1.5,
    spaceBetween: 11,
    watchSlidesProgress: true,
    scrollbar: {
        el: projectsSlider.parentNode.querySelector('div.swiper-scrollbar')
    },
    navigation: {
        nextEl: projectsSlider.parentNode.querySelector('div.swiper-navigation > *:last-child'),
        prevEl: projectsSlider.parentNode.querySelector('div.swiper-navigation > *:first-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 11
        }
    }
})

new Swiper( personalSlider, {
    slidesPerView: 2,
    spaceBetween: 15,
    grid: false,
    watchSlidesProgress: true,
    scrollbar: {
        el: personalSlider.parentNode.querySelector('div.swiper-scrollbar')
    },
    navigation: {
        nextEl: personalSlider.parentNode.querySelector('div.swiper-navigation > *:last-child'),
        prevEl: personalSlider.parentNode.querySelector('div.swiper-navigation > *:first-child'),
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
                rows: 3,
                fill: 'row'
            }
        }
    }
})

new Swiper( newsSlider, {
    slidesPerView: 1.5,
    spaceBetween: 15,
    watchSlidesProgress: true,
    scrollbar: {
        el: newsSlider.parentNode.querySelector('div.swiper-scrollbar')
    },
    navigation: {
        nextEl: newsSlider.parentNode.querySelector('div.swiper-navigation > *:last-child'),
        prevEl: newsSlider.parentNode.querySelector('div.swiper-navigation > *:first-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
            spaceBetween: 64
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
})

new Swiper( aboutSlider, {
    slidesPerView: 1,
    spaceBetween: 15,
    grid: false,
    watchSlidesProgress: true,
    navigation: {
        nextEl: aboutSlider.parentNode.querySelector('div.swiper-navigation > *:last-child'),
        prevEl: aboutSlider.parentNode.querySelector('div.swiper-navigation > *:first-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 1,
            spaceBetween: 34,
            grid: {
                rows: 2,
                fill: 'row'
            }
        }
    }
})

new Swiper( advantagesSlider, {
    slidesPerView: 1,
    spaceBetween: 15,
    grid: false,
    watchSlidesProgress: true,
    autoHeight: true,
    scrollbar: {
        el: advantagesSlider.parentNode.querySelector('div.swiper-scrollbar')
    },
    navigation: {
        nextEl: advantagesSlider.parentNode.querySelector('div.swiper-navigation > *:last-child'),
        prevEl: advantagesSlider.parentNode.querySelector('div.swiper-navigation > *:first-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 20,
            autoHeight: false,
            grid: {
                rows: 2,
                fill: 'row'
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            autoHeight: false,
            grid: {
                rows: 3,
                fill: 'row'
            }
        }
    }
})
