<script setup lang="ts">
import { register } from "swiper/element/bundle";

register();
</script>
<template>
    <swiper-container
        class="my-10"
        :slides-per-view="1"
        :space-between="0"
        :centered-slides="true"
        :autoplay="true"
        :loop="true"
        :pagination="{
            hideOnClick: true,
        }"
        :breakpoints="{
            768: {
                slidesPerView: 2,
            },
        }">
        <slot />
    </swiper-container>
</template>
