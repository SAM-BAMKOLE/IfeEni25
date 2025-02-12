<script setup lang="ts">
import shoot from "/photoshoot-2.jpg";
</script>
<template>
    <section class="px-5 py-10">
        <h3
            class="text-2xl md:text-3xl lg:text-4xl text-center font-accent font-bold text-secondary mb-3">
            This is our love story
        </h3>
        <div class="grid md:grid-cols-2 gap-10">
            <img
                :src="shoot"
                alt="Couple's picture"
                class="w-full rounded-3xl aspect-square object-cover" />
            <div class="space-y-2">
                <p>
                    We met in the year 2011, we started out as friends from the same teens church
                    (RCCG, God's time Parish) where she was the choir coordinator and I was the
                    Sunday school coordinator.
                </p>
                <p>
                    Our friendship continued to grow because of our desire for growth in God, we
                    studied and prayed alongside other friends.
                </p>
                <p>
                    From friendship we became more close and now we have bonded to the point of
                    getting married.
                </p>
                <h4 class="font-semibold text-2xl mb-3 mt-2">Why Marriage?</h4>
                <p>
                    After some time of being friends, we discovered that our values aligned in so
                    many ways and this led to the establishment of the group that prays and studies
                    and now Inspirational Insight, and according to Enitan Somuyiwa,
                    <span class="block bg-gray-50 border-l-4 border-l-gray-400 py-2 px-2 my-2"
                        >"what else can you be looking for in a woman, you found a woman who is
                        interested in what you are interested in, she's beautiful and intelligent". </span
                    >Then, we decide to take relationship from friendship to marriage.
                </p>
            </div>
        </div>
    </section>
</template>
