import {createRouter, createWebHistory} from "vue-router";
import Movie from  "./pages/movie.vue";
import Index from  "./pages/index.vue";

import NotFound from "./pages/404.vue";

const routes = [
    {
    path: "/",
    name:"Index",
    component: Index,
},

{
    path: "/movie/:id",
    name:"Movie",
    component: Movie,
},

{
    path: "/:pathMatch(.*)*",
    name:"NotFound",
    component: NotFound,
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
