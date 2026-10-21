import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

import { getProducts } from "../../services/api.js";

/* =========================================
   تنظیمات
========================================= */

// تعداد ردیف‌ها در هر ستون (مثل دیجی‌کالا: ۳ تا)
const ROWS = 3;

// حداکثر تعداد محصولات (۱۸ تا = ۶ ستون)
const MAX_PRODUCTS = 18;

/* =========================================
   SECTION (HTML)

   استفاده:
   RankedProductsSection({ id: "bestSelling", title: "پرفروش‌ترین‌ها" })

   id باید برای هر سکشن یکتا باشد.
========================================= */

export default function RankedProductsSection({ id, title }) {
  return `
    <section class="w-full py-6" dir="rtl">
      <div class="max-w-350 mx-auto px-4">

        <div class="bg-white border border-gray-200 rounded-2xl p-5 md:p-6">

          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg md:text-xl font-bold text-gray-800">
              ${title}
            </h2>
          </div>

          <!-- Loading -->
          <div
            id="${id}-loading"
            class="text-center py-10 text-gray-500"
          >
            در حال دریافت محصولات...
          </div>

          <!-- Slider -->
          <div id="${id}-wrapper" class="relative hidden">

            <!-- فلش قبلی (سمت راست) -->
            <button
              id="${id}-prev"
              type="button"
              aria-label="قبلی"
              class="
                absolute right-0 top-1/2 -translate-y-1/2 z-20
                w-10 h-10 rounded-full bg-white border border-gray-200
                shadow-sm flex items-center justify-center
                text-gray-600 text-[26px] leading-none
                hover:bg-gray-50 transition
              "
            >
              ›
            </button>

            <div class="swiper ${id}-swiper" dir="rtl">
              <div id="${id}-list" class="swiper-wrapper"></div>
            </div>

            <!-- فلش بعدی (سمت چپ) -->
            <button
              id="${id}-next"
              type="button"
              aria-label="بعدی"
              class="
                absolute left-0 top-1/2 -translate-y-1/2 z-20
                w-10 h-10 rounded-full bg-white border border-gray-200
                shadow-sm flex items-center justify-center
                text-gray-600 text-[26px] leading-none
                hover:bg-gray-50 transition
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
   CREATE ITEM
========================================= */

function createItem(product, number) {
  const title = escapeHtml(product.title || "محصول دیجی‌کالا");

  return `
    <a
      href="#/product/${product.id}"
      class="
        flex items-center gap-3
        p-2 rounded-xl
        hover:bg-gray-50 transition
      "
    >

      <!-- Image -->
      <div
        class="
          w-22 h-22 md:w-26 md:h-26
          shrink-0 flex items-center justify-center
        "
      >
        ${
          product.image
            ? `<img
                 src="${escapeHtml(product.image)}"
                 alt="${title}"
                 loading="lazy"
                 class="max-w-full max-h-full object-contain"
               >`
            : `<span class="text-gray-300 text-xs">بدون تصویر</span>`
        }
      </div>

      <!-- Number -->
      <span
        class="
          shrink-0 w-7 h-7 rounded-full
          bg-[#ef394e] text-white text-xs font-bold
          flex items-center justify-center
        "
      >
        ${number.toLocaleString("fa-IR")}
      </span>

      <!-- Title -->
      <h3
        class="
          flex-1 min-w-0
          text-[13px] leading-6 text-gray-700
          line-clamp-2
        "
      >
        ${title}
      </h3>

    </a>
  `;
}

/* =========================================
   CREATE COLUMN (هر اسلاید = ۳ محصول زیر هم)
========================================= */

function createColumn(products, startIndex) {
  return `
    <div class="swiper-slide h-auto!">
      <div class="flex flex-col gap-3">
        ${products
          .map((product, i) => createItem(product, startIndex + i + 1))
          .join("")}
      </div>
    </div>
  `;
}

/* =========================================
   RENDER

   renderRankedProducts({ id: "bestSelling", page: 1 })

   page: صفحه‌ی API (برای اینکه دو سکشن محصولات یکسان نشان ندهند)
========================================= */

export async function renderRankedProducts({ id, page = 1 }) {
  const loading = document.querySelector(`#${id}-loading`);
  const wrapper = document.querySelector(`#${id}-wrapper`);
  const container = document.querySelector(`#${id}-list`);

  if (!loading || !wrapper || !container) {
    return;
  }

  try {
    const products = (await getProducts({ page })).slice(0, MAX_PRODUCTS);

    // getProducts در صورت خطا آرایه خالی برمی‌گرداند
    if (!products.length) {
      loading.innerHTML = `
        <span class="text-red-500">محصولی دریافت نشد</span>
      `;
      return;
    }

    // گروه‌بندی: هر ۳ محصول = یک ستون
    let columns = "";

    for (let i = 0; i < products.length; i += ROWS) {
      columns += createColumn(products.slice(i, i + ROWS), i);
    }

    container.innerHTML = columns;

    loading.classList.add("hidden");
    wrapper.classList.remove("hidden");

    // Swiper باید بعد از نمایش wrapper ساخته شود تا عرض درست حساب شود
    initSlider(id);
  } catch (error) {
    console.error(`Ranked Products Error (${id}):`, error);

    loading.innerHTML = `
      <span class="text-red-500">خطا در دریافت محصولات</span>
    `;
  }
}

/* =========================================
   SWIPER
========================================= */

function initSlider(id) {
  const swiperElement = document.querySelector(`.${id}-swiper`);
  const nextButton = document.querySelector(`#${id}-next`);
  const prevButton = document.querySelector(`#${id}-prev`);

  if (!swiperElement) {
    return;
  }

  if (swiperElement.swiper) {
    swiperElement.swiper.destroy(true, true);
  }

  const swiper = new Swiper(swiperElement, {
    modules: [Navigation],

    slidesPerView: 1,
    spaceBetween: 16,
    speed: 500,

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  });

  // مخفی کردن فلش‌ها در ابتدا / انتها
  const updateArrows = () => {
    prevButton.style.display = swiper.isBeginning ? "none" : "flex";
    nextButton.style.display = swiper.isEnd ? "none" : "flex";
  };

  updateArrows();

  swiper.on("slideChange", updateArrows);
  swiper.on("resize", updateArrows);
  swiper.on("breakpoint", updateArrows);
}

/* =========================================
   جلوگیری از خراب شدن HTML
========================================= */

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}