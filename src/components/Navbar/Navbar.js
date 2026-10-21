import MegaMenu from '../MegaMenu/MegaMenu.js';

import categoryIcon from '../../assets/images/Navbar/category.svg';
import supermarketIcon from '../../assets/images/Navbar/supermarket.svg';
import goldIcon from '../../assets/images/Navbar/gold.svg';
import bestsellerIcon from '../../assets/images/Navbar/bestseller.svg';
import discountIcon from '../../assets/images/Navbar/discount.svg';
import styleIcon from '../../assets/images/Navbar/style.svg';

export default function Navbar() {
  return `


<nav
dir="rtl"

class="
w-full
bg-white
border-b
border-gray-200
relative
z-40
"

>


<div
class="
w-full
px-4
relative
"

>


<div
class="
h-11.25
flex
items-center
gap-5
text-[13px]
text-gray-600
"

>


<button

id="categoryButton"

class="
relative
h-full

flex
items-center
gap-2

font-bold
text-gray-800

whitespace-nowrap

after:absolute
after:bottom-0
after:right-0
after:w-0
after:h-0.5
after:bg-red-500
after:transition-all

hover:after:w-full
"

>


<img

src="${categoryIcon}"

class="
w-5
h-5
"

/>


دسته‌بندی کالاها


</button>




<div
class="
h-5
w-px
bg-gray-300
"
></div>





<a
href="#"

class="
relative
h-full

flex
items-center
gap-1.5

whitespace-nowrap

transition

hover:text-red-500

after:absolute
after:bottom-0
after:right-0
after:w-0
after:h-0.5
after:bg-red-500
after:transition-all

hover:after:w-full
"

>

<img
src="${discountIcon}"
class="w-4 h-4"
/>

شگفت‌انگیزها

</a>





<a
href="#"

class="
relative
h-full

flex
items-center
gap-1.5

whitespace-nowrap

transition

hover:text-red-500

after:absolute
after:bottom-0
after:right-0
after:w-0
after:h-0.5
after:bg-red-500
after:transition-all

hover:after:w-full
"

>

<img
src="${supermarketIcon}"
class="w-4 h-4"
/>

سوپرمارکت

</a>





<a
href="#"

class="
relative
h-full

flex
items-center
gap-1.5

whitespace-nowrap

transition

hover:text-red-500

after:absolute
after:bottom-0
after:right-0
after:w-0
after:h-0.5
after:bg-red-500
after:transition-all

hover:after:w-full
"

>

<img
src="${goldIcon}"
class="w-4 h-4"
/>

طلا و نقره دیجیتال

</a>





<a
href="#"

class="
relative
h-full

flex
items-center
gap-1.5

whitespace-nowrap

transition

hover:text-red-500

after:absolute
after:bottom-0
after:right-0
after:w-0
after:h-0.5
after:bg-red-500
after:transition-all

hover:after:w-full
"

>

<img
src="${bestsellerIcon}"
class="w-4 h-4"
/>

پرفروش‌ترین‌ها

</a>





<a
href="#"

class="
relative
h-full

flex
items-center
gap-1.5

whitespace-nowrap

transition

hover:text-red-500

after:absolute
after:bottom-0
after:right-0
after:w-0
after:h-0.5
after:bg-red-500
after:transition-all

hover:after:w-full
"

>

<img
src="${styleIcon}"
class="w-4 h-4"
/>

دیجی‌استایل

</a>





<a
href="#"

class="
relative
h-full

flex
items-center

whitespace-nowrap

transition

hover:text-red-500

after:absolute
after:bottom-0
after:right-0
after:w-0
after:h-0.5
after:bg-red-500
after:transition-all

hover:after:w-full
"

>

در دیجی‌کالا بفروشید!

</a>






<!--
=========================================
انتخاب آدرس
=========================================
-->

<button

id="addressButton"

type="button"

class="
mr-auto

h-9

px-3

flex
items-center
justify-center
gap-1.5

rounded-full

bg-orange-50

text-orange-500

text-[13px]

whitespace-nowrap

cursor-pointer

transition

hover:bg-orange-100

"

>


<svg

width="18"

height="18"

viewBox="0 0 24 24"

fill="none"

xmlns="http://www.w3.org/2000/svg"

>

<path

d="M12 21C15.5 17.2 19 14.1 19 9.5C19 5.91 15.87 3 12 3C8.13 3 5 5.91 5 9.5C5 14.1 8.5 17.2 12 21Z"

stroke="currentColor"

stroke-width="1.8"

stroke-linecap="round"

stroke-linejoin="round"

/>


<circle

cx="12"

cy="9.5"

r="2.3"

stroke="currentColor"

stroke-width="1.8"

/>

</svg>


انتخاب آدرس


</button>




</div>






<!--
=========================================
MEGA MENU
=========================================
-->

<div

id="megaMenuWrapper"

class="

hidden

absolute

top-11.25

right-0

w-full

bg-transparent

z-999


"

>


${MegaMenu()}


</div>






</div>





<!--
=========================================
ADDRESS MODAL
=========================================
-->

<div

id="addressModal"

class="

hidden

fixed

inset-0

z-9999

bg-black/40

items-center

justify-center

p-4

"

>


<!--
=========================================
MODAL CONTENT
=========================================
-->

<div

id="addressModalContent"

dir="rtl"

class="

relative

w-full

max-w-210

bg-white

rounded-2xl

shadow-2xl

overflow-hidden

"

>


<!--
=========================================
MODAL HEADER
=========================================
-->

<div

class="

px-6

pt-5

pb-4

"

>


<div

class="

flex

items-start

justify-between

gap-4

"

>


<!-- TITLE -->

<div
class="
flex-1
"
>


<h2

class="

text-[18px]

font-bold

text-gray-900

"

>

انتخاب موقعیت مکانی

</h2>


<p

class="

mt-2

text-[12px]

text-gray-500

"

>

برای تحویل به‌موقع سفارش، موقعیت را دقیق انتخاب کنید.

</p>


</div>




<!-- CLOSE BUTTON -->

<button

id="closeAddressModal"

type="button"

class="

flex

items-center

justify-center

w-8

h-8

rounded-full

text-gray-500

hover:bg-gray-100

hover:text-gray-800

transition

"

>


<svg

width="22"

height="22"

viewBox="0 0 24 24"

fill="none"

xmlns="http://www.w3.org/2000/svg"

>


<path

d="M6 6L18 18"

stroke="currentColor"

stroke-width="1.8"

stroke-linecap="round"

/>


<path

d="M18 6L6 18"

stroke="currentColor"

stroke-width="1.8"

stroke-linecap="round"

/>


</svg>


</button>


</div>




<!-- DIVIDER -->

<div

class="

mt-4

h-px

bg-gray-200

"

></div>


</div>





<!--
=========================================
MAP
=========================================
-->

<div

class="

px-5

pb-4

"

>


<div

class="

relative

w-full

h-107.5

rounded-xl

overflow-hidden

border

border-gray-200

bg-[#f3eeee]

"

>


<!-- MAP -->

<iframe

id="addressMap"

class="

absolute

inset-0

w-full

h-full

border-0

"

src="https://www.openstreetmap.org/export/embed.html?bbox=51.30%2C35.68%2C51.48%2C35.76&layer=mapnik"

loading="lazy"

>

</iframe>




<!--
=========================================
SEARCH
=========================================
-->

<div

class="

absolute

top-4

left-1/2

-translate-x-1/2

w-[min(700px,calc(100%-32px))]

z-10

"

>


<div

class="

h-14

bg-white

rounded-xl

shadow-lg

flex

items-center

px-4

gap-3

"

>


<!-- SEARCH ICON -->

<svg

width="22"

height="22"

viewBox="0 0 24 24"

fill="none"

xmlns="http://www.w3.org/2000/svg"

class="

text-gray-500

shrink-0

"

>


<circle

cx="11"

cy="11"

r="7"

stroke="currentColor"

stroke-width="1.8"

/>


<path

d="M16.5 16.5L21 21"

stroke="currentColor"

stroke-width="1.8"

stroke-linecap="round"

/>


</svg>




<input

id="addressSearch"

type="text"

placeholder="جستجوی استان و شهر ..."

class="

w-full

outline-none

bg-transparent

text-[13px]

text-gray-800

placeholder:text-gray-400

"

/>


</div>


</div>





<!--
=========================================
MAP MARKER
=========================================
-->

<div

class="

absolute

top-1/2

left-1/2

-translate-x-1/2

-translate-y-1/2

z-10

flex

flex-col

items-center

pointer-events-none

"

>


<div

class="

px-4

py-2

bg-[#1989e8]

text-white

text-[12px]

font-bold

rounded-full

shadow-lg

whitespace-nowrap

"

>

موقعیت تحویل سفارش

</div>




<div

class="

w-0

h-0

border-l-[7px]

border-r-[7px]

border-t-[9px]

border-l-transparent

border-r-transparent

border-t-[#1989e8]

"

></div>




<div

class="

-mt-0.5

w-3

h-3

rounded-full

bg-[#1989e8]

border-2

border-white

shadow

"

></div>


</div>


</div>


</div>





<!--
=========================================
MODAL FOOTER
=========================================
-->

<div

class="

px-5

pb-5

"

>


<button

id="confirmAddressButton"

type="button"

class="

w-full

h-13

rounded-xl

bg-[#ef4056]

hover:bg-[#d9364b]

text-white

font-bold

text-[15px]

transition

flex

items-center

justify-center

"

>

ثبت موقعیت مکانی

</button>


</div>


</div>


</div>




</nav>


`;
}

