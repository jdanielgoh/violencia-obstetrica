<template>
	<div class="testimonios" :style={}>
		<div class="testimonios-lista" 			
			v-if="!visibilidad_testimonio">
			<div class="container main">
				<div class="paso" v-for="(testimonio, i) in testimonios" :key="testimonio.nombre">
					<div class="imagen" @click="clickTestimonio(i)" >
						<ImagenPie 
							:link='`img/testimonios/${testimonio.imagen}`'
							:pie="testimonio.nombre"
						/>
					</div>
					<div class="bullet transicionable">
						
					</div>
				</div>
			</div>
		</div>
		<TestimonioSeleccionado
			v-if="visibilidad_testimonio"
			:data_testimonio="testimonio_seleccionado"
		/>
	</div>
</template>

<script>
import Vue from "vue"
//import VueRellax from "vue-rellax";
import ImagenPie from "@/components/utils/ImagenPie.vue"
import TestimonioSeleccionado from "@/components/testimonios/TestimonioSeleccionado.vue"
import {mapState} from "vuex"

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
			visibilidad_testimonio: false
		}
	},
	mounted(){
		this.testimonios = testimonios
	},
	methods: {
		clickTestimonio(i){
			this.testimonio_seleccionado = this.testimonios[i];
			this.$store.commit("mostrarTestimonio")
		},
		scrollArriba() {
			setTimeout(()=>{
				window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
			},100)
			
		}
	},
	computed: {
        ...mapState(["testimonio_activo"])
    },
	watch: {
		testimonio_activo(nv){
			this.visibilidad_testimonio = nv;
			this.scrollArriba()
			

		}
	}
  
}
</script>

<style scoped lang="scss">

.testimonios{
  	background: #4A2582;
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