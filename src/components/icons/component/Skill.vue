<script setup>
import { onMounted, reactive, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

 const states = reactive({
    skill:[
     {
       id:'1',
       url:'/image/skill/pngwing.com (4).png',
       name: 'html'
     },
     {
       id:'2',
       url:'/image/skill/pngwing.com (5).png',
       name: 'css'
     },
     {
       id:'3',
       url:'/image/skill/pngwing.com (3).png',
       name: 'JS'
     },
     {
       id:'4',
       url:'/image/skill/pngegg (3).png',
       name: 'Bootstrap'
     },
     {
       id:'5',
       url:'/image/skill/pngwing.com (6).png',
       name: 'Tailwind'
     },
     {
       id:'6',
       url:'/image/skill/pngegg (5).png',
       name: 'vue js'
     },
     {
       id:'7',
       url:'/image/skill/pngwing.com.png',
       name: 'gsap'
     },
     {
       id:'8',
       url:'/image/skill/flowbite.png',
       name: 'Flowbite'
     },
     {
       id:'9',
       url:'/image/skill/firebase.png',
       name: 'firebase'
     },
     {
       id:'10',
       url:'/image/skill/github.png',
       name: 'github'
     },
     {
       id:'11',
       url:'/image/skill/figma.png',
       name: 'figma'
     },
     {
       id:'12',
       url:'/image/skill/react.png',
       name: 'react'
     },
     {
       id:'13',
       url:'/image/skill/nodejs.png',
       name: 'Node Js'
     },
     {
       id:'14',
       url:'/image/skill/nextjs.png',
       name: 'Next Js'
     },

    ]
   })

const skill = ref(null);




onMounted(()=>{
 gsap.from(skill.value,{
 duration:4,
 scale:0,
 opacity:0,
 delay:2,
 scrollTrigger:{
   scroller:"body",
   trigger:"#skill",

   scrub:true,
   start:"top 75%",
   end:"top 35%"

 }
});



})



</script>

<template>
  <section id="skill" class=" bg-secendary ">
    <section>
      <section class="md:py-8 container mx-auto xl:px-16">
        <h1 class="skills text-white font-cormorant xs:text-5xl xs:py-10 text-center md:py-10 md:text-6xl border-b-2">My Skills</h1>

        <div ref="skill" class=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-y-8 xs:gap-y-4 xs:py-8 md:py-10">
          <div   v-for="state in states.skill" :key="state" class="skillss  xl:text-2xl font-thin text-white flex flex-col justify-center items-center">
            <img :src=state.url alt="" class="xl:h-[50px]  xl:w-[50px] xs:h-[40px] xs:w-[40px] object-contain">

            <p class="capitalize xl:text-xl my-1">{{ state.name }} </p>
          </div>

        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>


</style>
