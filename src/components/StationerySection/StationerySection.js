import Swiper from "swiper";

import {
    Navigation,
    Autoplay,
} from "swiper/modules";

import "swiper/css";

import "swiper/css/navigation";

import { getProducts } from "../../services/api.js";


export default function StationerySection() {

    return `

        <section
            class="
                w-full
                py-6
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
                        border
                        border-gray-200
                        rounded-2xl
                        bg-white
                        overflow-hidden
                    "
                >


                    <!-- HEADER -->

                    <div
                        class="
                            flex
                            items-center
                            justify-between
                            px-6
                            py-5
                            border-b
                            border-gray-100
                        "
                    >


                        <div>

                            <h2
                                class="
                                    text-xl
                                    font-bold
                                    text-gray-800
                                "
                            >

                                خودکار و روان نویس

                            </h2>


                            <p
                                class="
                                    text-sm
                                    text-gray-500
                                    mt-2
                                "
                            >

                                بر اساس سلیقه شما

                            </p>

                        </div>


                        <a
                            href="#"
                            class="
                                text-red-500
                                text-sm
                                font-medium
                                hover:text-red-600
                                transition
                            "
                        >

                            مشاهده همه

                            ←

                        </a>


                    </div>


                    <!-- LOADING -->

                    <div
                        id="stationeryLoading"
                        class="
                            text-center
                            py-10
                            text-gray-500
                        "
                    >

                        در حال دریافت محصولات...

                    </div>


                    <!-- ERROR -->

                    <div
                        id="stationeryError"
                        class="
                            hidden
                            text-center
                            py-10
                            text-red-500
                        "
                    >

                        خطا در دریافت محصولات

                    </div>


                    <!-- SLIDER -->

                    <div
                        id="stationerySwiperContainer"
                        class="
                            swiper
                            stationerySwiper
                            hidden
                            p-4
                        "
                    >


                        <div
                            id="stationeryList"
                            class="swiper-wrapper"
                        >

                        </div>


                        <!-- NEXT -->

                        <div
                            class="
                                stationery-next
                                swiper-button-next
                            "
                        >

                        </div>


                        <!-- PREV -->

                        <div
                            class="
                                stationery-prev
                                swiper-button-prev
                            "
                        >

                        </div>


                    </div>


                </div>


            </div>


        </section>

    `;

}



/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createStationeryCard(product) {

    return `

        <div
            class="swiper-slide"
        >


            <a
                href="#product/${product.id}"
                class="
                    block
                    h-full
                    border-l
                    border-gray-100
                    px-3
                    py-4
                    hover:bg-gray-50
                    transition
                "
            >


                <!-- IMAGE -->

                <div
                    class="
                        h-45
                        flex
                        items-center
                        justify-center
                        mb-4
                    "
                >

                    <img
                        src="${product.image}"
                        alt="${product.title}"
                        class="
                            max-h-full
                            max-w-full
                            object-contain
                        "
                    >

                </div>


                <!-- TITLE -->

                <h3
                    class="
                        text-sm
                        text-gray-700
                        leading-6
                        line-clamp-2
                        min-h-12
                    "
                >

                    ${product.title}

                </h3>


                <!-- RATING -->

                <div
                    class="
                        flex
                        items-center
                        gap-1
                        mt-3
                        text-sm
                    "
                >

                    <span
                        class="text-yellow-500"
                    >

                        ★

                    </span>


                    <span
                        class="text-gray-600"
                    >

                        ${product.rating?.rate || "بدون امتیاز"}

                    </span>


                </div>


                <!-- PRICE -->

                <div
                    class="
                        flex
                        items-center
                        justify-between
                        mt-4
                    "
                >


                    <span
                        class="
                            text-sm
                            font-bold
                            text-gray-800
                        "
                    >

                        ${Math.round(product.price).toLocaleString()}

                    </span>


                    <span
                        class="
                            text-xs
                            text-gray-500
                        "
                    >

                        دلار

                    </span>


                </div>


            </a>


        </div>

    `;

}



/* =========================================
   RENDER PRODUCTS
========================================= */

export async function renderStationeryProducts() {

    const loading =
        document.querySelector(
            "#stationeryLoading"
        );


    const error =
        document.querySelector(
            "#stationeryError"
        );


    const container =
        document.querySelector(
            "#stationeryList"
        );


    const swiperContainer =
        document.querySelector(
            "#stationerySwiperContainer"
        );


    try {

        const products =
            await getProducts();


        if (
            !products ||
            products.length === 0
        ) {

            throw new Error(
                "محصولی دریافت نشد"
            );

        }


        /*
        ==================================
        انتخاب محصولات
        ==================================
        */

        const selectedProducts =
            products.slice(0, 12);


        container.innerHTML =
            selectedProducts
                .map(
                    createStationeryCard
                )
                .join("");


        loading.classList.add(
            "hidden"
        );


        swiperContainer.classList.remove(
            "hidden"
        );


        initStationerySlider();


    } catch (err) {

        console.error(err);


        loading.classList.add(
            "hidden"
        );


        error.classList.remove(
            "hidden"
        );

    }

}



/* =========================================
   INITIALIZE SLIDER
========================================= */

function initStationerySlider() {

    new Swiper(
        ".stationerySwiper",
        {

            modules: [
                Navigation,
                Autoplay,
            ],


            spaceBetween: 0,


            navigation: {

                nextEl:
                    ".stationery-next",

                prevEl:
                    ".stationery-prev",

            },


            autoplay: {

                delay: 3000,

                disableOnInteraction:
                    false,

                pauseOnMouseEnter:
                    true,

            },


            loop: true,


            breakpoints: {


                0: {

                    slidesPerView:
                        1.5,

                },


                640: {

                    slidesPerView:
                        2.5,

                },


                768: {

                    slidesPerView:
                        4,

                },


                1024: {

                    slidesPerView:
                        5,

                },


                1280: {

                    slidesPerView:
                        6,

                },


                1400: {

                    slidesPerView:
                        7,

                },


            },


        }
    );

}