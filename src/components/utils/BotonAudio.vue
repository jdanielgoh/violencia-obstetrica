<template>
    <div v-if="es_inicio">
        <button class="boton-audio" @click="togglePlay()" :class="{encendido:esta_reproduciendo}">
            <img v-if="!esta_reproduciendo" :src="require('@/assets/img/iconos/encendido.svg')"/>
            <img v-if="esta_reproduciendo" :src="require('@/assets/img/iconos/apagado.svg')"/>

        </button>
        <div id="audio">
            
        </div>
    </div>
</template>
<script>
//import {mapState} from "vuex"
export default{
    name: "BotonAudio",
    data(){
        return {
            esta_reproduciendo: false,
            es_inicio: true
        }
    },

    mounted(){
        this.es_inicio = this.$route.name=="Inicio"? true:false
        this.audio = new Audio(require(`@/assets/audios/CLIP COMPLETO.mp3`))
        this.audio.onplaying = ()=> {
            this.esta_reproduciendo = true;
        };
        this.audio.onpause = ()=> {
            this.esta_reproduciendo = false;
        };
    
       
    },
    methods: {
        togglePlay(){
            this.esta_reproduciendo ? this.audio.pause() : this.audio.play()
        }
    },
    watch:{
        $route (to){
            if(to.name=="Inicio"){
                this.es_inicio = true
            }
            else{
                this.es_inicio = false
                this.audio.pause()
            }

            this.esta_reproduciendo = false;
            console.log(this.esta_reproduciendo)

        },
        
    },



}
</script>
<style lang="scss" scoped>
@import "../../scss/_variables";

#audios{
    position: fixed;
    width: 0%;
    height: 0;
}
.boton-audio{
    border: 1px solid #FFFFFF;
    border-radius: 24px;
    background: none;
    color: #FFFFFF;
    font-size: 14px;
    padding:12px 24px;
    @media screen and (max-width: map-get($media-queries-limit, "mobile")) {
		padding: 12px 12px;
	}
    text-decoration: none;
    line-height: 0;
    margin-right: 15px;
    &.encendido{
         background:#fff;

    }
    img{
            width: 20px;

    }
}
</style>