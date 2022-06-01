import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Testimonios from '../views/Testimonios.vue'
import Historietas from '../views/Historietas.vue'
import QueEsLaViolenciaObstetrica from '../views/QueEsLaViolenciaObstetrica.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import Metodologia from '../views/Metodologia.vue'
import Podcasts from "../views/Podcasts.vue"
import HistoriasVideos from "../views/HistoriasVideos.vue"
import TusDerechosParto from "../views/TusDerechosParto.vue"
import Cuestionarios from "../views/Cuestionarios.vue"


import ParirenCuba from "../views/reportajes/ParirenCuba.vue"
import VisualizacionViolencias from "../views/visualizaciones/VisualizacionViolencias.vue"
import VisualizacionMapaTestimonios from "../views/visualizaciones/VisualizacionMapaTestimonios.vue"
import DatosViolencia from "../views/DatosViolencia.vue"

import Meta from 'vue-meta'
Vue.use(VueRouter)
Vue.use(Meta)

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
    path: '/historietas',
    name: 'Historietas',
    component: Historietas
  },
  {
    path: '/que_es_la_violencia_obstetrica',
    name: 'QueEsLaViolenciaObstetrica',
    component: QueEsLaViolenciaObstetrica
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
    path: "/historias_videos",
    name: "HistoriasVideos",
    component: HistoriasVideos
  },
  {
    path: "/derechos_parto",
    name: "TusDerechosParto",
    component: TusDerechosParto
  },
  {
    path: "/datos_violencia/violencia_cuba",
    name: "VisualizacionViolencias",
    component: VisualizacionViolencias
  },
  {
    path: "/datos_violencia/mapa-testimonios",
    name: "VisualizacionMapaTestimonios",
    component: VisualizacionMapaTestimonios
  },
  {
    path: "/datos_violencia",
    name: "DatosViolencia",
    component: DatosViolencia
  },
  {
    path: "/cuestionarios",
    name: "Cuestionarios",
    component: Cuestionarios
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
