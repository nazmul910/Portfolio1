<script setup>

import 'primeicons/primeicons.css';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";




const WEB3FORMS_ACCESS_KEY = "571a38de-8510-4319-bdaa-fbac2dfb6f9f";
const name = ref("")
const email = ref("")
const phone = ref("")
const subject = ref("")
const message = ref("")



const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
  name.value= ''
  email.value = ''
  phone.value = ''
  subject.value = ''
  message.value = ''

}

const isVisible = ref(false)


  const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

    const closeF = () =>{
      isVisible.value = false
    }



  gsap.registerPlugin(ScrollTrigger);

onMounted(() =>{
  gsap.to("#fullscreen",{
    height:0,
    duration:.8,
    delay:.2

  });
  gsap.to("#white",{
    height:0,
    duration:.8,
  })
})

</script>


<template>
  <div class="hidden xl:block" id="fullscreen">
    <div id="white"></div>
  </div>



<section class="section bg-Primary  xl:ps-20 2xl:ps-40 " id="Home">

  <div>
    <span class="one"></span>
    <span class="two"></span>
    <span class="three"></span>
    <span class="bone"></span>
    <span class="btwo"></span>
    <span class="bthree"></span>

    <nav class=" ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#fff" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50">
      <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
    </svg>
      <span class="self-center text-4xl font-cormorant whitespace-nowrap text-white">Nazmul</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

    <button type="button" class="text-white Hire hidden md:block bg-Primary  font-cormorant rounded-full text-xl md:px-7 xl:px-12 py-3 text-center " @click="toggleVisibility" >Hire Me </button>

      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="navlink flex flex-col font-medium  p-4 text-tsecendary md:p-0 mt-4 md:space-x-10 lg:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="#Home" class="block py-2 px-3 md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#skill" class="block py-2 px-3 md:p-0">Skills</a>
      </li>
      <li>
        <a href="#Project" class="block py-2 px-3 md:p-0 ">Project</a>
      </li>
      <li>
        <a href="#Contact" class="block py-2 px-3 md:p-0 ">Contact</a>

      </li>

    </ul>
  </div>
  </div>
    </nav>

    <div class="container flex flex-col-reverse lg:mt-12 mx-auto lg:grid lg:grid-cols-2 2xl:ps-24 text-white 2xl:ms-0 px-7">
      <div class="xs:mt-5 px-2 lg:px-0 lg:mt-0">
       <div class="xs:space-y-3 xl:space-y-12">
        <h1 class="font-cormorant xs:text-4xl md:text-[70px] lg:text-5xl">
          Hello! I'm
        </h1>
        <h1 class="font-cormorant xs:text-5xl md:text-[100px] lg:text-7xl">
          Nazmul Hasan
        </h1>
       </div>
       <div class="xs:mt-5">
        <h1 class="text-tsecendary font-thin text-xl xl:text-3xl">Front-End Developer</h1>
       </div>
       <div class="lg:mt-20 svg flex my-10">
        <a href="https://drive.google.com/file/d/1gGHgMBXKmyWq73A4mTlEqplPRDRCujZh/view?usp=sharing" target="_blank" class="text-white flex gap-3 justify-center items-center border border-tsecendary py-3 px-6 xl:px-16 xl:py-7 rounded-full hover:bg-tsecendary duration-1000 text-md ">Get Resume <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fafafa" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg></a>

       </div>
      </div>


      <div class="flex xs:justify-center  lg:justify-start xl:justify-center ">
        <div class=" xs:w-36 sm:w-60 md:w-72 lg:-ms-20 xl:w-full image-wrapper">
          <img src="../../../../public/image/profile1.png" alt="" class="xl:w-96 img img2">

          <div class="icon grid">
              <a href="https://www.linkedin.com/in/ni-nazmul-158098297/"  target="_blank"><i class="icon1 pi pi-linkedin"></i></a>
              <a href="https://github.com/nazmul910"  target="_blank"><i class="icon2 pi pi-github"></i></a>
              <a href="https://www.facebook.com/ni.nazmul.58" target="_blank"><i class="icon3 pi pi-facebook"></i></a>
              <a href=""><i class="icon4 pi pi-instagram"></i></a>
          </div>
          </div>

      </div>
    </div>


  </div>

