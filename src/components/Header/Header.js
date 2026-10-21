export default function Header() {
    return `
        
        <header
            class="
                w-full
                bg-white
                sticky
                top-0
                z-50
            "
            dir="rtl"
        >

            <!-- =========================================
                بنر بالا
            ========================================== -->

            <div class="w-full h-15 overflow-hidden">

                <img
                    src="/src/assets/images/banner.webp"
                    alt="بنر دیجی‌کالا"
                    class="w-full h-full object-cover"
                >

            </div>


            <!-- =========================================
                هدر اصلی
            ========================================== -->

            <div class="w-full px-6">

                <div class="
                    h-20
                    flex
                    items-center
                    justify-between
                ">

                    <!-- لوگو -->

                    <div class="shrink-0 flex items-center">

                        <img
                            src="/src/assets/icons/icon digikala.svg"
                            alt="digikala"
                            class="
                                w-48.75
                                h-7.5
                                object-contain
                            "
                        >

                    </div>


                    <!-- =========================================
                        سرچ
                    ========================================== -->

                    <div class="w-140 ml-auto mr-10">

                        <button
                            id="searchInput"
                            type="button"
                            class="
                                w-123.75
                                h-12
                                bg-gray-100
                                rounded-[50px]
                                flex
                                items-center
                                px-4
                                cursor-text
                                text-right
                                transition
                                hover:bg-gray-200
                            "
                        >

                            <svg
                                class="w-5 h-5 text-gray-500 ml-3 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >

                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0v-1.5a7.5 7.5 0 0 1 15 0Z"
                                />

                            </svg>

                            <span class="text-sm text-gray-500">
                                جستجو
                            </span>

                        </button>

                    </div>


                    <!-- =========================================
                        سمت چپ هدر
                    ========================================== -->

                    <div class="flex items-center gap-3 order-3">


                        <!-- =========================================
                            اعلان / DARK MODE
                        ========================================== -->

                        <button
                            id="darkModeToggle"
                            type="button"
                            class="
                                p-2
                                rounded-full
                                hover:bg-gray-100
                                transition
                            "
                            aria-label="تغییر حالت تاریک"
                        >

                            <svg
                                class="w-6 h-6 text-gray-700 dark-mode-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >

                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />

                            </svg>

                        </button>


                        <!-- =========================================
                            ورود | ثبت‌نام
                        ========================================== -->

                        <button
                            id="loginButton"
                            type="button"
                            class="
                                h-10
                                px-4
                                border
                                border-gray-300
                                rounded-lg
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                cursor-pointer
                                hover:bg-gray-50
                                transition
                                duration-200
                            "
                        >

                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >

                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 3h4.5A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5H15M10 17l5-5-5-5M15 12H3"
                                />

                            </svg>

                            ورود | ثبت‌نام

                        </button>


                        <!-- جداکننده -->

                        <div class="w-px h-6 bg-gray-300"></div>


                        <!-- =========================================
                            سبد خرید
                        ========================================== -->

                        <button
                            id="cartButton"
                            type="button"
                            class="
                                relative
                                p-2
                                hover:bg-gray-100
                                rounded-lg
                                transition
                            "
                        >

                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >

                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2 5h14M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0-1 1 1 1 0 0 0-2 0 1 1 0 0 0 0 2Z"
                                />

                            </svg>

                            <span
                                id="cartCount"
                                class="
                                    absolute
                                    -top-1
                                    -right-1
                                    min-w-4.5
                                    h-4.5
                                    px-1
                                    bg-red-500
                                    text-white
                                    text-[10px]
                                    font-bold
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                0
                            </span>

                        </button>

                    </div>

                </div>

            </div>


            <!-- =========================================
                Search Overlay
            ========================================== -->

            <div
                id="searchOverlay"
                class="
                    fixed
                    inset-0
                    bg-black/40
                    backdrop-blur-[2px]
                    z-100
                    hidden
                "
            >

                <div
                    id="searchPanel"
                    class="
                        absolute
                        top-23.75
                        right-1/2
                        translate-x-1/2
                        w-145
                        bg-white
                        rounded-2xl
                        shadow-2xl
                        overflow-hidden
                    "
                >

                    <div
                        class="
                            flex
                            items-center
                            gap-3
                            p-4
                            border-b
                            border-gray-200
                        "
                    >

                        <svg
                            class="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >

                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0v-1.5a7.5 7.5 0 0 1 15 0Z"
                            />

                        </svg>


                        <input
                            id="overlaySearchInput"
                            type="text"
                            placeholder="جستجو در همه کالاها"
                            autocomplete="off"
                            class="
                                flex-1
                                outline-none
                                text-sm
                                py-2
                            "
                        >


                        <button
                            id="closeSearch"
                            type="button"
                            class="
                                text-gray-500
                                text-xl
                            "
                        >
                            ×
                        </button>

                    </div>


                    <div class="p-5">

                        <h3
                            class="
                                text-right
                                font-bold
                                text-sm
                                mb-4
                            "
                        >
                            جستجوهای پرطرفدار
                        </h3>


                        <div
                            class="
                                flex
                                flex-wrap
                                gap-3
                                justify-end
                            "
                        >

                            <button
                                class="
                                    border
                                    rounded-full
                                    px-4
                                    py-2
                                    text-sm
                                "
                            >
                                دفتر نقاشی
                            </button>


                            <button
                                class="
                                    border
                                    rounded-full
                                    px-4
                                    py-2
                                    text-sm
                                "
                            >
                                پاک کن
                            </button>


                            <button
                                class="
                                    border
                                    rounded-full
                                    px-4
                                    py-2
                                    text-sm
                                "
                            >
                                روغن موتور
                            </button>


                            <button
                                class="
                                    border
                                    rounded-full
                                    px-4
                                    py-2
                                    text-sm
                                "
                            >
                                A17
                            </button>

                        </div>


                        <img
                            src="/src/assets/images/search-banner.webp"
                            class="
                                mt-6
                                w-full
                                rounded-xl
                            "
                        >

                    </div>

                </div>

            </div>

        </header>

    `;
}


/* =========================================
   DARK MODE
========================================= */

export function initDarkMode() {

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    if (!darkModeToggle) return;


    /* =========================================
       بررسی حالت ذخیره‌شده
    ========================================== */

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.documentElement.classList.add(
            "dark-mode"
        );

    }


    /* =========================================
       تغییر حالت
    ========================================== */

    darkModeToggle.addEventListener("click", () => {

        document.documentElement.classList.toggle(
            "dark-mode"
        );


        const isDark =
            document.documentElement.classList.contains(
                "dark-mode"
            );


        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

    });

}