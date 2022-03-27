<template>
    <div class="container main mapa-testimonio" >
        <div class="contenedor-mapa-testimonios" :id="id">

        </div>
        <div class="contenedor-testimonio">
            <p class="provincia">
                {{provincia_seleccionada}}
            </p>
            <p class="hospital">
                {{hospital_seleccionado}}
            </p>
            <p v-if="anio_seleccionado" class="anio">
                {{anio_seleccionado!="No puso el año "?parseInt(anio_seleccionado):""}}
            </p>
            <p class="testimonio">
                {{testimonio_seleccionado}}
            </p>
        </div>
    </div>
</template>
<script>
import * as d3 from 'd3';
import * as L from 'leaflet';
import "@/../node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.js"
export default {
    name: 'MapaTestimonios',
    props: {
        paso_inicial:{
            type:Number,
            default:-1
        },
        direccion: String,
        id: String
    },
    data(){
        return {
            fronteras_cuba: L.latLngBounds(
                L.latLng(24, -85),
                L.latLng(19, -74)
            ),
            escala_circulos: .2,
            testimonio_seleccionado:"",
            provincia_seleccionada: "",
            hospital_seleccionado:"Selecciona un testimonio en el mapa para para conocer los detalles",
            anio_seleccionado:""

        }
    },
    mounted(){

        this.mapa = L.map(this.id,{scrollWheelZoom:true,zoomSnap:.25})
            .fitBounds(this.fronteras_cuba)
            .setMaxBounds(this.fronteras_cuba)
        let myFilter = ['invert:95%',"contrast:105%","opacity:40%","hue:250deg","bright:115%",'sepia:10%']

        L.tileLayer.colorFilter(
            'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
            filter:myFilter,
            minZoom: 6,
            maxZoom: 18,
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.mapa);
        this.mapa.on('zoomend', (e) =>{
            console.log(this.mapa.getZoom())
            if(this.mapa.getZoom()>=12){
                this.escala_circulos = this.mapa.getZoom() *.09;
            }
            else if(this.mapa.getZoom()<12 && this.mapa.getZoom()>=10){
                this.escala_circulos = this.mapa.getZoom() *.06;
            }
            else if(this.mapa.getZoom()<10 && this.mapa.getZoom()>=8){
                this.escala_circulos = this.mapa.getZoom() *.04;
            }
            else{
                this.escala_circulos = this.mapa.getZoom() *.02;
            }
        });
        d3.select(this.mapa.getPanes().overlayPane).select("svg").remove()
        L.svg({clickable:true}).addTo(this.mapa);
        this.svg = d3.select("#"+this.id).select("svg").attr("pointer-events", "auto"),
        this.g = this.svg.select("g").attr("class", "leaflet-zoom-hide");

        d3.csv("/data/testimonios_mapa_v2.csv")
            .then((data)=>{
                console.log(data)
                
                this.datos_hospitales=data.sort((a, b) => b.Testimonio.length - a.Testimonio.length);
                
                this.circulos = this.svg
                    .selectAll("circulos")
                    .data(this.datos_hospitales)
                    .enter()
                    .append("circle")
                    .attr("cx", (d)=>{ return this.mapa.latLngToLayerPoint([d.Long, d.Lat]).x })
                    .attr("cy", (d)=>{ return this.mapa.latLngToLayerPoint([d.Long, d.Lat]).y })
                    .attr("r", (d)=>this.escala_circulos * Math.sqrt(d.Testimonio.length))
                    .style("fill", "#fff")
                    .style("stroke-width", 1)
                    .style("stroke-opacity", .4)
                    .style("stroke","#4a129c")
                    .style("fill-opacity", .4)
                    .style("cursor", "pointer")
                    .on("click",(e,d)=>{
                        this.testimonio_seleccionado = d.Testimonio;
                        this.provincia_seleccionada = d.Provincia
                        this.hospital_seleccionado = d.Hospital
                        this.anio_seleccionado = d.Anio
                        this.circulos
                            .style("fill-opacity", .4)
                        d3.select(e.target)
                            .transition()
                            .duration(200)
                            .style("fill-opacity", 1)
                    });

                this.mapa.on("moveend", this.update)


            })
    },
    methods:{
        update(){
            this.circulos
                .attr("cx", (d)=>{ return this.mapa.latLngToLayerPoint([d.Long, d.Lat]).x })
                .attr("cy", (d)=>{ return this.mapa.latLngToLayerPoint([d.Long, d.Lat]).y })
        }
    },
    watch:{
        escala_circulos(){
            
            this.circulos
                .attr("r", (d)=>this.escala_circulos * Math.sqrt(d.Testimonio.length))
                
        },

    }

}
</script>
<style scoped lang="scss">
@import "~leaflet/dist/leaflet.css";
@import "../../scss/_variables";

div.mapa-testimonio{
    display: flex;
    flex-wrap: nowrap;
    @media screen and (max-width: map-get($media-queries-limit, "mobile")) {
		flex-wrap: wrap;
	}
    > *{
        flex:1;
        @media screen and (max-width: map-get($media-queries-limit, "mobile")) {
            flex: 1 1 100%;
        }
        padding: 15px;
    }
    div.contenedor-mapa-testimonios{
        width: calc(100% - 30px);
        height: calc(100vh - 200px);
        @media screen and (max-width: map-get($media-queries-limit, "mobile")) {
            max-height: 400px;
        }
        background-color:#4a129c;
        z-index: 0;
    }
    div.contenedor-testimonio{
        p{
            &.provincia{
                color: #FDA1C9;
                font-size: 32px;
                font-weight: 600;
            }
            &.hospital{
                color: #fff;
                font-size: 16px;
                font-weight: 600;
            }
            &.anio{
                color: #fff;
                font-size: 16px;
            }
            &{
                color: #fff;
                font-size: 16px;
            }

        }
    }
}

</style>
