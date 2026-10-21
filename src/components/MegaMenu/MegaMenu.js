/* =========================================
   CATEGORIES DATA
========================================= */

const categories = [
  /* =========================================
     1. MOBILE
  ========================================== */

  {
    id: 1,
    title: 'موبایل',

    groups: [
      {
        title: 'انتخاب موبایل',
        url: 'https://www.digikala.com/landing/mobile/',

        subGroups: [
          {
            title: 'گوشی های اپل',
            url: 'https://www.digikala.com/search/category-mobile-phone/apple/',

            items: [
              {
                title: 'آیفون ۱۶',
                url: 'https://www.digikala.com/tags/iphone-16/',
              },
              {
                title: 'آیفون ۱۷',
                url: 'https://www.digikala.com/tags/iphone-17/',
              },
            ],
          },
        ],
      },

      {
        title: 'برندهای مختلف گوشی موبایل',
        url: 'https://www.digikala.com/landing/mobile_brands/',

        items: [
          {
            title: 'گوشی سامسونگ',
            url: 'https://www.digikala.com/search/category-mobile-phone/samsung/',
          },
          {
            title: 'گوشی شیائومی',
            url: 'https://www.digikala.com/search/category-mobile-phone/xiaomi/',
          },
          {
            title: 'گوشی نوکیا',
            url: 'https://www.digikala.com/search/category-mobile-phone/nokia/?sort=7',
          },
          {
            title: 'گوشی ریلمی',
            url: 'https://www.digikala.com/search/category-mobile-phone/realme/',
          },
          {
            title: 'گوشی سایفر',
            url: 'https://www.digikala.com/search/category-mobile-phone/cypher/',
          },
          {
            title: 'گوشی آنر',
            url: 'https://www.digikala.com/search/category-mobile-phone/honor/',
          },
          {
            title: 'گوشی ناتینگ فون',
            url: 'https://www.digikala.com/search/category-mobile-phone/nothing/',
          },
          {
            title: 'گوشی وکال',
            url: 'https://www.digikala.com/search/category-mobile-phone/vocal/',
          },
          {
            title: 'گوشی موتورولا',
            url: 'https://www.digikala.com/search/category-mobile-phone/motorola/',
          },
          {
            title: 'گوشی تی سی ال',
            url: 'https://www.digikala.com/search/category-mobile-phone/TCL/',
          },
          {
            title: 'گوشی هواوی',
            url: 'https://www.digikala.com/search/category-mobile-phone/huawei/',
          },
          {
            title: 'گوشی داریا',
            url: 'https://www.digikala.com/search/category-mobile-phone/daria/',
          },
          {
            title: 'گوشی گوگل پیکسل',
            url: 'https://www.digikala.com/search/category-mobile-phone/google/',
          },
          {
            title: 'گوشی تی سی اچ',
            url: 'https://www.digikala.com/search/category-mobile-phone/tch/',
          },
          {
            title: 'گوشی جی ال ایکس',
            url: 'https://www.digikala.com/search/category-mobile-phone/glx/',
          },
          {
            title: 'گوشی آلکاتل',
            url: 'https://www.digikala.com/search/category-mobile-phone/alcatel/',
          },
          {
            title: 'گوشی ردتون',
            url: 'https://www.digikala.com/search/category-mobile-phone/redtone/',
          },
          {
            title: 'گوشی وان پلاس',
            url: 'https://www.digikala.com/search/category-mobile-phone/oneplus/',
          },
          {
            title: 'گوشی‌های جنرال لوکس',
            url: 'https://www.digikala.com/brand/general-luxe-it/',
          },
          {
            title: 'گوشی موبایل دوجی',
            url: 'https://www.digikala.com/search/category-mobile-phone/doogee/',
          },
          {
            title: 'گوشی HMD',
            url: 'https://www.digikala.com/search/category-mobile-phone/hmd-mobile/',
          },
          {
            title: 'گوشی پوکو',
            url: 'https://www.digikala.com/tags/poco/',
          },
        ],
      },

      {
        title: 'گوشی براساس قیمت',

        items: [
          {
            title: 'گوشی ارزان',
            url: '#',
          },
          {
            title: 'گوشی موبایل قسطی',
            url: '#',
          },
          {
            title: 'گوشی تا ۱۰ میلیون تومان',
            url: '#',
          },
          {
            title: 'گوشی تا ۱۵ میلیون تومان',
            url: '#',
          },
          {
            title: 'گوشی تا ۲۰ میلیون تومان',
            url: '#',
          },
          {
            title: 'گوشی تا ۲۵ میلیون تومان',
            url: '#',
          },
          {
            title: 'گوشی تا ۳۰ میلیون تومان',
            url: '#',
          },
          {
            title: 'گوشی تا ۴۰ میلیون تومان',
            url: '#',
          },
          {
            title: 'گوشی تا ۵۰ میلیون تومان',
            url: '#',
          },
          {
            title: 'گوشی تا ۷۰ میلیون تومان',
            url: '#',
          },
        ],
      },

      {
        title: 'لوازم جانبی موبایل',

        items: [
          {
            title: 'شارژر گوشی',
            url: '#',
          },
          {
            title: 'شارژر وایرلس',
            url: '#',
          },
          {
            title: 'شارژر تایپ سی',
            url: '#',
          },
          {
            title: 'کابل شارژ تایپ سی',
            url: '#',
          },
          {
            title: 'قاب گوشی',
            url: '#',
          },
          {
            title: 'گلس گوشی',
            url: '#',
          },
          {
            title: 'شارژر فندکی',
            url: '#',
          },
          {
            title: 'هولدر گوشی موبایل',
            url: '#',
          },
          {
            title: 'کابل شارژ و مبدل',
            url: '#',
          },
          {
            title: 'پاوربانک (شارژر همراه)',
            url: '#',
          },
          {
            title: 'پاور استیشن',
            url: '#',
          },
          {
            title: 'مونوپاد',
            url: '#',
          },
        ],
      },

      {
        title: 'داغ‌ترین‌ها',

        items: [
          {
            title: 'گوشی S26',
            url: '#',
          },
          {
            title: 'آیفون ۱۷',
            url: '#',
          },
          {
            title: 'گوشی S25 سامسونگ',
            url: '#',
          },
          {
            title: 'شیائومی نوت ۱۵',
            url: '#',
          },
          {
            title: 'شیائومی نوت ۱۴',
            url: '#',
          },
          {
            title: 'ردمی نوت ۱۴ پرو',
            url: '#',
          },
          {
            title: 'ردمی نوت ۱۴ پرو پلاس',
            url: '#',
          },
          {
            title: 'گوشی سامسونگ سری S',
            url: '#',
          },
          {
            title: 'گوشی سامسونگ سری A',
            url: '#',
          },
          {
            title: 'گوشی سامسونگ سری M',
            url: '#',
          },
          {
            title: 'گلکسی A57',
            url: '#',
          },
          {
            title: 'شیائومی 15T',
            url: '#',
          },
        ],
      },
    ],
  },

  /* =========================================
     2. LAPTOP
  ========================================== */

  {
    id: 2,
    title: 'لپ تاپ',

    groups: [
      {
        title: 'لپ تاپ و کامپیوتر',
        items: [
          'لپ تاپ',
          'کامپیوتر',
          'مانیتور',
          'کیبورد',
          'ماوس',
        ],
      },

      {
        title: 'صوتی و تصویری',
        items: [
          'هدفون',
          'هندزفری',
          'اسپیکر',
          'تلویزیون',
          'ساندبار',
        ],
      },

      {
        title: 'گجت ها',
        items: [
          'ساعت هوشمند',
          'تبلت',
          'دوربین',
          'کنسول بازی',
        ],
      },
    ],
  },

  /* =========================================
     3. DIGITAL
  ========================================== */

  {
    id: 3,
    title: 'کالای دیجیتال',

    groups: [
      {
        title: 'لوازم دیجیتال',
        items: [
          'لپ تاپ',
          'تبلت',
          'مانیتور',
          'کیبورد',
          'ماوس',
        ],
      },

      {
        title: 'صوتی و تصویری',
        items: [
          'هدفون',
          'هندزفری',
          'اسپیکر',
          'تلویزیون',
          'ساندبار',
        ],
      },

      {
        title: 'گجت ها',
        items: [
          'ساعت هوشمند',
          'دوربین',
          'کنسول بازی',
        ],
      },
    ],
  },

  /* =========================================
     4. ELECTRICAL HOME
  ========================================== */

  {
    id: 4,
    title: 'لوازم خانگی برقی',

    groups: [
      {
        title: 'لوازم خانگی',
        items: [
          'یخچال',
          'لباسشویی',
          'جاروبرقی',
          'ماشین ظرفشویی',
        ],
      },

      {
        title: 'آشپزخانه',
        items: [
          'قهوه ساز',
          'کتری',
          'چای ساز',
          'مایکروویو',
        ],
      },

      {
        title: 'لوازم برقی',
        items: [
          'پنکه',
          'بخاری',
          'اتو',
          'جارو شارژی',
        ],
      },
    ],
  },

  /* =========================================
     5. LOCAL
  ========================================== */

  {
    id: 5,
    title: 'محصولات بومی و محلی',

    groups: [
      {
        title: 'محصولات غذایی',
        items: [
          'خشکبار',
          'عسل',
          'زعفران',
          'ادویه',
        ],
      },

      {
        title: 'صنایع دستی',
        items: [
          'صنایع دستی',
          'ظروف سنتی',
          'بافتنی',
        ],
      },

      {
        title: 'محصولات محلی',
        items: [
          'سوغات',
          'محصولات روستایی',
          'محصولات سنتی',
        ],
      },
    ],
  },

  /* =========================================
     6. HOME & KITCHEN
  ========================================== */

  {
    id: 6,
    title: 'خانه و آشپزخانه',

    groups: [
      {
        title: 'آشپزخانه',
        items: [
          'ظروف',
          'قهوه ساز',
          'کتری',
          'تابه',
        ],
      },

      {
        title: 'دکوراسیون',
        items: [
          'مبلمان',
          'چراغ',
          'فرش',
          'تابلو',
        ],
      },

      {
        title: 'لوازم خانه',
        items: [
          'نظافت',
          'نظم دهنده',
          'لوازم خواب',
        ],
      },
    ],
  },

  /* =========================================
     7. BEAUTY
  ========================================== */

  {
    id: 7,
    title: 'آرایشی بهداشتی',

    groups: [
      {
        title: 'آرایشی',
        items: [
          'رژ لب',
          'کرم',
          'ریمل',
          'پنکیک',
        ],
      },

      {
        title: 'مراقبت پوست',
        items: [
          'ضد آفتاب',
          'ماسک صورت',
          'شوینده',
        ],
      },

      {
        title: 'بهداشت',
        items: [
          'شامپو',
          'صابون',
          'محصولات بهداشتی',
        ],
      },
    ],
  },

  /* =========================================
     8. FASHION
  ========================================== */

  {
    id: 8,
    title: 'مد و پوشاک',

    groups: [
      {
        title: 'پوشاک مردانه',
        items: [
          'پیراهن',
          'شلوار',
          'کفش',
          'تیشرت',
        ],
      },

      {
        title: 'پوشاک زنانه',
        items: [
          'مانتو',
          'لباس',
          'کفش زنانه',
          'کیف',
        ],
      },

      {
        title: 'اکسسوری',
        items: [
          'ساعت',
          'عینک',
          'زیورآلات',
        ],
      },
    ],
  },

  /* =========================================
     9. GOLD
  ========================================== */

  {
    id: 9,
    title: 'طلا و نقره',

    groups: [
      {
        title: 'طلا',
        items: [
          'انگشتر طلا',
          'گردنبند طلا',
          'دستبند طلا',
          'گوشواره طلا',
        ],
      },

      {
        title: 'نقره',
        items: [
          'انگشتر نقره',
          'گردنبند نقره',
          'دستبند نقره',
        ],
      },

      {
        title: 'زیورآلات',
        items: [
          'بدلیجات',
          'اکسسوری',
        ],
      },
    ],
  },

  /* =========================================
     10. CAR
  ========================================== */

  {
    id: 10,
    title: 'خودرو و موتورسیکلت',

    groups: [
      {
        title: 'خودرو',
        items: [
          'لوازم یدکی',
          'روغن موتور',
          'لاستیک',
          'باتری',
        ],
      },

      {
        title: 'موتورسیکلت',
        items: [
          'لوازم یدکی موتور',
          'کلاه کاسکت',
          'روغن موتور',
        ],
      },
    ],
  },

  /* =========================================
     11. HEALTH
  ========================================== */

  {
    id: 11,
    title: 'سلامت و پزشکی',

    groups: [
      {
        title: 'تجهیزات پزشکی',
        items: [
          'فشارسنج',
          'ترازو',
          'تب سنج',
          'پالس اکسیمتر',
        ],
      },

      {
        title: 'سلامت',
        items: [
          'مکمل ها',
          'محصولات مراقبتی',
          'تجهیزات سلامت',
        ],
      },
    ],
  },

  /* =========================================
     12. TOOLS
  ========================================== */

  {
    id: 12,
    title: 'ابزارآلات و تجهیزات',

    groups: [
      {
        title: 'ابزار دستی',
        items: [
          'آچار',
          'پیچ گوشتی',
          'انبردست',
          'چکش',
        ],
      },

      {
        title: 'ابزار برقی',
        items: [
          'دریل',
          'فرز',
          'اره برقی',
        ],
      },

      {
        title: 'تجهیزات',
        items: [
          'جعبه ابزار',
          'تجهیزات کارگاهی',
        ],
      },
    ],
  },

  /* =========================================
     13. BOOK & ART
  ========================================== */

  {
    id: 13,
    title: 'کتاب و هنر',

    groups: [
      {
        title: 'کتاب',
        items: [
          'کتاب رمان',
          'کتاب آموزشی',
          'کتاب کودک',
        ],
      },

      {
        title: 'لوازم تحریر',
        items: [
          'دفتر',
          'خودکار',
          'مداد',
          'جامدادی',
        ],
      },

      {
        title: 'هنر',
        items: [
          'لوازم نقاشی',
          'لوازم طراحی',
          'صنایع دستی',
        ],
      },
    ],
  },

  /* =========================================
     14. SPORT
  ========================================== */

  {
    id: 14,
    title: 'ورزش و سفر',

    groups: [
      {
        title: 'ورزش',
        items: [
          'لباس ورزشی',
          'کفش ورزشی',
          'تجهیزات ورزشی',
        ],
      },

      {
        title: 'کمپینگ',
        items: [
          'چادر',
          'کیسه خواب',
          'چراغ کمپینگ',
        ],
      },

      {
        title: 'سفر',
        items: [
          'چمدان',
          'کوله پشتی',
          'لوازم سفر',
        ],
      },
    ],
  },

  /* =========================================
     15. GIFT CARD
  ========================================== */

  {
    id: 15,
    title: 'کتاب هدیه و کیف کارت',

    groups: [
      {
        title: 'کارت هدیه',
        items: [
          'کارت هدیه دیجی‌کالا',
          'کارت هدیه دیجیتال',
        ],
      },

      {
        title: 'هدیه',
        items: [
          'هدایای مناسبتی',
          'هدایای شخصی',
        ],
      },
    ],
  },

  /* =========================================
     16. SUPERMARKET
  ========================================== */

  {
    id: 16,
    title: 'سوپرمارکت آنلاین',

    groups: [
      {
        title: 'مواد غذایی',
        items: [
          'برنج',
          'روغن',
          'ماکارونی',
          'تنقلات',
        ],
      },

      {
        title: 'نوشیدنی',
        items: [
          'نوشابه',
          'آبمیوه',
          'قهوه',
          'چای',
        ],
      },

      {
        title: 'شوینده',
        items: [
          'مایع ظرفشویی',
          'پودر لباسشویی',
          'شوینده سطوح',
        ],
      },
    ],
  },

  /* =========================================
     17. TOYS
  ========================================== */

  {
    id: 17,
    title: 'اسباب بازی کودک و نوزاد',

    groups: [
      {
        title: 'اسباب بازی',
        items: [
          'ماشین اسباب بازی',
          'عروسک',
          'لگو',
          'پازل',
        ],
      },

      {
        title: 'نوزاد',
        items: [
          'لباس نوزاد',
          'اسباب بازی نوزاد',
          'لوازم سیسمونی',
        ],
      },
    ],
  },

  /* =========================================
     18. PET SHOP
  ========================================== */

  {
    id: 18,
    title: 'پت شاپ',

    groups: [
      {
        title: 'غذای حیوانات',
        items: [
          'غذای سگ',
          'غذای گربه',
          'تشویقی',
        ],
      },

      {
        title: 'لوازم حیوانات',
        items: [
          'قلاده',
          'ظرف غذا',
          'اسباب بازی حیوانات',
        ],
      },
    ],
  },
];


