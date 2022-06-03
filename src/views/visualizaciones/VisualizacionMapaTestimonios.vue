<template>
	<div class="visualizacion-mapa-testimonios">
		<MapaTestimonios
			:id="'mapa-testimonios'"
		/>
	</div>
</template>

<script>
import MapaTestimonios from "@/components/visualizaciones/MapaTestimonios.vue"


//Vue.use(VueRellax);



export default {
	name: 'VisualizacionMapaTestimonios',
	components: {
		MapaTestimonios
	},
	 metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'DataViz',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos'
    },
	data(){
		return {

		}
	},
	mounted(){
	},

  
}
</script>

<style scoped lang="scss">
div.visualizacion-mapa-testimonios{
	background: #4A2582;;
}
.testimonios{
  	background: #4A2582;
	position: relative;
	display: block;
	
	.paso{
		&:nth-child(1){
			margin-top: 50px
		}
		margin-bottom: 100px;
		min-height: 90vh;
		display: flex;
		gap: 30px 30px; 
		flex-wrap: wrap;
		justify-content: space-between;
		.imagen{
			z-index: 0;
			flex: 0 1 40%;
			
			.imagen-blend-pie{
				margin: auto;
			}
		}
		.bullet{
			z-index: 1;
			flex: 0 1 50%;
			mix-blend-mode: screen;
			
			&.transicionable{
				display: flex;
				align-items: center;
				justify-content: center;
			}
			p{
				text-transform: uppercase;
				//opacity: 0;
			}
		}
	}
}
</style>