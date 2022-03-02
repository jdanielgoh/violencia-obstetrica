import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Testimonios from '../views/Testimonios.vue'
import TusDerechos from '../views/TusDerechos.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import Metodologia from '../views/Metodologia.vue'
import Creditos from '../views/Creditos.vue'
import Contacto from '../views/Contacto.vue'
import Podcasts from "../views/Podcasts.vue"
import ParirenCuba from "../views/reportajes/ParirenCuba.vue"
import VisualizacionViolencias from "../views/visualizaciones/VisualizacionViolencias.vue"
import VisualizacionMapaTestimonios from "../views/visualizaciones/VisualizacionMapaTestimonios.vue"

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
    path: "/especiales/parir-en-cuba",
    name: "ParirenCuba",
    component: ParirenCuba
  },
  {
    path: "/podcasts",
    name: "Podcasts",
    component: Podcasts
  },
  {
    path: "/violencia-cuba",
    name: "VisualizacionViolencias",
    component: VisualizacionViolencias
  },
  {
    path: "/visualizaciones/violencia-cuba",
    name: "VisualizacionViolencias",
    component: VisualizacionViolencias
  },
  {
    path: "/visualizaciones/mapa-testimonios",
    name: "VisualizacionMapaTestimonios",
    component: VisualizacionMapaTestimonios
  },
  {
    path: '**',
    name: 'Página no encontrada',
    component: () => import('@/views/404.vue'),
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior(to) {
    console.log(to.hash)
    if(to.hash ){
      return{
        y: 0,
        x: 0,
        selector: to.hash,
        behavior: 'smooth' 
      }
    }
    else{
      return { x: 0, y: 0 };
    }
      
  },

})

export default router
