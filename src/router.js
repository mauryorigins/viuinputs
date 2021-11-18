import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Form from '@/views/Form.vue';
import Services from '@/views/Services.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/mau',
    name: 'Form',
    component: Form,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'nav-current',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router;
