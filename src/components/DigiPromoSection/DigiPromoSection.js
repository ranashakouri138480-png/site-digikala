import banner1 from "../../assets/images/DigiPromoSection/banner1.webp";
import banner2 from "../../assets/images/DigiPromoSection/banner2.webp";


function DigiPromoSection() {

  const banners = [
    banner1,
    banner2
  ];


  return `

<section class="
w-full
max-w-310
mx-auto
mt-6
px-4
">

<div class="
grid
grid-cols-1
md:grid-cols-2
gap-4
">


${banners.map((image)=>`

<div class="
h-62.5
rounded-2xl
overflow-hidden
">

<img
src="${image}"
class="
w-full
h-full
object-cover
"
/>

</div>


`).join("")}


</div>

</section>

`;

}


export default DigiPromoSection;