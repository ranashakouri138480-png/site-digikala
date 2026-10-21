export function getCurrentRoute() {

    const hash =
        window.location.hash;


    /* =========================================
       صفحه اصلی
    ========================================= */

    if (!hash || hash === "#/") {

        return {

            name: "home",

        };

    }


    /* =========================================
       صفحه ورود | ثبت‌نام
    ========================================= */

    if (
        hash === "#login" ||
        hash === "#/login"
    ) {

        return {

            name: "login",

        };

    }


    /* =========================================
       صفحه محصول
    ========================================= */

    const productMatch =
        hash.match(/^#\/product\/(\d+)$/);


    if (productMatch) {

        return {

            name: "product",

            id: productMatch[1],

        };

    }


    /* =========================================
       صفحه نامعتبر
    ========================================= */

    return {

        name: "notFound",

    };

}