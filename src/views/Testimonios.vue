<template>
	<div class="testimonios">
		<div class="testimonios-lista" 			
			v-if="!visibilidad_testimonio">
			<div class="container main">
				<div class="paso">
					<div class="imagen" @click="clickTestimonio(i)" 
					v-for="(testimonio, i) in testimonios" 
						:key="testimonio.nombre">
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
		>
			<template slot="paginador">
				<div class="paginador">
					<button @click="disminuirIndice()">
						<img src="img/iconos/anterior.svg" alt="anterior"/>
					</button>
					<span>Testimonio {{no_testimonio+1}}</span>
					<button @click="aumentarIndice()">
						<img src="img/iconos/siguiente.svg" alt="siguiente"/>
					</button>
				</div>
			</template>
		</TestimonioSeleccionado>
		<MapaTestimonios
			:id="'mapa-testimonios'"
		/>
	</div>
</template>

<script>
import Vue from "vue"
//import VueRellax from "vue-rellax";
import ImagenPie from "@/components/utils/ImagenPie.vue"
import TestimonioSeleccionado from "@/components/testimonios/TestimonioSeleccionado.vue"
import MapaTestimonios from "@/components/testimonios/MapaTestimonios.vue"

import {mapState} from "vuex"

//Vue.use(VueRellax);

import testimonios from "@/assets/data/testimonios.json"


export default {
	name: 'Testimonios',
	components: {
		ImagenPie,
		TestimonioSeleccionado,
		MapaTestimonios
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
			visibilidad_testimonio: false,
			no_testimonio:0
		}
	},
	mounted(){
		this.testimonios = testimonios
	},
	methods: {
		clickTestimonio(i){
			this.no_testimonio = i;
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
		},
		disminuirIndice(){
			if(this.no_testimonio - 1 <0){
				this.no_testimonio = this.testimonios.length -1
			}else{
				this.no_testimonio -=1
			}
		},
		aumentarIndice(){
			this.no_testimonio = (this.no_testimonio +1) % this.testimonios.length;
		}


	},
	computed: {
        ...mapState(["testimonio_activo"])
    },
	watch: {
		testimonio_activo(nv){
			this.visibilidad_testimonio = nv;
			this.scrollArriba()
		},
		no_testimonio(nv){
			this.testimonio_seleccionado = this.testimonios[nv];
		}

	}
  
}
</script>

<style scoped lang="scss">

.testimonios{
  	background: #4A2582;
	position: relative;
	display: block;
	.paginador{
		width: 300px;
		margin: 20px auto 100px auto;
		color: #fff;
		display: flex;
		span{
			font-size: 16px;
			font-weight: 600;
			margin: 10px;
		}
		button{
			background: transparent;
			border: none;

		}
	}
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