<script setup lang="ts">
// import photoshoot from "/photoshoot-1.jpg";
import { RouterLink } from "vue-router";
import FooterComponent from "../components/FooterComponent.vue";
import { ref } from "vue";

const showDownloadBtn = ref<boolean>(false);
const form = ref({ fullname: "", location: "", relationship: "" });
function encode(data: Object) {
    return Object.keys(data) //@ts-ignore
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
}
const handleSubmit = () => {
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "invitation", ...form.value }),
    })
        .then(() => alert("Response received!"))
        .catch(() => alert("Unable to deliver response!"));
    showDownloadBtn.value = true;
};
</script>

<template>
    <div class="">
        <div
            class="w-full h-[70vh] -z-10 bg-[url('/photoshoot-3.jpg'),linear-gradient(180deg,_#8E095C,_rgba(255,255,255,0.4))] bg-blend-overlay bg-no-repeat bg-top bg-cover"></div>
        <div class="hero bg-base-200 min-h-screen text-center">
            <div class="">
                <div class="text-center">
                    <h1 class="text-5xl font-bold">Get Wedding Invitation</h1>
                    <p class="py-6">
                        Please complete the following information to get your wedding invite. The
                        information is only required to know your identity, your data is secure.
                    </p>
                </div>
                <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <form
                        name="invitation"
                        class="card-body"
                        method="post"
                        @submit.prevent="handleSubmit"
                        netlify>
                        <p><input type="hidden" name="form-name" value="invitation" /></p>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Fullname</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full name"
                                name="fullname"
                                class="input input-bordered placeholder:text-xs"
                                v-model="form.fullname"
                                required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your current location (optional)</span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Ijebu-ode, Ijebu Ogun state Nigeria.."
                                class="input input-bordered placeholder:text-xs"
                                v-model="form.location" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Relationship with couple</span>
                            </label>
                            <textarea
                                name="relationship"
                                placeholder="Family, Bride's Friend, Groom's Mentee..."
                                class="textarea input-bordered placeholder:text-xs resize-none"
                                v-model="form.relationship"
                                required></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-accent">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="mt-10">
                    <RouterLink to="/" class="link link-secondary">Go back</RouterLink>
                </div>
            </div>
        </div>
        <div
            v-show="showDownloadBtn"
            class="fixed left-0 top-0 z-100 w-full h-screen flex items-center justify-center bg-black/50">
            <div class="bg-white px-10 py-10 rounded-2xl">
                <a
                    href="/IfeEni25-wedding-invite.jpg"
                    download="IfeEni25-wedding-invite.jpg"
                    class="btn btn-primary"
                    >Download Invite</a
                >
                <div class="mt-10 text-center">
                    <button class="link link-secondary" @click="() => (showDownloadBtn = false)">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>