/* =========================================
   CATEGORY ICONS
========================================= */

function getCategoryIcon(title) {
  const icons = {
    موبایل: `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
      >
        <rect
          x="7"
          y="2.5"
          width="10"
          height="19"
          rx="2"
        />
        <path d="M10 5h4" />
        <circle
          cx="12"
          cy="18.5"
          r=".7"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    `,

    'لپ تاپ': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="12"
          rx="1.5"
        />
        <path d="M2.5 19h19" />
        <path d="M7 19l1-2h8l1 2" />
      </svg>
    `,

    'کالای دیجیتال': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />
        <path d="M8 21h8" />
        <path d="M12 19v2" />
      </svg>
    `,

    'لوازم خانگی برقی': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect
          x="5"
          y="3"
          width="14"
          height="18"
          rx="2"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
        />
        <path d="M9 6h6" />
      </svg>
    `,

    'محصولات بومی و محلی': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 21V9" />
        <path d="M12 9c-4.5 0-7-2.5-7-6 4.5 0 7 2.5 7 6Z" />
        <path d="M12 12c4.5 0 7-2.5 7-6-4.5 0-7 2.5-7 6Z" />
        <path d="M7 21h10" />
      </svg>
    `,

    'خانه و آشپزخانه': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10.5V21h14V10.5" />
        <path d="M9 21v-6h6v6" />
      </svg>
    `,

    'آرایشی بهداشتی': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 3h6" />
        <path d="M10 3v5l-2 3v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8l-2-3V3" />
        <path d="M8 12h8" />
      </svg>
    `,

    'مد و پوشاک': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 4l4 3 4-3" />
        <path d="M8 4 4 7l2 5 3-2v10h6V10l3 2 2-5-4-3" />
      </svg>
    `,

    'طلا و نقره': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
        />
      </svg>
    `,

    'خودرو و موتورسیکلت': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 15l2-6h10l2 6" />
        <path d="M3 15h18" />
        <path d="M4 15v4h2" />
        <path d="M18 19h2v-4" />
        <circle
          cx="7"
          cy="18"
          r="1.5"
        />
        <circle
          cx="17"
          cy="18"
          r="1.5"
        />
      </svg>
    `,

    'سلامت و پزشکی': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 2.5C19 16.5 12 21 12 21Z" />
        <path d="M12 10v5" />
        <path d="M9.5 12.5h5" />
      </svg>
    `,

    'ابزارآلات و تجهیزات': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-3-3 2-4Z" />
      </svg>
    `,

    'کتاب و هنر': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 5a2 2 0 0 1 2-2h13v17H6a2 2 0 0 1-2-2V5Z" />
        <path d="M4 18a2 2 0 0 0 2 2h13" />
        <path d="M8 7h7" />
        <path d="M8 11h5" />
      </svg>
    `,

    'ورزش و سفر': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
        />
        <path d="M4.5 9h15" />
        <path d="M4.5 15h15" />
        <path d="M12 4c2 2.2 3 5 3 8s-1 5.8-3 8" />
        <path d="M12 4c-2 2.2-3 5-3 8s1 5.8 3 8" />
      </svg>
    `,

    'کتاب هدیه و کیف کارت': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />
        <path d="M3 9h18" />
        <path d="M7 14h4" />
      </svg>
    `,

    'سوپرمارکت آنلاین': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 5h2l2 11h10l2-8H7" />
        <circle
          cx="10"
          cy="20"
          r="1.5"
        />
        <circle
          cx="17"
          cy="20"
          r="1.5"
        />
      </svg>
    `,

    'اسباب بازی کودک و نوزاد': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle
          cx="12"
          cy="12"
          r="7"
        />
        <circle
          cx="9.5"
          cy="10"
          r=".8"
          fill="currentColor"
        />
        <circle
          cx="14.5"
          cy="10"
          r=".8"
          fill="currentColor"
        />
        <path d="M9 14c2 1.5 4 1.5 6 0" />
      </svg>
    `,

    'پت شاپ': `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 20c-4 0-7-2.5-7-6 0-2.5 1.5-4 3.5-4 1.2 0 2.3.7 3.5 2 1.2-1.3 2.3-2 3.5-2 2 0 3.5 1.5 3.5 4 0 3.5-3 6-7 6Z" />
        <circle
          cx="7"
          cy="7"
          r="1.5"
        />
        <circle
          cx="17"
          cy="7"
          r="1.5"
        />
        <circle
          cx="5"
          cy="11"
          r="1.5"
        />
        <circle
          cx="19"
          cy="11"
          r="1.5"
        />
      </svg>
    `,
  };

  return (
    icons[title] ||
    `
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
        />
      </svg>
    `
  );
}


