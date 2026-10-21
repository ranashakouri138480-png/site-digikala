import {
    getProducts,
} from "../../services/api.js";

import {
    addToCart,
} from "../../services/cart.js";

import {
    updateCartCount,
} from "../Cart/Cart.js";


/* =========================================
   PRODUCT DETAILS HTML
========================================= */

export default function ProductDetails() {

    return `

        <section
            id="productDetails"
            class="
                max-w-350
                mx-auto
                px-4
                py-10
            "
            dir="rtl"
        >

            <div
                class="
                    text-center
                    py-20
                    text-gray-400
                "
            >

                در حال دریافت اطلاعات محصول...

            </div>

        </section>

    `;

}


/* =========================================
   RENDER PRODUCT DETAILS
========================================= */

export async function renderProductDetails(productId) {

    const container =
        document.querySelector("#productDetails");


    if (!container) return;


    try {

        const products =
            await getProducts();


        const product =
            products.find(
                (item) =>
                    item.id === Number(productId)
            );


        /* محصول پیدا نشد */

        if (!product) {

            container.innerHTML = `

                <div
                    class="
                        text-center
                        py-20
                    "
                >

                    <h2
                        class="
                            text-xl
                            font-bold
                            mb-4
                        "
                    >

                        محصول پیدا نشد

                    </h2>


                    <button
                        id="backToHome"
                        type="button"
                        class="
                            bg-red-500
                            text-white
                            px-6
                            py-3
                            rounded-lg
                        "
                    >

                        بازگشت به صفحه اصلی

                    </button>

                </div>

            `;


            document
                .querySelector("#backToHome")
                ?.addEventListener("click", () => {

                    window.location.hash = "#/";

                });


            return;

        }


        /* =========================================
           نمایش محصول
        ========================================== */

        container.innerHTML = `

            <div
                class="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-10
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    p-6
                    lg:p-10
                "
            >


                <!-- =========================================
                    تصویر محصول
                ========================================== -->

                <div
                    class="
                        flex
                        items-center
                        justify-center
                        min-h-100
                    "
                >

                    <img
                        src="${product.image}"
                        alt="${product.title}"
                        class="
                            max-w-full
                            max-h-112.5
                            object-contain
                        "
                    >

                </div>


                <!-- =========================================
                    اطلاعات محصول
                ========================================== -->

                <div
                    class="
                        flex
                        flex-col
                    "
                >


                    <!-- دسته بندی -->

                    <p
                        class="
                            text-red-500
                            text-sm
                            mb-3
                        "
                    >

                        ${product.category}

                    </p>


                    <!-- عنوان -->

                    <h1
                        class="
                            text-xl
                            lg:text-2xl
                            font-bold
                            leading-9
                            text-gray-800
                        "
                    >

                        ${product.title}

                    </h1>


                    <!-- امتیاز -->

                    <div
                        class="
                            flex
                            items-center
                            gap-2
                            mt-5
                        "
                    >

                        <span
                            class="
                                text-yellow-500
                                text-lg
                            "
                        >

                            ★

                        </span>


                        <span
                            class="
                                text-sm
                                font-medium
                            "
                        >

                            ${product.rating?.rate || 0}

                        </span>


                        <span
                            class="
                                text-gray-400
                                text-sm
                            "
                        >

                            از

                            ${product.rating?.count || 0}

                            نظر

                        </span>

                    </div>


                    <!-- جداکننده -->

                    <div
                        class="
                            border-t
                            border-gray-200
                            mt-6
                            pt-6
                        "
                    >


                        <!-- توضیحات -->

                        <h2
                            class="
                                font-bold
                                mb-3
                            "
                        >

                            توضیحات محصول

                        </h2>


                        <p
                            class="
                                text-sm
                                text-gray-600
                                leading-8
                            "
                        >

                            ${product.description}

                        </p>

                    </div>


                    <!-- قیمت -->

                    <div
                        class="
                            mt-auto
                            pt-10
                        "
                    >

                        <div
                            class="
                                flex
                                items-center
                                justify-between
                                mb-5
                            "
                        >

                            <span
                                class="
                                    text-gray-500
                                "
                            >

                                قیمت

                            </span>


                            <span
                                class="
                                    text-2xl
                                    font-black
                                "
                            >

                                ${product.price.toLocaleString()}

                                دلار

                            </span>

                        </div>


                        <!-- افزودن به سبد -->

                        <button
                            id="addProductToCart"
                            type="button"
                            class="
                                w-full
                                bg-red-500
                                hover:bg-red-600
                                text-white
                                py-4
                                rounded-xl
                                font-bold
                                transition
                            "
                        >

                            افزودن به سبد خرید

                        </button>


                        <!-- بازگشت -->

                        <button
                            id="backButton"
                            type="button"
                            class="
                                w-full
                                mt-3
                                border
                                border-gray-300
                                hover:bg-gray-50
                                py-3
                                rounded-xl
                                transition
                            "
                        >

                            بازگشت به صفحه اصلی

                        </button>

                    </div>

                </div>

            </div>

        `;


        /* =========================================
           ADD TO CART
        ========================================== */

        const addButton =
            document.querySelector("#addProductToCart");


        addButton.addEventListener("click", () => {

            addToCart(product);

            updateCartCount();


            addButton.textContent =
                "✓ محصول به سبد خرید اضافه شد";


            setTimeout(() => {

                addButton.textContent =
                    "افزودن به سبد خرید";

            }, 1500);

        });


        /* =========================================
           BACK BUTTON
        ========================================== */

        const backButton =
            document.querySelector("#backButton");


        backButton.addEventListener("click", () => {

            window.location.hash = "#/";

        });


    } catch (error) {

        console.error(error);


        container.innerHTML = `

            <div
                class="
                    text-center
                    py-20
                    text-red-500
                "
            >

                خطا در دریافت اطلاعات محصول

            </div>

        `;

    }

}