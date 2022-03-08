<template>
	
  	<div id="scrolly-portada" class="container main">
		<div class="paso" data-step="1">
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-8"
				data-rellax-percentage="0."
			>
				<ImagenPie 
					:link='"img/portada-rellax/0003.jpg"'
					:pie="''"
				/>
			</div>
			<div class="bullet  transicionable">
				<p class="cita">La soledad, la frialdad, el maltrato,y las grocerías es el recuerdo que tengo de mis trabajos de partos. Sin un rostro familiar, sin una mano amiga.</p>
			</div>
		</div>
		<div class="paso" data-step="2">
			<div class="bullet transicionable">
				<p class="cita">Se ríen y te dejan ahí</p>
			</div>
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="4"
				data-rellax-percentage=".0">
				<ImagenPie 
					:link='"img/portada-rellax/0009.jpg"'
					:pie="''"
				/>
			</div>
		</div>
		<div class="paso" data-step="3">
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-5"
				data-rellax-percentage="0.">
				<ImagenPie 
					:link='"img/portada-rellax/0014.jpg"'
					:pie="''"
				/>
			</div>
			<div class="bullet transicionable">
				<p class="cita">Fue todo horrible. Me dijeron: ¿Tú no sabes jugar Yaquis? Pues así mismo, ponte y pare. Tenía 19 años</p>
			</div>
		</div>
		<div class="paso" data-step="4">
			<div class="bullet transicionable">
				<p class="cita">Corte en el períneo. Empujón en el abdomen. Mientras em cosían tuve que pedirle y discutirle a la doctora de turno que me tocó.</p>
			</div>
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-5"
				data-rellax-percentage="0.">
				<ImagenPie 
					:link='"img/portada-rellax/0004.jpg"'
					:pie="''"
					:altura="'600px'"
				/>
			</div>
		</div>

		<div class="paso" data-step="5">
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-5"
				data-rellax-percentage="0."
			>
				<ImagenPie 
					:link='"img/portada-rellax/0008.jpg"'
					:pie="''"
				/>
			</div>
			<div class="bullet  transicionable">
				<p class="cita">Con tan solo 19 años estuve 12 horas en una inducción de parto.  Si no es por una amistad que encontró mi mamá, me muero. Mi niño se hizo caca en el vientre. </p>
			</div>
		</div>
		
  	</div>
</template>

<script>
import Vue from "vue"
import VueRellax from "vue-rellax";
import ImagenPie from "@/components/utils/ImagenPie.vue"


Vue.use(VueRellax);
export default {
	name: 'Portada',
	components:{
		ImagenPie
	},
	props: {
		msg: String
	},
	data() {
		return {
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
	mounted() {
		
	},
	methods:{
	
	},
	unmounted() {
		this.rellax.destroy()
	} 
}
</script>

<style  lang="scss">

@import "../../scss/_variables";

#scrolly-portada {
	position: relative;
	display: block;
	.paso{
		&:nth-child(1){
			margin-top: 50px
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
				.cover{
					height: 400px;
					@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
						max-height: 300px;
					}
				}
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
