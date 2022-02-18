<template>
	<div class="inicio">
		<button @click="clickBotonReproduccion">{{reproduciendo_audios ? "Pausa": "Reproducir"}}</button>

		<PortadaAudios2/>
		<Portada/>
		<PortadaScroll
		/>

		
	</div>
</template>

<script>
// @ is an alias to /src
import Portada from '@/components/inicio/Portada.vue'
import PortadaAudios2 from '@/components/inicio/PortadaAudios2.vue'
import PortadaScroll from '@/components/inicio/PortadaScroll.vue'

import { mapMutations,mapState } from 'vuex'

export default {
	name: 'Inicio',
	components: {
		Portada,
		PortadaAudios2,
		PortadaScroll
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