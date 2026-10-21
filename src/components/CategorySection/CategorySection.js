const categories = [

    {
        title: "سوپرمارکت",
        image: "/src/assets/images/categories/1.webp",
    },

    {
        title: "طلا و نقره دیجیتال",
        image: "/src/assets/images/categories/2.webp",
    },

    {
        title: "دیجی‌استایل",
        image: "/src/assets/images/categories/3.webp",
    },

    {
        title: "لوازم مدرسه",
        image: "/src/assets/images/categories/4.webp",
    },

    {
        title: "موبایل زیر ۱۰۰میلیون",
        image: "/src/assets/images/categories/5.webp",
    },

    {
        title: "حراج لپ‌تاپ تبلت",
        image: "/src/assets/images/categories/6.webp",
    },

    {
        title: "اصلش رو بخر",
        image: "/src/assets/images/categories/7.webp",
    },

    {
        title: "اشتراک پلاس",
        image: "/src/assets/images/categories/8.webp",
    },

    {
        title: "دیجی‌کارت",
        image: "/src/assets/images/categories/9.webp",
    },

];


export default function CategorySection() {

    return `

        <section class="w-full py-8" dir="rtl">

            <div class="max-w-350 mx-auto px-4">


                <div
                    class="flex items-start justify-center gap-13.75 overflow-x-auto"
                >

                    ${categories.map((category) => `

                        <div
                            class="flex flex-col items-center gap-3 min-w-23.75 cursor-pointer"
                        >

                            <img
                                src="${category.image}"
                                alt="${category.title}"
                                class="w-13 h-13 object-contain"
                            >

                            <span
                                class="text-xs text-gray-700 text-center whitespace-nowrap"
                            >

                                ${category.title}

                            </span>

                        </div>

                    `).join("")}

                </div>


            </div>

        </section>

    `;

}