/* =========================================
   MEGA MENU
========================================= */

export default function MegaMenu() {
  return `

    <!-- =========================================
         DARK BACKDROP
    ========================================== -->

    <div
  id="megaMenuBackdrop"

  class="
    fixed

    top-26
    left-0
    right-0
    bottom-0

    bg-black/45

    opacity-0

    pointer-events-none

    transition-opacity
    duration-200

    z-90
  "
></div>


    <!-- =========================================
         MEGA MENU
    ========================================== -->

    <div
      id="megaMenu"

      dir="rtl"

      class="
        absolute
        top-full
        right-0

        w-[calc(100vw-48px)]
        max-w-300

        h-125

        bg-white

        border
        border-gray-200

        rounded-b-lg

        shadow-[0_8px_25px_rgba(0,0,0,0.16)]

        overflow-hidden

        z-100
      "
    >

      <div
        class="
          flex
          flex-row

          w-full
          h-full

          min-h-0
        "
      >

        <!-- =====================================
             CONTENT
        ====================================== -->

        <section
          id="megaMenuContent"

          class="
            order-2

            flex-1
            min-w-0
            min-h-0

            h-full

            overflow-y-auto
            overflow-x-hidden



            bg-white

            px-7
            pt-4.5
            pb-11.25

            overscroll-contain

            scrollbar-thin
            scrollbar-thumb-gray-300
            scrollbar-track-transparent

            [direction:ltr]
          "
        ></section>


        <!-- =====================================
             SIDEBAR
        ====================================== -->

      <aside
  class="
    order-1

    w-52.5
    shrink-0

    min-h-0
    h-full

    bg-[#f7f7f7]

    border-r
    border-gray-200

    overflow-y-auto
    overflow-x-hidden

    overscroll-contain

    scrollbar-thin
    scrollbar-thumb-gray-300
    scrollbar-track-transparent

    [direction:ltr]
  "
>
          ${categories
            .map(
              (category, index) => `

                <button
                  type="button"

                  data-category="${category.id}"

                  class="
                    mega-category

                    relative

                    w-full

                    min-h-13
                    h-13

                    px-4

                    flex
                    items-center

                    gap-2.5

                    text-right

                    text-[13px]
                    [direction:rtl]

                    transition-all
                    duration-150

                    ${
                      index === 0
                        ? `
                          bg-white
                          text-red-600
                          font-bold
                        `
                        : `
                          text-gray-700
                        `
                    }

                    hover:bg-white
                    hover:text-red-600
                  "
                >

                  <span
                    class="
                      mega-category-indicator

                      absolute

                      right-0
                      top-0

                      w-0.5
                      h-full

                      bg-red-500

                      ${
                        index === 0
                          ? 'opacity-100'
                          : 'opacity-0'
                      }

                      transition-opacity
                    "
                  ></span>


                  <span
                    class="
                      w-5
                      h-5

                      shrink-0

                      flex
                      items-center
                      justify-center
                    "
                  >
                    ${getCategoryIcon(category.title)}
                  </span>


                  <span
                    class="
                      flex-1

                      text-right

                      whitespace-nowrap

                      overflow-hidden
                      text-ellipsis
                    "
                  >
                    ${category.title}
                  </span>

                </button>

              `,
            )
            .join('')}

        </aside>

      </div>

    </div>

  `;
}


