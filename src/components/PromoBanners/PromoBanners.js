import banner1 from "../../assets/images/promoBanners/banner1.webp";
import banner2 from "../../assets/images/promoBanners/banner2.webp";
import banner3 from "../../assets/images/promoBanners/banner3.webp";
import banner4 from "../../assets/images/promoBanners/banner4.webp";


export default function PromoBanners() {

    const banners = [
        banner1,
        banner2,
        banner3,
        banner4,
    ];


    return `

        <section
            class="w-full py-8"
            dir="rtl"
        >

            <div
                class="
                    max-w-350
                    mx-auto
                    px-4
                "
            >

                <div
                    class="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-4
                    "
                >

                    ${banners.map((banner, index) => `

                        <a
                            href="#"
                            class="
                                block
                                relative

                                h-58.75

                                rounded-2xl

                                overflow-hidden

                                group
                            "
                        >

                            <img
                                src="${banner}"
                                alt="بنر تبلیغاتی ${index + 1}"

                                class="
                                    w-full
                                    h-full

                                    object-cover

                                    transition
                                    duration-500

                                    group-hover:scale-105
                                "
                            >

                        </a>

                    `).join("")}

                </div>

            </div>

        </section>

    `;

}