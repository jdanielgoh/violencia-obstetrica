<template>
    <div id="audios">
        <audio
            :src="require(`@/assets/audios/Audio ${6}.mp3`)"
            id="my_audio" 
            loop="loop" 
            autoplay="autoplay"
            muted
        />
    </div>
</template>
<script>
//import {mapState} from "vuex"
export default{
    name: "PortadaAudios2",
    data(){
        return {
        }
    },

    mounted(){
        window.clicks = function(){
            var audio = document.getElementById("my_audio")
            //console.log(audio)
            audio.play()
        }
        
        


    },



}
</script>
<style lang="scss">
#audios{
    position: fixed;
    width: 0%;
    height: 0;
}
</style>