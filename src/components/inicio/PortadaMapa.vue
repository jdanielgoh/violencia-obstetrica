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
            default:1
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
        let tileLayer = L.tileLayer.colorFilter(
            'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
            filter:myFilter,

            minZoom: 6,
            maxZoom: 18,
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.mapa);

        d3.json("data/hospitales_completos.geojson")
            .then((data)=>{
                this.datos_hospitales=data;
              

                this.layers["datos_hospitales"]=L.geoJSON(this.datos_hospitales,{
                    pointToLayer: (feature, latlng) => {
                        return L.circleMarker(latlng, {
                            ...this.estilo_discos, 
                            ...{radius: this.escala_circulos * Math.sqrt(feature.properties.epistomia) 
                            }
                        });
                    },
                    onEachFeature: (feature, layer) => {
                        layer.on("click",(d) => this.clickCirculo(feature) )
                    }
                })
                .addTo(this.mapa)
            })

    }
}
</script>
<style scoped lang="scss">
@import "~leaflet/dist/leaflet.css";
div.contenedor-mapa{
    width:100%;
    height:100vh;
    background-color:#4a129c;
    z-index: 0;
}
</style>
