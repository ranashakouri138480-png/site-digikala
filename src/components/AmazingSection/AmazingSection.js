import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

import { getProducts } from '../../services/api.js';

import discountIcon from '../../assets/images/amazing/discount.svg';
import amazingText from '../../assets/images/amazing/amazing.svg';

/* =====================================================
   AMAZING SECTION
===================================================== */

export default function AmazingSection() {
  return `

        <section
            class="w-full py-6"
            dir="rtl"
        >

            <div
                class="max-w-350 mx-auto px-4"
            >

                <!-- =========================================
                     AMAZING BOX
                ========================================== -->

                <div
                    class="
                        relative
                        w-full
                        bg-[#D52D4E]
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
                             PRODUCTS
                        ================================== -->

                        <div
                            class="
                                relative
                                flex-1
                                min-w-0
                                overflow-hidden
                            "
                        >

                            <!-- Loading -->

                            <div
                                id="amazingLoading"
                                class="
                                    flex
                                    items-center
                                    justify-center
                                    min-h-80
                                    text-white
                                    text-sm
                                "
                            >

                                در حال دریافت محصولات...

                            </div>


                            <!-- =================================
                                 SWIPER
                            ================================== -->

                            <div
                                id="amazingSwiper"
                                class="
                                    swiper
                                    hidden
                                    h-full
                                    w-full
                                "
                            >

                                <div
                                    id="amazingProductList"
                                    class="
                                        swiper-wrapper
                                        h-full
                                    "
                                ></div>


                                <!-- =================================
                                     LEFT ARROW
                                     رفتن به محصول بعدی
                                ================================== -->

                                <button
                                    type="button"
                                    class="
                                        amazing-prev

                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2

                                        z-30

                                        w-10
                                        h-10

                                        bg-white
                                        rounded-full

                                        shadow-md

                                        flex
                                        items-center
                                        justify-center

                                        text-gray-700
                                        text-[25px]
                                        leading-none

                                        hover:bg-gray-100

                                        transition

                                        cursor-pointer
                                    "
                                    aria-label="محصول بعدی"
                                >

                                    ‹

                                </button>


                                <!-- =================================
                                     RIGHT ARROW
                                     برگشت به محصول قبلی
                                ================================== -->

                                <button
                                    type="button"
                                    class="
                                        amazing-next

                                        absolute
                                        right-0
                                        top-1/2
                                        -translate-y-1/2

                                        z-30

                                        w-10
                                        h-10

                                        bg-white
                                        rounded-full

                                        shadow-md

                                        flex
                                        items-center
                                        justify-center

                                        text-gray-700
                                        text-[25px]
                                        leading-none

                                        hover:bg-gray-100

                                        transition

                                        cursor-pointer
                                    "
                                    aria-label="محصول قبلی"
                                >

                                    ›

                                </button>

                            </div>

                        </div>


                        <!-- =================================
                             AMAZING SIDEBAR
                             سمت راست
                        ================================== -->

                        <div
                            class="
                                order-first

                                w-43.75
                                shrink-0

                                flex
                                flex-col
                                items-center
                                justify-center

                                text-white

                                px-3
                                py-4
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
                                id="amazingTimer"
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
                                    id="hours"
                                    class="
                                        bg-white
                                        text-[#D52D4E]

                                        w-8.5
                                        h-7

                                        rounded-sm

                                        flex
                                        items-center
                                        justify-center

                                        text-[15px]
                                        font-bold
                                    "
                                >
                                    06
                                </span>


                                <span
                                    class="
                                        font-bold
                                        text-white
                                    "
                                >
                                    :
                                </span>


                                <span
                                    id="minutes"
                                    class="
                                        bg-white
                                        text-[#D52D4E]

                                        w-8.5
                                        h-7

                                        rounded-sm

                                        flex
                                        items-center
                                        justify-center

                                        text-[15px]
                                        font-bold
                                    "
                                >
                                    00
                                </span>


                                <span
                                    class="
                                        font-bold
                                        text-white
                                    "
                                >
                                    :
                                </span>


                                <span
                                    id="seconds"
                                    class="
                                        bg-white
                                        text-[#D52D4E]

                                        w-8.5
                                        h-7

                                        rounded-sm

                                        flex
                                        items-center
                                        justify-center

                                        text-[15px]
                                        font-bold
                                    "
                                >
                                    00
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
                                        text-lg
                                        leading-none
                                    "
                                >
                                    ←
                                </span>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    `;
}

/* =====================================================
   PRODUCT CARD
===================================================== */

