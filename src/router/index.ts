import { createRouter, createWebHistory } from 'vue-router';
import Writers from '../components/Writers.vue';
import Books from '../components/Books.vue';
import User from '../components/User.vue';
const routes = [
{ path: '/', component: Writers },
{ path: '/writers', component: Writers },
{ path: '/books', component: Books },
{ path: '/user', component: User }
];
const router = createRouter({
history: createWebHistory(),
routes
});
export default router;