<template>
    <div class="renglon-picto" :id="`picto-${cardinal}`">
        <div class="afeccion">
            <div><span class="cardinal">{{cardinal}}.</span> <span>{{nombre_afeccion}}</span></div>
        </div>
        <div class="cantidad">
            <p><span>{{cantidad}}</span></p>
        </div>
        <div class="pictos">
            <span v-for="x in cantidad" :key="x"></span>

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
    },

    mounted(){

    },
    methods: {
        
    },
    watch:{
        
    }

}
</script>
<style lang="scss" scoped>
.renglon-picto{
    display: flex;
    margin-top: 40px;
    font-size: 16px;
    div.afeccion{
        width: 40%;
        div{
            color:#fff;
            margin-top: 0;
            display: flex;
            
            span{
                color:#fff;
                &.cardinal{
                    color:#FDA1C9;
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
                color:#FDA1C9;
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
        span{
            width: percentage(1/20);
            background:white;
            border-radius: 50%;
            height: 20px;
        }
    }


}
</style>