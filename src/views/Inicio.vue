<template>
	<div class="inicio">
		<div class="container main">
			<BotonAudio />
		</div>
		<div class="container text introduccion">
			
			<div class="centrado">
				<h1 class="titulo-especial blanco">PARTOS ROTOS</h1>
				<p>
					En septiembre de 2020 publicamos una investigación sobre violencia obstétrica en Cuba que fue replicada por varios medios independientes. De inmediato, el reportaje generó en redes una avalancha de denuncias. Mujeres cubanas de diferentes edades y regiones aseguraron haber sufrido violencia al momento de dar a luz.
				</p>
				<div>
					<span class="flecha"></span>
				</div>
			</div>
			
		</div>
		
		<GridSeccion
			id="visualizaciones"
			titulo="Visualizaciones"
			:data="visualizaciones"
		/>
		
		<GridSeccion
			id="especiales"
			titulo="Reportajes"
			:data="especiales"
		/>
		
		
		<GridSeccion
			id="podcast-testimonios"
			titulo="Te puede interesar"
			:data="te_puede_interesar"
		/>


	</div>
</template>

<script>
// @ is an alias to /src
import Portada from '@/components/inicio/Portada.vue'

import ImagenPie from "@/components/utils/ImagenPie.vue"
import GridSeccion from "@/components/inicio/GridSeccion.vue"

import BotonAudio from "@/components/utils/BotonAudio.vue";

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
		GridSeccion,
		BotonAudio
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
	div.container.text.introduccion{
		.centrado{
			max-width: 685px;
			h1{
				text-align: center;
				font-size: 56px;
				font-weight: 800;
			}
			p{
				text-align: center;
				color:#fff;
			}
			div{
				text-align: center;

				span.flecha{
					position: relative;
					display: inline-block;
					width: 35px;
					height: 35px;
					border-left: solid 3px #FDA1C9;
					border-bottom: solid 3px #FDA1C9;
					transform: rotate(-45deg);
				}
			}
			
		}
		
	}
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