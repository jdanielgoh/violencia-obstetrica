<template>
	<div id="app">
		<Encabezado/>
		
		<router-view class="vista"/>
	</div>
</template>
<script>
import Encabezado from '@/components/Encabezado.vue'
import { mapMutations,mapState } from 'vuex'

export default {
	components:{
		Encabezado
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
	watch:{
        $route (to, from){
            console.log(to)
            if(to.name=="Inicio"){
                this.reproduciendo_audios = true
            }
            else{this.reproduciendo_audios=false}
        }
    },
    mounted(){
            if(this.$route.name=="Inicio"){
                this.reproduciendo_audios = true
            }
            else{this.reproduciendo_audios=false}
    }
}
</script>
<style lang="scss">
@import '@/scss/app.scss';
body{margin:0}
#app {
  font-family: "Raleway";
  .vista{
    padding-top:200px;
  }

}


</style>