/* =========================================
   ITEM NORMALIZER
========================================= */

function normalizeItem(item) {
  if (typeof item === 'string') {
    return {
      title: item,
      url: '#',
    };
  }

  return {
    title: item?.title || '',
    url: item?.url || '#',
  };
}


/* =========================================
   GROUP TITLE
========================================= */

function renderGroupTitle(group) {
  return `

    <a
      href="${group.url || '#'}"

      class="
        relative

        flex
        items-center

        pr-2.75

        mb-5.5

        text-[14px]

        font-bold

        text-gray-900

        leading-6

        whitespace-nowrap

        hover:text-red-600

        transition-colors
      "
    >

      <span
        class="
          absolute

          right-0
          top-1.25

          w-0.5
          h-4.25

          rounded-full

          bg-red-500
        "
      ></span>


      ${group.title}


      <span
  class="
    mr-2

    flex
    items-center
    justify-center

    w-3.5
    h-4.5

    text-[19px]
    font-normal

    leading-none

    text-gray-500
  "
>
  ›
</span>

    </a>

  `;
}


/* =========================================
   NORMAL ITEMS
========================================= */

function renderItems(items) {
  if (!items?.length) {
    return '';
  }

  return `

    <div
      class="
        flex
        flex-col

        gap-3.25
      "
    >

      ${items
        .map((item) => {
          const normalized = normalizeItem(item);

          return `

            <a
              href="${normalized.url}"

              class="
                block

                text-[13px]

                leading-5

                text-gray-400

                whitespace-nowrap

                overflow-hidden
                text-ellipsis

                hover:text-red-600

                transition-colors
              "
            >
              ${normalized.title}
            </a>

          `;
        })
        .join('')}

    </div>

  `;
}


