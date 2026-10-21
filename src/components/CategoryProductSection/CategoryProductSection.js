import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

import { getProducts } from "../../services/api.js";


/* =========================================
   Category Product Section
========================================= */

export default function CategoryProductSection({
    id = "category-products",
    title = "ویتامین‌ها و مواد معدنی",
    subtitle = "بر اساس سلیقه شما",
}) {

    return `

        <section
            id="${id}-section"
            class="w-full max-w-350 mx-auto px-4 mt-8"
            dir="rtl"
        >

            <div
                class="
                    w-full
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    overflow-hidden
                "
            >

                <!-- =================================
                     Header
                ================================= -->

                <div
                    class="
                        flex
                        items-center
                        justify-between
                        px-6
                        pt-5
                        pb-4
                    "
                >

                    <!-- عنوان -->

                    <div class="text-right">

                        <h2
                            class="
                                text-[18px]
                                md:text-[20px]
                                font-bold
                                text-gray-900
                            "
                        >
                            ${title}
                        </h2>

                        <p
                            class="
                                text-[13px]
                                md:text-[14px]
                                text-gray-500
                                mt-1
                            "
                        >
                            ${subtitle}
                        </p>

                    </div>


                    <!-- مشاهده همه -->

                    <button
                        type="button"
                        class="
                            category-see-all
                            flex
                            items-center
                            gap-1
                            bg-gray-100
                            hover:bg-gray-200
                            text-gray-800
                            text-[13px]
                            font-medium
                            rounded-lg
                            px-4
                            py-2
                            transition
                            duration-200
                        "
                    >

                        <span>
                            مشاهده همه
                        </span>

                        <span class="text-[18px] leading-none">
                            ‹
                        </span>

                    </button>

                </div>


                <!-- =================================
                     Products
                ================================= -->

                <div
                    class="
                        relative
                        px-3
                        pb-5
                    "
                >

                    <!-- فلش قبلی -->

                    <button
                        id="${id}-prev"
                        type="button"
                        class="
                            absolute
                            -right-3
                            top-1/2
                            -translate-y-1/2
                            z-20
                            w-10.5
                            h-10.5
                            rounded-full
                            bg-white
                            border
                            border-gray-200
                            shadow-sm
                            flex
                            items-center
                            justify-center
                            text-gray-600
                            text-[28px]
                            leading-none
                            hover:bg-gray-50
                        "
                    >
                        ‹
                    </button>


                    <!-- Slider -->

                    <div
                        class="swiper ${id}-swiper"
                    >

                        <div
                            id="${id}-container"
                            class="swiper-wrapper"
                        >

                            <!-- Loading -->

                            <div
                                class="
                                    swiper-slide
                                    flex
                                    items-center
                                    justify-center
                                    min-h-75
                                "
                            >

                                <div
                                    class="
                                        w-7
                                        h-7
                                        border-2
                                        border-gray-300
                                        border-t-gray-800
                                        rounded-full
                                        animate-spin
                                    "
                                ></div>

                            </div>

                        </div>

                    </div>


                    <!-- فلش بعدی -->

                    <button
                        id="${id}-next"
                        type="button"
                        class="
                            absolute
                            -left-3
                            top-1/2
                            -translate-y-1/2
                            z-20
                            w-10.5
                            h-10.5
                            rounded-full
                            bg-white
                            border
                            border-gray-200
                            shadow-sm
                            flex
                            items-center
                            justify-center
                            text-gray-600
                            text-[28px]
                            leading-none
                            hover:bg-gray-50
                        "
                    >
                        ›
                    </button>

                </div>

            </div>

        </section>

    `;
}


/* =========================================
   Render Products
========================================= */

