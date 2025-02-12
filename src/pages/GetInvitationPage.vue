<script setup lang="ts">
  import heroImg from "../assets/shoot5.jpeg"
  import { RouterLink } from "vue-router"
  import FooterComponent from "../components/FooterComponent.vue"
  
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
      <h1 class="text-5xl font-bold">Get Wedding Invitation</h1>
      <p class="py-6">
        Please complete the following information to get your wedding invite.
        The information is only required to know your identity, your data is secure.
      </p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Fullname</span>
          </label>
          <input type="text" placeholder="Full name" class="input input-bordered placeholder:text-xs" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your current location (optional)</span>
          </label>
          <input type="text" placeholder="Ijebu-ode, Ijebu Ogun state Nigeria.." class="input input-bordered placeholder:text-xs" />
          
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Relationship with couple</span>
          </label>
          <textarea placeholder="Family, Bride's Friend, Groom's Mentee..." class="textarea input-bordered placeholder:text-xs" required></textarea>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Download Invite</button>
        </div>
      </form>
    </div>
    <div class="mt-10">
    <RouterLink to="/" class="link link-secondary">Go back</RouterLink>
    </div>
  </div>
</div>
<FooterComponent />
</div>
</template>