/* =========================================
   SUB GROUP
========================================= */

function renderSubGroup(subGroup) {
  return `

    <div
      class="
        mb-6.25
      "
    >

      <a
        href="${subGroup.url || '#'}"

        class="
          relative

          flex
          items-center

          pr-2.75

          mb-4.5

          text-[14px]

          font-bold

          text-gray-900

          whitespace-nowrap

          hover:text-red-600

          transition-colors
        "
      >

        <span
          class="
            absolute

            right-0
            top-0.75

            w-0.5
            h-4.25

            rounded-full

            bg-red-500
          "
        ></span>


        ${subGroup.title}


        <span
          class="
            mr-2

            text-[18px]
            font-normal

            leading-none

            text-gray-700
          "
        >
          ‹
        </span>

      </a>


      ${renderItems(subGroup.items)}

    </div>

  `;
}


/* =========================================
   RENDER GROUP
========================================= */

function renderGroup(group) {
  if (!group) {
    return '';
  }

  return `

    <div
      class="
        min-w-0
      "
    >

      ${renderGroupTitle(group)}


      ${
        group.subGroups
          ? group.subGroups
              .map(renderSubGroup)
              .join('')
          : ''
      }


      ${
        group.items
          ? renderItems(group.items)
          : ''
      }

    </div>

  `;
}


