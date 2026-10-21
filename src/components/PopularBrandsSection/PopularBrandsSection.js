import Swiper from "swiper";

import {
    Navigation,
    Autoplay,
} from "swiper/modules";

import "swiper/css";

import "swiper/css/navigation";


/* =========================================
   BRAND LOGOS
========================================= */

import raniLogo from "../../assets/images/brands/rani.webp";
import torabikaLogo from "../../assets/images/brands/torabika.webp";
import charmMashhadLogo from "../../assets/images/brands/charm-mashhad.webp";
import adataLogo from "../../assets/images/brands/adata.webp";
import chiniZarrinLogo from "../../assets/images/brands/chini-zarrin.webp";
import medipLogo from "../../assets/images/brands/medip.webp";
import xvisionLogo from "../../assets/images/brands/xvision.webp";
import mayaHomeLogo from "../../assets/images/brands/maya-mahak.webp";
import netrebitLogo from "../../assets/images/brands/netrebit.webp";
import huaweiLogo from "../../assets/images/brands/huawei.webp";
import euroVitalLogo from "../../assets/images/brands/euro-vital.webp";
import lafarrerrLogo from "../../assets/images/brands/lafarrerr.webp";
import shiaomiLogo from "../../assets/images/brands/shiaomi.webp";
import myLogo from "../../assets/images/brands/my.webp";
import samsungLogo from "../../assets/images/brands/samsung.webp";
import activeLogo from "../../assets/images/brands/active.webp";
import saeiLogo from "../../assets/images/brands/saei.webp";
import kalaLogo from "../../assets/images/brands/kala.webp";
import vitalayerLogo from "../../assets/images/brands/vitalayer.webp";
import fulicaLogo from "../../assets/images/brands/fulica.webp";

/* =========================================
   BRANDS
========================================= */

const brands = [

    {
        name: "رانی",
        logo: raniLogo,
    },

    {
        name: "ترابیکا",
        logo: torabikaLogo,
    },

    {
        name: "چرم مشهد",
        logo: charmMashhadLogo,
    },

    {
        name: "ای دیتا",
        logo: adataLogo,
    },

    {
        name: "چینی زرین",
        logo: chiniZarrinLogo,
    },

    {
        name: "مدیپ",
        logo: medipLogo,
    },

    {
        name: "ایکس ویژن",
        logo: xvisionLogo,
    },

    {
        name: "مایا هوم",
        logo: mayaHomeLogo,
    },

    {
        name: "نتربیت",
        logo: netrebitLogo,
    },

    {
        name: "هواوی",
        logo: huaweiLogo,
    },

    {
        name: "یورونیتال",
        logo: euroVitalLogo,
    },

    {
        name: "لافارر",
        logo: lafarrerrLogo,
    },

    {
        name: "شیائومی",
        logo: shiaomiLogo,
    },

        {
        name: "مای",
        logo: myLogo,
    },

    {
        name: "سامسونگ",
        logo: samsungLogo,
    },

    {
        name: "اکتیو",
        logo: activeLogo,
    },

    {
        name: "ساعی",
        logo: saeiLogo,
    },

    {
        name: "کاله",
        logo: kalaLogo,
    },

        {
        name: "ویتالیر",
        logo: vitalayerLogo,
    },

        {
        name: "فولیکا",
        logo: fulicaLogo,
    },

];


/* =========================================
   POPULAR BRANDS SECTION
========================================= */

