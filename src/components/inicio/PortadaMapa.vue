<template>
    <div class="contenedor-mapa" :id="id">

    </div>
</template>
<script>
import * as d3 from 'd3';
import * as L from 'leaflet';
import "@/../node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.js"
export default {
    name: 'PortadaMapa',
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
            estilo_discos:{
                'className': 'hospitales',
                "color": "#fff",
                "weight": 1,
                "opacity": 1,
                fillOpacity: .6,
                fillColor: "#fff"},
            layers: {},
            escala_circulos: 2

        }
    },
    mounted(){
        //this.fit_option={ paddingTopLeft: [0, 100], paddingBottomRight:[ 0,0],duration:this.duracion_transiciones } 

        this.mapa = L.map(this.id,{scrollWheelZoom:false,zoomSnap:.25})
            .fitBounds(this.fronteras_cuba)
            .setMaxBounds(this.fronteras_cuba)
        let myFilter = [
            'invert:95%',
            "contrast:105%",
            "opacity:40%",
            "hue:270deg",
            //'saturate:320%',
            "bright:150%"
            ,'sepia:10%']
        L.tileLayer.colorFilter(
            'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
            filter:myFilter,

            minZoom: 6,
            maxZoom: 18,
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.mapa);
        d3.select(this.mapa.getPanes().overlayPane).select("svg").remove()
        L.svg({clickable:true}).addTo(this.mapa);
        this.svg = d3.select("#"+this.id).select("svg").attr("pointer-events", "auto"),
        this.g = this.svg.select("g").attr("class", "leaflet-zoom-hide");

        d3.json("data/hospitales_completos.geojson")
            .then((data)=>{
                this.datos_hospitales=data;
                console.log(data)
                /*this.layers["datos_hospitales"]=L.geoJSON(this.datos_hospitales,{
                    pointToLayer: (feature, latlng) => {
                        return L.circleMarker(latlng, {
                            ...this.estilo_discos, 
                            ...{radius: this.escala_circulos * Math.sqrt(feature.properties.epistomia) 
                            }
                        });
                    },
                    onEachFeature: (feature, layer) => {
                        layer.on("click",(d) => console.log(feature) )
                    }
                })
                .addTo(this.mapa)*/
                this.circulos = this.svg
                    .selectAll("circulos")
                    .data(this.datos_hospitales.features)
                    .enter()
                    .append("circle")
                    .attr("cx", (d)=>{ return this.mapa.latLngToLayerPoint([d.properties.lon, d.properties.lat]).x })
                    .attr("cy", (d)=>{ return this.mapa.latLngToLayerPoint([d.properties.lon, d.properties.lat]).y })
                    .attr("r", (d)=>this.escala_circulos * Math.sqrt(d.properties.epistomia))
                    .style("fill", "#fff")
                    .attr("stroke-width", .3)
                    .style("fill-opacity", .4)
                this.mapa.on("moveend", this.update)


            })
    },
    methods:{
        update(){
            this.circulos
                .attr("cx", (d)=>{ return this.mapa.latLngToLayerPoint([d.properties.lon, d.properties.lat]).x })
                .attr("cy", (d)=>{ return this.mapa.latLngToLayerPoint([d.properties.lon, d.properties.lat]).y })
        }
    },
    watch:{
        paso_inicial:function(new_val){
        console.log(new_val)
        this.svg_mapa=d3.select("div#"+this.id).select("div.leaflet-pane.leaflet-overlay-pane svg");
        var tiempos = 3.0;
        if(new_val == -1){
            

            
            this.mapa.flyToBounds(this.fronteras_cuba)
            

        }
        else if(new_val == 0){
            this.circulos
                .transition()
                .duration(tiempos * 1000)
                .style("fill-opacity", .0)
            this.mapa.flyTo(
                [23.117317581212045, -82.36697771391871],
                12,{
                    animate: true,
                    duration: tiempos
            })
            this.circulos
                .transition()
                .delay(tiempos * 1000)
                .style("fill-opacity", .4)
            setTimeout(()=>{
                this.mapa.flyTo(
                    [21.376211072560906, -77.95336485495653],
                    12,{
                        animate: true,
                        duration: tiempos
                })

            },tiempos*1200)
            setTimeout(()=>{
                this.mapa.flyTo(
                    [22.411716930689064, -83.69826499918088],
                    12,{
                        animate: true,
                        duration: tiempos
                })

            },tiempos*2400)

        }
    }
}

}
</script>
<style scoped lang="scss">
@import "~leaflet/dist/leaflet.css";
div.contenedor-mapa{
    width:100%;
    height: calc(100vh - 200px);
    background-color:#4a129c;
    z-index: 0;
}
</style>
