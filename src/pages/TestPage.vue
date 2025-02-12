<script setup lang="ts">
  import FooterComponent from "../components/FooterComponent.vue"
  import heroImg from '../assets/shoot3.jpeg'
  /*
  import PaystackPop from '@paystack/inline-js'
  
  import { ref } from "vue"
  const paymentDetails = ref({ amount: 0, email: '' });
  const PUBLIC_KEY = pk_test_d1ed6a58db980487c71e66189bb5e2dc0cf90b49;
  */
  
</script>

<template>
  <div class="w-full aspect-video overflow-hidden relative">
    <img :src="heroImg" class="w-full absolute top-0 left-0 -transform-y-1/2 -transform-x-1/2 -z-10" />
    <div class="bg-black/60 w-full h-full"></div>
  </div>
<FooterComponent />
</template>