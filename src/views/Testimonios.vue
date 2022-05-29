<template>
	<div class="testimonios">
		<div class="testimonios-lista" >
			
			<div class="container main">
				<h3 class="blanco">
					Testimonios
					<hr/>
				</h3>
				<div class="paso">
					<button class="imagen" @click="clickTestimonio(i)" 
					v-for="(testimonio, i) in testimonios" 
						:key="testimonio.nombre">
						<ImagenPie 
							:link='testimonio.imagen'
							>
							<template slot="pie-foto">
								<div class="pie-foto-template">
									<p class="autorxs">{{testimonio.nombre}}</p> 
								</div>
							</template>
						</ImagenPie>
					</button>
					<div class="bullet transicionable">
						
					</div>
				</div>
				<p><i>Algunos de los testimonios que aparecen en esta sección son el  reflejo exacto de las palabras de las madres, y hemos decidido respetar su oralidad dentro del relato. </i></p>
			</div>
			
			
		</div>
		<TestimonioSeleccionado
			v-if="visibilidad_testimonio"
			:class="{visible: visibilidad_testimonio}"
			:data_testimonio="testimonio_seleccionado"
		>
			<template slot="paginador">
				<div class="paginador">
					<div class="control">
						<button @click="disminuirIndice()">
							<img src="img/iconos/anterior.svg" alt="anterior"/>
						</button>
						<span>Testimonio {{no_testimonio+1}}</span>
						<button @click="aumentarIndice()">
							<img src="img/iconos/siguiente.svg" alt="siguiente"/>
						</button>
					</div>
					
				</div>
			</template>
		</TestimonioSeleccionado>

	</div>
</template>

<script>
//import VueRellax from "vue-rellax";
import ImagenPie from "@/components/utils/ImagenPie.vue"
import TestimonioSeleccionado from "@/components/testimonios/TestimonioSeleccionado.vue"

import {mapState} from "vuex"
import testimonios from "@/assets/data/testimonios.json"




export default {
	name: 'Testimonios',
	metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Testimonios',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos'
    },
	components: {
		ImagenPie,
		TestimonioSeleccionado,
	},
	destroyed(){
		this.$store.commit("ocultarTestimonio");
		document.body.style.overflow = "scroll" 

	},
	data(){
		return {
			testimonios:[],
			testimonio_seleccionado: {},

			visibilidad_testimonio: false,
			no_testimonio:0
		}
	},
	mounted(){
		this.testimonios = testimonios;
		this.testimonios.forEach((d) => {
			d.imagen = require(`@/assets/img/testimonios/${d.imagen}`)
		})


	},
	methods: {
		clickTestimonio(i){
			this.no_testimonio = i;
			this.testimonio_seleccionado = this.testimonios[i];
			this.$store.commit("mostrarTestimonio")
		},
		scrollArriba() {
			setTimeout(()=>{
				document.querySelector(".testimonios-seleccionado").scrollTo({
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

			if(nv){document.body.style.overflow = "hidden" }
		},
		no_testimonio(nv){
			this.testimonio_seleccionado = this.testimonios[nv];
			this.scrollArriba()

		}

	}
  
}
</script>

<style  lang="scss">
@import '~viewerjs/dist/viewer.css';
@import "../scss/_variables";

h3{
	font-size: 56px;
	line-height: 1;
	@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
		font-size: 48px;
	}
	&.blanco{
		color: #fff
	}
	
}
.testimonios{
  	background: #4A2582;
	position: relative;
	display: block;
	
	
	.paginador{
		width: 100%;
		background: #4A2582;
		color: #fff;
		position: -webkit-sticky;
		position: sticky;
		top:0px;
		z-index: 2;
		.control{
			display: flex;
			width: 220px;
			margin: 48px auto 48px auto;

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
		
	}
	.paso{
		&:nth-child(1){
			margin-top: 50px
		}
		margin-bottom: 24px;
		min-height: 90vh;
		display: flex;
		gap: 30px 10px; 
		flex-wrap: wrap;
		justify-content: space-between;
		.imagen{
			width:100%;
			z-index: 0;
			flex: 0 1 48%;
			background: transparent;
			border: none;
			text-align: left;
			cursor: pointer;
			
			.imagen-blend-pie{
				margin: auto;
				
				.cover{
					height: 400px;
					@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
						height: 280px!important;
					}
				}
			}
			.autorxs{
				color:#fff;
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
	p{
		i{
			color:#fff;
		}
	}
	article.testimonios-seleccionado.visible{
		position: fixed;
		top:82px;
		z-index: 1001;
		overflow: scroll;
		height: calc(100vh - 82px);
	}
	div.ilustraciones{
		display: flex;
		flex-wrap: wrap;
		img{
			margin: 20px auto;
		}
	}
	
}
</style>