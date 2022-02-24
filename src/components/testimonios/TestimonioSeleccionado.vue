<template>
    <article  class="testimonios-seleccionado container main">
        <slot name="paginador">

        </slot>
		<h1 class="blanco">{{data_testimonio.nombre}}
			<hr/>
		</h1>
        <div class="paso" id="scrolly">
			<div class="imagen">
				<ImagenPie 
					:link='`img/testimonios/${data_testimonio.imagen}`'
					:pie="data_testimonio.nombre"
				>
					<template slot="pie-foto">
						<button  class="boton-volver" @click="regresarTestimonios()">
							Regresar a testimonios
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
		<div>
			
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
        data_testimonio: Object
    },
	methods:{
		regresarTestimonios(){
			this.$store.commit("ocultarTestimonio")
		}
	},
	
}
</script>

<style lang="scss">
.testimonios-seleccionado{
  	background: #4A2582;
	overflow: inherit;
	position: relative;
	display: block;
	h1{
		line-height: 0.3;
		width: fit-content;
    	margin: auto;
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
		justify-content: space-between;
		position: relative;
		.imagen{
			z-index: 0;
			flex: 0 1 50%;
			.imagen-blend-pie{
				margin: auto;
				position: -webkit-sticky;
				position: sticky;
				top: 105px;
				display:inline-block;
			}
		}
		.texto{
			position: relative;
			z-index: 1;
			flex: 0 1 50%;
			mix-blend-mode: screen;
			
			
			p{
				//opacity: 0;
			}
		}
	}
	button.boton-volver{
		border: 1px solid #FFFFFF;
		border-radius: 24px;
		background: none;
		color: #FFFFFF;
		font-size: 14px;
		padding: 23px 24px;
		text-decoration: none;
		line-height: 0;
		margin-right: 15px;
	}
}
</style>