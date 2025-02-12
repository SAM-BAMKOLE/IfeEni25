<script setup lang="ts">
// import heroCover from "../assets/photoshoot-1.jpg";
import BarIcon from "./icons/BarIcon.vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="w-full h-screen relative px-5 py-10 wavy-bottom overflow-hidden">
        <!-- <img :src="heroCover" class="w-full h-full object-cover absolute -z-20 left-0 top-0" /> -->
        <!-- <div class="bg-black w-full h-screen absolute -z-10 top-0 left-0"></div> -->
        <div
            class="w-full h-screen -z-10 bg-[url('/photoshoot-1.jpg'),linear-gradient(180deg,_#FF206AAA,_rgba(255,255,255,0.4))] bg-blend-overlay bg-no-repeat bg-center bg-cover absolute left-0 top-0"></div>

        <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1 btn-ghost text-primary"><BarIcon /></div>
            <ul
                tabindex="0"
                class="dropdown-content menu bg-base-100/10 rounded-box z-[1] w-52 p-2 shadow font-bold text-white">
                <li><RouterLink :to="{ name: 'send_donation' }">Give a Donation</RouterLink></li>
                <li>
                    <RouterLink :to="{ name: 'get_invitation' }">Get an Invitation Card</RouterLink>
                </li>
            </ul>
        </div>

        <div class="text-white mt-[30vh] mx-auto text-center">
            <h1
                class="text-[5rem] md:text-[6rem] lg:text-[7rem] font-[800] text-white leading-[0.9] text-shadow-2xl font-serif">
                IfeEni'<span class="text-secondary">25</span>
            </h1>
            <h2 class="btn btn-outline btn-sm mt-2 font-bold btn-base rounded-full">
                ~ 01/03/2025 ~
            </h2>
        </div>
    </div>
</template>
