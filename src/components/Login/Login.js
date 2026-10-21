/* =========================================
   LOGIN PAGE
========================================= */

import digikalaLogo from "../../assets/icons/icon digikala.svg";


export default function Login() {

    return `

        <main
            dir="rtl"
            class="
                min-h-screen
                bg-white
                flex
                items-center
                justify-center
                px-4
            "
        >

            <!-- =========================================
                 LOGIN BOX
            ========================================== -->

            <section
                class="
                    w-full
                    max-w-107.5
                    border
                    border-gray-200
                    rounded-xl
                    px-8
                    py-8
                    shadow-sm
                    bg-white
                "
            >


                <!-- =========================================
                     LOGO + BACK
                ========================================== -->

                <div
                    class="
                        relative
                        flex
                        items-center
                        justify-center
                        mb-10
                    "
                >

                    <!-- Back -->

                    <button
                        type="button"
                        id="loginBackButton"
                        class="
                            absolute
                            right-0
                            top-1/2
                            -translate-y-1/2

                            flex
                            items-center
                            justify-center

                            w-8
                            h-8

                            text-gray-800
                            hover:text-gray-500

                            transition
                        "
                        aria-label="بازگشت"
                    >

                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >

                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 5l-7 7 7 7"
                            />

                        </svg>

                    </button>


                    <!-- Logo -->

                    <img
                        src="${digikalaLogo}"
                        alt="دیجی‌کالا"
                        class="
                            w-36.25
                            h-auto
                            object-contain
                        "
                    >

                </div>


                <!-- =========================================
                     TITLE
                ========================================== -->

                <h1
                    class="
                        text-[18px]
                        font-bold
                        text-gray-900
                        mb-5
                    "
                >
                   ورود یا ثبت‌نام در دیجی‌کالا
                </h1>


                <!-- =========================================
                     DESCRIPTION
                ========================================== -->

                <div
                    class="
                        text-[13px]
                        leading-7
                        text-gray-500
                        mb-6
                    "
                >

                    <p>
                        لطفاً شماره موبایل یا ایمیل خود را وارد کنید
                    </p>

                </div>


                <!-- =========================================
                     LOGIN FORM
                ========================================== -->

                <form
                    id="loginForm"
                >


                    <!-- =========================================
                         FLOATING LABEL INPUT
                    ========================================== -->

                    <div
                        class="
                            relative
                            w-full
                        "
                    >

                        <input
                            id="loginInput"
                            type="text"
                            autocomplete="username"
                            placeholder=" "
                            class="
                                peer

                                w-full
                                h-13

                                border
                                border-gray-400

                                rounded-lg

                                px-4
                                pt-1

                                text-[14px]
                                text-gray-900

                                outline-none

                                bg-white

                                transition-all
                                duration-200

                                focus:border-gray-900
                                focus:ring-0
                            "
                        >


                        <!-- =========================================
                             FLOATING LABEL
                        ========================================== -->

                        <label
                            for="loginInput"
                            id="loginLabel"
                            class="
                                absolute

                                right-4
                                top-1/2

                                -translate-y-1/2

                                px-1

                                bg-white

                                text-[13px]
                                text-gray-500

                                pointer-events-none

                                transition-all
                                duration-200

                                peer-focus:top-0
                                peer-focus:text-[12px]
                                peer-focus:text-gray-800

                                peer-[:not(:placeholder-shown)]:top-0
                                peer-[:not(:placeholder-shown)]:text-[12px]
                                peer-[:not(:placeholder-shown)]:text-gray-800
                            "
                        >
                            شماره موبایل یا پست الکترونیک
                        </label>

                    </div>


                    <!-- =========================================
                         ERROR
                    ========================================== -->

                    <p
                        id="loginError"
                        class="
                            hidden
                            text-red-500
                            text-xs
                            mt-2
                        "
                    >
                    </p>


                    <!-- =========================================
                         LOGIN BUTTON
                    ========================================== -->

                    <button
                        type="submit"
                        class="
                            w-full
                            h-13

                            mt-5

                            bg-[#ef4056]
                            hover:bg-[#d9364c]

                            text-white

                            text-[14px]
                            font-bold

                            rounded-lg

                            transition
                            duration-200
                        "
                    >
                        ورود به دیجی‌کالا
                    </button>


                </form>


                <!-- =========================================
                     RULES
                ========================================== -->

                <p
                    class="
                        text-[11px]
                        text-gray-500
                        leading-6

                        mt-5
                    "
                >

                    ورود شما به معنای پذیرش

                    <a
                        href="#"
                        class="
                            text-[#008eb2]
                            hover:underline
                        "
                    >
                        شرایط دیجی‌کالا
                    </a>

                    و

                    <a
                        href="#"
                        class="
                            text-[#008eb2]
                            hover:underline
                        "
                    >
                        قوانین حریم خصوصی
                    </a>

                    است.

                </p>


            </section>

        </main>

    `;

}


/* =========================================
   INITIALIZE LOGIN
========================================= */

export function initLogin() {

    const form =
        document.querySelector("#loginForm");


    const input =
        document.querySelector("#loginInput");


    const error =
        document.querySelector("#loginError");


    const backButton =
        document.querySelector("#loginBackButton");


    if (!form || !input || !error) {

        return;

    }


    /* =========================================
       BACK BUTTON
    ========================================== */

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                window.location.hash = "#/";

            }
        );

    }


    /* =========================================
       FORM SUBMIT
    ========================================== */

    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const value =
                input.value.trim();


            /* =========================================
               EMPTY INPUT
            ========================================== */

            if (!value) {

                error.textContent =
                    "لطفاً شماره موبایل یا ایمیل خود را وارد کنید.";

                error.classList.remove("hidden");

                input.focus();

                return;

            }


            /* =========================================
               REMOVE ERROR
            ========================================== */

            error.textContent = "";

            error.classList.add("hidden");


            console.log(
                "Login value:",
                value
            );

        }
    );


    /* =========================================
       CLEAR ERROR WHEN USER TYPES
    ========================================== */

    input.addEventListener(
        "input",
        () => {

            if (input.value.trim()) {

                error.textContent = "";

                error.classList.add("hidden");

            }

        }
    );

}