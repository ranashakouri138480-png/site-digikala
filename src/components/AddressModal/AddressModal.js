export default function AddressModal() {
  return `

    <!-- Address Modal Overlay -->
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

        <!-- Modal -->
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

            <!-- Header -->
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

                    <!-- Title -->
                    <div class="flex-1">

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


                    <!-- Close Button -->
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
                        aria-label="بستن"
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


                <!-- Divider -->
                <div
                    class="
                        mt-4
                        h-px
                        bg-gray-200
                    "
                ></div>

            </div>


            <!-- Map Area -->
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

                    <!-- Map -->
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


                    <!-- Search Box -->
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

                            <!-- Search Icon -->
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="text-gray-500 shrink-0"
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


                    <!-- Location Marker -->
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


            <!-- Footer -->
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

  `;
}


export function initAddressModal() {

    const addressButton = document.querySelector('#addressButton');

    const modal = document.querySelector('#addressModal');

    const modalContent = document.querySelector(
        '#addressModalContent'
    );

    const closeButton = document.querySelector(
        '#closeAddressModal'
    );

    const confirmButton = document.querySelector(
        '#confirmAddressButton'
    );


    if (
        !addressButton ||
        !modal ||
        !modalContent ||
        !closeButton
    ) {

        console.warn(
            'Address Modal elements پیدا نشدند'
        );

        return;

    }


    /* =========================================
       OPEN MODAL
    ========================================= */

    function openModal() {

        modal.classList.remove('hidden');

        modal.classList.add('flex');

        document.body.classList.add('overflow-hidden');

    }


    /* =========================================
       CLOSE MODAL
    ========================================= */

    function closeModal() {

        modal.classList.add('hidden');

        modal.classList.remove('flex');

        document.body.classList.remove('overflow-hidden');

    }


    /* =========================================
       ADDRESS BUTTON
    ========================================= */

    addressButton.addEventListener(
        'click',
        (event) => {

            event.preventDefault();

            openModal();

        }
    );


    /* =========================================
       CLOSE BUTTON
    ========================================= */

    closeButton.addEventListener(
        'click',
        () => {

            closeModal();

        }
    );


    /* =========================================
       CLICK OUTSIDE MODAL
    ========================================= */

    modal.addEventListener(
        'click',
        (event) => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );


    /* =========================================
       ESC KEY
    ========================================= */

    document.addEventListener(
        'keydown',
        (event) => {

            if (
                event.key === 'Escape' &&
                !modal.classList.contains('hidden')
            ) {

                closeModal();

            }

        }
    );


    /* =========================================
       CONFIRM ADDRESS
    ========================================= */

    if (confirmButton) {

        confirmButton.addEventListener(
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