/* =========================================
   DIGIKALA API
========================================= */

const API_URL = "/digikala-api/v1/search/";


/* =========================================
   CACHE
========================================= */

const productsCache = new Map();


/* =========================================
   GET PRODUCTS
========================================= */

export async function getProducts(
    {
        query = "",
        page = 1,
    } = {}
) {

    /*
    -----------------------------------------
    Cache Key
    -----------------------------------------
    */

    const cacheKey =
        `${query}-${page}`;


    /*
    -----------------------------------------
    اگر قبلاً دریافت شده
    -----------------------------------------
    */

    if (
        productsCache.has(
            cacheKey
        )
    ) {

        return productsCache.get(
            cacheKey
        );

    }


    /*
    -----------------------------------------
    Controller
    -----------------------------------------
    */

    const controller =
        new AbortController();


    const timeout =
        setTimeout(
            () => {

                controller.abort();

            },
            10000
        );


    try {

        /*
        -------------------------------------
        URL
        -------------------------------------
        */

        const params =
            new URLSearchParams();


        params.set(
            "page",
            page
        );


        /*
        اگر عبارت جست‌وجو داریم
        */

        if (
            query &&
            query.trim()
        ) {

            params.set(
                "q",
                query.trim()
            );

        }


        const url =
            `${API_URL}?${params.toString()}`;


        console.log(
            "DIGIKALA REQUEST:",
            url
        );


        /*
        -------------------------------------
        Fetch
        -------------------------------------
        */

        const response =
            await fetch(
                url,
                {
                    signal:
                        controller.signal,
                }
            );


        if (!response.ok) {

            throw new Error(
                `خطای API: ${response.status}`
            );

        }


        /*
        -------------------------------------
        JSON
        -------------------------------------
        */

        const result =
            await response.json();


        console.log(
            "DIGIKALA API RESPONSE:",
            result
        );


        /*
        -------------------------------------
        محصولات خام
        -------------------------------------
        */

        const rawProducts =
            result?.data?.products ||
            [];


        console.log(
            "RAW PRODUCTS COUNT:",
            rawProducts.length
        );


        if (
            rawProducts.length
        ) {

            console.log(
                "FIRST RAW PRODUCT:",
                rawProducts[0]
            );

        }


        /*
        -------------------------------------
        تبدیل محصولات
        -------------------------------------
        */

        const products =
            rawProducts
                .map(
                    (product) =>
                        normalizeProduct(
                            product
                        )
                )
                .filter(
                    (product) =>
                        product !== null
                );


        console.log(
            "FINAL PRODUCTS:",
            products
        );


        if (
            products.length
        ) {

            console.log(
                "FIRST PRODUCT IMAGE:",
                products[0].image
            );


            console.log(
                "FIRST PRODUCT:",
                products[0]
            );

        }


        /*
        -------------------------------------
        Cache
        -------------------------------------
        */

        productsCache.set(
            cacheKey,
            products
        );


        return products;


    } catch (error) {

        console.error(
            "DIGIKALA API ERROR:",
            error
        );


        return [];


    } finally {

        clearTimeout(
            timeout
        );

    }

}


/* =========================================
   NORMALIZE PRODUCT
========================================= */

function normalizeProduct(
    product
) {

    if (
        !product ||
        typeof product !== "object"
    ) {

        return null;

    }


    /*
    -----------------------------------------
    ID
    -----------------------------------------
    */

    const id =
        product.id;


    if (!id) {

        return null;

    }


    /*
    -----------------------------------------
    TITLE
    -----------------------------------------
    */

    const title =
        product.title_fa ||
        product.title ||
        product.name ||
        "محصول دیجی‌کالا";


    /*
    -----------------------------------------
    IMAGE
    -----------------------------------------
    */

    const image =
        getProductImage(
            product
        );


    /*
    -----------------------------------------
    PRICE
    -----------------------------------------
    */

    const price =
        getProductPrice(
            product
        );


    /*
    -----------------------------------------
    ORIGINAL PRICE
    -----------------------------------------
    */

    const originalPrice =
        getOriginalPrice(
            product,
            price
        );


    /*
    -----------------------------------------
    DISCOUNT
    -----------------------------------------
    */

    const discount =
        getDiscount(
            product,
            originalPrice,
            price
        );


    /*
    -----------------------------------------
    CATEGORY
    -----------------------------------------
    */

    const category =
        product.category ||
        product.category_title ||
        product.category?.title ||
        "";


    /*
    -----------------------------------------
    RESULT
    -----------------------------------------
    */

    return {

        id,

        title,

        price,

        originalPrice,

        discount,

        image,

        category,

        rating: {

            rate:
                Number(
                    product.rating?.rate ||
                    product.rating ||
                    0
                ),

        },

    };

}


/* =========================================
   GET PRODUCT IMAGE
========================================= */

