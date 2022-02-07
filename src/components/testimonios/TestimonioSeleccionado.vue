<template>
    <div class="testimonios container main">
        <h2>{{data_testimonio.nombre}}</h2>
		
        <div class="paso">
			<div class="imagen">
				<ImagenPie 
					:link='`img/testimonios/${data_testimonio.imagen}`'
					:pie="data_testimonio.nombre"
				/>
			</div>
			<div class="texto">
				<p class="cita">{{data_testimonio.texto.cita}}</p>
                <p v-for="(parrafo, i) in data_testimonio.texto.parrafos" :key="i">
                    {{parrafo}}
                </p>
			</div>
		</div>
	</div>
</template>

<script>
import ImagenPie from "@/components/ImagenPie.vue"

export default {
    name: "TestimonioSeleccionado",
	components: {
		ImagenPie
	},
    props:{
        data_testimonio: Object
    }
}
</script>

<style lang="scss">
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
				//opacity: 0;
			}
		}
	}
}
</style>