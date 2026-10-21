import "./style.css";


/* =========================================
   COMPONENTS
========================================= */

import Header, {
    initDarkMode,
} from "./components/Header/Header.js";

import Navbar, {
    initNavbar,
} from "./components/Navbar/Navbar.js";


/* =========================================
   LOGIN
========================================= */

import Login, {
    initLogin,
} from "./components/Login/Login.js";


/* =========================================
   HERO SLIDER
========================================= */

import HeroSlider, {
    initHeroSlider,
} from "./components/HeroSlider/HeroSlider.js";


/* =========================================
   CATEGORY SECTION
========================================= */

import CategorySection from "./components/CategorySection/CategorySection.js";


/* =========================================
   CATEGORY PRODUCT SECTION
========================================= */

import CategoryProductSection, {
    renderCategoryProductSection,
} from "./components/CategoryProductSection/CategoryProductSection.js";


/* =========================================
   AMAZING PRODUCTS
========================================= */

import AmazingSection, {
    renderAmazingProducts,
    initAmazingTimer,
} from "./components/AmazingSection/AmazingSection.js";


/* =========================================
   PRODUCTS
========================================= */

import ProductSection, {
    renderProducts,
} from "./components/ProductSection/ProductSection.js";


/* =========================================
   SUPERMARKET
========================================= */

import SupermarketSection, {
    renderSupermarketProducts,
} from "./components/SupermarketSection/SupermarketSection.js";


/* =========================================
   SHOP BY CATEGORY
========================================= */

import ShopByCategory from "./components/ShopByCategory/ShopByCategory.js";


/* =========================================
   DIGI PROMO
========================================= */

import DigiPromoSection from "./components/DigiPromoSection/DigiPromoSection.js";


/* =========================================
   POPULAR BRANDS
========================================= */

import PopularBrandsSection, {
    initPopularBrandsSlider,
} from "./components/PopularBrandsSection/PopularBrandsSection.js";


/* =========================================
   BEST SELLING
========================================= */

import BestSellingSection, {
    renderBestSellingProducts,
} from "./components/BestSellingSection/BestSellingSection.js";


/* =========================================
   PROMO BANNERS
========================================= */

import PromoBanners from "./components/PromoBanners/PromoBanners.js";


/* =========================================
   FOOTER
========================================= */

import Footer from "./components/Footer/Footer.js";


/* =========================================
   MEGA MENU
========================================= */

import {
    initMegaMenu,
} from "./components/MegaMenu/MegaMenu.js";


/* =========================================
   SEARCH
========================================= */

import {
    initSearch,
} from "./components/Search/Search.js";


/* =========================================
   CART
========================================= */

import Cart, {
    initCart,
} from "./components/Cart/Cart.js";


/* =========================================
   PRODUCT DETAILS
========================================= */

import ProductDetails, {
    renderProductDetails,
} from "./components/ProductDetails/ProductDetails.js";


/* =========================================
   ROUTER
========================================= */

import {
    getCurrentRoute,
} from "./router/router.js";


/* =========================================
   APP
========================================= */

const app =
    document.querySelector("#app");


/* =========================================
   RENDER APP
========================================= */

