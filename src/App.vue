<template>
	<div id="app">
		<Encabezado/>
		
		<router-view class="vista"/>
        <Pie/>
	</div>
</template>
<script>
import Encabezado from '@/components/Encabezado.vue'
import Pie from '@/components/Pie.vue'

export default {
	components:{
		Encabezado,
        Pie,
	},
	
	watch:{
        $route (to, from){
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
