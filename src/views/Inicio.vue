<template>
	<div class="inicio">

		<Portada/>
		<GridSeccion
			id="especiales"
			titulo="Especiales"
			:data="especiales"
		/>
		<GridSeccion
			id="visualizaciones"
			titulo="Visualizaciones"
			:data="visualizaciones"
		/>
		<GridSeccion
			id="podcast-testimonios"
			titulo="Te puede insteresar"
			:data="te_puede_interesar"
		/>


	</div>
</template>

<script>
// @ is an alias to /src
import Portada from '@/components/inicio/Portada.vue'

import ImagenPie from "@/components/utils/ImagenPie.vue"
import GridSeccion from "@/components/inicio/GridSeccion.vue"


import visualizaciones from "@/assets/data/visualizaciones.json"

import especiales from "@/assets/data/especiales.json"

import te_puede_interesar from "@/assets/data/te_puede_interesar.json"

export default {
	name: 'Inicio',
	metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Inicio',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos'
    },
	components: {
		Portada,
		ImagenPie,
		GridSeccion
	},
	beforeMount(){
		this.te_puede_interesar.forEach(d => {
			d.img = require(`@/assets/${d.img}`)
			
		});
	},
	data(){
		return {
			especiales: especiales,
			visualizaciones : visualizaciones,
			te_puede_interesar: te_puede_interesar
		}
	},
	mounted(){
		
	},
	
	methods:{
		
	
	},

}
</script>
<style scoped lang="scss">
$margen-especiales: 70px;
.inicio{
  	background: #4A2582;
	#especiales{
		padding-top: 40px;
		h3{
			font-size: 56px;
			line-height: 1;
			&.blanco{
				color: #fff
			}
		}
		.contenedor-escroleable{
			flex: 1;
			display: flex;
			overflow: auto;
			.contenedor-secciones{
				display: flex;
				flex-wrap: nowrap;
				div.ficha{
					width: 400px;
					&:nth-child(even){
						margin: 0 .5*$margen-especiales $margen-especiales auto;
					}
					&:nth-child(odd){
						margin: $margen-especiales .5*$margen-especiales 0 auto;
					}
					a.link-ficha{
						text-decoration: none;
						color: #fff;
						p{
							color: #fff;
							&.titulo{
								strong{
									font-size: 24px;
									line-height: 1.1;
									font-weight: 500;
								}
								margin-bottom:0;
							}
							&.autorxs{
								font-size: 14px;
								margin-top: 5px;
							}
						}
					}
				}
			}
		}
	}
}

</style>