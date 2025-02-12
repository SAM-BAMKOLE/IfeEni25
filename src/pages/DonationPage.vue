<script setup lang="ts">
  import PaystackPop from '@paystack/inline-js'
  // import paystack from "vue-paystack"
  
  import heroImg from '../assets/shoot5.jpeg'
  import { RouterLink } from "vue-router"
  import FooterComponent from "../components/FooterComponent.vue"
  
  import { ref } from "vue"
  const paymentDetails = ref({ amount: 0, email: '' });
  const PUBLIC_KEY = "pk_test_d1ed6a58db980487c71e66189bb5e2dc0cf90b49";
  
  const handlePayment = ()=> {
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: PUBLIC_KEY, // Replace with your Paystack public key
      email: paymentDetails.value.email, // Donor’s email address
      amount: paymentDetails.value.amount * 100, // Amount in kobo (for NGN)
      currency: "NGN", // Specify your currency
      // @ts-ignore
      callback: function(response) {
        alert('Payment successful! Transaction ref: ' + response.reference);
        // Optionally, send this reference to your backend to verify payment
      },
      onClose: function() {
        alert('Transaction was not completed, window closed.');
      }
    });
  }
  /*
  const reference = function() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  const processPayment = () => {
    alert("Payment recieved")
  };
  const closePayment = () => {
    console.log("You closed checkout page")
  }
  */
</script>
<template>
  <div class="">
  <div class="w-full aspect-video overflow-hidden relative">
    <img :src="heroImg" class="w-full absolute top-0 left-0 -transform-y-1/2 -transform-x-1/2 -z-10" />
    <div class="bg-black/60 w-full h-full"></div>
  </div>
  <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Send Wedding Donations</h1>
      <p class="py-6">
        We appreciate your gift and donations, we pray God blesses you in all your endeavours
      </p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form class="card-body" @submit.prevent="handlePayment">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your email" class="input input-bordered placeholder:text-xs" required v-model="paymentDetails.email" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Amount</span>
          </label>
          <div class="input input-bordered flex p-0">
            <span class="text-accent text-sm bg-gray-200 h-full rounded-l-lg pt-3 px-1 mr-1 ">NGN</span>
          <input type="number" placeholder="Amount to send" class="grow px-2 placeholder:text-xs" required v-model="paymentDetails.amount" />
          </div>
        </div>
        <!-- <div class="form-control mt-6">
          <paystack
            class="btn btn-primary"
            currency="NGN"
            :amount="paymentDetails.amount * 100"
            :email="paymentDetails.email"
            :paystackkey="PUBLIC_KEY"
            :reference="reference"
            :callback="processPayment"
            :close="closePayment"
          >Send Donation</paystack>
        </div> -->
        <div class="form-control">
        <button type="submit" class="btn btn-primary">Send Donation</button>
        </div>
      </form>
    </div>
    <div class="text-center mt-10">
      <h2 class="font-bold text-accent mb-2">Or send to account</h2>
      <p class="text-sm">BANK:</p>
      <h3 class="text-xl font-bold mb-3">OPAY</h3>
      <p class="text-sm">ACCOUNT NO:</p>
      <h3 class="text-xl font-bold">9065721167</h3>
    </div>
    <div class="mt-10">
    <RouterLink to="/" class="link link-secondary">Go back</RouterLink>
    </div>
  </div>
  </div>
  <FooterComponent />
  </div>
</template>