export async function renderCategoryProductSection({
    id = "category-products",
    query = "",
} = {}) {

    const container =
        document.querySelector(
            `#${id}-container`
        );


    if (!container) {
        return;
    }


    try {

        /*
        -----------------------------------------
        دریافت محصولات از API
        -----------------------------------------
        */

        const products =
            await getProducts({
                query,
                page: 1,
            });


        /*
        -----------------------------------------
        محدود کردن تعداد محصولات
        -----------------------------------------
        */

        const categoryProducts =
            products.slice(0, 12);


        /*
        -----------------------------------------
        اگر محصولی وجود نداشت
        -----------------------------------------
        */

        if (
            !categoryProducts.length
        ) {

            container.innerHTML = `

                <div
                    class="
                        swiper-slide
                        flex
                        items-center
                        justify-center
                        min-h-75
                        text-gray-500
                        text-sm
                    "
                >

                    محصولی برای نمایش وجود ندارد.

                </div>

            `;

            return;

        }


        /*
        -----------------------------------------
        ساخت کارت محصولات
        -----------------------------------------
        */

        container.innerHTML =
            categoryProducts
                .map(
                    (product) => {

                        const price =
                            Number(
                                product.price || 0
                            );


                        const originalPrice =
                            Number(
                                product.originalPrice ||
                                price
                            );


                        const discount =
                            Number(
                                product.discount || 0
                            );


                        const image =
                            product.image ||
                            "";


                        return `

                            <div
                                class="
                                    swiper-slide
                                    h-auto!
                                "
                            >

                                <article
                                    class="
                                        h-full
                                        min-h-76.25
                                        bg-white
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        pt-4
                                        pb-3
                                        cursor-pointer
                                        hover:shadow-md
                                        transition
                                        duration-200
                                        flex
                                        flex-col
                                    "
                                    data-product-id="${product.id}"
                                >

                                    <!-- =================================
                                         تصویر
                                    ================================= -->

                                    <div
                                        class="
                                            w-full
                                            h-43.75
                                            flex
                                            items-center
                                            justify-center
                                            mb-3
                                        "
                                    >

                                        ${
                                            image
                                                ? `
                                                    <img
                                                        src="${image}"
                                                        alt="${escapeHtml(product.title)}"
                                                        class="
                                                            max-w-full
                                                            max-h-full
                                                            object-contain
                                                        "
                                                        loading="lazy"
                                                    />
                                                `
                                                : `
                                                    <div
                                                        class="
                                                            w-full
                                                            h-full
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-gray-300
                                                            text-xs
                                                        "
                                                    >
                                                        تصویر موجود نیست
                                                    </div>
                                                `
                                        }

                                    </div>


                                    <!-- =================================
                                         عنوان
                                    ================================= -->

                                    <h3
                                        class="
                                            text-[13px]
                                            leading-[1.9]
                                            text-gray-700
                                            text-right
                                            line-clamp-2
                                            min-h-12.5
                                        "
                                    >
                                        ${escapeHtml(
                                            product.title ||
                                            "محصول دیجی‌کالا"
                                        )}
                                    </h3>


                                    <!-- =================================
                                         قیمت
                                    ================================= -->

                                    <div
                                        class="
                                            mt-auto
                                            pt-2
                                        "
                                    >

                                        ${
                                            originalPrice > price
                                                ? `
                                                    <div
                                                        class="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            justify-end
                                                        "
                                                    >

                                                        <span
                                                            class="
                                                                text-[11px]
                                                                text-gray-400
                                                                line-through
                                                            "
                                                        >
                                                            ${formatPrice(
                                                                originalPrice
                                                            )}
                                                        </span>

                                                        ${
                                                            discount > 0
                                                                ? `
                                                                    <span
                                                                        class="
                                                                            bg-[#d32f4b]
                                                                            text-white
                                                                            text-[10px]
                                                                            font-bold
                                                                            rounded-full
                                                                            px-2
                                                                            py-0.5
                                                                        "
                                                                    >
                                                                        ${discount}٪
                                                                    </span>
                                                                `
                                                                : ""
                                                        }

                                                    </div>
                                                `
                                                : ""
                                        }


                                        <div
                                            class="
                                                flex
                                                items-center
                                                justify-end
                                                gap-1
                                                mt-1
                                            "
                                        >

                                            <span
                                                class="
                                                    text-[15px]
                                                    md:text-[16px]
                                                    font-bold
                                                    text-gray-900
                                                "
                                            >
                                                ${formatPrice(price)}
                                            </span>

                                            <span
                                                class="
                                                    text-[11px]
                                                    text-gray-600
                                                "
                                            >
                                                تومان
                                            </span>

                                        </div>

                                    </div>

                                </article>

                            </div>

                        `;

                    }
                )
                .join("");


        /*
        -----------------------------------------
        کلیک روی محصول
        -----------------------------------------
        */

        container
            .querySelectorAll(
                "[data-product-id]"
            )
            .forEach(
                (card) => {

                    card.addEventListener(
                        "click",
                        () => {

                            const id =
                                card.dataset.productId;


                            window.location.hash =
                                `#/product/${id}`;

                        }
                    );

                }
            );


        /*
        -----------------------------------------
        ساخت Swiper
        -----------------------------------------
        */

        initCategoryProductSlider(id);


    } catch (error) {

        console.error(
            `خطا در دریافت محصولات ${id}:`,
            error
        );


        container.innerHTML = `

            <div
                class="
                    swiper-slide
                    flex
                    items-center
                    justify-center
                    min-h-75
                    text-red-500
                    text-sm
                "
            >

                خطا در دریافت محصولات

            </div>

        `;

    }

}


/* =========================================
   Swiper
========================================= */

function initCategoryProductSlider(id) {

    const swiperElement =
        document.querySelector(
            `.${id}-swiper`
        );


    if (!swiperElement) {
        return;
    }


    const nextButton =
        document.querySelector(
            `#${id}-next`
        );


    const prevButton =
        document.querySelector(
            `#${id}-prev`
        );


    /*
    اگر قبلاً Swiper ساخته شده باشد
    آن را نابود می‌کنیم.
    */

    if (
        swiperElement.swiper
    ) {

        swiperElement.swiper.destroy(
            true,
            true
        );

    }


    const swiper =
        new Swiper(
            swiperElement,
            {

                modules: [
                    Navigation,
                ],

                slidesPerView: 7,

                spaceBetween: 12,

                speed: 500,

                navigation: {

                    nextEl:
                        nextButton,

                    prevEl:
                        prevButton,

                },

                breakpoints: {

                    320: {

                        slidesPerView: 2,

                    },

                    640: {

                        slidesPerView: 3,

                    },

                    768: {

                        slidesPerView: 4,

                    },

                    1024: {

                        slidesPerView: 5,

                    },

                    1280: {

                        slidesPerView: 6,

                    },

                    1400: {

                        slidesPerView: 7,

                    },

                },

            }
        );


    /*
    -----------------------------------------
    مخفی کردن فلش‌ها در ابتدا / انتها
    -----------------------------------------
    */

    const updateArrows =
        () => {

            if (
                prevButton
            ) {

                prevButton.style.display =
                    swiper.isBeginning
                        ? "none"
                        : "flex";

            }


            if (
                nextButton
            ) {

                nextButton.style.display =
                    swiper.isEnd
                        ? "none"
                        : "flex";

            }

        };


    updateArrows();


    swiper.on(
        "slideChange",
        updateArrows
    );

}


/* =========================================
   قیمت
========================================= */

function formatPrice(price) {

    return Number(
        price || 0
    ).toLocaleString("fa-IR");

}


/* =========================================
   جلوگیری از خراب شدن HTML
========================================= */

function escapeHtml(value) {

    return String(
        value || ""
    )
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}