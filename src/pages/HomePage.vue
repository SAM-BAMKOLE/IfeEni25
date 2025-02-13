<script setup lang="ts">
import HeroComponent from "../components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import SliderComponent from "../components/SliderComponent.vue";
import StorySectionComponent from "../components/StorySectionComponent.vue";
// import MapComponent from "../components/MapComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
// assets
import shoot1 from "/photoshoot-1.jpg";
import shoot2 from "/photoshoot-2.jpg";
import shoot3 from "/photoshoot-3.jpg";

import ring from "../assets/wedding-ring.png";
import photoshoot2 from "/photoshoot-2.jpg";

import FbIcon from "../components/icons/FbIcon.vue";
import IgIcon from "../components/icons/IgIcon.vue";
import { ref } from "vue";
// --------
const topSlides = [shoot1, shoot2, shoot3, shoot2];
const goldColor = "#eab308";
const form = ref<{ email: string }>({ email: "" });
function encode(data: Object) {
    return Object.keys(data) //@ts-ignore
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
}
const handleSubmit = () => {
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "stream", ...form }),
    })
        .then(() => alert("Email submitted!"))
        .catch(() => alert("Email not sent!"));
};
</script>

<template>
    <HeroComponent />
    <section class="px-5 py-10 max-w-4xl mx-auto">
        <img :src="ring" alt="Ifeoluwa weds Enitan" class="w-[10rem] md:max-w-xl mx-auto mb-10" />
        <p class="text-center mb-3">
            The Families of <b>PST & PST (MRS) SAMUEL AINASU</b> &
            <b>LATE ALH. GBENGA & MRS SOMUYIWA</b> specially invite you to the HOLY MATRIMONY of
            their beloved chhildren
        </p>
        <h5 class="font-semibold text-xl text-center text-secondary">SEYON IFEOLUWA AINASU &</h5>
        <h5 class="font-semibold text-xl text-center text-secondary">ENITAN SOMUYIWA</h5>
        <p class="text-center mt-3 mb-5">
            <b class="p-3 py-1 rounded-md bg-accent text-white mr-2">DATE:</b>1ST March 2025
        </p>
        <div class="aspect-video mx-auto object-cover overflow-hidden">
            <img
                :src="photoshoot2"
                alt="Pst Enitan and Miss Ifeoluwa"
                class="-mt-5 md:-mt-10 lg:-mt-20" />
        </div>
    </section>
    <SliderComponent>
        <swiper-slide
            v-for="(slide, index) in topSlides"
            :key="index"
            class="w-full aspect-square overflow-hidden">
            <img :src="slide" class="w-full" />
        </swiper-slide>
    </SliderComponent>
    <div class="max-w-4xl mx-auto">
        <AboutComponent />
        <section class="relative">
            <div class="px-5 py-10">
                <h3
                    class="text-2xl md:text-3xl lg:text-4xl text-center font-accent font-bold text-secondary mb-3">
                    Wedding Details
                </h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div class="bg-accent rounded-md px-5 py-6">
                        <div class="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                :stroke="goldColor"
                                class="size-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <p class="capitalize text-white text-center mt-5">
                            <b class="uppercase">RCCG, SEAT OF MERCY PARISH,</b> Abule, Nepa
                            Quarters, cele bustop iyana-Era, Ijanikin, Lagos state.
                        </p>
                    </div>
                    <div class="bg-accent rounded-md px-5 py-6">
                        <div class="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                :stroke="goldColor"
                                class="size-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        </div>
                        <p class="capitalize text-white text-center mt-5">
                            <b class="uppercase">sat, 1st</b> March 2025
                        </p>
                    </div>
                    <div class="bg-accent rounded-md px-5 py-6">
                        <div class="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                :stroke="goldColor"
                                class="size-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <p class="capitalize text-white text-center mt-5">
                            <b class="uppercase">11am</b>
                        </p>
                    </div>
                    <div class="bg-accent rounded-md px-5 py-6">
                        <h6 class="text-center uppercase" :style="'color:' + goldColor">
                            <b>Reception</b>
                        </h6>
                        <p class="capitalize mt-5 text-white text-center">
                            The turning point parish (TPP), MORE blessing BUSTOP, along ajangbadi
                            road, ojo, lagos state.
                        </p>
                    </div>
                    <div class="bg-accent rounded-md px-5 py-6">
                        <h6 class="text-center uppercase" :style="'color:' + goldColor">
                            <b>Colour Code</b>
                        </h6>
                        <ul class="mt-5 text-center">
                            <li class="capitalize text-white">
                                Navy Blue
                                <div
                                    class="rounded-full inline-block bg-blue-900 w-2 h-2 ml-2"></div>
                            </li>
                            <li class="capitalize text-white">
                                Fuchsia Pink
                                <div
                                    class="rounded-full inline-block bg-secondary w-2 h-2 ml-2"></div>
                            </li>
                            <li class="capitalize text-white">
                                White
                                <div
                                    class="rounded-full inline-block bg-primary w-2 h-2 ml-2"></div>
                            </li>
                            <li class="capitalize text-white">
                                Gold
                                <div
                                    class="rounded-full inline-block bg-yellow-500 w-2 h-2 ml-2"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-accent rounded-md px-5 py-6">
                        <h6 class="text-center uppercase" :style="'color:' + goldColor">
                            <b>rsvp</b> <span class="text-sm">(Chat/Call)</span>
                        </h6>
                        <ul class="mt-5 text-center">
                            <li class="text-white mb-2">
                                <a href="tel:+234-701-618-0398"
                                    ><b>Thonna:</b> <span>07016180398</span></a
                                >
                            </li>
                            <li class="text-white mb-2">
                                <a href="tel:+234-815-921-0155"
                                    ><b>Grace:</b> <span>08159210155</span></a
                                >
                            </li>
                            <li class="text-white">
                                <a href="tel:+234-706-480-8113"
                                    ><b>Yeside:</b> <span>07064808113</span></a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <StorySectionComponent />
    </div>
    <section class="px-5 py-10 gradient mb-10">
        <h3 class="text-2xl md:text-3xl lg:text-4xl text-center font-accent font-bold mb-2">
            Gifts / Donations
        </h3>
        <p class="text-center md:mb-3">
            To support our wedding, kindly make use of the account details below:
        </p>
        <div class="grid md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2">
            <div class="p-5 text-center">
                <p class="capitalize italic text-lg mb-2 text-yellow-500"><b>Naira account</b></p>
                <p><b>Bank name:</b> Opay</p>
                <h6 class="text-xl"><b>Account number:</b> 7010798355</h6>
                <p><b>Account name:</b> Enitan Somuyiwa</p>
            </div>
            <!-- <div class="p-5 text-center">
                <p><b>Bank name:</b> Lead Bank</p>
                <h6 class="text-xl"><b>Account number:</b> 214154468215</h6>
                <p><b>Account name:</b>Christiana Ainasu</p>
                <p><b>Narration:</b> IfehEni25</p>
            </div> -->
            <div class="p-5 text-center">
                <p class="capitalize italic text-lg mb-2 text-yellow-500"><b>Dollar Account</b></p>
                <p><b>Bank name:</b> Lead Bank (Cleva)</p>
                <h6 class="text-xl"><b>Account number:</b> 214154468215</h6>
                <h6 class=""><b>Routing number:</b> 101019644</h6>
                <p><b>Account name:</b> Christiana Ainasu</p>
                <p><b>Account type:</b> Personal Checking</p>
                <!-- <p>
                    <b>Account address:</b> 9450 Southwest Gemini Drive, Beaverton, OR, 97008, USA
                </p> -->
                <p><b>Narration:</b> IfehEni25</p>
            </div>
        </div>
    </section>
    <div class="max-w-4xl mx-auto">
        <section class="px-5 py-10">
            <h3
                class="text-2xl md:text-3xl lg:text-4xl text-center font-accent font-bold text-secondary mb-3">
                Contact us
            </h3>
            <p class="text-center">Email address or phone number these addresses for questions:</p>
            <ul class="text-center space-y-2 mt-5">
                <li><b>Email:</b><a href="mailto:ifeheni@gmail.com">ifeheni@gmail.com</a></li>
                <li><b>Phone:</b><a href="tel:+234-703-832-9338">07038329338</a></li>
                <li><b>Phone:</b><a href="tel:+234-701-079-8355">07010798355</a></li>
                <li class="flex gap-2 justify-center items-center">
                    <span><IgIcon size="1rem" /></span>@seyonainasu
                </li>
                <li class="flex gap-2 justify-center items-center">
                    <span><FbIcon size="1rem" /></span>Enitan Somuyiwa Paul
                </li>
            </ul>
            <div class="">
                <h5 class="text-xl mt-10 text-center"><b>Hashtag</b> #IfeEni'25</h5>
            </div>
        </section>
        <section class="px-5 py-10">
            <h4
                class="text-xl md:text-2xl lg:text-3xl text-center font-accent font-bold text-secondary mb-3">
                Direction for Church
            </h4>
            <p class="text-center mb-5">
                From Iyana Era, take Maruwa to Abule. Alight at Cele Bus-stop. Walk down the street,
                the church - <b>"Seat of Mercy Parish"</b> is on the right.
            </p>
            <h4
                class="text-xl md:text-2xl lg:text-3xl text-center font-accent font-bold text-secondary mb-3">
                Direction for Reception
            </h4>
            <p class="text-center">
                From Iyana Era, take Babalola, then from there, take Ajangbadi or Alaba. Alight at
                <b>MORE Blessing</b>.
            </p>
            <p class="uppercase font-semibold text-center">or</p>
            <p class="text-center">
                From Mile two/Iyana Ipaja/Igboelerin axis, take a bus to Okoko, then from there take
                Ajangbadi, alight at <b>MORE blessing</b>.
            </p>
        </section>
        <section class="px-5 py-10">
            <h4 class="text-lg md:text-xl lg:text-2xl text-center font-bold text-accent mb-3">
                Want to stream the wedding LIVE?
            </h4>
            <p class="text-center mb-5">
                Please input your email address below. The link to stream the wedding will be sent
                to you a few days to the wedding.
            </p>
            <form @submit.prevent="handleSubmit" name="stream" method="post" netlify>
                <p><input type="hidden" name="form-name" value="stream" /></p>
                <div class="flex items-center justify-center">
                    <input
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        class="input input-bordered placeholder:text-xs"
                        v-model="form.email"
                        required />
                    <button class="btn btn-secondary">Send</button>
                </div>
            </form>
        </section>
    </div>
    <!-- <MapComponent /> -->
    <FooterComponent />
</template>

<style scoped></style>
