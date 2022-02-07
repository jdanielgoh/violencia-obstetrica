<template>
    <div id="audios">
    </div>
</template>
<script>
import {mapState} from "vuex"
var p5 = window.p5
export default{
    name: "PortadaAudios",
    data(){
        return {
            aumento_contador_reproducciones: true
        }
    },
    watch:{
        contador_reproducciones(){
            this.aumento_contador_reproducciones = true
        }
    },

    
    computed: {
        ...mapState(["reproduciendo_audios","contador_reproducciones"])
    },
    mounted(){
        var audios = [];
        var audio_actual;
        var contador_audio = 4;

        this.script = (p5)=>{
            p5.preload = () => {
                for(var i = 2; i < 11; i++){
                    audios.push(p5.loadSound(require(`@/assets/audios/Audio ${i}.mp3`)))
                }
            }
            p5.setup = () => {
                const canvas=p5.createCanvas(document.getElementById("audios").clientWidth,document.getElementById("audios").clientHeight);
				canvas.parent("audios")
                audio_actual = audios[contador_audio]
                p5.frameRate(4)
                //audio_actual.onended(reproducirSiguienteAudio(this.reproduciendo_audios));
            }
            p5.draw = () => {
                encendidoApagado(this.reproduciendo_audios)
            }
            
            var reproducirSiguienteAudio = (esta_reproduciendo)=>{
                if(esta_reproduciendo){
                    contador_audio = (contador_audio + 1) % audios.length
                    audio_actual = audios[contador_audio]
                    audio_actual.play()
                    audio_actual.onended(reproducirSiguienteAudio(esta_reproduciendo))
                }
                
            }
            const encendidoApagado = (esta_reproduciendo) => {
                console.log(this.reproduciendo_audios, this.aumento_contador_reproducciones,this.contador_reproducciones)
                if(this.reproduciendo_audios && this.aumento_contador_reproducciones){
                    audio_actual.pause()
                }
                else if(!this.reproduciendo_audios && this.aumento_contador_reproducciones){
                    audio_actual.play()


                }
                this.aumento_contador_reproducciones = false

            }
        }
        this.scriptp5 = new p5(this.script)
    },
    destroyed(){
        delete this.scriptp5
    }


}
</script>
<style lang="scss">
#audios{
    position: fixed;
    width: 0%;
    height: 0;
}
</style>