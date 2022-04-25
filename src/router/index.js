import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../components/home/Home.vue";
import NewsItemsVue from "../components/news/NewsItems.vue";
import NewsItemDetailVue from "../views/NewsItemDetail.vue";
import TariffsServices from "../components/trafficsServices/TariffsServices.vue";
import CoverageAreaVue from "../components/coverage/CoverageArea.vue";
import AboutUsVue from "../components/about/AboutUs.vue";
import ContactsVue from "../components/contacts/Contacts.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "Home",
      component: HomeVue,
    },
    {
      path: "/news",
      name: "newsItems",
      component: NewsItemsVue,
    },
    {
      path: "/news/:id",
      name: "newsItemsDetail",
      component: NewsItemDetailVue,
    },
    {
      path: "/tariffs-and-services",
      name: "TariffsServices",
      component: TariffsServices,
    },
    {
      path: "/coverage-area",
      name: "CoverageArea",
      component: CoverageAreaVue,
    },
    {
      path: "/about",
      name: "AboutUs",
      component: AboutUsVue,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: ContactsVue,
    },
  ],
});

export default router;
