<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
    <section class="bg-accent text-white mt-16 px-5 pt-10 pb-2">
        <div class="space-y-2">
            <!-- <p>
                <RouterLink
                    :to="{ name: 'send_donation' }"
                    class="hover:text-fuchsia-300 hover:underline transition"
                    >Give a Donation</RouterLink
                >
            </p> -->
            <p>
                <RouterLink
                    :to="{ name: 'get_invitation' }"
                    class="hover:text-fuchsia-300 hover:underline transition"
                    >Download Wedding Invite</RouterLink
                >
            </p>
        </div>
        <footer
            class="py-5 mt-5 border-t border-white border-opacity-20 text-xs text-center text-white/60">
            Copyright &copy; IfeEni'25 {{ new Date().getFullYear() }}
        </footer>
    </section>
</template>