</section>

<section class="">
  <div v-if="isVisible" class=" backdrop-blur-md w-full fixed cForm top-0">

    <div class="grid lg:grid-cols-2 gap-5 p-20 relative ">
      <i  @click="closeF" class="pi pi-times bg-tsecendary px-4 py-3 text-white fixed top-0 right-0" style="font-size: 1.5rem"></i>
      <div class=" space-y-12 mb-10 xs:hidden lg:block">
        <p class="text-tsecendary border-l-2 px-4 font-cormorant text-2xl ">Get In Touch</p>



        <h1 class="text-white font-cormorant xs:text-[40px] md:text-5xl xl:text-7xl">If you have any porject or need help. Contact me</h1>
        <p class="text-tsecendary font-robotoS text-md leading-7 xs:hidden lg:block">Lorem Ipsum is simply dummy text of the printing and typesetting emndustry lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print only five centuries, but also the leap into electronic.</p>
        <div class="flex justify-between pe-12 xl:justify-start xl:space-x-10">
          <a href="https://www.linkedin.com/in/ni-nazmul-158098297/" target="_blank"><i class=" pi pi-linkedin  p-4 border rounded-full bg-white"></i></a>
          <a href="https://github.com/nazmul910"  target="_blank"><i class=" pi pi-github  p-4 border rounded-full bg-white"></i></a>
          <a href="https://www.facebook.com/ni.nazmul.58" target="_blank" ><i class=" pi pi-facebook  p-4 border rounded-full bg-white"></i></a>
          <a href="" ><i class=" pi pi-instagram  p-4 border rounded-full bg-white"></i></a>
        </div>
      </div>
      <form  @submit.prevent="submitForm" class="">

        <div class="grid space-y-8 ">
          <div class="gird space-y-12">
            <div class="grid gap-y-8 xl:space-x-2 xl:flex xl:justify-evenly">
              <input type="text" class="xl:px-8 focus:border-red-50  text-2xl xs:font-thin bg-secendary text-white" v-model="name" placeholder="Name" required>
              <input type="email" class="xl:px-8 focus:border-red-50 text-2xl xs:font-thin bg-secendary text-white" v-model="email" placeholder="Email" required>
            </div>
            <div class="grid  gap-y-8 xl:space-x-2 xl:flex xl:justify-evenly">
              <input type="text" class="xl:px-8 focus:border-red-50 text-2xl xs:font-thin bg-secendary text-white " v-model="phone" placeholder="Phone" required>
              <input type="text" class="xl:px-8 focus:border-red-50 text-2xl xs:font-thin bg-secendary text-white" v-model="subject" placeholder="Subject" required>
            </div>

          </div>
          <div class="grid">
            <textarea rows="10" class=" xl:w-full text-xl text-white bg-secendary hover:border-white border-gray-300 " required v-model="message" placeholder="Write your thoughts here..."></textarea>


            <div class="flex xs:mt-16 lg:mb-16 xl:mt-10">
              <input type="submit" value="Submit Message" class="text-white xs:text-xl xl:text-2xl font-cormorant border xs:py-3 xs:px-9 xl:py-4 xl:px-7 rounded-full hover:bg-secendary transition duration-200 hover:border-none hover:duration-150 hover:transition" >
            </div>
          </div>
        </div>

      </form>

    </div>
  </div>
</section>

</template>

<style scoped>

#fullscreen{

height: 100%;
 width: 100%;
    background:gray;
    z-index: 999;
    position: absolute;


}
#white{

 bottom: 0;
 height: 100vh;
 width: 100%;
 background-color:#2A2C39;
}


.section{
  height: 100vh;
  overflow: hidden;
}

ul li a{
  transition: ease-in-out .5s;
}

ul li a:hover{
  color: white;

}

ul li{
  position: relative;

}

.svg svg{
  width: 20px;
  height: 20px;

}

.navlink li a:hover::after{
  position: absolute;
  content: '';
  top: 50%;
  transform: translate(-50%, -50%) scale(.9);
  left: 50%;
  width: 120px;
  height: 60px;

  background-image: url(../../../image/logo1.png);
  transition: all .4s  ease-in-out;


}


