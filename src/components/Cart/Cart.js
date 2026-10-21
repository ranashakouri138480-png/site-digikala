import {
    getCart,
    getCartCount,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../../services/cart.js";


export default function Cart() {

    return `

        <div
            id="cartOverlay"
            class="
                fixed
                inset-0
                bg-black/40
                hidden
                z-100
            "
        >

            <div
                id="cartPanel"
                class="
                    absolute
                    top-0
                    left-0
                    h-full
                    w-full
                    max-w-105
                    bg-white
                    shadow-2xl
                    flex
                    flex-col
                "
                dir="rtl"
            >

                <!-- Header -->

                <div
                    class="
                        flex
                        items-center
                        justify-between
                        p-5
                        border-b
                        border-gray-200
                    "
                >

                    <h2 class="font-bold text-lg">

                        سبد خرید

                    </h2>


                    <button
                        id="closeCart"
                        type="button"
                        class="
                            text-2xl
                            text-gray-500
                            hover:text-red-500
                            transition
                        "
                    >

                        ×

                    </button>

                </div>


                <!-- محصولات -->

                <div
                    id="cartItems"
                    class="
                        flex-1
                        overflow-y-auto
                        p-4
                    "
                >

                </div>


                <!-- Footer -->

                <div
                    class="
                        border-t
                        border-gray-200
                        p-5
                    "
                >

                    <div
                        class="
                            flex
                            items-center
                            justify-between
                            mb-4
                            font-bold
                        "
                    >

                        <span>

                            مبلغ کل:

                        </span>


                        <span id="cartTotal">

                            0 دلار

                        </span>

                    </div>


                    <button
                        type="button"
                        class="
                            w-full
                            bg-red-500
                            hover:bg-red-600
                            transition
                            text-white
                            py-3
                            rounded-lg
                            font-bold
                        "
                    >

                        ادامه فرآیند خرید

                    </button>

                </div>

            </div>

        </div>

    `;

}


/* =========================================
   INITIALIZE CART
========================================= */

export function initCart() {

    const cartOverlay =
        document.querySelector("#cartOverlay");

    const cartPanel =
        document.querySelector("#cartPanel");

    const closeCart =
        document.querySelector("#closeCart");

    const cartButton =
        document.querySelector("#cartButton");


    if (!cartOverlay) return;


    /* باز کردن سبد خرید */

    if (cartButton) {

        cartButton.addEventListener("click", () => {

            cartOverlay.classList.remove("hidden");

            renderCart();

        });

    }


    /* بستن با دکمه */

    if (closeCart) {

        closeCart.addEventListener("click", () => {

            cartOverlay.classList.add("hidden");

        });

    }


    /* بستن با کلیک روی Overlay */

    cartOverlay.addEventListener("click", () => {

        cartOverlay.classList.add("hidden");

    });


    /* جلوگیری از بسته شدن هنگام کلیک روی پنل */

    if (cartPanel) {

        cartPanel.addEventListener("click", (event) => {

            event.stopPropagation();

        });

    }


    /* نمایش اولیه */

    renderCart();

}


/* =========================================
   RENDER CART
========================================= */

export function renderCart() {

    const cartItems =
        document.querySelector("#cartItems");

    const cartTotal =
        document.querySelector("#cartTotal");


    if (!cartItems || !cartTotal) return;


    const cart = getCart();


    /* سبد خرید خالی */

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div
                class="
                    h-full
                    min-h-75
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-gray-400
                    text-sm
                "
            >

                <span class="text-5xl mb-4">

                    🛒

                </span>

                سبد خرید شما خالی است

            </div>

        `;


        cartTotal.textContent =
            "0 دلار";


        updateCartCount();

        return;

    }


    /* نمایش محصولات */

    cartItems.innerHTML = cart
        .map((product) => `

            <article
                class="
                    flex
                    gap-4
                    py-4
                    border-b
                    border-gray-100
                "
            >

                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="
                        w-20
                        h-20
                        object-contain
                        shrink-0
                    "
                >


                <div class="flex-1 min-w-0">


                    <h3
                        class="
                            text-sm
                            leading-6
                            line-clamp-2
                        "
                    >

                        ${product.title}

                    </h3>


                    <p
                        class="
                            font-bold
                            text-sm
                            mt-2
                        "
                    >

                        ${product.price}
                        دلار

                    </p>


                    <!-- تعداد -->

                    <div
                        class="
                            flex
                            items-center
                            gap-3
                            mt-3
                        "
                    >

                        <button
                            type="button"
                            class="
                                increase-quantity
                                w-8
                                h-8
                                rounded-lg
                                bg-gray-100
                                hover:bg-gray-200
                                transition
                            "
                            data-id="${product.id}"
                        >

                            +

                        </button>


                        <span class="font-medium">

                            ${product.quantity}

                        </span>


                        <button
                            type="button"
                            class="
                                decrease-quantity
                                w-8
                                h-8
                                rounded-lg
                                bg-gray-100
                                hover:bg-gray-200
                                transition
                            "
                            data-id="${product.id}"
                        >

                            −

                        </button>


                        <button
                            type="button"
                            class="
                                remove-product
                                text-red-500
                                text-xs
                                mr-auto
                                hover:text-red-700
                            "
                            data-id="${product.id}"
                        >

                            حذف

                        </button>

                    </div>

                </div>

            </article>

        `)
        .join("");


    /* مبلغ کل */

    cartTotal.textContent =
        getCartTotal().toFixed(2) + " دلار";


    updateCartCount();


    addCartEvents();

}


/* =========================================
   CART EVENTS
========================================= */

function addCartEvents() {

    document
        .querySelectorAll(".increase-quantity")
        .forEach((button) => {

            button.addEventListener("click", () => {

                increaseQuantity(
                    Number(button.dataset.id)
                );

                renderCart();

            });

        });


    document
        .querySelectorAll(".decrease-quantity")
        .forEach((button) => {

            button.addEventListener("click", () => {

                decreaseQuantity(
                    Number(button.dataset.id)
                );

                renderCart();

            });

        });


    document
        .querySelectorAll(".remove-product")
        .forEach((button) => {

            button.addEventListener("click", () => {

                removeFromCart(
                    Number(button.dataset.id)
                );

                renderCart();

            });

        });

}


/* =========================================
   UPDATE CART COUNT
========================================= */

export function updateCartCount() {

    const cartCount =
        document.querySelector("#cartCount");


    if (!cartCount) return;


    const count = getCartCount();


    cartCount.textContent = count;


    /* اگر سبد خالی بود Badge مخفی شود */

    if (count === 0) {

        cartCount.classList.add("hidden");

    } else {

        cartCount.classList.remove("hidden");

    }

}