/* =========================================
   GRID CLASS
========================================= */

function getGridClass(columns) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return gridClasses[columns] || 'grid-cols-1';
}


/* =========================================
   CREATE MOBILE CONTENT
========================================= */

function createMobileContent(category) {
  const selectionGroup = category.groups.find(
    (group) => group.title === 'انتخاب موبایل',
  );

  const mobileBrands = category.groups.find(
    (group) =>
      group.title === 'برندهای مختلف گوشی موبایل',
  );

  const priceGroup = category.groups.find(
    (group) =>
      group.title === 'گوشی براساس قیمت',
  );

  const accessoriesGroup = category.groups.find(
    (group) =>
      group.title === 'لوازم جانبی موبایل',
  );

  const hotGroup = category.groups.find(
    (group) =>
      group.title === 'داغ‌ترین‌ها',
  );

  const allProductsUrl =
    selectionGroup?.url || '#';

  return `

    <div
      class="
        w-full
        min-h-full

        [direction:rtl]
      "
    >

      <!-- =====================================
           ALL PRODUCTS
      ====================================== -->

      <div
        class="
          flex
          justify-start

          mb-9.5
        "
      >

        <a
          href="${allProductsUrl}"

          class="
            flex
            items-center

            text-[13px]

            font-bold

            text-blue-700

            hover:text-blue-800

            transition-colors
          "
        >

          همه محصولات موبایل

          <span
            class="
              mr-1.75

              text-[18px]

              leading-none
            "
          >
             ›
          </span>

        </a>

      </div>


      <!-- =====================================
           FOUR COLUMNS
      ====================================== -->

      <div
        class="
          grid

          grid-cols-4

          gap-x-10

          items-start
        "
      >

        <!-- ===================================
             COLUMN 1
        ==================================== -->

        <div
          class="
            min-w-0
          "
        >

          ${renderGroup(selectionGroup)}


          ${
            mobileBrands
              ? `
                <div
                  class="
                    mt-7
                  "
                >

                  ${renderGroup(mobileBrands)}

                </div>
              `
              : ''
          }

        </div>


        <!-- ===================================
             COLUMN 2
        ==================================== -->

        <div
          class="
            min-w-0
          "
        >

          ${
            priceGroup
              ? renderGroup(priceGroup)
              : ''
          }

        </div>


        <!-- ===================================
             COLUMN 3
        ==================================== -->

        <div
          class="
            min-w-0
          "
        >

          ${
            accessoriesGroup
              ? renderGroup(accessoriesGroup)
              : ''
          }

        </div>


        <!-- ===================================
             COLUMN 4
        ==================================== -->

        <div
          class="
            min-w-0
          "
        >

          ${
            hotGroup
              ? renderGroup(hotGroup)
              : ''
          }

        </div>

      </div>

    </div>

  `;
}


