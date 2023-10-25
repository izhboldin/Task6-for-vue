import { createRouter, createWebHistory } from "vue-router";
import Task11 from '@/components/Component.vue'
import NotFoundView from '@/components/NotFound.vue'
import { useAlertsStore } from '@/store/Store.js';


const routes = [
  {
    path: "/component",
    name: "component",
    component: Task11,
    meta: { role: 'user', myRole: '' }
  },
  {
    path: "/notFound",
    name: "404",
    component: NotFoundView,
  },
];


const router = createRouter({
  routes,
  history: createWebHistory(),
});

// task4
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.role)) {
    const requiredRole = to.meta.role;
    const userRole = useAlertsStore().role
    if (userRole !== requiredRole) {
      next('/notFound');
      console.log(1);
    } else {
      console.log(2);
      next();
    }
  } else {
    console.log(3);
    next();
  }
});


export default router;

