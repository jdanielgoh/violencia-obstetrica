<template>
	<div class="inicio">

		<Portada/>
		<section id="especiales" class="container main">
			<h3 class="blanco">Especiales
				<hr/>
			</h3>
			<div class="contenedor-escroleable">
				<div class="contenedor-secciones">
					<div class="ficha">
						<router-link to="/reportajes/parir-en-cuba" class="link-ficha">
							<ImagenPie 
								:link='`img/testimonios/claudia_exposito.JPG`'
							>
								<template slot="pie-foto">
									<p class="titulo"><strong>Parir en Cuba, un sistema también vertical</strong></p>
									<p class="autorxs">CYNTHIA DE LA CANTERA TORANZO</p>
								</template>
							</ImagenPie>
							</router-link>
					</div>
					<div class="ficha">
						<router-link to="/testimonios" class="link-ficha">
							<ImagenPie 
								:link='`img/testimonios/claudia_exposito.JPG`'
							>
								<template slot="pie-foto">
									<p class="titulo"><strong>Testimonios</strong></p>
								</template>
							</ImagenPie>
							</router-link>
					</div>
				</div>
			</div>
		</section>
		<PortadaScroll/>
		<section class="container">
			<MapaConsulta
				:id="'mapa-consulta'"
			/>
		</section>

		
	</div>
</template>

<script>
// @ is an alias to /src
import Portada from '@/components/inicio/Portada.vue'
import PortadaScroll from '@/components/inicio/PortadaScroll.vue'

import ImagenPie from "@/components/utils/ImagenPie.vue"
import MapaConsulta from "@/components/visualizacion/MapaConsulta.vue"


export default {
	name: 'Inicio',
	components: {
		Portada,
		PortadaScroll,
		ImagenPie,
		MapaConsulta
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
			line-height: .3;
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