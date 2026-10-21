export function initFooter() {

    const backToTop =
        document.querySelector("#backToTop");


    if (!backToTop) {

        return;

    }


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth",

            });

        }
    );

}