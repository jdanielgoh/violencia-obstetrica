<template>
	
  	<div id="portada" class="grid">
    	<div class="rellax-contenido">
			<div class="txt">Texto 1</div>
			<div v-rellax="rellax" 
				v-for="(i) in no_fotos.slice(0,5)" 
				:key="i" 
				class="rellax contenedor-img"
				:data-rellax-speed="parseInt(generadorRandom(-5,1))">
				<img class="imagen" :style="{width: parseInt(generadorRandom(30,80)) + '%', left: parseInt(generadorRandom(-10,50))+ '%'}"    
					:src="require(`@/assets/img/portada-rellax/${i.toString().padStart(4,'0000')}.png`)"/>
			</div>
    	</div>
		<div class="rellax-contenido">
			<div class="txt">Texto 2</div>
			<div v-rellax="rellax" 
				v-for="(i) in no_fotos.slice(5,10)" 
				:key="i" 
				class="rellax contenedor-img"
				:data-rellax-speed="parseInt(generadorRandom(-5,1))">
				<img class="imagen" :style="{width: parseInt(generadorRandom(30,80)) + '%', left: parseInt(generadorRandom(-10,50))+ '%'}"    
					:src="require(`@/assets/img/portada-rellax/${i.toString().padStart(4,'0000')}.png`)"/>
			</div>
    	</div>
		<div class="rellax-contenido">
			<div class="txt">texto Texto 3</div>
			<div v-rellax="rellax" 
				v-for="(i) in no_fotos.slice(10,15)" 
				:key="i" 
				class="rellax contenedor-img"
				:data-rellax-speed="parseInt(generadorRandom(-5,1))">
				<img class="imagen" :style="{width: parseInt(generadorRandom(30,80)) + '%', left: parseInt(generadorRandom(-10,50))+ '%'}"    
					:src="require(`@/assets/img/portada-rellax/${i.toString().padStart(4,'0000')}.png`)"/>
			</div>
    	</div>
		<div class="rellax-contenido">
			<div class="txt">lorem ipsum texto 4</div>
			<div v-rellax="rellax" 
				v-for="(i) in no_fotos.slice(15,19)" 
				:key="i" 
				class="rellax contenedor-img"
				:data-rellax-speed="parseInt(generadorRandom(-5,1))">
				<img class="imagen" :style="{width: parseInt(generadorRandom(30,80)) + '%', left: parseInt(generadorRandom(-10,50))+ '%'}"    
					:src="require(`@/assets/img/portada-rellax/${i.toString().padStart(4,'0000')}.png`)"/>
			</div>
    	</div>
  	</div>
</template>

<script>
import Vue from "vue"
import VueRellax from "vue-rellax";
Vue.use(VueRellax);
export default {
	name: 'Portada',
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
			},
			no_fotos: [...Array(20).keys()].slice(1)

		}
	},
	mounted() {
		console.log(no_fotos)
		
	},
	methods:{
		generadorRandom(min, max){
			let rand = Math.random() *  (max - min) + min;
			return rand

		}
	},
	unmounted() {
		this.rellax.destroy()
	} 
}
</script>

<style scoped lang="scss">


#portada {
	width: 100%;
	position: relative;
	
	div.rellax-contenido{
		div.txt {
			mix-blend-mode: difference;
			color:rgb(87, 0, 109);
			font-size :89px;
			font-weight: 700;
			position: -webkit-sticky;
			position: sticky;
			top: 0;
			//background-color: rgb(228, 228, 228);
			padding: 50px;
			z-index: 1;
		}
		position: relative;
		z-index: 0;
		.contenedor-img{
			position:relative;
			img{
				position:relative;
				opacity: .9;
			}

		}
		
	}
}
	


</style>
