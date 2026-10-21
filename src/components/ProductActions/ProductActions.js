import {
    addToCart,
} from "../../services/cart.js";

import {
    updateCartCount,
} from "../Cart/Cart.js";


export function initProductActions(products) {

    const buttons =
        document.querySelectorAll(".add-to-cart");


    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const productId =
                Number(button.dataset.productId);


            const product =
                products.find(
                    (item) =>
                    item.id === productId
                );


            if (!product) {

                console.error(
                    "محصول پیدا نشد"
                );

                return;

            }


            /* افزودن محصول به سبد */

            addToCart(product);


            /* آپدیت تعداد سبد خرید */

            updateCartCount();


            /* تغییر متن دکمه */

            const originalText =
                "افزودن به سبد خرید";


            button.textContent =
                "✓ اضافه شد";


            button.classList.add(
                "bg-green-500"
            );

            button.classList.remove(
                "bg-red-500"
            );


            /* بازگرداندن دکمه */

            setTimeout(() => {

                button.textContent =
                    originalText;


                button.classList.remove(
                    "bg-green-500"
                );

                button.classList.add(
                    "bg-red-500"
                );

            }, 1500);

        });

    });

}