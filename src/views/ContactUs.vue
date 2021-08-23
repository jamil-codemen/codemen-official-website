<template>
    <div class="bradclumb relative py-32">     
        <div class="bg-center bg-gray-800"></div>       
            <img src="../assets/images/contact-bg.jpg" alt="image1" class="object-cover w-full h-full absolute top-0 left-0">
            <div class="container relative z-10 mx-auto md:px-6 px-4 flex flex-wrap items-center justify-center">
            <div class="slide-content flex sm:text-left justify-center 2xl:w-1/3 xl:w-2/3 sm:w-1/2 w-ful sm:mt-0 mt-32">
                <div class="">
                    <nav class="">
                        <ol class="breadcrumb flex flex-wrap justify-center font-medium text-xl">
                            <li class="breadcrumb-item text-white"><a href="index.html">Home</a></li>
                            <span class="px-2 text-white">/</span>
                            <li class="breadcrumb-item text-green-500  active:text-green-500 " aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                    <h1 class="md:leading-tight title md:text-7xl text-4xl font-black text-white mt-1.5">
                        Contact Us
                    </h1>                    
                </div>
            </div>
        </div>
    </div>

     <section id="platform" class="md:px-24 px-0 py-24">
        <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
            <div class="flex flex-wrap">
                <div class="lg:w-2/3 md:1/2 w-full pr-6">
                    <div class="flex flex-wrap sm:justify-start justify-center mb-6">
                        <p class="top-content uppercase text-green-500 font-bold text-lg">Send a message</p>
                    </div>
                    <h1 class="md:leading-tight title md:text-5xl text-4xl font-black text-gray-700 mt-1.5">
                        Get in <span class="prm-color rounded  text-white px-2 pb-3">Touch</span>
                    </h1>
                    <p class="mt-10 text-gray-700 text-xl">We will respond to your message as soon as possible.</p>
                    <div class="w-full mt-16">
                        <form action="php/form.php" id="contact_form" class="ct_form">
                            <div class="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                <div class="">
                                    <input type="text" name="name" class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none" placeholder="Name">
                                </div>
                                <div class="">
                                    <input type="email" name="email" class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none" placeholder="Email">
                                </div>
                                <div class="">
                                    <input type="text" name="phone" class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none" placeholder="Phone">
                                </div>
                                <div class="">
                                    <input type="text" name="subject" class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none" placeholder="Subject">
                                </div>
                            </div>
                            <div class="col-12 mt-6">
                                <textarea rows="6" name="message" class="rounded bg-green-50 px-4 py-4 w-full border border-green-50 focus:border-green-200 focus:outline-none" placeholder="Message"></textarea>
                            </div>
                            <button class="py-4 pl-8 pr-2 rounded mt-10 sm:w-52 w-full hover:bg-gray-900 bg-green-500 font-bold text-white items-center">
                                <a class="mr-6 md:text-lg text-md uppercase leading-8" herf="javascript:;">Submit</a>                            
                            </button>
                        </form>
                    </div>
                </div>                                   
                <div class="lg:w-1/3 md:1/2 w-full">
                    <div class="mt-28">
                        <div class="contacts">
                            <h4 class="text-3xl font-semibold">Example Inc.</h4>
                            <p class="mt-6 text-gray-700 text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="mt-4 text-gray-700 text-base font-normal">Curabitur convallis, diam a egestas iaculis, neque lorem interdum felis, in viverra lacus tortor in leo.</p>
                            <ul class="mt-12">
                                <li class="flex items-center mt-6">
                                    <a href="#" class="bg-green-100 h-12 w-12 text-center rounded-full">
                                        <i class="fas fa-envelope font-bold text-2xl  mt-3 text-green-700"></i>                                        
                                    </a>
                                    <p class="ml-4 font-medium text-green-700 -mt-2.5 text-xl">hello@example.com</p>
                                </li>
                                <li class="flex items-center mt-6">
                                    <a href="#" class="bg-green-100 h-12 w-12 text-center rounded-full">
                                        <i class="fas fa-envelope font-bold text-2xl  mt-3 text-green-700"></i>                                        
                                    </a>
                                    <p class="ml-4 font-medium text-green-700 -mt-2.5 text-xl">hello@example.com</p>
                                </li>
                                <li class="flex items-center mt-6">
                                    <div>
                                        <a href="#" class="bg-green-100 h-12 w-12 text-center rounded-full inline-block">
                                            <i class="fas fa-map-marker-alt font-bold text-2xl mt-3 text-green-700"></i>                                        
                                        </a>
                                    </div>
                                    <p class="ml-4 font-medium text-green-700 -mt-2.5 text-xl">4th Floor, 17 R Amin Tower, KDA Avenue Khulna-9100, Bangladesh.</p>
                                </li>
                                <li class=" mt-12 bg-green-100 text-center w-full hover:bg-green-200">
                                    <a target="_blank" href="https://www.google.com/maps/place/Codemen/@22.818397,89.5535612,20.75z/data=!4m19!1m13!4m12!1m4!2m2!1d89.5292919!2d22.8630504!4e1!1m6!1m2!1s0x39ff8fff093a85eb:0xf4d367ff053cf71c!2scodemen!2m2!1d89.5535624!2d22.8184363!3m4!1s0x39ff8fff093a85eb:0xf4d367ff053cf71c!8m2!3d22.8184363!4d89.5535624" class="text-green-700 font-semibold block  p-4">VIEW MAP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                                                      
                </div>
            </div>
        </div>
    </section>
    <!--=================================================
         End Contact Us section
    ================================================= -->



    <!--=================================================
         Start Promotional section
    ================================================= -->
    <section id="our_team" class="md:px-24 px-0 pb-24">
        <div class="container max-w-screen-xl mx-auto md:px-6 bg-green-200 py-14 my-4 rounded">
            <div class="text-center">
                <h2 class="py-6 font-bold text-4xl">Codemen unlocks your financial potential</h2>
                <p class="py-2 text-gray-700 text-xl">Through our platform, you can access a network of APIs, banks and other financial institutions easily. Ready to start your journey with us?</p>
                <div class="mt-4">
                    <button class="hover:bg-gray-900 py-4 pl-8 pr-2 rounded justify-center  sm:w-52 w-full bg-green-500 font-bold text-white items-center">
                        <a class="mr-6 md:text-lg leading-8" herf="javascript:;">Get Started</a>                            
                    </button>
                </div>  
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'ContactUs'
}
</script>