.Hire{
  border: #858792 1px solid;
  transition: .3s ease-in-out;
}
.Hire:hover{
  background-color: #2A2C39;
}


.section{
  position: relative;
  overflow-x: hidden;
}
.one::after{
  content: '';
  width: 200px;
  height: 200px;
  position: absolute;
  left: -100px;
  top: -100px;

  border: 1px solid #858792;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;

}
.two::after{
  content: '';
  width: 300px;
  height: 300px;
  position: absolute;
  left: -160px;
  top: -160px;
  border: 1px solid #858792;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;

}
.three::after{
  content: '';
  width: 400px;
  height: 400px;
  position: absolute;
  left: -215px;
  top: -215px;
  border: 1px solid #858792;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;

}
.bone::after{
  content: '';
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -100px;
  left: -100px;
  border: 1px solid #858792;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;

}
.btwo::after{
  content: '';
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: -160px;
  left: -160px;
  border: 1px solid #858792;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;

}
.bthree::after{
  content: '';
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: -210px;
  left: -210px;
  border: 1px solid #858792;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;

}


.image-wrapper {
  position: relative;
  display: inline-block;
  z-index: 990;
}

.image-wrapper img {
  display: block;

  height: auto;
  z-index: 999;
}

.icon{
  position: absolute;
  top: 0px;
  right: 300px;
}
.icon i{
  font-size: 25px;
}
.icon1{
  position: absolute;
  top: 200px;
  right: -134px;
  padding: 20px;
  border-radius: 50%;
  border:#858792 1px solid;
  background-color: #252734;
  transition: .3s ease-in-out;
}
.icon1:hover{
  background-color: #fff;
  color: black;
}
.icon2{
  position: absolute;
  top: 100px;
  padding: 20px;
  right: -40px;
  border-radius: 50%;
  border:#858792 1px solid;
  background-color: #252734;
  transition: .3s ease-in-out;
}
.icon2:hover{
  background-color: #fff;
  color: #252734;
}
.icon3{
  position: absolute;
  top: 340px;
  padding: 20px;
  right: -169px;
  border-radius: 50%;
  border:#858792 1px solid;
  background-color: #252734;
  transition: .3s ease-in-out;
}
.icon3:hover{
  background-color: #fff;
  color: #252734;
}
.icon4{
  position: absolute;
  top: 490px;
  padding: 20px;
  right: -100px;
  border-radius: 50%;
  border:#858792 1px solid;
  background-color: #252734;
  transition: .3s ease-in-out;
}
.icon4:hover{
  background-color: #fff;
  color: #252734;
}



.image-wrapper::after {
  content: "";
  position: absolute;
  top: 100px;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  width: 400px;
  height: 500px;
  border: #858792 1px solid;
  border-top-right-radius: 290px;
  border-bottom-right-radius: 290px;
}
.image-wrapper::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 60%;
  z-index: -1;
  transform: translateX(-50%);
  width: 395px;
  height: 630px;
  border: #858792 1px solid;
  border-top-right-radius: 324px;
  border-bottom-right-radius: 347px;
}

.cForm{
  z-index: 999;
}




@media screen and (max-width: 1200px ) {
  .section{
    position: relative;
    overflow-x: hidden;
  }
  .one::after{
    display: none;

  }
  .two::after{
    display: none;

  }
  .three::after{
    display: none;

  }
  .bone::after{

    display: none;

  }
  .btwo::after{
    display: none;

  }
  .bthree::after{
    display: none;

  }


}