/* =========================================
   CREATE OTHER CATEGORY CONTENT
========================================= */

function createOtherCategoryContent(category) {
  const groups = category.groups || [];

  const visibleGroups = groups.slice(0, 4);

  const columns = Math.min(
    visibleGroups.length,
    4,
  );

  const gridClass = getGridClass(columns);

  const allProductsUrl =
    groups.find((group) => group.url)?.url ||
    '#';

  return `

    <div
      class="
        w-full
        min-h-full
        [direction:rtl]
      "
    >

      <!-- =====================================
           ALL PRODUCTS
      ====================================== -->

      <div
        class="
          flex
          justify-start

          mb-9.5
        "
      >

        <a
          href="${allProductsUrl}"

          class="
            flex
            items-center

            text-[13px]

            font-bold

            text-blue-700

            hover:text-blue-800

            transition-colors
          "
        >

          همه محصولات ${category.title}

          <span
            class="
              mr-1.75

              text-[18px]

              leading-none
            "
          >
             ›
          </span>

        </a>

      </div>


      <!-- =====================================
           GROUPS
      ====================================== -->

      <div
        class="
          grid

          ${gridClass}

          gap-x-11.25

          gap-y-10

          items-start
        "
      >

        ${visibleGroups
          .map((group) =>
            renderGroup(group),
          )
          .join('')}

      </div>

    </div>

  `;
}


