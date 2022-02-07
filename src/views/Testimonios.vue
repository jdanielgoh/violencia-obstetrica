<template>
	<div class="testimonios">
		<div class="container main">
			<div class="paso" v-for="testimonio in testimonios" :key="testimonio.nombre">
				<div class="imagen" @click="testimonio_seleccionado = testimonio" >
					<ImagenPie 
						:link='`img/testimonios/${testimonio.imagen}`'
						:pie="testimonio.nombre"
					/>
				</div>
				<div class="bullet  transicionable">
					
				</div>
			</div>
			<TestimonioSeleccionado
				:data_testimonio="testimonio_seleccionado"
			/>
		</div>
	</div>
	
</template>

<script>
import Vue from "vue"
//import VueRellax from "vue-rellax";
import ImagenPie from "@/components/ImagenPie.vue"
import TestimonioSeleccionado from "@/components/testimonios/TestimonioSeleccionado.vue"

//Vue.use(VueRellax);

import testimonios from "@/assets/data/testimonios.json"


export default {
	name: 'Testimonios',
	components: {
		ImagenPie,
		TestimonioSeleccionado
	},
	data(){
		return {
			testimonios:[],
			testimonio_seleccionado: {},
			rellax: {
				center: false,
				horizontal: false,
				round: true,
				vertical: true,
				wrapper: false,
				speed: 5

			},
		}
	},
	mounted(){
		this.testimonios = testimonios
	}
  
}
</script>

<style scoped lang="scss">

.testimonios{
	position: relative;
	display: block;
	.paso{
		&:nth-child(1){
			margin-top: 500px
		}
		margin-bottom: 100px;
		min-height: 90vh;
		display: flex;
		gap: 0px 30px; 
		flex-wrap: nowrap;
		justify-content: space-between;
		.imagen{
			z-index: 0;
			flex: 0 1 50%;
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