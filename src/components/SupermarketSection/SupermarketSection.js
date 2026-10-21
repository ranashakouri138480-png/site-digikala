import Swiper from "swiper";

import { Navigation } from "swiper/modules";

import "swiper/css";

import { getProducts } from "../../services/api.js";

import discountIcon from '../../assets/images/amazing/discount.svg';
import amazingText from '../../assets/images/amazing/amazing.svg';
/* =========================================
   SUPERMARKET SECTION
========================================= */

export default function SupermarketSection() {

    return `

        <section
            class="w-full py-8"
            dir="rtl"
        >

            <div
                class="
                    max-w-350
                    mx-auto
                    px-4
                "
            >

                <!-- =====================================
                     MAIN GREEN BOX
                ====================================== -->
                <div
                    class="
                        relative
                        w-full
                        bg-[#70BA2B]
                        rounded-[18px]
                        p-5
                        pe-0
                        overflow-hidden
                    "
                >

                    <div
                        class="
                            flex
                            flex-row
                            items-stretch
                            w-full
                            min-h-83.75
                        "
                    >

                    <!-- =================================
                         CONTENT
                    ================================== -->

                    <div
                        class="
                            flex
                            flex-row
                            items-stretch

                            w-full

                            h-78.75
                        "
                    >

                        <!-- =================================
                             PRODUCTS
                        ================================== -->

                        <div
                            class="
                                relative

                                flex-1
                                min-w-0

                                overflow-hidden

                                bg-[#70BA2B]

                                p-0
                            "
                        >

                            <!-- Loading -->

                            <div
                                id="supermarketLoading"

                                class="
                                    h-full

                                    flex
                                    items-center
                                    justify-center

                                    text-white
                                    text-sm
                                "
                            >

                                در حال دریافت محصولات...

                            </div>


                            <!-- Products Slider -->

                            <div
                                id="supermarketSwiper"

                                class="
                                    swiper

                                    hidden

                                    h-full
                                    w-full
                                "
                            >

                                <div
                                    id="supermarketProducts"

                                    class="
                                        swiper-wrapper

                                        h-full
                                    "
                                ></div>


                                <!-- =================================
                                     LEFT ARROW
                                ================================== -->

                                <button
                                    type="button"

                                    class="
                                        supermarket-prev

                                        absolute

                                        left-2
                                        top-1/2

                                        -translate-y-1/2

                                        z-30

                                        w-11
                                        h-11

                                        bg-white

                                        rounded-full

                                        shadow-md

                                        flex
                                        items-center
                                        justify-center

                                        text-gray-600

                                        text-[28px]

                                        hover:bg-gray-50

                                        transition
                                    "
                                    aria-label="محصول قبلی"
                                >

                                    ‹

                                </button>


                                <!-- RIGHT ARROW -->

                                <button
                                    type="button"

                                    class="
                                        supermarket-next

                                        hidden

                                        absolute

                                        right-2
                                        top-1/2

                                        -translate-y-1/2

                                        z-30

                                        w-11
                                        h-11

                                        bg-white

                                        rounded-full

                                        shadow-md
                                        items-center
                                        justify-center

                                        text-gray-600

                                        text-[28px]

                                        hover:bg-gray-50

                                        transition
                                    "
                                    aria-label="محصول بعدی"
                                >

                                    ›

                                </button>

                            </div>

                        </div>


                        <!-- =================================
                             AMAZING SIDEBAR
                             RIGHT SIDE
                        ================================== -->

                        <div
                            class="
                                order-first

                                shrink-0

                                w-44.5

                                bg-[#70BA2B]

                                text-white

                                flex
                                flex-col

                                items-center
                                justify-center

                                px-3
                            "
                        >

<!-- =================================
     AMAZING ICONS
================================== -->

<div
    class="
        flex
        flex-col
        items-center
        justify-center
        mb-3
    "
>

    <!-- درصد -->

    <img
        src="${discountIcon}"
        alt="درصد تخفیف"
        class="
            w-14.5
            h-14.5
            object-contain
            mb-2
        "
    >


    <!-- نوشته شگفت انگیز -->

    <img
        src="${amazingText}"
        alt="شگفت انگیز"
        class="
            w-31.25
            h-auto
            object-contain
        "
    >

</div>


                            <!-- =================================
                                 TIMER
                            ================================== -->

                            <div
                                id="supermarketTimer"

                                dir="ltr"

                                class="
                                    flex
                                    items-center
                                    justify-center

                                    gap-0.75

                                    mb-5
                                "
                            >

                                <span
                                    id="supermarketHours"

                                    class="
                                        bg-white

                                        text-gray-800

                                        w-7.75
                                        h-6.75

                                        rounded-sm

                                        flex
                                        items-center
                                        justify-center

                                        text-[14px]

                                        font-bold
                                    "
                                >
                                    13
                                </span>


                                <span
                                    class="
                                        text-white
                                        font-bold
                                    "
                                >
                                    :
                                </span>


                                <span
                                    id="supermarketMinutes"

                                    class="
                                        bg-white

                                        text-gray-800

                                        w-7.75
                                        h-6.75

                                        rounded-sm

                                        flex
                                        items-center
                                        justify-center

                                        text-[14px]

                                        font-bold
                                    "
                                >
                                    49
                                </span>


                                <span
                                    class="
                                        text-white
                                        font-bold
                                    "
                                >
                                    :
                                </span>


                                <span
                                    id="supermarketSeconds"

                                    class="
                                        bg-white

                                        text-gray-800

                                        w-7.75
                                        h-6.75

                                        rounded-sm

                                        flex
                                        items-center
                                        justify-center

                                        text-[14px]

                                        font-bold
                                    "
                                >
                                    09
                                </span>

                            </div>


                            <!-- =================================
                                 VIEW ALL
                            ================================== -->

                            <a
                                href="#"

                                class="
                                    w-29.5
                                    h-9

                                    bg-white

                                    text-gray-700

                                    rounded-lg

                                    flex
                                    items-center
                                    justify-center

                                    gap-2

                                    text-[12px]

                                    font-medium

                                    hover:bg-gray-100

                                    transition
                                "
                            >

                                مشاهده همه

                                <span
                                    dir="ltr"

                                    class="
                                        text-[18px]
                                        leading-none
                                    "
                                >
                                    ←
                                </span>

                            </a>

                        </div>

                    </div>


                    <!-- =====================================
                         BOTTOM GREEN LINE
                    ====================================== -->

                    <div
                        class="
                            w-full
                            h-5

                            bg-[#7BC62A]
                        "
                    ></div>

                </div>

            </div>

        </section>

    `;
}


