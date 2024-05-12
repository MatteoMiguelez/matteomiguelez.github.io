import { createRouter, createWebHistory } from 'vue-router';
import MyInformationView from '../components/Information/MyInformationView.vue';
import ProjectListView from '../components/Projects/ProjectListView.vue';
import ProjectView from "@/components/Projects/ProjectView.vue";

const routes = [
    { path: '/:catchAll(.*)', redirect: '/my-information' },
    { path: '/', redirect: '/my-information' },
    { path: '/my-information', component: MyInformationView },
    { path: '/project', component: ProjectListView },
    {
        path: '/project/:id',
        name: 'Info',
        component: ProjectView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;