function getProductImage(
    product
) {

    /*
    -----------------------------------------
    مسیرهای مستقیم
    -----------------------------------------
    */

    const directImageFields = [

        product.image_url,

        product.imageUrl,

        product.image,

        product.thumbnail,

        product.main_image,

        product.mainImage,

        product.default_image,

        product.defaultImage,

    ];


    for (
        const item
        of directImageFields
    ) {

        const image =
            extractImageUrl(
                item,
                0
            );


        if (image) {

            return image;

        }

    }


    /*
    -----------------------------------------
    آرایه‌های تصویر
    -----------------------------------------
    */

    const imageCollections = [

        product.images,

        product.image_list,

        product.imageList,

        product.media,

        product.medias,

    ];


    for (
        const collection
        of imageCollections
    ) {

        if (
            Array.isArray(
                collection
            )
        ) {

            for (
                const item
                of collection
            ) {

                const image =
                    extractImageUrl(
                        item,
                        0
                    );


                if (image) {

                    return image;

                }

            }

        }


        const image =
            extractImageUrl(
                collection,
                0
            );


        if (image) {

            return image;

        }

    }


    /*
    -----------------------------------------
    default_variant
    -----------------------------------------
    */

    const defaultVariant =
        product.default_variant;


    if (
        defaultVariant
    ) {

        const image =
            extractImageUrl(
                defaultVariant,
                0
            );


        if (image) {

            return image;

        }

    }


    /*
    -----------------------------------------
    variants
    -----------------------------------------
    */

    if (
        Array.isArray(
            product.variants
        )
    ) {

        for (
            const variant
            of product.variants
        ) {

            const image =
                extractImageUrl(
                    variant,
                    0
                );


            if (image) {

                return image;

            }

        }

    }


    /*
    -----------------------------------------
    جستجوی عمیق در کل محصول
    -----------------------------------------
    */

    return findImageRecursively(
        product,
        0
    );

}


/* =========================================
   EXTRACT IMAGE URL
========================================= */

function extractImageUrl(
    item,
    depth = 0
) {

    if (
        depth > 8
    ) {

        return "";

    }


    /*
    -----------------------------------------
    String
    -----------------------------------------
    */

    if (
        typeof item === "string"
    ) {

        return normalizeImageUrl(
            item
        );

    }


    /*
    -----------------------------------------
    Object
    -----------------------------------------
    */

    if (
        !item ||
        typeof item !== "object"
    ) {

        return "";

    }


    /*
    -----------------------------------------
    URLهای مستقیم
    -----------------------------------------
    */

    const possibleUrls = [

        item.url,

        item.image_url,

        item.imageUrl,

        item.src,

        item.href,

        item.path,

        item.main,

        item.large,

        item.medium,

        item.small,

        item.thumbnail,

        item.image,

    ];


    for (
        const value
        of possibleUrls
    ) {

        if (
            typeof value === "string" &&
            value.trim()
        ) {

            const normalized =
                normalizeImageUrl(
                    value
                );


            if (
                normalized
            ) {

                return normalized;

            }

        }

    }


    /*
    -----------------------------------------
    بعضی APIها URL را داخل object می‌گذارند
    -----------------------------------------
    */

    for (
        const value
        of possibleUrls
    ) {

        if (
            value &&
            typeof value === "object"
        ) {

            const nestedImage =
                extractImageUrl(
                    value,
                    depth + 1
                );


            if (
                nestedImage
            ) {

                return nestedImage;

            }

        }

    }


    /*
    -----------------------------------------
    جستجوی داخل object
    -----------------------------------------
    */

    const keys =
        Object.keys(item);


    for (
        const key
        of keys
    ) {

        /*
        از title و description عبور می‌کنیم
        چون ممکن است متن محصول را به اشتباه
        به عنوان URL تشخیص دهیم.
        */

        if (
            key === "title" ||
            key === "title_fa" ||
            key === "title_en" ||
            key === "name" ||
            key === "description"
        ) {

            continue;

        }


        const value =
            item[key];


        if (
            typeof value === "string"
        ) {

            const lowerValue =
                value.toLowerCase();


            /*
            فقط رشته‌هایی که شبیه URL تصویر
            هستند بررسی شوند.
            */

            const looksLikeImage =
                lowerValue.includes(
                    ".jpg"
                ) ||
                lowerValue.includes(
                    ".jpeg"
                ) ||
                lowerValue.includes(
                    ".png"
                ) ||
                lowerValue.includes(
                    ".webp"
                ) ||
                lowerValue.includes(
                    ".avif"
                ) ||
                lowerValue.includes(
                    "image"
                );


            if (
                looksLikeImage
            ) {

                const image =
                    normalizeImageUrl(
                        value
                    );


                if (
                    image
                ) {

                    return image;

                }

            }

        }


        if (
            value &&
            typeof value === "object"
        ) {

            const image =
                extractImageUrl(
                    value,
                    depth + 1
                );


            if (
                image
            ) {

                return image;

            }

        }

    }


    return "";

}