/* =========================================
   PRODUCT CARD
========================================= */

function createSupermarketCard(
    product,
    index
) {

    /*
       چون API فعلی تخفیف واقعی ندارد،
       درصدها را ثابت می‌کنیم.
    */

    const discounts = [
        37,
        50,
        58,
        59,
        60,
        52,
        45,
    ];


    const discount =
        discounts[
            index % discounts.length
        ];


    const originalPrice =
        Number(product.price);


    const discountedPrice =
        Math.round(
            originalPrice -
            (
                originalPrice *
                discount
            ) / 100
        );


    const formattedOriginalPrice =
        originalPrice.toLocaleString(
            "fa-IR"
        );


    const formattedDiscountedPrice =
        discountedPrice.toLocaleString(
            "fa-IR"
        );


    return `

        <div
            class="
                swiper-slide

                w-43.5!

                h-full
            "
        >

            <a
                href="#/product/${product.id}"

                class="
                    block

                    relative

                    h-full

                    bg-white

                    border-l-[3px]
                    border-[#7BC62A]

                    px-3
                    pt-3
                    pb-2

                    transition

                    hover:shadow-md
                "
            >

                <!-- =================================
                     PRODUCT IMAGE
                ================================== -->

                <div
                    class="
                        w-full

                        h-38.75

                        flex
                        items-center
                        justify-center

                        mb-2
                    "
                >

                    <img
                        src="${product.image}"

                        alt="${product.title}"

                        class="
                            max-w-full
                            max-h-full

                            w-auto
                            h-auto

                            object-contain
                        "

                        loading="lazy"
                    >

                </div>


                <!-- =================================
                     PRODUCT TITLE
                ================================== -->

                <h3
                    class="
                        text-[13px]

                        leading-5.5

                        text-gray-700

                        line-clamp-2

                        min-h-11

                        overflow-hidden
                    "
                >

                    ${product.title}

                </h3>


                <!-- =================================
                     PRICE AREA
                ================================== -->

                <div
                    class="
                        mt-auto

                        pt-2
                    "
                >

                    <!-- Original Price -->

                    <div
                        class="
                            flex
                            justify-end

                            min-h-4.5

                            text-[10px]

                            text-gray-400
                        "
                    >

                        <span
                            class="line-through"
                        >

                            ${formattedOriginalPrice}

                        </span>

                    </div>


                    <!-- Final Price -->

                    <div
                        class="
                            flex

                            items-center

                            justify-between

                            mt-1
                        "
                    >

                        <!-- Discount -->

                        <span
                            class="
                                bg-[#EF394E]

                                text-white

                                rounded-full

                                min-w-8.75
                                h-5.25

                                px-2

                                flex
                                items-center
                                justify-center

                                text-[10px]

                                font-bold
                            "
                        >

                            ${discount}٪

                        </span>


                        <!-- Price -->

                        <div
                            class="
                                flex
                                items-center

                                gap-1

                                text-gray-900

                                font-bold
                            "
                        >

                            <span
                                class="
                                    text-[14px]
                                "
                            >

                                ${formattedDiscountedPrice}

                            </span>


                            <span
                                class="
                                    text-[9px]
                                "
                            >

                                تومان

                            </span>

                        </div>

                    </div>

                </div>

            </a>

        </div>

    `;
}