function renderApp() {


    /* =========================================
       CURRENT ROUTE
    ========================================= */

    const route =
        getCurrentRoute();


    /* =========================================
       LOGIN PAGE
       مسیر: #/login
    ========================================= */

    if (route.name === "login") {

        app.innerHTML = `

            ${Login()}

        `;


        initLogin();

        return;

    }


    /* =========================================
       PRODUCT PAGE
       مسیر: #/product/:id
    ========================================= */

    if (route.name === "product") {

        app.innerHTML = `

            ${Header()}

            ${Navbar()}


            <main>

                ${ProductDetails()}

            </main>


            ${Cart()}

            ${Footer()}

        `;


        /* =========================================
           DARK MODE
        ========================================== */

        initDarkMode();


        /* Navbar */

        initNavbar();


        /* Mega Menu */

        initMegaMenu();


        /* Search */

        initSearch();


        /* Cart */

        initCart();


        /* Product Details */

        renderProductDetails(
            route.id
        );


        return;

    }


    /* =========================================
       HOME PAGE
    ========================================== */

    app.innerHTML = `

        ${Header()}

        ${Navbar()}


        <main>


            <!-- =========================================
                 HERO SLIDER
            ========================================= -->

            ${HeroSlider()}


            <!-- =========================================
                 CATEGORIES
            ========================================= -->

            ${CategorySection()}


            <!-- =========================================
                 AMAZING OFFERS
            ========================================= -->

            ${AmazingSection()}


            <!-- =========================================
                 PROMO BANNERS
            ========================================= -->

            ${PromoBanners()}


            <!-- =========================================
                 POPULAR PRODUCTS
            ========================================= -->

            ${ProductSection()}


            <!-- =========================================
                 PROMO BANNERS
            ========================================= -->

            ${PromoBanners()}


            <!-- =========================================
                 SUPERMARKET
            ========================================= -->

            ${SupermarketSection()}


            <!-- =========================================
                 SHOP BY CATEGORY
            ========================================= -->

            ${ShopByCategory()}


            <!-- =========================================
                 DIGI PROMO
            ========================================= -->

            ${DigiPromoSection()}


            <!-- =========================================
                 CATEGORY
                 ویتامین‌ها و مواد معدنی
            ========================================== -->

            ${CategoryProductSection({
                id: "vitamins",
                title: "ویتامین‌ها و مواد معدنی",
                subtitle: "بر اساس سلیقه شما",
            })}


            <!-- =========================================
                 CATEGORY
                 کیف و کاور گوشی
            ========================================== -->

            ${CategoryProductSection({
                id: "phone-cases",
                title: "کیف و کاور گوشی",
                subtitle: "بر اساس سلیقه شما",
            })}


            <!-- =========================================
                 DIGI PROMO
            ========================================== -->

            ${DigiPromoSection()}


            <!-- =========================================
                 CATEGORY
                 گوشی موبایل
            ========================================== -->

            ${CategoryProductSection({
                id: "mobile-phones",
                title: "گوشی موبایل",
                subtitle: "بر اساس سلیقه شما",
            })}


            <!-- =========================================
                 CATEGORY
                 هدفون، هدست و هندزفری
            ========================================== -->

            ${CategoryProductSection({
                id: "headphones",
                title: "هدفون، هدست و هندزفری",
                subtitle: "بر اساس سلیقه شما",
            })}


            <!-- =========================================
                 CATEGORY
                 دفتر
            ========================================== -->

            ${CategoryProductSection({
                id: "notebooks",
                title: "دفتر",
                subtitle: "بر اساس سلیقه شما",
            })}


            <!-- =========================================
                 CATEGORY
                 سایر لوازم خودرو
            ========================================== -->

            ${CategoryProductSection({
                id: "car-accessories",
                title: "سایر لوازم خودرو",
                subtitle: "بر اساس سلیقه شما",
            })}


            <!-- =========================================
                 POPULAR BRANDS
            ========================================== -->

            ${PopularBrandsSection()}


            <!-- =========================================
                 CATEGORY
                 کرم آبرسان و مرطوب کننده
            ========================================== -->

            ${CategoryProductSection({
                id: "moisturizers",
                title: "کرم آبرسان و مرطوب کننده",
                subtitle: "بر اساس سلیقه شما",
            })}


            <!-- =========================================
                 CATEGORY
                 خودکار و روان نویس
            ========================================== -->

            ${CategoryProductSection({
                id: "pens",
                title: "خودکار و روان نویس",
                subtitle: "بر اساس سلیقه شما",
            })}


            <!-- =========================================
                 BEST SELLING PRODUCTS
            ========================================== -->

            ${BestSellingSection({
                id: "bestSelling",
                title: "پرفروش‌ترین‌ها",
            })}


            <!-- =========================================
                 HOT NOW PRODUCTS
            ========================================== -->

            ${BestSellingSection({
                id: "hotNow",
                title: "داغ‌ترین چند ساعت گذشته",
            })}


        </main>


        <!-- =========================================
             CART
        ========================================= -->

        ${Cart()}


        <!-- =========================================
             FOOTER
        ========================================== -->

        ${Footer()}

    `;


    /* =========================================
       LOGIN BUTTON
    ========================================= */

    const loginButton =
        document.querySelector("#loginButton");

    if (loginButton) {

        loginButton.addEventListener(
            "click",
            () => {

                window.location.hash = "/login";

            }
        );

    }


    /* =========================================
       INITIALIZE COMPONENTS
    ========================================= */

    /* Dark Mode */

    initDarkMode();


    /* Navbar */

    initNavbar();


    /* Hero Slider */

    initHeroSlider();


    /* Popular Brands Slider */

    initPopularBrandsSlider();


    /* Mega Menu */

    initMegaMenu();


    /* Search */

    initSearch();


    /* Cart */

    initCart();


    /* Amazing Timer */

    initAmazingTimer();


    /* =========================================
       API DATA
    ========================================= */

    /* Popular Products */

    renderProducts();


    /* Amazing Products */

    renderAmazingProducts();


    /* Supermarket Products */

    renderSupermarketProducts();


    /* Best Selling Products */

    renderBestSellingProducts({
        id: "bestSelling",
        page: 1,
    });


    /* Hot Now Products */

    renderBestSellingProducts({
        id: "hotNow",
        page: 2,
    });


    /* =========================================
       CATEGORY PRODUCT SECTIONS
    ========================================== */


    /* -----------------------------------------
       ویتامین‌ها و مواد معدنی
    ----------------------------------------- */

    renderCategoryProductSection({
        id: "vitamins",
        query: "ویتامین و مواد معدنی",
    });


    /* -----------------------------------------
       کیف و کاور گوشی
    ----------------------------------------- */

    renderCategoryProductSection({
        id: "phone-cases",
        query: "کیف و کاور گوشی",
    });


    /* -----------------------------------------
       گوشی موبایل
    ----------------------------------------- */

    renderCategoryProductSection({
        id: "mobile-phones",
        query: "گوشی موبایل",
    });


    /* -----------------------------------------
       هدفون، هدست و هندزفری
    ----------------------------------------- */

    renderCategoryProductSection({
        id: "headphones",
        query: "هدفون هدست هندزفری",
    });


    /* -----------------------------------------
       دفتر
    ----------------------------------------- */

    renderCategoryProductSection({
        id: "notebooks",
        query: "دفتر",
    });


    /* -----------------------------------------
       سایر لوازم خودرو
    ----------------------------------------- */

    renderCategoryProductSection({
        id: "car-accessories",
        query: "سایر لوازم خودرو",
    });


    /* -----------------------------------------
       کرم آبرسان و مرطوب کننده
    ----------------------------------------- */

    renderCategoryProductSection({
        id: "moisturizers",
        query: "کرم آبرسان و مرطوب کننده",
    });


    /* -----------------------------------------
       خودکار و روان نویس
    ----------------------------------------- */

    renderCategoryProductSection({
        id: "pens",
        query: "خودکار و روان نویس",
    });

}


/* =========================================
   FIRST RENDER
========================================= */

renderApp();


/* =========================================
   ROUTE CHANGE
========================================= */

window.addEventListener(
    "hashchange",
    renderApp
);