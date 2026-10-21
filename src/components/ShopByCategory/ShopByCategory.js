const categories = [

    {
        title: "موبایل",
        image: "/src/assets/images/shopCategory/mobile.webp",
    },

    {
        title: "لپ تاپ",
        image: "/src/assets/images/shopCategory/laptop.webp",
    },  

    {
        title: "کالای دیجیتال",
        image: "/src/assets/images/shopCategory/digital.webp",
    },

    {
        title: "خانه و آشپزخانه",
        image: "/src/assets/images/shopCategory/home.webp",
    },
    
    {
        title: "لوازم خانگی برقی",
        image: "/src/assets/images/shopCategory/appliance.webp",
    },  
    
    {
        title: "آرایشی بهداشتی",
        image: "/src/assets/images/shopCategory/beauty.webp",
    },
       
    {
        title: "مد و پوشاک",
        image: "/src/assets/images/shopCategory/fashion.webp",
    }, 

    {
        title: "طلا و نقره",
        image: "/src/assets/images/shopCategory/gold.webp",
    },

    {
        title: "خودرو و موتور سیکلت",
        image: "/src/assets/images/shopCategory/motor.webp",
    },
    
    {
        title: "ابزارآلات و تجهیزات",
        image: "/src/assets/images/shopCategory/tools.webp",
    }, 
    
    {
        title: "تجهیزات پزشکی و سلامت",
        image: "/src/assets/images/shopCategory/health.webp",
    },   
   
    {
        title: "کتاب، لوازم تحریر و هنر",
        image: "/src/assets/images/shopCategory/book.webp",
    },   
    
    {
        title: "ورزش و سفر",
        image: "/src/assets/images/shopCategory/sport.webp",
    },
        
    {
        title: "کارت هدیه و گیفت کارت",
        image: "/src/assets/images/shopCategory/gift.webp",
    },
    
    {
        title: "کالای خوراکی و اساسی",
        image: "/src/assets/images/shopCategory/supermarket.webp",
    },
    
    {
        title: "اسباب بازی، کودک و نوزاد",
        image: "/src/assets/images/shopCategory/toy.webp",
    },

    {
        title: "محصولات بومی و محلی",
        image: "/src/assets/images/shopCategory/local.webp",
    },


    {
        title: "پت شاپ",
        image: "/src/assets/images/shopCategory/pet.webp",
    },


];


export default function ShopByCategory() {

    return `

        <section
            class="
                w-full
                py-10
            "
            dir="rtl"
        >

            <div
                class="
                    max-w-350
                    mx-auto
                    px-4
                "
            >


                <!-- عنوان -->

                <h2
                    class="
                        text-xl
                        md:text-2xl
                        font-bold
                        text-right
                        mb-8
                        text-gray-800
                    "
                >

                    دسته بندی ها

                </h2>


                <!-- دسته بندی ها -->

                <div
                    class="
                        grid
                        grid-cols-3
                        sm:grid-cols-4
                        md:grid-cols-5
                        lg:grid-cols-9
                        gap-y-8
                        gap-x-3
                    "
                >

                    ${categories.map((category) => `

                        <a
                            href="#"
                            class="
                                flex
                                flex-col
                                items-center
                                text-center
                                group
                            "
                        >


                            <!-- تصویر -->

                            <div
                                class="
                                    w-22.5
                                    h-22.5
                                    md:w-25
                                    md:h-25
                                    rounded-full
                                    overflow-hidden
                                    bg-gray-100
                                    flex
                                    items-center
                                    justify-center
                                    transition
                                    duration-300
                                    group-hover:scale-105
                                "
                            >

                                <img
                                    src="${category.image}"
                                    alt="${category.title}"
                                    class="
                                        w-full
                                        h-full
                                        object-contain
                                    "
                                >

                            </div>


                            <!-- عنوان -->

                            <span
                                class="
                                    text-xs
                                    md:text-sm
                                    text-gray-700
                                    mt-3
                                    leading-6
                                    font-medium
                                "
                            >

                                ${category.title}

                            </span>


                        </a>

                    `).join("")}

                </div>


            </div>

        </section>

    `;

}