/* =========================================
   RENDER PRODUCTS
========================================= */

export async function renderSupermarketProducts() {

    const loading =
        document.querySelector(
            "#supermarketLoading"
        );


    const swiperContainer =
        document.querySelector(
            "#supermarketSwiper"
        );


    const container =
        document.querySelector(
            "#supermarketProducts"
        );


    if (
        !loading ||
        !swiperContainer ||
        !container
    ) {

        return;

    }


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
           10 محصول را می‌گیریم
           تا اسلایدر داشته باشیم.
        */

        const selectedProducts =
            products.slice(0, 10);


        container.innerHTML =
            selectedProducts
                .map(
                    (
                        product,
                        index
                    ) =>
                        createSupermarketCard(
                            product,
                            index
                        )
                )
                .join("");


        loading.classList.add(
            "hidden"
        );


        swiperContainer.classList.remove(
            "hidden"
        );


        initSupermarketSlider();


        initSupermarketTimer();

    }

    catch (error) {

        console.error(
            "Supermarket Error:",
            error
        );


        loading.innerHTML = `

            <div
                class="
                    text-white
                    text-sm
                    p-5
                "
            >

                خطا در دریافت محصولات

            </div>

        `;

    }

}


/* =========================================
   SLIDER
========================================= */

function initSupermarketSlider() {

    const swiper =
        new Swiper(
            "#supermarketSwiper",
            {

                modules: [
                    Navigation,
                ],


                direction:
                    "horizontal",


                loop: false,


                speed: 450,


                spaceBetween: 0,


                slidesPerView:
                    "auto",


                navigation: {

                    nextEl:
                        ".supermarket-next",

                    prevEl:
                        ".supermarket-prev",

                },


                breakpoints: {

                    0: {

                        slidesPerView:
                            1.5,

                    },


                    480: {

                        slidesPerView:
                            2.3,

                    },


                    640: {

                        slidesPerView:
                            3.3,

                    },


                    768: {

                        slidesPerView:
                            4.3,

                    },


                    1024: {

                        slidesPerView:
                            6,

                    },


                    1280: {

                        slidesPerView:
                            7,

                    },

                },

            }
        );


    const nextButton =
        document.querySelector(
            ".supermarket-next"
        );


    const previousButton =
        document.querySelector(
            ".supermarket-prev"
        );


    function updateArrows() {

        if (
            !nextButton ||
            !previousButton
        ) {

            return;

        }


        /*
           ابتدای اسلایدر:
           فقط فلش چپ
        */

        if (
            swiper.isBeginning
        ) {

            nextButton.classList.remove(
                "hidden"
            );


            previousButton.classList.add(
                "hidden"
            );

        }


        /*
           وسط:
           هر دو فلش
        */

        else if (
            !swiper.isEnd
        ) {

            nextButton.classList.remove(
                "hidden"
            );


            previousButton.classList.remove(
                "hidden"
            );

        }


        /*
           انتها:
           فقط فلش راست
        */

        else {

            nextButton.classList.add(
                "hidden"
            );


            previousButton.classList.remove(
                "hidden"
            );

        }

    }


    updateArrows();


    swiper.on(
        "slideChange",
        updateArrows
    );

}


/* =========================================
   TIMER
========================================= */

let supermarketTimerInterval =
    null;


function initSupermarketTimer() {

    if (
        supermarketTimerInterval
    ) {

        clearInterval(
            supermarketTimerInterval
        );

    }


    /*
       13 ساعت و 49 دقیقه
    */

    let totalSeconds =
        (
            13 * 60 * 60
        ) +
        (
            49 * 60
        );


    function updateTimer() {

        const hours =
            Math.floor(
                totalSeconds / 3600
            );


        const minutes =
            Math.floor(
                (
                    totalSeconds %
                    3600
                ) / 60
            );


        const seconds =
            totalSeconds % 60;


        const hoursElement =
            document.querySelector(
                "#supermarketHours"
            );


        const minutesElement =
            document.querySelector(
                "#supermarketMinutes"
            );


        const secondsElement =
            document.querySelector(
                "#supermarketSeconds"
            );


        if (
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {

            return;

        }


        hoursElement.textContent =
            String(hours)
                .padStart(
                    2,
                    "0"
                );


        minutesElement.textContent =
            String(minutes)
                .padStart(
                    2,
                    "0"
                );


        secondsElement.textContent =
            String(seconds)
                .padStart(
                    2,
                    "0"
                );


        totalSeconds--;


        if (
            totalSeconds < 0
        ) {

            totalSeconds =
                (
                    13 * 60 * 60
                ) +
                (
                    49 * 60
                );

        }

    }


    updateTimer();


    supermarketTimerInterval =
        setInterval(
            updateTimer,
            1000
        );

}