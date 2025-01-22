<script setup>
import {initFlowbite} from 'flowbite';
import { onMounted, reactive,ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollTop from 'primevue/scrolltop';

const state = reactive({
  detail:[
    {
      id:1,
      url:"public/image/projectImage/project1.png",
      title:"Dynamic E-com website",
      tech:"Html,Tailwind css,Vue js",
      git:"https://github.com/nazmul910/E-com-with-vue-js",
      live:"https://e-shop-nazmul901.netlify.app/"
    },
    {
      id:2,
      url:"public/image/projectImage/scrnli_fP4r8pDDKy12hz.png",
      title:"Static Jewellery website",
      tech:"Html,Tailwind css,Vue js",
      git:"https://github.com/nazmul910/e-com-juwellery",
      live:"https://e-shop-by-nazmul.netlify.app/"
    },
    {
      id:3,
      url:"public/image/projectImage/project2.jpg",
      title:"E-com website",
      tech:"Html,Css,JavaScript",
      git:"https://github.com/nazmul910/Ecommarce",
      live:"https://nazmul910.github.io/Ecommarce/"
    },

  ]
})

const project = ref(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(() =>{
  gsap.from(project.value,{
 duration:4,
 translateX:-150,
 opacity:0,
 delay:1,
 scrollTrigger:{
   scroller:"body",
   trigger:"#Project",
   scrub:true,
   start:"top 40%",
   end:"top 15%"

 }
});
})

</script>

<template>
<section class=" bg-Primary" id="Project">
  <section class="md:py-8 container xs:p-4 mx-auto xl:px-16">
    <h1 class=" text-white font-cormorant xs:text-5xl xs:mb-8 md:py-10 xl:text-8xl ">My Complete Project</h1>
    <div  class="grid md:grid-cols-2 xl:grid-cols-3 maincard place-items-center xs:px-4 sm:px-10 xs:gap-7 md:gap-12 pb-10">

      <div ref="project" v-for="details in state.detail" :key="details.id" class="max-w-sm card border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" :src="details.url" alt="" />
        </a>
        <div class="p-5 minic">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold font-robotoS  ">{{details.title}}</h5>
          </a>
          <p class="mb-3 font-cormorant text-2xl text-gray-700 dark:text-gray-400"> {{details.tech}}</p>
          <div class="flex justify-between">
            <a :href="details.live" target="_blank" class="inline-flex main items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Live link
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 arrow " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a :href="details.git" target="_blank" class="flex git justify-center gap-x-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Github <i class="icon2 pi pi-github"></i>
            </a>
          </div>
        </div>


      </div>

    </div>
  </section>
</section>
</template>
<style scoped>

.arrow{
  display: none;
  transition: 3s ease-in;

}
.git svg{
  background-color: white;
  border-radius: 50%;
}
.main{
  transition: 3s ease-in;
  z-index: 3;
  position: relative;
}
.main:hover .arrow{
  display: block;
  rotate: 330deg;
  transition: all 1s ease-in-out;

}

.card{
  position: relative;
  transition: .5s;
  z-index: 100;
  z-index: 1;
  background-color: white;

}

.minic{
  z-index: 1;
  transition: .3s ease-in-out;
}

.card:hover .minic{
  background: rgb(99, 98, 98);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

}

.card h5{
  color: rgba(0, 0, 0, 0.742);

}

.card:hover {

  z-index: 3;

}
.card:hover p{
  color: white;
  z-index: 3;
}
.card:hover h5{
  color: white;
  z-index: 3;
}

.card::before{
  content: '';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 20px;
  border-radius: 5px;
  z-index: -1;
  position: absolute;

  transform: rotate(0deg);
  transition: .4s ease-in-out;
}
.card:hover::before{

  content: '';
  z-index: -1;

  top: 0;
  left: 20px;
  background-color: #1b1c24;
  transform: rotate(5deg);
}


</style>