/* =========================================
   FIND IMAGE RECURSIVELY
========================================= */

function findImageRecursively(
    object,
    depth = 0
) {

    if (
        depth > 8 ||
        !object ||
        typeof object !== "object"
    ) {

        return "";

    }


    if (
        Array.isArray(object)
    ) {

        for (
            const item
            of object
        ) {

            const image =
                findImageRecursively(
                    item,
                    depth + 1
                );


            if (image) {

                return image;

            }

        }


        return "";

    }


    const keys =
        Object.keys(object);


    /*
    اول فیلدهایی که احتمال تصویر بودنشان
    بیشتر است بررسی شوند.
    */

    const priorityKeys = [

        "image",
        "image_url",
        "imageUrl",
        "images",
        "image_list",
        "imageList",
        "thumbnail",
        "main_image",
        "mainImage",
        "media",
        "url",

    ];


    const orderedKeys = [

        ...priorityKeys.filter(
            (key) =>
                keys.includes(key)
        ),

        ...keys.filter(
            (key) =>
                !priorityKeys.includes(key)
        ),

    ];


    for (
        const key
        of orderedKeys
    ) {

        if (
            key === "title" ||
            key === "title_fa" ||
            key === "title_en" ||
            key === "name" ||
            key === "description"
        ) {

            continue;

        }


        const value =
            object[key];


        /*
        String
        */

        if (
            typeof value === "string"
        ) {

            const lowerValue =
                value.toLowerCase();


            const looksLikeImage =
                lowerValue.includes(
                    ".jpg"
                ) ||
                lowerValue.includes(
                    ".jpeg"
                ) ||
                lowerValue.includes(
                    ".png"
                ) ||
                lowerValue.includes(
                    ".webp"
                ) ||
                lowerValue.includes(
                    ".avif"
                );


            if (
                looksLikeImage
            ) {

                return normalizeImageUrl(
                    value
                );

            }

        }


        /*
        Object / Array
        */

        if (
            value &&
            typeof value === "object"
        ) {

            const image =
                findImageRecursively(
                    value,
                    depth + 1
                );


            if (
                image
            ) {

                return image;

            }

        }

    }


    return "";

}


/* =========================================
   NORMALIZE IMAGE URL
========================================= */

function normalizeImageUrl(
    image
) {

    if (
        !image ||
        typeof image !== "string"
    ) {

        return "";

    }


    image =
        image.trim();


    /*
    URL کامل
    */

    if (
        image.startsWith(
            "http://"
        ) ||
        image.startsWith(
            "https://"
        )
    ) {

        return image;

    }


    /*
    URL با //
    */

    if (
        image.startsWith(
            "//"
        )
    ) {

        return `https:${image}`;

    }


    /*
    مسیر نسبی
    */

    if (
        image.startsWith("/")
    ) {

        return `https://api.digikala.com${image}`;

    }


    return image;

}


/* =========================================
   GET PRICE
========================================= */

function getProductPrice(
    product
) {

    /*
    -----------------------------------------
    قیمت مستقیم
    -----------------------------------------
    */

    const directPrice =
        extractPriceValue(
            product.price
        );


    if (
        directPrice > 0
    ) {

        return directPrice;

    }


    /*
    -----------------------------------------
    فیلدهای مستقیم
    -----------------------------------------
    */

    const fields = [

        product.selling_price,

        product.sellingPrice,

        product.final_price,

        product.finalPrice,

        product.price_rial,

        product.price_toman,

    ];


    for (
        const value
        of fields
    ) {

        const price =
            extractPriceValue(
                value
            );


        if (
            price > 0
        ) {

            return price;

        }

    }


    /*
    -----------------------------------------
    default variant
    -----------------------------------------
    */

    const defaultVariant =
        product.default_variant;


    if (
        defaultVariant
    ) {

        const price =
            getVariantPrice(
                defaultVariant
            );


        if (
            price > 0
        ) {

            return price;

        }

    }


    /*
    -----------------------------------------
    variants
    -----------------------------------------
    */

    if (
        Array.isArray(
            product.variants
        )
    ) {

        for (
            const variant
            of product.variants
        ) {

            const price =
                getVariantPrice(
                    variant
                );


            if (
                price > 0
            ) {

                return price;

            }

        }

    }


    return 0;

}


/* =========================================
   GET VARIANT PRICE
========================================= */

function getVariantPrice(
    variant
) {

    if (
        !variant ||
        typeof variant !== "object"
    ) {

        return 0;

    }


    const fields = [

        variant.price,

        variant.selling_price,

        variant.sellingPrice,

        variant.final_price,

        variant.finalPrice,

        variant.price_rial,

        variant.price_toman,

    ];


    for (
        const value
        of fields
    ) {

        const price =
            extractPriceValue(
                value
            );


        if (
            price > 0
        ) {

            return price;

        }

    }


    return 0;

}


