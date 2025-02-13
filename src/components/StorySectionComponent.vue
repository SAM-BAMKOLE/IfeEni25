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
                <div>
                    After some time of being friends, we discovered that our values aligned in so
                    many ways and this led to the establishment of the group that prays and studies
                    and now Inspirational Insight, and according to:,
                    <p class="block bg-gray-50 border-l-4 border-l-gray-400 py-2 px-2 my-2">
                        "What more could you ask for in a partner? You have found a woman who shares
                        your passions, is stunningly beautiful and remarkably intelligent."
                        <span class="text-right italic block mt-2 font-semibold">- The Groom</span>
                    </p>
                    <p class="block bg-gray-50 border-r-4 border-r-gray-400 py-2 px-2 mb-2">
                        "Enitan is a good man, he is Godly, loving and always willing to see the
                        best in me. I know i have made the best decision about marriage and i'm
                        grateful to God for making us meet at an early stage."
                        <span class="text-right italic block mt-2 font-semibold">- The Bride</span>
                    </p>
                    Then, we decided to take our relationship from friendship to marriage.
                </div>
            </div>
        </div>
        <!-- <p class="mt-3 rounded-md p-5 gradient">
            Enitan is a good man, he is Godly, loving and always willing to see the best in me. I
            know i have made the best decision about marriage and i'm grateful to God for making us
            meet at an early stage.
            <span class="text-right italic block mt-2 font-semibold">- The Bride</span>
        </p> -->
    </section>
</template>
