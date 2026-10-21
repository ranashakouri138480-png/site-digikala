/* =========================================
   FOOTER SVG ICONS
========================================= */

import expressDelivery from "../../assets/images/footer/express-delivery.svg";

import cashOnDelivery from "../../assets/images/footer/cash-on-delivery.svg";

import support from "../../assets/images/footer/support.svg";

import returnPolicy from "../../assets/images/footer/return-policy.svg";

import originalProducts from "../../assets/images/footer/original-products.svg";


/* =========================================
   DIGIKALA LOGO
========================================= */

import digikalaLogo from "../../assets/icons/icon digikala.svg";


/* =========================================
   SOCIAL ICONS
========================================= */

import instagramIcon from "../../assets/images/footer/instagram.svg";

import twitterIcon from "../../assets/images/footer/twitter.svg";

import linkedinIcon from "../../assets/images/footer/linkedin.svg";

import aparatIcon from "../../assets/images/footer/aparat.svg";


/* =========================================
   FOOTER
========================================= */

export default function Footer() {

    return `

        <footer
            dir="rtl"
            class="
                mt-16
                border-t
                border-gray-200
                bg-white
            "
        >


            <!-- =========================================
                 TOP SECTION
            ========================================= -->

            <div
                class="
                    max-w-400
                    mx-auto
                    px-6
                    py-8
                "
            >


                <!-- =========================================
                     LOGO + BACK TO TOP
                ========================================= -->

                <div
                    class="
                        flex
                        flex-col
                        gap-6
                        pb-8
                        mb-10
                    "
                >


                    <!-- ردیف لوگو و دکمه -->

                    <div
                        class="
                            flex
                            items-center
                            justify-between
                        "
                    >


                        <!-- DIGIKALA LOGO -->

                        <img
                            src="${digikalaLogo}"
                            alt="دیجی کالا"
                            class="
                                w-40
                                h-auto
                                object-contain
                            "
                        />


                        <!-- BACK TO TOP -->

                        <button
                            id="backToTop"
                            class="
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-300
                                rounded-xl
                                px-5
                                py-3
                                text-sm
                                text-gray-600
                                hover:bg-gray-50
                                transition
                            "
                        >

                            <span>بازگشت به بالا</span>

                            <span class="text-lg">
                                ↑
                            </span>

                        </button>


                    </div>


                    <!-- CONTACT INFORMATION -->

                    <div
                        class="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            text-sm
                            text-gray-500
                        "
                    >

                        <span>
                            تلفن پشتیبانی ۰۲۱-۶۱۹۳۰۰۰۰
                        </span>


                        <span class="text-gray-300">
                            |
                        </span>


                        <span>
                            ۰۲۱-۹۱۰۰۰۱۰۰
                        </span>


                        <span class="text-gray-300">
                            |
                        </span>


                        <span>
                            ۷ روز هفته، ۲۴ ساعت پاسخگوی شما هستیم
                        </span>


                    </div>


                </div>


                <!-- =========================================
                     BENEFITS
                ========================================= -->

                <div
                    class="
                        grid
                        grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-5
                        gap-8
                        py-10
                    "
                >


                    <!-- Express Delivery -->

                    <div
                        class="
                            flex
                            flex-col
                            items-center
                            text-center
                        "
                    >

                        <img
                            src="${expressDelivery}"
                            alt="امکان تحویل اکسپرس"
                            class="
                                w-16
                                h-16
                                object-contain
                                mb-4
                            "
                        />

                        <p
                            class="
                                text-sm
                                text-gray-600
                            "
                        >
                            امکان تحویل اکسپرس
                        </p>

                    </div>


                    <!-- Cash On Delivery -->

                    <div
                        class="
                            flex
                            flex-col
                            items-center
                            text-center
                        "
                    >

                        <img
                            src="${cashOnDelivery}"
                            alt="امکان پرداخت در محل"
                            class="
                                w-16
                                h-16
                                object-contain
                                mb-4
                            "
                        />

                        <p
                            class="
                                text-sm
                                text-gray-600
                            "
                        >
                            امکان پرداخت در محل
                        </p>

                    </div>


                    <!-- Support -->

                    <div
                        class="
                            flex
                            flex-col
                            items-center
                            text-center
                        "
                    >

                        <img
                            src="${support}"
                            alt="پشتیبانی ۲۴ ساعته"
                            class="
                                w-16
                                h-16
                                object-contain
                                mb-4
                            "
                        />

                        <p
                            class="
                                text-sm
                                text-gray-600
                            "
                        >
                            ۷ روز هفته، ۲۴ ساعت
                        </p>

                    </div>


                    <!-- Return Policy -->

                    <div
                        class="
                            flex
                            flex-col
                            items-center
                            text-center
                        "
                    >

                        <img
                            src="${returnPolicy}"
                            alt="هفت روز فرصت بازگشت کالا"
                            class="
                                w-16
                                h-16
                                object-contain
                                mb-4
                            "
                        />

                        <p
                            class="
                                text-sm
                                text-gray-600
                            "
                        >
                            هفت روز فرصت بازگشت کالا
                        </p>

                    </div>


                    <!-- Original Products -->

                    <div
                        class="
                            flex
                            flex-col
                            items-center
                            text-center
                        "
                    >

                        <img
                            src="${originalProducts}"
                            alt="ضمانت اصل بودن کالا"
                            class="
                                w-16
                                h-16
                                object-contain
                                mb-4
                            "
                        />

                        <p
                            class="
                                text-sm
                                text-gray-600
                            "
                        >
                            ضمانت اصل بودن کالا
                        </p>

                    </div>


                </div>


                <!-- =========================================
                     FOOTER LINKS
                ========================================= -->

                <div
                    class="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-4
                        gap-10
                        py-12
                    "
                >


                    <!-- COLUMN 1 -->

                    <div>

                        <h3
                            class="
                                text-lg
                                font-bold
                                text-gray-800
                                mb-6
                            "
                        >
                            با دیجی‌کالا
                        </h3>


                        <ul
                            class="
                                space-y-4
                                text-gray-500
                                text-sm
                            "
                        >

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    اتاق خبر دیجی‌کالا
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    فروش در دیجی‌کالا
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    فرصت‌های شغلی
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    گزارش تخلف در دیجی‌کالا
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    تماس با دیجی‌کالا
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    درباره دیجی‌کالا
                                </a>
                            </li>

                        </ul>

                    </div>


                    <!-- COLUMN 2 -->

                    <div>

                        <h3
                            class="
                                text-lg
                                font-bold
                                text-gray-800
                                mb-6
                            "
                        >
                            خدمات مشتریان
                        </h3>


                        <ul
                            class="
                                space-y-4
                                text-gray-500
                                text-sm
                            "
                        >

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    پاسخ به پرسش‌های متداول
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    رویه‌های بازگرداندن کالا
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    شرایط استفاده
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    حریم خصوصی
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    گزارش باگ
                                </a>
                            </li>

                        </ul>

                    </div>


                    <!-- COLUMN 3 -->

                    <div>

                        <h3
                            class="
                                text-lg
                                font-bold
                                text-gray-800
                                mb-6
                            "
                        >
                            راهنمای خرید از دیجی‌کالا
                        </h3>


                        <ul
                            class="
                                space-y-4
                                text-gray-500
                                text-sm
                            "
                        >

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    نحوه ثبت سفارش
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    رویه ارسال سفارش
                                </a>
                            </li>

                            <li>
                                <a href="#" class="hover:text-red-500 transition">
                                    شیوه‌های پرداخت
                                </a>
                            </li>

                        </ul>

                    </div>


                    <!-- =========================================
                         SOCIAL + EMAIL
                    ========================================= -->

                    <div>


                        <h3
                            class="
                                text-lg
                                font-bold
                                text-gray-800
                                mb-6
                            "
                        >
                            همراه ما باشید!
                        </h3>


                        <!-- SOCIAL SVG FILES -->

                        <div
                            class="
                                flex
                                items-center
                                gap-5
                            "
                        >


                            <!-- Instagram -->

                            <a
                                href="#"
                                aria-label="Instagram"
                                class="
                                    transition
                                    hover:opacity-70
                                "
                            >

                                <img
                                    src="${instagramIcon}"
                                    alt="Instagram"
                                    class="
                                        w-8
                                        h-8
                                        object-contain
                                    "
                                />

                            </a>


                            <!-- Twitter -->

                            <a
                                href="#"
                                aria-label="Twitter"
                                class="
                                    transition
                                    hover:opacity-70
                                "
                            >

                                <img
                                    src="${twitterIcon}"
                                    alt="Twitter"
                                    class="
                                        w-8
                                        h-8
                                        object-contain
                                    "
                                />

                            </a>


                            <!-- LinkedIn -->

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                class="
                                    transition
                                    hover:opacity-70
                                "
                            >

                                <img
                                    src="${linkedinIcon}"
                                    alt="LinkedIn"
                                    class="
                                        w-8
                                        h-8
                                        object-contain
                                    "
                                />

                            </a>


                            <!-- Aparat -->

                            <a
                                href="#"
                                aria-label="Aparat"
                                class="
                                    transition
                                    hover:opacity-70
                                "
                            >

                                <img
                                    src="${aparatIcon}"
                                    alt="Aparat"
                                    class="
                                        w-8
                                        h-8
                                        object-contain
                                    "
                                />

                            </a>


                        </div>


                        <!-- EMAIL -->

                        <h3
                            class="
                                text-lg
                                font-bold
                                text-gray-800
                                mt-10
                                mb-5
                            "
                        >
                            با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید
                        </h3>


                        <form
                            id="footerEmailForm"
                            class="
                                flex
                                gap-3
                            "
                        >

                            <input
                                id="footerEmail"
                                type="email"
                                placeholder="ایمیل شما"
                                class="
                                    flex-1
                                    min-w-0
                                    bg-gray-100
                                    border
                                    border-transparent
                                    rounded-xl
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-red-400
                                    transition
                                "
                            />


                            <button
                                type="submit"
                                class="
                                    bg-red-500
                                    hover:bg-red-600
                                    text-white
                                    px-6
                                    py-3
                                    rounded-xl
                                    transition
                                "
                            >
                                ثبت
                            </button>


                        </form>


                    </div>


                </div>


            </div>


            <!-- =========================================
                 APP DOWNLOAD
            ========================================= -->

            <div
                class="
                    bg-slate-700
                    py-5
                "
            >

                <div
                    class="
                        max-w-400
                        mx-auto
                        px-6
                        flex
                        flex-col
                        lg:flex-row
                        items-center
                        justify-between
                        gap-6
                    "
                >


                    <!-- APP TITLE -->

                    <div
                        class="
                            flex
                            items-center
                            gap-4
                        "
                    >

                        <div
                            class="
                                w-14
                                h-14
                                bg-red-500
                                rounded-xl
                                flex
                                items-center
                                justify-center
                                overflow-hidden
                            "
                        >

                            <img
                                src="${digikalaLogo}"
                                alt="دیجی کالا"
                                class="
                                    w-full
                                    h-full
                                    object-contain
                                    p-2
                                "
                            />

                        </div>


                        <h2
                            class="
                                text-white
                                text-xl
                                font-bold
                            "
                        >
                            دانلود اپلیکیشن دیجی‌کالا
                        </h2>


                    </div>


                    <!-- DOWNLOAD BUTTONS -->

                    <div
                        class="
                            flex
                            flex-wrap
                            justify-center
                            gap-3
                        "
                    >

                        <button
                            class="
                                bg-white
                                rounded-lg
                                px-5
                                py-3
                                text-sm
                                font-medium
                                hover:bg-gray-100
                                transition
                            "
                        >
                            دریافت از بازار
                        </button>


                        <button
                            class="
                                bg-white
                                rounded-lg
                                px-5
                                py-3
                                text-sm
                                font-medium
                                hover:bg-gray-100
                                transition
                            "
                        >
                            دریافت از مایکت
                        </button>


                        <button
                            class="
                                bg-white
                                rounded-lg
                                px-5
                                py-3
                                text-sm
                                font-medium
                                hover:bg-gray-100
                                transition
                            "
                        >
                            Google Play
                        </button>


                    </div>


                </div>


            </div>


            <!-- =========================================
                 COPYRIGHT
            ========================================= -->

            <div
                class="
                    bg-gray-100
                    border-t
                    border-gray-200
                    py-6
                    text-center
                    text-xs
                    text-gray-500
                "
            >

                تمامی حقوق این وب‌سایت محفوظ است.

            </div>


        </footer>

    `;

}