export function initNavbar() {

  console.log('Navbar init اجرا شد');


  const categoryButton =
    document.querySelector('#categoryButton');

  const megaMenu =
    document.querySelector('#megaMenuWrapper');


  const addressButton =
    document.querySelector('#addressButton');

  const addressModal =
    document.querySelector('#addressModal');

  const closeAddressModal =
    document.querySelector('#closeAddressModal');

  const addressModalContent =
    document.querySelector('#addressModalContent');

  const confirmAddressButton =
    document.querySelector('#confirmAddressButton');


  console.log(
    categoryButton,
    megaMenu,
    addressButton,
    addressModal
  );


  /*
  =========================================
  MEGA MENU
  =========================================
  */

  if (!categoryButton || !megaMenu) {

    console.log(
      'Navbar element پیدا نشد'
    );

  } else {


    categoryButton.addEventListener(
      'mouseenter',

      () => {

        megaMenu.classList.remove(
          'hidden'
        );

      }
    );


    megaMenu.addEventListener(
      'mouseenter',

      () => {

        megaMenu.classList.remove(
          'hidden'
        );

      }
    );


    categoryButton.addEventListener(
      'mouseleave',

      () => {

        setTimeout(
          () => {

            if (
              !megaMenu.matches(':hover')
            ) {

              megaMenu.classList.add(
                'hidden'
              );

            }

          },
          300
        );

      }
    );


    megaMenu.addEventListener(
      'mouseleave',

      () => {

        megaMenu.classList.add(
          'hidden'
        );

      }
    );

  }





  /*
  =========================================
  ADDRESS MODAL
  =========================================
  */

  if (
    !addressButton ||
    !addressModal ||
    !closeAddressModal
  ) {

    console.log(
      'Address Modal element پیدا نشد'
    );

    return;

  }





  /*
  =========================================
  OPEN MODAL
  =========================================
  */

  addressButton.addEventListener(
    'click',

    (event) => {

      event.preventDefault();


      addressModal.classList.remove(
        'hidden'
      );


      addressModal.classList.add(
        'flex'
      );


      document.body.classList.add(
        'overflow-hidden'
      );

    }
  );





  /*
  =========================================
  CLOSE MODAL
  =========================================
  */

  function closeModal() {

    addressModal.classList.add(
      'hidden'
    );


    addressModal.classList.remove(
      'flex'
    );


    document.body.classList.remove(
      'overflow-hidden'
    );

  }





  /*
  =========================================
  CLOSE BUTTON
  =========================================
  */

  closeAddressModal.addEventListener(
    'click',

    () => {

      closeModal();

    }
  );





  /*
  =========================================
  CLICK OUTSIDE MODAL
  =========================================
  */

  addressModal.addEventListener(
    'click',

    (event) => {

      if (
        event.target === addressModal
      ) {

        closeModal();

      }

    }
  );





  /*
  =========================================
  ESC KEY
  =========================================
  */

  document.addEventListener(
    'keydown',

    (event) => {

      if (
        event.key === 'Escape' &&
        !addressModal.classList.contains(
          'hidden'
        )
      ) {

        closeModal();

      }

    }
  );





  /*
  =========================================
  CONFIRM ADDRESS
  =========================================
  */

  if (confirmAddressButton) {

    confirmAddressButton.addEventListener(
      'click',

      () => {

        console.log(
          'موقعیت مکانی ثبت شد'
        );


        closeModal();

      }
    );

  }

}