export default function PopularBrandsSection() {

    return `

        <section
            class="
                w-full
                py-8
            "
            dir="rtl"
        >

            <div
                class="
                    max-w-350
                    mx-auto
                    px-4
                "
            >


                <!-- MAIN BOX -->

                <div
                    class="
                        relative
                        bg-white
                        border
                        border-gray-200
                        rounded-2xl
                        py-6
                        px-5
                    "
                >


                    <!-- TITLE -->

                    <div
                        class="
                            flex
                            items-center
                            justify-center
                            gap-2
                            mb-6
                        "
                    >

                        <span
                            class="
                                text-2xl
                            "
                        >

                            ✨

                        </span>


                        <h2
                            class="
                                text-xl
                                font-bold
                                text-gray-800
                            "
                        >

                            محبوب‌ترین برندها

                        </h2>

                    </div>


                    <!-- SWIPER -->

                    <div
                        class="
                            swiper
                            popularBrandsSwiper
                            px-10
                        "
                    >

                        <div
                            class="
                                swiper-wrapper
                                items-stretch
                            "
                        >


                            ${brands.map((brand) => `

                                <div
                                    class="
                                        swiper-slide
                                    "
                                >

                                    <div
                                        class="
                                            w-22.5
                                            h-31
                                            bg-white
                                            border
                                            border-gray-200
                                            rounded-xl
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                            gap-3
                                            px-3
                                            cursor-pointer
                                            transition
                                            duration-300
                                            hover:shadow-md
                                            hover:-translate-y-1
                                        "
                                    >


                                        <!-- LOGO -->

                                        <div
                                            class="
                                                w-19.5
                                                h-19.5
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >

                                            <img
                                                src="${brand.logo}"
                                                alt="${brand.name}"
                                                class="
                                                    max-w-27.5
                                                    max-h-13.75
                                                    w-auto
                                                    h-auto
                                                    object-contain
                                                "
                                            />

                                        </div>


                                        <!-- BRAND NAME -->

                                        <span
                                            class="
                                                text-xs
                                                text-gray-600
                                                text-center
                                                truncate
                                                w-full
                                            "
                                        >

                                            ${brand.name}

                                        </span>


                                    </div>

                                </div>

                            `).join("")}


                        </div>


                        <!-- NEXT -->

                        <button
                            class="
                                popular-brand-next
                                absolute
                                top-1/2
                                -translate-y-1/2
                                right-1
                                z-10
                                w-10
                                h-10
                                bg-white
                                border
                                border-gray-200
                                rounded-full
                                flex
                                items-center
                                justify-center
                                shadow-sm
                                hover:shadow-md
                                transition
                            "
                        >

                            ›

                        </button>


                        <!-- PREVIOUS -->

                        <button
                            class="
                                popular-brand-prev
                                absolute
                                top-1/2
                                -translate-y-1/2
                                left-1
                                z-10
                                w-10
                                h-10
                                bg-white
                                border
                                border-gray-200
                                rounded-full
                                flex
                                items-center
                                justify-center
                                shadow-sm
                                hover:shadow-md
                                transition
                            "
                        >

                            ‹

                        </button>


                    </div>


                </div>


            </div>

        </section>

    `;

}


/* =========================================
   INITIALIZE SLIDER
========================================= */

export function initPopularBrandsSlider() {

    const slider =
        document.querySelector(
            ".popularBrandsSwiper"
        );


    if (!slider) return;


    new Swiper(
        ".popularBrandsSwiper",
        {

            modules: [
                Navigation,
                Autoplay,
            ],


            /* فاصله بین کارت‌ها */

            spaceBetween: 6,


            /* حرکت بی‌نهایت */

            loop: true,


            /* حرکت خودکار */

            autoplay: {

                delay: 2500,

                disableOnInteraction: false,

                pauseOnMouseEnter: true,

            },


            /* سرعت حرکت */

            speed: 700,


            /* فلش‌ها */

            navigation: {
                
                prevEl:
                    ".popular-brand-prev",
                nextEl:
                    ".popular-brand-next",



            },


            /* RESPONSIVE */

            breakpoints: {

                0: {

                    slidesPerView: 2,

                },


                480: {

                    slidesPerView: 3,

                },


                640: {

                    slidesPerView: 4,

                },


                768: {

                    slidesPerView: 5,

                },


                1024: {

                    slidesPerView: 6,

                },


                1280: {

                    slidesPerView: 13,

                },

            },

        }
    );

}
