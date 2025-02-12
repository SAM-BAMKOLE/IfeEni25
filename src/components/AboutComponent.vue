<script setup lang="ts">
import groom from "/groom.png";
import bride from "../assets/bride.jpeg";
import FbIcon from "./icons/FbIcon.vue";
import IgIcon from "./icons/IgIcon.vue";
</script>

<template>
    <section class="px-5 py-10">
        <div class="lg:grid grid-cols-2 gap-10">
            <!-- <h4 class="font-[800] text-2xl mb-5 text-accent capitalize">About the groom</h4> -->
            <img
                :src="groom"
                alt="Pastor Enitan Somuyiwa's picture"
                class="w-full rounded-xl aspect-[16/11] object-cover bg-amber-950" />
            <div>
                <span class="btn btn-sm uppercase mt-5 rounded-full bg-accent text-white"
                    >The groom</span
                >
                <p class="my-2 mb-4 text-[1.2rem] text-secondary font-semibold uppercase">
                    Enitan Somuyiwa
                </p>
                <p class="text-sm mb-2">
                    eu sint est id sit irure tempor culpa magna aute ipsum nostrud ullamco ullamco
                    eu incididunt eu tempor cillum est anim et veniam cupidatat sunt ullamco labore
                    magna enim qui et fugiat nulla laboris ut deserunt ullamco velit reprehenderit
                    deserunt labore est proident eu aute
                </p>
                <p class="text-sm mb-2">
                    eu sint est id sit irure tempor culpa magna aute ipsum nostrud ullamco ullamco
                    eu incididunt eu tempor cillum est anim et veniam cupidatat sunt ullamco labore
                    magna enim qui et fugiat nulla laboris ut deserunt ullamco velit reprehenderit
                    deserunt labore est proident eu aute
                </p>
                <div class="space-x-2">
                    <a class="btn btn-outline rounded-full btn-sm aspect-square" href="#">
                        <FbIcon />
                    </a>
                    <a class="btn btn-outline rounded-full btn-sm aspect-square" href="#">
                        <IgIcon />
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="px-5 py-10">
        <div class="lg:grid grid-cols-2 gap-10">
            <img
                :src="bride"
                alt="The Bride's picture"
                class="w-full rounded-xl aspect-[16/11] object-cover lg:hidden" />
            <div>
                <span class="btn btn-sm uppercase mt-5 rounded-full bg-accent text-white"
                    >The Bride</span
                >
                <p class="my-2 mb-4 text-[1.2rem] text-secondary font-semibold uppercase">
                    SEYON IFEOLUWA AINASU
                </p>
                <p class="text-sm mb-2">
                    eu sint est id sit irure tempor culpa magna aute ipsum nostrud ullamco ullamco
                    eu incididunt eu tempor cillum est anim et veniam cupidatat sunt ullamco labore
                    magna enim qui et fugiat nulla laboris ut deserunt ullamco velit reprehenderit
                    deserunt labore est proident eu aute
                </p>
                <p class="text-sm mb-2">
                    eu sint est id sit irure tempor culpa magna aute ipsum nostrud ullamco ullamco
                    eu incididunt eu tempor cillum est anim et veniam cupidatat sunt ullamco labore
                    magna enim qui et fugiat nulla laboris ut deserunt ullamco velit reprehenderit
                    deserunt labore est proident eu aute
                </p>
                <div class="space-x-2">
                    <a class="btn btn-outline rounded-full btn-sm aspect-square" href="#">
                        <FbIcon />
                    </a>
                    <a class="btn btn-outline rounded-full btn-sm aspect-square" href="#">
                        <IgIcon />
                    </a>
                </div>
            </div>
            <img
                :src="bride"
                alt="The Bride's picture"
                class="w-full rounded-xl aspect-[16/11] object-cover hidden lg:block" />
        </div>
    </section>
</template>
