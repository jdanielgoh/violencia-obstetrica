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
	
	watch:{
        $route (to, from){
            console.log(to.name)
            if(to.name == "Inicio"){
                this.$store.commit("encenderReproduccionAudios");
            }
            else{
                this.$store.commit("apagarReproduccionAudios");
            }
            this.$store.commit("aumentarContadorReproducciones");

        }
    },
    mounted(){
        if(this.$route.name == "Inicio"){
            this.$store.commit("encenderReproduccionAudios");
        }
        else{
            this.$store.commit("apagarReproduccionAudios");
        }
        this.$store.commit("aumentarContadorReproducciones");
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
