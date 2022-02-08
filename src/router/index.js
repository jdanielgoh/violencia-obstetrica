import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Testimonios from '../views/Testimonios.vue'
import TusDerechos from '../views/TusDerechos.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import Metodologia from '../views/Metodologia.vue'
import Creditos from '../views/Creditos.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/testimonios',
    name: 'Testimonios',
    component: Testimonios
  },
  {
    path: '/tus_derechos',
    name: 'TusDerechos',
    component: TusDerechos
  },
  {
    path: '/quienes_somos',
    name: 'QuienesSomos',
    component: QuienesSomos
  },
  {
    path: '/metodologia',
    name: 'Metodologia',
    component: Metodologia
  },
  {
    path: '/creditos',
    name: 'Creditos',
    component: Creditos
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' };
  },

})

export default router
