<template>
    <div class="renglon-picto" :id="`picto-${cardinal}`">
        <div class="afeccion">
            <div><span class="cardinal" :style="{color: color}">{{cardinal}}.</span> <span>{{nombre_afeccion}}</span></div>
        </div>
        <div class="cantidad">
            <p><span :style="{color: color, border:`1px solid ${color}`}">{{cantidad}}</span></p>
        </div>
        <div class="pictos">
            <img v-for="x in cantidad" :key="x" :src="require(`@/assets/img/iconos/${picto}`)">
        </div>
    </div>
</template>
<script >
import * as d3 from 'd3';

export default {
    name: 'GraficosPictos',
    props: {
        nombre_afeccion: String,
        cantidad: Number,
        cardinal: {
            type: Number,
            default: 0
        },
        picto: String,
        color: String
    },

    mounted(){
d3.selectAll(`#picto-${this.cardinal} div.pictos img`)
                    .style("opacity",0)
                    .interrupt()
                    .transition()
                    .delay((d,i) => 10*i)
                    .style("opacity",1)
    },
    methods: {
        
    },
    watch:{
        cantidad(){ 
            setTimeout(()=>{
                d3.selectAll(`#picto-${this.cardinal} div.pictos img`)
                    .style("opacity",0)
                    .interrupt()
                    .transition()
                    .delay((d,i) => 10*i)
                    .style("opacity",1)
            }, 40)
            
                
        }
    }

}
</script>
<style lang="scss" scoped>
.renglon-picto{
    display: flex;
    margin-top: 40px;
    font-size: 16px;
    &:nth-child(1){
		margin-top: 0;
	}
    div.afeccion{
        width: 40%;
        div{
            color:#fff;
            margin-top: 0;
            display: flex;
            
            span{
                color:#fff;
                &.cardinal{
                    font-weight: 700;
                    margin-right: 20px;
                }
                

            }
        }
    }
    div.cantidad{
        width:20%;
        p {
            text-align: right;
            margin-top:0;
            padding: 0 20px;
            span{
                border: 1px solid #FDA1C9;
                border-radius: 50%;
                display: inline-block;
                width: 30px;
                height: 30px;
                text-align: center;
                font-weight: 700;
            }
        }
    }
    div.pictos{
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        img{
            margin: 2px;
            opacity: 0;
        }
    }


}
</style>