function createAmazingCard(product, index) {
  /*
       درصدهای ثابت
    */

  const discounts = [50, 55, 61, 66, 50, 47, 60, 52, 45, 57];

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
                h-auto
                w-46.25!
            "
        >

            <article
                class="
                    relative
                    h-80.75

                    bg-white

                    px-3
                    pt-3
                    pb-2

                    flex
                    flex-col

                    border-l-[3px]
                    border-[#D52D4E]

                    overflow-hidden
                "
            >

                <!-- =================================
                     PRODUCT IMAGE
                ================================== -->

                <div
                    class="
                        w-full
                        h-41.25

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
                            items-center
                            justify-end

                            min-h-5

                            text-[20px]
                            text-gray-400
                        "
                    >

                        <span
                            class="line-through"
                        >

                            ${formattedOriginalPrice}

                        </span>

                    </div>


                    <!-- Discount + Final Price -->

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
                                bg-[#D52D4E]
                                text-white

                                rounded-full

                                min-w-8.75
                                h-5.25

                                px-2

                                flex
                                items-center
                                justify-center

                                text-[15px]
                                font-bold
                            "
                        >

                            ${discount}٪

                        </span>


                        <!-- Final Price -->

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
                                class="text-[20px]"
                            >

                                ${formattedDiscountedPrice}

                            </span>


                            <span
                                class="text-[20px]"
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

/* =====================================================
   RENDER PRODUCTS
===================================================== */

export async function renderAmazingProducts() {
  const loading = document.querySelector('#amazingLoading');

  const swiperContainer = document.querySelector('#amazingSwiper');

  const productList = document.querySelector('#amazingProductList');

  if (!loading || !swiperContainer || !productList) {
    return;
  }

  try {
    const products = await getProducts();

    /*
           فعلاً 10 محصول اول
        */

    const amazingProducts = products.slice(0, 10);

    productList.innerHTML = amazingProducts
      .map((product, index) => createAmazingCard(product, index))
      .join('');

    loading.classList.add('hidden');

    swiperContainer.classList.remove('hidden');

    initAmazingSlider();
  } catch (error) {
    console.error('Amazing products error:', error);

    loading.innerHTML = `
            <span class="text-white">
                خطا در دریافت محصولات
            </span>
        `;
  }
}

/* =====================================================
   AMAZING SLIDER
===================================================== */

function initAmazingSlider() {
  const swiper = new Swiper('#amazingSwiper', {
    modules: [Navigation],

    /*
                   حرکت دستی
                   بدون autoplay
                */

    direction: 'horizontal',

    loop: false,

    speed: 500,

    spaceBetween: 0,

    slidesPerView: 'auto',

    navigation: {
      nextEl: '.amazing-prev',

      prevEl: '.amazing-next',
    },

    breakpoints: {
      0: {
        slidesPerView: 1.7,
      },

      480: {
        slidesPerView: 2.3,
      },

      640: {
        slidesPerView: 3.2,
      },

      768: {
        slidesPerView: 4.2,
      },

      1024: {
        slidesPerView: 5.2,
      },

      1280: {
        slidesPerView: 6,
      },
    },
  });

  /* =========================================
       ARROW ELEMENTS
    ========================================== */

  const nextButton = document.querySelector('.amazing-prev');

  const previousButton = document.querySelector('.amazing-next');

  /* =========================================
       UPDATE ARROWS
    ========================================== */

  function updateAmazingArrows() {
    if (!nextButton || !previousButton) {
      return;
    }

    /*
           اول اسلاید:
           فقط فلش چپ
        */

    if (swiper.isBeginning) {
      nextButton.classList.remove('hidden');

      previousButton.classList.add('hidden');
    } else if (!swiper.isEnd) {
      /*
           وسط اسلایدر:
           هر دو فلش
        */
      nextButton.classList.remove('hidden');

      previousButton.classList.remove('hidden');
    } else {
      /*
           آخر اسلایدر:
           فقط فلش راست
        */
      nextButton.classList.add('hidden');

      previousButton.classList.remove('hidden');
    }
  }

  /* =========================================
       INITIAL STATE
    ========================================== */

  updateAmazingArrows();

  /* =========================================
       AFTER SLIDE
    ========================================== */

  swiper.on('slideChange', updateAmazingArrows);
}

/* =====================================================
   AMAZING TIMER
===================================================== */

let amazingTimerInterval = null;

export function initAmazingTimer() {
  /*
       تایمر قبلی پاک شود
    */

  if (amazingTimerInterval) {
    clearInterval(amazingTimerInterval);
  }

  /*
       6 ساعت
    */

  let totalSeconds = 6 * 60 * 60;

  function updateTimer() {
    const hours = Math.floor(totalSeconds / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    const hoursElement = document.querySelector('#hours');

    const minutesElement = document.querySelector('#minutes');

    const secondsElement = document.querySelector('#seconds');

    if (!hoursElement || !minutesElement || !secondsElement) {
      return;
    }

    hoursElement.textContent = String(hours).padStart(2, '0');

    minutesElement.textContent = String(minutes).padStart(2, '0');

    secondsElement.textContent = String(seconds).padStart(2, '0');

    totalSeconds--;

    /*
           بعد از صفر دوباره
           از 6 ساعت شروع شود
        */

    if (totalSeconds < 0) {
      totalSeconds = 6 * 60 * 60;
    }
  }

  /*
       نمایش فوری تایمر
    */

  updateTimer();

  amazingTimerInterval = setInterval(updateTimer, 1000);
}
