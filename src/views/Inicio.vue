<template>
	<div class="inicio">
		<button @click="clickBotonReproduccion">{{reproduciendo_audios ? "Pausa": "Reproducir"}}</button>

		<PortadaAudios/>
		<Portada/>
		<PortadaMapa
		:id="'mapa-cuba-inicio'"
		/>

		
	</div>
</template>

<script>
// @ is an alias to /src
import Portada from '@/components/inicio/Portada.vue'
import PortadaAudios from '@/components/inicio/PortadaAudios.vue'
import PortadaMapa from '@/components/inicio/PortadaMapa.vue'

import { mapMutations,mapState } from 'vuex'

export default {
	name: 'Inicio',
	components: {
		Portada,
		PortadaAudios,
		PortadaMapa
	},
	computed: {
        ...mapState(["reproduciendo_audios"])
    },
	methods:{
		
		...mapMutations(["encenderApagarReproduccionAudios","aumentarContadorReproducciones"]),
		clickBotonReproduccion(){
			this.encenderApagarReproduccionAudios();
			this.aumentarContadorReproducciones();

		}
	},

}
</script>
<style scoped lang="scss">
.inicio{
  	background: #4A2582;
}
</style>