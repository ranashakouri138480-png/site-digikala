import Swiper from 'swiper';

import { Navigation } from 'swiper/modules';

import 'swiper/css';

import { getProducts } from '../../services/api.js';

import { initProductActions } from '../ProductActions/ProductActions.js';

/* =========================================
   PRODUCT SECTION
========================================= */

export default function ProductSection() {
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

                <!-- =========================================
                     DELIVERY BOX
                ========================================== -->

                <div
                    class="
                        relative
                        w-full

                        bg-[#FFF8E7]

                        rounded-[20px]

                        p-4

                        overflow-hidden
                    "
                >

                    <!-- =====================================
                         HEADER
                    ====================================== -->

<div
    class="
        w-full
        flex
        items-center
        justify-start
        gap-2
        mb-4
        text-right
    "
    dir="rtl"
>

    <span
        class="
            bg-[#FFD900]
            text-gray-900

            px-2
            py-1

            rounded-sm

            text-[13px]
            font-bold

            leading-none
        "
    >
        ۳ ساعته
    </span>


    <h2
        class="
            text-[18px]
            font-bold
            text-gray-900
        "
    >
        تحویل بگیر!
    </h2>

</div>


                    <!-- =====================================
                         ADDRESS INFO
                    ====================================== -->

                    <div
                        class="
                            w-full

                            bg-[#FFF0D2]

                            rounded-[10px]

                            min-h-12

                            px-4

                            flex
                            items-center
                            justify-between

                            gap-4

                            mb-3
                        "
                    >

                        <!-- Info -->

                        <div
                            class="
                                flex
                                items-center
                                gap-2

                                text-[13px]
                                text-gray-800
                            "
                        >

                            <span
                                class="
                                    w-5
                                    h-5

                                    rounded-full

                                    bg-[#F57C00]

                                    text-white

                                    flex
                                    items-center
                                    justify-center

                                    text-[12px]
                                    font-bold
                                "
                            >
                                i
                            </span>


                            <span>
                                برای بررسی امکان ارسال، آدرس را انتخاب کنید.
                            </span>

                        </div>


                        <!-- Select Address -->

                        <button
                            type="button"
                            id="productAddressButton"

                            class="
                                shrink-0

                                text-[#F57C00]

                                text-[13px]
                                font-medium

                                flex
                                items-center
                                gap-1

                                hover:text-orange-700

                                transition
                            "
                        >

                            انتخاب آدرس

                            <span
                                class="text-[18px]"
                            >
                                ‹
                            </span>

                        </button>

                    </div>


                    <!-- =====================================
                         LOADING
                    ====================================== -->

                    <div
                        id="productLoading"
                        class="
                            text-center
                            py-10
                            text-gray-500
                        "
                    >

                        در حال دریافت محصولات...

                    </div>


                    <!-- =====================================
                         ERROR
                    ====================================== -->

                    <div
                        id="productError"
                        class="
                            hidden
                            text-center
                            py-10
                            text-red-500
                        "
                    >

                        خطا در دریافت محصولات

                    </div>


                    <!-- =====================================
                         PRODUCTS SLIDER
                    ====================================== -->

                    <div
                        id="productSwiperContainer"
                        class="
                            swiper
                            productSwiper
                            hidden

                            relative

                            w-full
                        "
                    >

                        <div
                            id="productList"
                            class="
                                swiper-wrapper
                            "
                        ></div>


                        <!-- =================================
                             LEFT ARROW
                             NEXT
                        ================================== -->

                        <button
                            type="button"

                            class="
                                product-next

                                absolute

                                left-0
                                top-1/2

                                -translate-y-1/2

                                z-30

                                w-11
                                h-11

                                bg-white

                                border
                                border-gray-200

                                rounded-full

                                shadow-sm

                                flex
                                items-center
                                justify-center

                                text-gray-700
                                text-[26px]

                                hover:bg-gray-50

                                transition

                                cursor-pointer
                            "
                            aria-label="محصولات بعدی"
                        >

                            ‹

                        </button>


                        <!-- =================================
                             RIGHT ARROW
                             PREVIOUS
                        ================================== -->

                        <button
                            type="button"

                            class="
                                product-prev

                                hidden

                                absolute

                                right-0
                                top-1/2

                                -translate-y-1/2

                                z-30

                                w-11
                                h-11

                                bg-white

                                border
                                border-gray-200

                                rounded-full

                                shadow-sm
                                items-center
                                justify-center

                                text-gray-700
                                text-[26px]

                                hover:bg-gray-50

                                transition

                                cursor-pointer
                            "
                            aria-label="محصولات قبلی"
                        >

                            ›

                        </button>

                    </div>

                </div>

            </div>

        </section>

    `;
}

/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createProductCard(product, index) {
  /*
       چون API فعلی تخفیف واقعی ندارد،
       درصدها را ثابت قرار می‌دهیم.
    */

  const discounts = [45, 32, 20, 15, 12, 25, 18, 30, 22, 35];

  const discount = discounts[index % discounts.length];

  const originalPrice = Number(product.price);

  const discountedPrice = Math.round(
    originalPrice - (originalPrice * discount) / 100,
  );

  const formattedOriginalPrice = originalPrice.toLocaleString('fa-IR');

  const formattedDiscountedPrice = discountedPrice.toLocaleString('fa-IR');

  return `

        <div
            class="
                swiper-slide

                w-45!

                h-auto
            "
        >

            <article
                class="
                    product-card

                    cursor-pointer

                    bg-white

                    rounded-[10px]

                    px-3
                    pt-3
                    pb-3

                    h-77.5

                    flex
                    flex-col

                    transition

                    hover:shadow-sm
                "

                data-product-id="${product.id}"
            >

                <!-- =================================
                     IMAGE
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
                            opacity-40
                            object-contain
                        "

                        loading="lazy"
                    >

                </div>


                <!-- =================================
                     TITLE
                ================================== -->

                <h3
                    class="
                        text-[13px]

                        leading-5.25

                        text-gray-700

                        line-clamp-2

                        min-h-10.5

                        overflow-hidden
                    "
                >

                    ${product.title}

                </h3>


                <!-- =================================
                     PRICE
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

                            min-h-4.75

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

                                min-w-8.5
                                h-5

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
                                class="text-[14px]"
                            >

                                ${formattedDiscountedPrice}

                            </span>


                            <span
                                class="text-[9px]"
                            >

                                تومان

                            </span>

                        </div>

                    </div>

                </div>

            </article>

        </div>

    `;
}

/* =========================================
   RENDER PRODUCTS
========================================= */

export async function renderProducts() {
  const loading = document.querySelector('#productLoading');

  const error = document.querySelector('#productError');

  const productContainer = document.querySelector('#productList');

  const swiperContainer = document.querySelector('#productSwiperContainer');

  try {
    const products = await getProducts();

    if (!products || products.length === 0) {
      throw new Error('محصولی دریافت نشد');
    }

    /* =====================================
           نمایش محصولات
        ====================================== */

    productContainer.innerHTML = products
      .map((product, index) => createProductCard(product, index))
      .join('');

    loading.classList.add('hidden');

    swiperContainer.classList.remove('hidden');

    /* =====================================
           Slider
        ====================================== */

    initProductSlider();

    /* =====================================
           Product Actions
        ====================================== */

    initProductActions(products);

    /* =====================================
           Card Click
        ====================================== */

    initProductCardEvents();

    /* =====================================
           Address Button
        ====================================== */

    initAddressButton();
  } catch (err) {
    console.error(err);

    loading.classList.add('hidden');

    error.classList.remove('hidden');
  }
}

/* =========================================
   PRODUCT CARD EVENTS
========================================= */

function initProductCardEvents() {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      /*
                       اگر روی add-to-cart
                       کلیک شد، وارد محصول نشو.
                    */

      if (event.target.closest('.add-to-cart')) {
        return;
      }

      const productId = card.dataset.productId;

      window.location.hash = `#/product/${productId}`;
    });
  });
}

/* =========================================
   ADDRESS BUTTON
========================================= */

function initAddressButton() {
  const button = document.querySelector('#productAddressButton');

  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    /*
               فعلاً فقط یک رفتار ساده.
               بعداً می‌توانیم مودال انتخاب آدرس
               را به این قسمت وصل کنیم.
            */

    console.log('انتخاب آدرس');
  });
}

