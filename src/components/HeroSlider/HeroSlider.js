import Swiper from "swiper";

import {
    Navigation,
    Pagination,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


/* =========================================
   HERO SLIDER ICONS
========================================= */

import rightArrow from "../../assets/images/slider/right.svg";
import leftArrow from "../../assets/images/slider/left.svg";


/* =========================================
   HERO SLIDER
========================================= */

export default function HeroSlider() {

    return `

        <section
            class="w-full mt-0"
            dir="rtl"
        >

            <!-- =========================================
                 SLIDER
            ========================================= -->

            <div class="swiper heroSwiper w-full overflow-hidden">

                <div class="swiper-wrapper">


                    <!-- =========================================
                         Slide 1
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/1.gif"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 2
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/2.gif"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 3
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/3.gif"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 4
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/4.webp"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 5
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/5.webp"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 6
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/6.gif"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 7
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/7.gif"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 8
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/8.webp"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 9
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/9.webp"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                    <!-- =========================================
                         Slide 10
                    ========================================= -->

                    <div class="swiper-slide">

                        <img
                            src="/src/assets/images/slider/10.gif"
                            alt="اسلایدر دیجی‌کالا"
                            class="
                                block
                                w-full
                                h-70
                                md:h-95
                                lg:h-107.5
                                object-cover
                            "
                        >

                    </div>


                </div>


                <!-- =========================================
                     PAGINATION
                ========================================= -->

                <div class="swiper-pagination"></div>


                <!-- =========================================
                     RIGHT ARROW
                     دکمه سمت راست
                ========================================= -->

<button
    class="
        hero-arrow
        hero-prev

        absolute
        right-5
        bottom-2
        -translate-y-1/2

        w-10
        h-10

        bg-white

        rounded-full

        shadow-md

        flex
        items-center
        justify-center

        z-30

        opacity-0

        transition-all
        duration-300

        hover:scale-105
    "
    aria-label="قبلی"
>

    <img
        src="${leftArrow}"
        class="w-4 h-4"
    >

</button>

                <!-- =========================================
                     LEFT ARROW
                     دکمه سمت چپ
            
                 ========================================= -->

<button
    class="
        hero-arrow
        hero-next

        absolute
        right-16
        bottom-2
        -translate-y-1/2

        w-10
        h-10

        bg-white

        rounded-full

        shadow-md

        flex
        items-center
        justify-center

        z-30

        opacity-0

        transition-all
        duration-300

        hover:scale-105
    "
    aria-label="بعدی"
>

    <img
        src="${rightArrow}"
        class="w-4 h-4"
    >

</button>


            </div>

        </section>

    `;
}


export function initHeroSlider() {


    const slider = document.querySelector(".heroSwiper");


    if (!slider) return;



    const arrows = document.querySelectorAll(".hero-arrow");



    // مخفی کردن اولیه فلش‌ها

    arrows.forEach((arrow)=>{

        arrow.style.opacity = "0";

        arrow.style.visibility = "hidden";

        arrow.style.transition = "opacity .3s ease";

    });



    // نمایش فلش هنگام ورود موس

    slider.addEventListener("mouseenter",()=>{


        arrows.forEach((arrow)=>{

            arrow.style.opacity = "1";

            arrow.style.visibility = "visible";

        });


    });



    // مخفی شدن فلش هنگام خروج موس

    slider.addEventListener("mouseleave",()=>{


        arrows.forEach((arrow)=>{

            arrow.style.opacity = "0";

            arrow.style.visibility = "hidden";

        });


    });





    new Swiper(".heroSwiper", {


        modules: [

            Navigation,

            Pagination,

            Autoplay,

        ],



        loop:true,


        slidesPerView:1,


        spaceBetween:0,



        autoplay:{


            delay:4000,


            disableOnInteraction:false,


        },



        pagination:{


            el:".swiper-pagination",


            clickable:true,


        },



navigation:{
    nextEl:".hero-next",
    prevEl:".hero-prev",
},


    });


}