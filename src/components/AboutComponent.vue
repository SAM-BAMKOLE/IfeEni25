<script setup lang="ts">
import groom from "/groom.png";
import bride from "/bride.jpg";
</script>

<template>
    <section class="px-5 py-10">
        <div class="lg:grid grid-cols-2 gap-10 items-center">
            <!-- <h4 class="font-[800] text-2xl mb-5 text-accent capitalize">About the groom</h4> -->
            <img
                :src="groom"
                alt="Pastor Enitan Somuyiwa's picture"
                class="w-full rounded-xl aspect-[16/11] object-cover bg-zinc-900" />
            <div>
                <span class="btn btn-sm uppercase mt-5 rounded-full bg-accent text-white"
                    >The groom</span
                >
                <p class="my-2 mb-4 text-[1.2rem] text-secondary font-semibold uppercase">
                    Enitan Somuyiwa
                </p>
            </div>
        </div>
    </section>
    <section class="px-5 py-10">
        <div class="lg:grid grid-cols-2 gap-10 items-center">
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
            </div>
            <img
                :src="bride"
                alt="The Bride's picture"
                class="w-full rounded-xl aspect-[16/11] object-cover hidden lg:block" />
        </div>
    </section>
</template>
