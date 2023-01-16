import { createRouter, createWebHistory } from 'vue-router'
const routes = [{
    path: '/',
    name: "warga.index",
    component: () =>
        import ('@/views/IndexWarga.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router