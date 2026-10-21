import { getProducts } from "../../services/api.js";


export function initSearch() {

    const searchInput =
        document.querySelector("#searchInput");

    const searchOverlay =
        document.querySelector("#searchOverlay");

    const searchPanel =
        document.querySelector("#searchPanel");

    const overlaySearchInput =
        document.querySelector("#overlaySearchInput");

    const searchResults =
        document.querySelector("#searchResults");

    const closeSearch =
        document.querySelector("#closeSearch");


    // باز کردن سرچ

    searchInput.addEventListener("click", () => {

        searchOverlay.classList.remove("hidden");


        setTimeout(() => {

            overlaySearchInput.focus();

        }, 100);

    });


    // بستن با دکمه

    closeSearch.addEventListener("click", () => {

        searchOverlay.classList.add("hidden");

    });


    // بستن با کلیک بیرون

    searchOverlay.addEventListener("click", () => {

        searchOverlay.classList.add("hidden");

    });


    // جلوگیری از بسته شدن هنگام کلیک روی پنل

    searchPanel.addEventListener("click", (event) => {

        event.stopPropagation();

    });


    // دریافت محصولات

    let products = [];


    getProducts().then((data) => {

        products = data;

    });


    // جستجو

    overlaySearchInput.addEventListener(
        "input",
        (event) => {

            const query =
                event.target.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                searchResults.innerHTML = `

                    <p
                        class="
                            text-center
                            text-gray-400
                            py-10
                        "
                    >

                        نام محصول مورد نظر را جستجو کنید

                    </p>

                `;

                return;

            }


            const filteredProducts =
                products.filter((product) =>

                    product.title
                        .toLowerCase()
                        .includes(query)

                );


            renderSearchResults(
                filteredProducts,
                searchResults
            );

        }
    );

}
function renderSearchResults(
    products,
    container
) {

    if (products.length === 0) {

        container.innerHTML = `

            <p
                class="
                    text-center
                    text-gray-400
                    py-10
                "
            >

                محصولی پیدا نشد

            </p>

        `;

        return;

    }


    container.innerHTML = products
        .slice(0, 6)
        .map((product) => `

            <article
                class="
                    flex
                    items-center
                    gap-4
                    p-4
                    hover:bg-gray-50
                    cursor-pointer
                    border-b
                    border-gray-100
                "
            >

                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="
                        w-12
                        h-12
                        object-contain
                    "
                >


                <div class="flex-1">

                    <h3
                        class="
                            text-sm
                            line-clamp-1
                        "
                    >

                        ${product.title}

                    </h3>


                    <p
                        class="
                            text-xs
                            text-gray-500
                            mt-2
                        "
                    >

                        ${product.price} دلار

                    </p>

                </div>


            </article>

        `)
        .join("");

}