/* =========================================
   CREATE CONTENT
========================================= */

function createContent(category) {
  if (!category) {
    return '';
  }

  if (category.id === 1) {
    return createMobileContent(category);
  }

  return createOtherCategoryContent(category);
}


/* =========================================
   SET ACTIVE CATEGORY
========================================= */

function setActiveCategory(buttons, activeId) {
  buttons.forEach((button) => {
    const isActive =
      button.dataset.category ===
      String(activeId);

    const indicator =
      button.querySelector(
        '.mega-category-indicator',
      );

    button.classList.remove(
      'bg-white',
      'text-red-600',
      'font-bold',
      'text-gray-700',
    );

    if (isActive) {
      button.classList.add(
        'bg-white',
        'text-red-600',
        'font-bold',
      );

      if (indicator) {
        indicator.classList.remove(
          'opacity-0',
        );

        indicator.classList.add(
          'opacity-100',
        );
      }
    } else {
      button.classList.add(
        'text-gray-700',
      );

      if (indicator) {
        indicator.classList.remove(
          'opacity-100',
        );

        indicator.classList.add(
          'opacity-0',
        );
      }
    }
  });
}


/* =========================================
   INIT MEGA MENU
========================================= */

export function initMegaMenu() {
  const buttons =
    document.querySelectorAll(
      '.mega-category',
    );

  const content =
    document.querySelector(
      '#megaMenuContent',
    );

  const backdrop =
    document.querySelector(
      '#megaMenuBackdrop',
    );

  const megaMenu =
    document.querySelector(
      '#megaMenu',
    );

  if (
    !buttons.length ||
    !content ||
    !megaMenu
  ) {
    return;
  }


  /* =====================================
       RENDER
  ====================================== */

  function render(id) {
    const category =
      categories.find(
        (item) =>
          item.id === Number(id),
      );

    if (!category) {
      return;
    }

    content.innerHTML =
      createContent(category);

    setActiveCategory(
      buttons,
      category.id,
    );

    content.scrollTop = 0;
  }


  /* =====================================
       SHOW BACKDROP
  ====================================== */

  function showBackdrop() {
  if (!backdrop) {
    return;
  }

  backdrop.classList.remove(
    'opacity-0',
    'pointer-events-none',
  );

  backdrop.classList.add(
    'opacity-100',
    'pointer-events-auto',
  );
}


  /* =====================================
       HIDE BACKDROP
  ====================================== */

  function hideBackdrop() {
  if (!backdrop) {
    return;
  }

  backdrop.classList.remove(
    'opacity-100',
    'pointer-events-auto',
  );

  backdrop.classList.add(
    'opacity-0',
    'pointer-events-none',
  );
}


  /* =====================================
       DEFAULT CATEGORY
  ====================================== */

  render(1);


  /* =====================================
       CATEGORY HOVER
  ====================================== */

  buttons.forEach((button) => {
  button.addEventListener(
    'mouseenter',
    () => {
      render(
        button.dataset.category,
      );
    },
  );
});


  /* =====================================
       MENU HOVER
  ====================================== */

  megaMenu.addEventListener(
    'mouseenter',
    showBackdrop,
  );


  /* =====================================
       MENU LEAVE
  ====================================== */

  megaMenu.addEventListener(
    'mouseleave',
    hideBackdrop,
  );


  /* =====================================
       BACKDROP CLICK
  ====================================== */

  if (backdrop) {
    backdrop.addEventListener(
      'click',
      hideBackdrop,
    );
  }
}