/* =========================================
   PRODUCT SLIDER
========================================= */

function initProductSlider() {
  const swiper = new Swiper('.productSwiper', {
    modules: [Navigation],

    /*
                   حرکت دستی
                   بدون autoplay
                */

    direction: 'horizontal',

    loop: false,

    speed: 450,

    spaceBetween: 10,

    slidesPerView: 'auto',

    /*
                   دکمه‌های سفارشی
                */

    navigation: {
      nextEl: '.product-next',

      prevEl: '.product-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },

      480: {
        slidesPerView: 2.3,
      },

      640: {
        slidesPerView: 3.4,
      },

      768: {
        slidesPerView: 4.5,
      },

      1024: {
        slidesPerView: 6,
      },

      1280: {
        slidesPerView: 7,
      },
    },
  });

  /* =====================================
       ARROWS
    ====================================== */

  const nextButton = document.querySelector('.product-next');

  const previousButton = document.querySelector('.product-prev');

  /* =====================================
       UPDATE ARROWS
    ====================================== */

  function updateArrows() {
    if (!nextButton || !previousButton) {
      return;
    }

    /*
           ابتدای اسلایدر
           فقط فلش چپ
        */

    if (swiper.isBeginning) {
      nextButton.classList.remove('hidden');

      previousButton.classList.add('hidden');
    } else if (!swiper.isEnd) {

    /*
           وسط اسلایدر
           هر دو فلش
        */
      nextButton.classList.remove('hidden');

      previousButton.classList.remove('hidden');
    } else {

    /*
           انتهای اسلایدر
           فقط فلش راست
        */
      nextButton.classList.add('hidden');

      previousButton.classList.remove('hidden');
    }
  }

  /* =====================================
       INITIAL
    ====================================== */

  updateArrows();

  /* =====================================
       SLIDE CHANGE
    ====================================== */

  swiper.on('slideChange', updateArrows);
}
