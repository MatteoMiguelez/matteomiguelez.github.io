import { createRouter, createWebHistory } from 'vue-router';
import MyInformationView from '../components/Information/MyInformationsView.vue';
import ProjectListView from '../components/Projects/ProjectListView.vue';

const routes = [
    { path: '/', redirect: '/my-information' },
    { path: '/my-information', component: MyInformationView },
    { path: '/project-list', component: ProjectListView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;