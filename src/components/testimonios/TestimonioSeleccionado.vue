<template>
    <article  class="testimonios-seleccionado ">
		<div class="container main">
			<slot name="paginador">
			</slot>
			<h1 class="blanco">{{data_testimonio.nombre}}
				<hr/>
			</h1>
			<div class="paso">
				<div class="imagen">
					<ImagenPie 
						:link='data_testimonio.imagen'
						:pie="data_testimonio.nombre"
					>
						<template slot="pie-foto">
							<p class="autorxs">{{data_testimonio.nombre}}</p> 
							<button  class="boton-volver" @click="regresarTestimonios()">
								<img :src="require('@/assets/img/iconos/volver.svg')"/> 
								<span>Regresar a testimonios</span>
							</button>
						</template>
					</ImagenPie>
				</div>
				<div class="texto">
					<p class="cita">{{data_testimonio.texto.cita}}</p>
					<p class="blanco" v-for="(parrafo, i) in data_testimonio.texto.parrafos" :key="i">
						{{parrafo}}
					</p>
				</div>
			</div>
			
		</div>
        
	</article>
</template>

<script>
import ImagenPie from "@/components/utils/ImagenPie.vue"

export default {
    name: "TestimonioSeleccionado",
	components: {
		ImagenPie
	},
    props:{
        data_testimonio: Object,
		estado_testimonio: Boolean
    },
	methods:{
		regresarTestimonios(){
			this.$store.commit("ocultarTestimonio");
			document.body.style.overflow = "scroll" 

		}
	},
	
}
</script>

<style scoped lang="scss">
@import "../../scss/_variables";

.testimonios-seleccionado{
	&.visible{
		overflow-x: hidden!important;
	}
	.container.main{
		overflow: initial;
	}
	width:100%;
	background: #4A2582;
	overflow: inherit;
	position: relative;
	display: block;
	
	h1{
		width: fit-content;
    	margin: auto;
		margin-bottom: 48px;
	}

	.paso{
		&:nth-child(1){
			margin-top: 500px
		}
		margin-bottom: 100px;
		min-height: 90vh;
		display: flex;
		gap: 0px 30px; 
		flex-wrap: nowrap;
		@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
			flex-wrap: wrap;
		}
		justify-content: space-between;
		position: -webkit-sticky;
        position: sticky;
        display: flex;
        top: 0px;
		.imagen{
			z-index: 0;
			flex: 0 1 50%;
			@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
				flex: 0 1 100%;
			}
			
			.imagen-blend-pie{
				margin: auto;
				position: -webkit-sticky;
				position: sticky;
				top: 40px;
				display:inline-block;
				.cover{
				background-color: transparent;
				height: 400px;
				@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
					height: 280px;
				}
				
			}
			}
		}
		.texto{
			position: relative;
			z-index: 1;
			flex: 0 1 50%;
			@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
				flex: 0 1 100%;
			}
			mix-blend-mode: screen;
			
		}
	}
	p.autorxs{
		color: #fff;
	}
	button.boton-volver{
		border: 1px solid #FDA1C9;
		border-radius: 24px;
		background: none;
		font-size: 14px;
		padding: 12px 24px;
		text-decoration: none;
		margin-right: 15px;
		display: flex;
		color:#FDA1C9;
		text-transform: uppercase;
		img{
			width: 30px;
		}
		span{
			margin: auto
		}
	}
}
</style>