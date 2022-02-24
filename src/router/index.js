import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Testimonios from '../views/Testimonios.vue'
import TusDerechos from '../views/TusDerechos.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import Metodologia from '../views/Metodologia.vue'
import Creditos from '../views/Creditos.vue'
import Contacto from '../views/Contacto.vue'
import ParirenCuba from "../views/reportajes/ParirenCuba.vue"

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
    path: "/reportajes/parir-en-cuba",
    name: "ParirenCuba",
    component: ParirenCuba
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    console.log(to.hash)
    if(to.hash ){
      return{
        selector: to.hash,
      }
    }
    else{
      console.log("nohash")
      return { x: 0, y: 0, behavior: 'smooth' };
    }
      
  },

})

export default router
