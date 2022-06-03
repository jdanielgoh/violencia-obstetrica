<template>
<div class="contendor-vis">
    <ScrollyTelling/>
		<section class="contenedor-mapa-consulta">
			<MapaConsulta
				:id="'mapa-consulta'"
			/>
		</section>
</div>
</template>
<script>
import ScrollyTelling from '@/components/visualizaciones/ScrollyTelling.vue'
import MapaConsulta from "@/components/visualizaciones/MapaConsulta.vue"

export default {
    name:"VisualizacionViolencias",
    components: {
        ScrollyTelling,
        MapaConsulta
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Datos - Cientos de mujeres confirman haber vivido violencia obstétrica en Cuba',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos'
    },
}
</script>
<style lang="scss">
.contendor-vis{
    background: #4A2582;;;
}
.contenedor-mapa-consulta{
    padding: 15px;
}
</style>

