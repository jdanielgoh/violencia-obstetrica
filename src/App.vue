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
    name:"App",
    metaInfo: {

        htmlAttrs: {
            lang: 'es'
        },
        meta: [
            { charset: 'utf-8' },
            { property: 'og:title', content: "Partos Rotos"},
            { property: 'og:title', content: "Especial de violencia obstétrica en Cuba"},
            {property: 'og:type', content: 'website'},    
            {name: 'robots', content: 'index,follow'} 
        ]
    },
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