@media screen and (min-width:320px) {

  .section{
    height: auto;
  }

  .image-wrapper::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 130px;
    z-index: -1;
    transform: translateX(-50%);
    width: 140px;
    height: 230px;
    border: #858792 1px solid;
    border-top-right-radius: 290px;
    border-bottom-right-radius: 290px;
  }
  .image-wrapper::before {
    display: none;
  }
  .icon i{
    font-size: 12px;
  }

  .icon2{
    position: absolute;
    top: 15px;
    padding: 10px;
    right: -310px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon1{
    position: absolute;
    top: 65px;
    padding: 10px;
    right: -360px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon3{
    position: absolute;
    top: 135px;
    padding: 10px;
    right: -370px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon4{
    position: absolute;
    top: 195px;
    padding: 10px;
    right: -340px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }

}

@media screen and (min-width:768px) {



  .image-wrapper::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 300px;
    z-index: -1;
    transform: translateX(-50%);
    width: 280px;
    height: 450px;
    border: #858792 1px solid;
    border-top-right-radius: 290px;
    border-bottom-right-radius: 290px;
  }
  .icon i{
    font-size: 25px;
  }

  .icon2{
    position: absolute;
    top: 15px;
    padding: 15px;
    right: -310px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon1{
    position: absolute;
    top: 95px;
    padding: 15px;
    right: -425px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon3{
    position: absolute;
    top: 235px;
    padding: 15px;
    right: -478px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon4{
    position: absolute;
    top: 365px;
    padding: 15px;
    right: -440px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }

}
@media screen and (min-width:1024px) {



  .image-wrapper::after {
    content: "";
    position: absolute;
    top: 80px;
    left: 280px;
    z-index: -1;
    transform: translateX(-50%);
    width: 220px;
    height: 380px;
    border: #858792 1px solid;
    border-top-right-radius: 290px;
    border-bottom-right-radius: 290px;
  }
  .icon i{
    font-size: 20px;
  }

  .icon2{
    position: absolute;
    top: 70px;
    padding: 15px;
    right: -310px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon1{
    position: absolute;
    top: 140px;
    padding: 15px;
    right: -390px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon3{
    position: absolute;
    top: 250px;
    padding: 15px;
    right: -425px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon4{
    position: absolute;
    top: 365px;
    padding: 15px;
    right: -380px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .image-wrapper::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 300px;
    display: block;
    z-index: -1;
    transform: translateX(-50%);
    width: 295px;
    height: 490px;
    border: #858792 1px solid;
    border-top-right-radius: 324px;
    border-bottom-right-radius: 347px;
  }

}
@media screen and (min-width:1280px) {



  .image-wrapper::after {
    content: "";
    position: absolute;
    top: 120px;
    left: 340px;
    z-index: -1;

    transform: translateX(-50%);
    width: 360px;
    height: 480px;
    border: #858792 1px solid;
    border-top-right-radius: 290px;
    border-bottom-right-radius: 290px;
  }
  .image-wrapper::before {
    content: "";
    position: absolute;
    top: 45px;
    left: 390px;
    z-index: -1;
    transform: translateX(-50%);
    width: 417px;
    height: 633px;
    border: #858792 1px solid;
    border-top-right-radius: 324px;
    border-bottom-right-radius: 347px;
  }
  .icon i{
    font-size: 25px;
  }

  .icon2{
    position: absolute;
    top: 100px;
    padding: 20px;
    right: -110px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon1{
    position: absolute;
    top: 200px;
    padding: 20px;
    right: -235px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon3{
    position: absolute;
    top: 360px;
    padding: 20px;
    right: -275px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon4{
    position: absolute;
    top: 500px;
    padding: 20px;
    right: -205px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }


}

@media screen and (min-width: 1440px) {
  .icon i{
    font-size: 25px;
  }

  .icon2{
    position: absolute;
    top: 115px;
    padding: 20px;
    right: -100px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon1{
    position: absolute;
    top: 200px;
    padding: 20px;
    right: -195px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon3{
    position: absolute;
    top: 360px;
    padding: 20px;
    right: -235px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon4{
    position: absolute;
    top: 500px;
    padding: 20px;
    right: -160px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
}
@media (min-width: 1536px) {
  .\32xl\:ms-0 {
      margin-inline-start:auto;
  }
  .icon2{
    position: absolute;
    top: 105px;
    padding: 20px;
    right: -5px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon1{
    position: absolute;
    top: 200px;
    padding: 20px;
    right: -103px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon3{
    position: absolute;
    top: 360px;
    padding: 20px;
    right: -145px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
  .icon4{
    position: absolute;
    top: 500px;
    padding: 20px;
    right: -70px;
    border-radius: 50%;
    border:#858792 1px solid;
    background-color: #252734;
    transition: .3s ease-in-out;
  }
}

</style>
