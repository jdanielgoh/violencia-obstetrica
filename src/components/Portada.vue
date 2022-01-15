<template>
	
  	<div id="scrolly-portada" class="grid">
    	<div class="rellax-contenido step" data-step="1">
			<div class="txt cont-typing">
				<h1 class="typing">Texto 1</h1>
			</div>
			<div v-rellax="rellax" 
				v-for="(i) in no_fotos.slice(0,5)" 
				:key="i" 
				class="rellax contenedor-img"
				:data-rellax-speed="parseInt(generadorRandom(-5,1))">
				<img class="imagen" :style="{width: parseInt(generadorRandom(30,80)) + '%', left: parseInt(generadorRandom(-10,50))+ '%'}"    
					:src="require(`@/assets/img/portada-rellax/${i.toString().padStart(4,'0000')}.png`)"/>
			</div>
    	</div>
		<div class="rellax-contenido step" data-step="2">
			<div class="txt cont-typing">
				<h1 class="typing">Texto 2 texto 2</h1>
			</div>
			<div v-rellax="rellax" 
				v-for="(i) in no_fotos.slice(5,10)" 
				:key="i" 
				class="rellax contenedor-img"
				:data-rellax-speed="parseInt(generadorRandom(-5,1))">
				<img class="imagen" :style="{width: parseInt(generadorRandom(30,80)) + '%', left: parseInt(generadorRandom(-10,50))+ '%'}"    
					:src="require(`@/assets/img/portada-rellax/${i.toString().padStart(4,'0000')}.png`)"/>
			</div>
    	</div>
		<div class="rellax-contenido step" data-step="2">
			<div class="txt cont-typing">
				<h1 class="typing">Texto 3 texto 3 lorem ipsum</h1>
			</div>
			<div v-rellax="rellax" 
				v-for="(i) in no_fotos.slice(10,15)" 
				:key="i" 
				class="rellax contenedor-img"
				:data-rellax-speed="parseInt(generadorRandom(-5,1))">
				<img class="imagen" :style="{width: parseInt(generadorRandom(30,80)) + '%', left: parseInt(generadorRandom(-10,50))+ '%'}"    
					:src="require(`@/assets/img/portada-rellax/${i.toString().padStart(4,'0000')}.png`)"/>
			</div>
    	</div>
		<div class="rellax-contenido step" data-step="4">
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

import scrollama from 'scrollama';
import * as d3 from "d3";
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
		this.inizializandoScrollama()
		
	},
	methods:{
		inizializandoScrollama() {
			this.scrolly = d3.select('#scrolly-portada');
			this.step = this.scrolly.selectAll('div.rellax-contenido.step');

			this.scroller = scrollama()
			this.scroller.setup({
				step: "#scrolly-portada .step",
				offset: 0.1,
				debug: false
				})
				.onStepEnter(this.cambiandoPaso);;

			this.reescalandoPantalla();

			window.addEventListener("resize", this.reescalandoPantalla);

		},
		reescalandoPantalla() {
			var stepH = Math.floor(window.innerHeight * 0.95);
			this.step.style("min-height", stepH + "px");
			/*
			var altura_fondo_portada = window.innerHeight / 2;
			var margin_top_fondo_portada = (window.innerHeight - altura_fondo_portada) ;

			this.fondo_portada
				.style("height", altura_fondo_portada + "px")
				.style("top", margin_top_fondo_portada + "px");
			*/
			// 3. tell scrollama to update new element dimensions
			this.scroller.resize();
		},
		cambiandoPaso(response) {
			this.paso=response.index+1;
			this.step.classed("activo", function(d, i) {
				return i === response.index;
			});
			if(this.paso==1){
				d3.select("div#scrolly-portada").transition().duration(200).style("background-color","#fff")
			}
			else if(this.paso==2){
				d3.select("div#scrolly-portada").transition().duration(200).style("background-color","#8a8a8a")
			}
			else if(this.paso==3){
				d3.select("div#scrolly-portada").transition().duration(200).style("background-color","yellow")
			}
			else if(this.paso==4){
				d3.select("div#scrolly-portada").transition().duration(200).style("background-color","#000")
			}

		},

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


#scrolly-portada {
	width: 100%;
	position: relative;
	
	div.rellax-contenido.step{
		div.txt {
			mix-blend-mode: difference;
			color:rgb(87, 0, 109);
			font-size : 60px;
			font-weight: 700;
			position: -webkit-sticky;
			position: sticky;
			top: 0;
			padding: 50px;
			z-index: 1;
			&.cont-typing{
				height: 100vh;
				/*This part is important for centering*/
				display: flex;
				align-items: center;
				justify-content: center;
			}
			h1.typing{
				opacity: 0;
			}			
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
		&.activo{
			div.txt {
			&.cont-typing{
				height: 100vh;
				/*This part is important for centering*/
				display: flex;
				align-items: center;
				justify-content: center;
				h1.typing {
					
					animation-name: animText;
					animation-duration: 1.7s;
					animation-timing-function: ease-in-out;
					animation-fill-mode: forwards;
				}

				@keyframes animText {
					100% {
						transform: translateY(0);
						opacity: 1;
						-webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
						clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
					}
					0% {
						transform: translateY(50px);
						opacity: 0;
						-webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
						clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
					}
				}

			}
			
		}

		}
		
	}
}
	


</style>
