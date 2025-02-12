import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import GetInvitationPage from "./pages/GetInvitationPage.vue";
import DonationPage from "./pages/DonationPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/get-invitation",
            name: "get_invitation",
            component: GetInvitationPage,
        },
        // {
        //   path: '/send-wedding-donation',
        //   name: 'send_donation',
        //   component: DonationPage,
        // }
    ],
    // @ts-ignore
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, behaviour: "smooth" };
        }
    },
});

export default router;
