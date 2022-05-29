<template>
	<div class="testimonios">
		<div class="testimonios-lista" >
			<div class="container main" id="historietas">
				<h3 class="blanco">
					Historias ilustradas
					<hr/>
				</h3>
				<div class="paso" v-viewer="opciones_viewer"
					>
					<img
					v-for="(src, i) in historietas"
					:key="i"
					class="imagen"
					:src="src"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//import VueRellax from "vue-rellax";

import VueViewer from 'v-viewer'
import Vue from 'vue'

Vue.use(VueViewer)



export default {
	name: 'Historietas',
	metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Historietas',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos'
    },
	
	
	data(){
		return {
			
			historietas: [
				require('@/assets/img/testimonios/COMIC-NANCY.jpeg'),
				require('@/assets/img/testimonios/COMIC-YARI.jpeg'),
				require('@/assets/img/testimonios/COMIC-LISANDRA.jpeg'),
				require('@/assets/img/testimonios/COMIC-MAYLI.jpeg')

			],
			opciones_viewer:{ "inline": false, "button": true, "navbar": false, 
			"title": false, "toolbar": false, "tooltip": true, "movable": true, 
			"zoomable": true, "rotatable": false, "scalable": false, "transition": true, 
			"fullscreen": true, "keyboard": false },
			
		}
	},
	mounted(){
		


	},
	
	
  
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