/* =========================================
   EXTRACT PRICE VALUE
========================================= */

function extractPriceValue(
    value
) {

    if (
        typeof value === "number"
    ) {

        return value;

    }


    if (
        typeof value === "string"
    ) {

        const cleaned =
            value
                .replace(
                    /,/g,
                    ""
                )
                .replace(
                    /٬/g,
                    ""
                )
                .replace(
                    /[^\d.]/g,
                    ""
                );


        return Number(
            cleaned || 0
        );

    }


    if (
        value &&
        typeof value === "object"
    ) {

        const nestedValues = [

            value.selling_price,

            value.sellingPrice,

            value.final_price,

            value.finalPrice,

            value.price,

            value.amount,

            value.value,

        ];


        for (
            const nested
            of nestedValues
        ) {

            const price =
                extractPriceValue(
                    nested
                );


            if (
                price > 0
            ) {

                return price;

            }

        }

    }


    return 0;

}


/* =========================================
   GET ORIGINAL PRICE
========================================= */

function getOriginalPrice(
    product,
    price
) {

    const directValues = [

        product.original_price,

        product.originalPrice,

        product.rrp_price,

        product.rrpPrice,

        product.price?.rrp_price,

        product.price?.rrpPrice,

    ];


    for (
        const value
        of directValues
    ) {

        const originalPrice =
            extractPriceValue(
                value
            );


        if (
            originalPrice > 0
        ) {

            return originalPrice;

        }

    }


    /*
    -----------------------------------------
    default variant
    -----------------------------------------
    */

    if (
        product.default_variant
    ) {

        const originalPrice =
            getVariantOriginalPrice(
                product.default_variant
            );


        if (
            originalPrice > 0
        ) {

            return originalPrice;

        }

    }


    /*
    -----------------------------------------
    variants
    -----------------------------------------
    */

    if (
        Array.isArray(
            product.variants
        )
    ) {

        for (
            const variant
            of product.variants
        ) {

            const originalPrice =
                getVariantOriginalPrice(
                    variant
                );


            if (
                originalPrice > 0
            ) {

                return originalPrice;

            }

        }

    }


    return Number(
        price || 0
    );

}


/* =========================================
   GET VARIANT ORIGINAL PRICE
========================================= */

function getVariantOriginalPrice(
    variant
) {

    if (
        !variant ||
        typeof variant !== "object"
    ) {

        return 0;

    }


    const values = [

        variant.rrp_price,

        variant.rrpPrice,

        variant.original_price,

        variant.originalPrice,

        variant.price?.rrp_price,

        variant.price?.rrpPrice,

    ];


    for (
        const value
        of values
    ) {

        const price =
            extractPriceValue(
                value
            );


        if (
            price > 0
        ) {

            return price;

        }

    }


    return 0;

}


/* =========================================
   GET DISCOUNT
========================================= */

function getDiscount(
    product,
    originalPrice,
    price
) {

    /*
    -----------------------------------------
    تخفیف مستقیم
    -----------------------------------------
    */

    if (
        product.discount_percent !==
        undefined &&
        product.discount_percent !==
        null
    ) {

        return Number(
            product.discount_percent
        );

    }


    if (
        product.discountPercentage !==
        undefined &&
        product.discountPercentage !==
        null
    ) {

        return Number(
            product.discountPercentage
        );

    }


    /*
    -----------------------------------------
    default variant
    -----------------------------------------
    */

    if (
        product.default_variant
    ) {

        const variantDiscount =
            getVariantDiscount(
                product.default_variant
            );


        if (
            variantDiscount > 0
        ) {

            return variantDiscount;

        }

    }


    /*
    -----------------------------------------
    محاسبه از قیمت
    -----------------------------------------
    */

    if (
        originalPrice > price &&
        originalPrice > 0 &&
        price > 0
    ) {

        return Math.round(

            (
                (
                    originalPrice -
                    price
                ) /
                originalPrice
            ) *
            100

        );

    }


    return 0;

}


/* =========================================
   GET VARIANT DISCOUNT
========================================= */

function getVariantDiscount(
    variant
) {

    if (
        !variant ||
        typeof variant !== "object"
    ) {

        return 0;

    }


    const values = [

        variant.discount_percent,

        variant.discountPercentage,

        variant.discount?.percent,

        variant.discount?.percentage,

    ];


    for (
        const value
        of values
    ) {

        if (
            value !== undefined &&
            value !== null
        ) {

            const discount =
                Number(
                    value
                );


            if (
                discount > 0
            ) {

                return discount;

            }

        }

    }


    return 0;

}