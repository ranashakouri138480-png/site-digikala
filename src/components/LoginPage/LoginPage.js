/* =========================================
   LOGIN PAGE
========================================= */

import digikalaLogo from "../../assets/icons/icon digikala.svg";


export default function LoginPage() {

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
            ========================================= -->

            <section
                class="
                    w-full
                    max-w-100
                    border
                    border-gray-200
                    rounded-xl
                    px-8
                    py-8
                    shadow-sm
                "
            >


                <!-- =========================================
                     LOGO
                ========================================= -->

                <div
                    class="
                        flex
                        justify-center
                        mb-10
                    "
                >

                    <img
                        src="${digikalaLogo}"
                        alt="دیجی‌کالا"
                        class="
                            w-40
                            h-auto
                            object-contain
                        "
                    >

                </div>


                <!-- =========================================
                     TITLE
                ========================================= -->

                <h1
                    class="
                        text-xl
                        font-bold
                        text-gray-800
                        mb-5
                    "
                >
                    ورود | ثبت‌نام
                </h1>


                <!-- =========================================
                     DESCRIPTION
                ========================================= -->

                <div
                    class="
                        text-sm
                        leading-7
                        text-gray-600
                        mb-7
                    "
                >

                    <p>
                        سلام!
                    </p>

                    <p>
                        لطفاً شماره موبایل یا ایمیل خود را وارد کنید
                    </p>

                </div>


                <!-- =========================================
                     LOGIN FORM
                ========================================= -->

                <form
                    id="loginForm"
                >


                    <!-- Input -->

                    <input
                        id="loginInput"
                        type="text"
                        placeholder="شماره موبایل یا پست الکترونیکی"
                        class="
                            w-full
                            h-12
                            border
                            border-gray-300
                            rounded-lg
                            px-4
                            text-sm
                            outline-none
                            transition

                            focus:border-red-500
                            focus:ring-1
                            focus:ring-red-500
                        "
                    >


                    <!-- Error -->

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


                    <!-- Submit -->

                    <button
                        type="submit"
                        class="
                            w-full
                            h-12
                            mt-5

                            bg-red-500
                            hover:bg-red-600

                            text-white
                            text-sm
                            font-bold

                            rounded-lg

                            transition
                        "
                    >
                        ورود
                    </button>


                </form>


                <!-- =========================================
                     RULES
                ========================================= -->

                <p
                    class="
                        text-xs
                        text-gray-500
                        leading-6
                        mt-6
                    "
                >

                    ورود شما به معنای پذیرش

                    <a
                        href="#"
                        class="
                            text-blue-500
                        "
                    >
                        شرایط دیجی‌کالا
                    </a>

                    و

                    <a
                        href="#"
                        class="
                            text-blue-500
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
   INITIALIZE LOGIN PAGE
========================================= */

export function initLoginPage() {

    const form =
        document.querySelector("#loginForm");


    const input =
        document.querySelector("#loginInput");


    const error =
        document.querySelector("#loginError");


    if (!form || !input || !error) {

        return;

    }


    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const value =
                input.value.trim();


            /* =========================================
               EMPTY INPUT
            ========================================= */

            if (!value) {

                error.textContent =
                    "لطفاً شماره موبایل یا ایمیل خود را وارد کنید.";

                error.classList.remove("hidden");

                return;

            }


            /* =========================================
               REMOVE ERROR
            ========================================= */

            error.textContent = "";

            error.classList.add("hidden");


            console.log(
                "Login value:",
                value
            );

        }
    );

}