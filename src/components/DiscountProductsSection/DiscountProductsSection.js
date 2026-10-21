import { getProducts } from "../../services/api.js";


export default function DiscountProductsSection() {

    return `

        <section
            class="w-full py-8"
            dir="rtl"
        >

            <div
                class="max-w-350 mx-auto px-4"
            >


                <!-- =========================================
                   HEADER
                ========================================= -->

                <div
                    class="flex items-center justify-between mb-6"
                >

                    <h2
                        class="text-xl md:text-2xl font-bold text-gray-800"
                    >

                        منتخب محصولات تخفیف و حراج

                    </h2>


                    <a
                        href="#"
                        class="text-red-500 text-sm font-medium hover:text-red-600"
                    >

                        مشاهده همه

                    </a>

                </div>


                <!-- =========================================
                   LOADING
                ========================================= -->

                <div
                    id="discountProductsLoading"
                    class="text-center py-10 text-gray-500"
                >

                    در حال دریافت محصولات...

                </div>


                <!-- =========================================
                   ERROR
                ========================================= -->

                <div
                    id="discountProductsError"
                    class="hidden text-center py-10 text-red-500"
                >

                    خطا در دریافت محصولات

                </div>


                <!-- =========================================
                   PRODUCTS
                ========================================= -->

                <div
                    id="discountProductsList"
                    class="
                        hidden
                        grid-cols-2
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-5
                        xl:grid-cols-6
                        border
                        border-gray-200
                        rounded-2xl
                        overflow-hidden
                        bg-white
                    "
                >

                </div>


            </div>

        </section>

    `;

}



/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createDiscountProductCard(product, index) {

    const discount = 10 + ((index * 7) % 50);

    const oldPrice =
        Math.round(
            product.price *
            (100 / (100 - discount))
        );


    return `

        <article
            class="
                border-l
                border-b
                border-gray-200
                p-4
                min-h-95
                flex
                flex-col
                bg-white
                hover:shadow-lg
                transition
                duration-300
            "
        >


            <!-- IMAGE -->

            <a
                href="#product/${product.id}"
                class="
                    h-45
                    flex
                    items-center
                    justify-center
                    mb-4
                "
            >

                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="
                        max-h-full
                        max-w-full
                        object-contain
                    "
                >

            </a>


            <!-- TITLE -->

            <a
                href="#product/${product.id}"
            >

                <h3
                    class="
                        text-sm
                        text-gray-700
                        leading-6
                        line-clamp-2
                        min-h-12
                    "
                >

                    ${product.title}

                </h3>

            </a>


            <!-- CATEGORY -->

            <p
                class="
                    text-xs
                    text-gray-400
                    mt-2
                    truncate
                "
            >

                ${product.category}

            </p>


            <!-- PRICE -->

            <div
                class="
                    mt-auto
                    pt-4
                "
            >


                <div
                    class="
                        flex
                        items-center
                        justify-between
                    "
                >

                    <!-- DISCOUNT -->

                    <span
                        class="
                            bg-red-500
                            text-white
                            text-xs
                            font-bold
                            px-2
                            py-1
                            rounded-full
                        "
                    >

                        ${discount}٪

                    </span>


                    <!-- PRICE -->

                    <div
                        class="text-left"
                    >

                        <span
                            class="
                                text-sm
                                font-bold
                                text-gray-800
                            "
                        >

                            ${product.price.toLocaleString()}

                        </span>


                        <span
                            class="
                                text-xs
                                text-gray-500
                            "
                        >

                            دلار

                        </span>

                    </div>

                </div>


                <!-- OLD PRICE -->

                <div
                    class="
                        text-left
                        mt-1
                    "
                >

                    <span
                        class="
                            text-xs
                            text-gray-400
                            line-through
                        "
                    >

                        ${oldPrice.toLocaleString()}

                    </span>

                </div>


            </div>


        </article>

    `;

}



/* =========================================
   RENDER PRODUCTS
========================================= */

export async function renderDiscountProducts() {

    const loading =
        document.querySelector(
            "#discountProductsLoading"
        );


    const error =
        document.querySelector(
            "#discountProductsError"
        );


    const container =
        document.querySelector(
            "#discountProductsList"
        );


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
        ==========================================
        انتخاب محصولات
        ==========================================
        */

        const selectedProducts =
            products.slice(0, 12);


        container.innerHTML =
            selectedProducts
                .map(
                    createDiscountProductCard
                )
                .join("");


        loading.classList.add(
            "hidden"
        );


        container.classList.remove(
            "hidden"
        );


    } catch (err) {

        console.error(err);


        loading.classList.add(
            "hidden"
        );


        error.classList.remove(
            "hidden"
        );

    }

}