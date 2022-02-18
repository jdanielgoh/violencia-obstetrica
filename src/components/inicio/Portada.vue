<template>
	
  	<div id="scrolly-portada" class="container main">
		<div class="paso" data-step="1">
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-10"
				data-rellax-percentage="0."
			>
				<ImagenPie 
					:link='"portada-rellax/0002.png"'
					:pie="'nombre de persona'"
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
				data-rellax-percentage="-.5">
				<ImagenPie 
					:link='"portada-rellax/0003.png"'
					:pie="'nombre de persona'"
				/>
			</div>
		</div>
		<div class="paso" data-step="3">
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-5"
				data-rellax-percentage="0.">
				<ImagenPie 
					:link='"portada-rellax/0004.png"'
					:pie="'nombre de persona'"
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
					:link='"portada-rellax/0005.png"'
					:pie="'nombre de persona'"
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
					:link='"portada-rellax/0006.png"'
					:pie="'nombre de persona'"
				/>
			</div>
			<div class="bullet  transicionable">
				<p class="cita">Con tan solo 19 años estuve 12 horas en una inducción de parto.  Si no es por una amistad que encontró mi mamá, me muero. Mi niño se hizo caca en el vientre. </p>
			</div>
		</div>
		<div class="paso" data-step="6">
			<div class="bullet transicionable">
				<p class="cita">Tuve que tener a mi hija y por poco me muero. Estuve un mes en terapia, y en el cuarto no había, ni ventanas ,ni puertas, ni baño.</p>
			</div>
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="9"
				data-rellax-percentage="-.5">
				<ImagenPie 
					:link='"portada-rellax/0007.png"'
					:pie="'nombre de persona'"
				/>
			</div>
		</div>
		<div class="paso" data-step="7">
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-5"
				data-rellax-percentage="0."
			>
				<ImagenPie 
					:link='"portada-rellax/0008.png"'
					:pie="'nombre de persona'"
				/>
			</div>
			<div class="bullet  transicionable">
				<p class="cita">Fui primeriza y pasé muchas horas sin dilatar hasta que me hicieron la cesárea. Mi hija tuvo sufrimiento fetal y como no lloró, la tuvieron que entubar, cogió una bacteria en la incubación.</p>
			</div>
		</div>
		<div class="paso" data-step="8">
			<div class="bullet transicionable">
				<p class="cita">El médico se fue a dormir la noche entera y por la mañana no le dio tiempo de hacerme la cesárea . Tuve que parir a mi hijo que venía pelviano. </p>
			</div>
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-9"
				data-rellax-percentage="-.5">
				<ImagenPie 
					:link='"portada-rellax/0009.png"'
					:pie="'nombre de persona'"
				/>
			</div>
		</div>
		<div class="paso" data-step="9">
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-10"
				data-rellax-percentage="-0.3"
			>
				<ImagenPie 
					:link='"portada-rellax/0010.png"'
					:pie="'nombre de persona'"
				/>
			</div>
			<div class="bullet  transicionable">
				<p class="cita">Me tocó un doctor grosero. Estuve 16horas con dolores porque me indujeron el parto. Soy diabética y allí estuve sola, en aquel salón, muriendo de dolores. Todos fueron a dormir. Creía que iba a morir allí sola.</p>
			</div>
		</div>
		<div class="paso" data-step="10">
			<div class="bullet transicionable">
				<p class="cita">Aún no me recupero de mi experiencia en el parto. Es penoso que un momento tan importante y hermoso se pueda convertir en algo traumático.</p>
			</div>
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="-8"
				data-rellax-percentage="0">
				<ImagenPie 
					:link='"portada-rellax/0011.png"'
					:pie="'nombre de persona'"
				/>
			</div>
		</div>
		<div class="paso" data-step="11">
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="8"
				data-rellax-percentage="0.3"
			>
				<ImagenPie 
					:link='"portada-rellax/0012.png"'
					:pie="'nombre de persona'"
				/>
			</div>
			<div class="bullet  transicionable">
				<p class="cita">Mi niña producto del mal trabajo de parto y el sufrimiento fetal padeció por años de epilepsia.</p>
			</div>
		</div>
		<div class="paso" data-step="12">
			<div class="bullet transicionable">
				<p class="cita">Soy enfermera y testigo de esto cuando pari a mi hija. Tuve que rogarle a los médicos para que no se fueran a comer y me atendieran.  Tuve que sujetar mis piernas y parir sola. Por el tiempo que estuvo mi hija en el canal del parto sin que me atendieran, nació con un cefalohematoma.</p>
			</div>
			<div class="imagen" v-rellax="rellax" 
				data-rellax-speed="5"
				data-rellax-percentage="-.5">
				<ImagenPie 
					:link='"portada-rellax/0013.png"'
					:pie="'nombre de persona'"
				/>
			</div>
		</div>
  	</div>
</template>

<script>
import Vue from "vue"
import VueRellax from "vue-rellax";
import ImagenPie from "@/components/ImagenPie.vue"

import scrollama from 'scrollama';
import * as d3 from "d3";
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
		this.inizializandoScrollama()
		
	},
	methods:{
		inizializandoScrollama() {
			this.scrolly = d3.select('#scrolly-portada');
			this.step = this.scrolly.selectAll('div.paso');

			this.scroller = scrollama()
			this.scroller.setup({
				step: "#scrolly-portada .paso",
				offset: 0.5,
				debug: false
				})
				.onStepEnter(this.cambiandoPaso);;

			this.reescalandoPantalla();

			window.addEventListener("resize", this.reescalandoPantalla);

		},
		reescalandoPantalla() {
			var stepH = Math.floor(window.innerHeight * 0.95);
			//this.step.style("min-height", stepH + "px");
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
				//d3.select("div#scrolly-portada").transition().duration(200).style("background-color","#fff")
			}
			else if(this.paso==2){
				//d3.select("div#scrolly-portada").transition().duration(200).style("background-color","#8a8a8a")
			}
			else if(this.paso==3){
				//d3.select("div#scrolly-portada").transition().duration(200).style("background-color","yellow")
			}
			else if(this.paso==4){
				//d3.select("div#scrolly-portada").transition().duration(200).style("background-color","#000")
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
		/*&.activo{
			.bullet{
				p{
					animation-name: animText;
					animation-duration: .5s;
					animation-timing-function: ease-in-out;
					animation-fill-mode: forwards;
				}
				@keyframes animText {
					100% {
						transform: translateY(0);
						opacity: 1;
						-webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
						clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
					}
					0% {
						transform: translateY(50px);
						opacity: 0;
						-webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
						clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
					}
				}
			}
		}*/
	}
}
	


</style>
