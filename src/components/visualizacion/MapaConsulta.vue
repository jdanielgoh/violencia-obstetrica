<template>
    <div class="contenedor-vis-consulta">
        <div class="contenedor-selectores container main">
            <div class="selector">
                <label>Selecciona un hospital</label>
                <select v-model="hospital_seleccionado">
                    <option v-for="(hospital, cve) in lista_hospitales" :key="cve" :value="hospital[1]">
                        {{hospital[0]}}
                    </option>
                </select>
            </div>
            <div class="selector">
                <label>Selecciona un tipo de afección</label>
                <select v-model="afeccion_seleccionada">
                    <option v-for="(afeccion, cve) in afecciones" :key="cve" v-bind:value="afeccion[1]">
                        {{afeccion[0]}}
                    </option>
                </select>
            </div>
        </div>
        <div class="contenedor-mapa container main" :id="id">

        </div>
        <div class="contenedor-graficos container main" id="contenedores-pictos">
            <GraficosPictos
                v-for="(col, i) in columnas"
                :key="i"
                :cardinal="i+1"
                :cantidad="data_seleccionada_grafica[col]"
                :nombre_afeccion="diccionario_total[afeccion_seleccionada][col]"
            />
        </div>

    </div>
</template>
<script>
import * as d3 from 'd3';
import * as L from 'leaflet';
import GraficosPictos from "@/components/visualizacion/GraficosPictos.vue"

import "@/../node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.js"
export default {
    name: 'MapaConsulta',
    components: {
        GraficosPictos
    },
    props: {
        id: String
    },
    data(){
        return {
            fronteras_cuba: L.latLngBounds(
                L.latLng(26, -86),
                L.latLng(16, -73)
            ),
            no_seleccion :0,
            
            lista_hospitales: [["Todos", 0]],
            hospital_seleccionado:0,
            escala_circulos: 2,
            afecciones: [
                ["Maltratos","maltratos"],
                ["Secuelas","secuelas"],
                ["Consentimiento","consentimiento"],
                ["Dilatación_Manual","dilatacion_manual"],
                ["Episiotomía","episiotomia"],
                ["Maniobra de Kristeller","kristeller"],
                
            ],
            afeccion_seleccionada:"maltratos",
            diccionario_total:{
                consentimiento: {
                    consentimiento_no_para_ninguno:'No, para ninguno',
                    consentimiento_si_para_algunos: 'Sí, para algunos',
                    consentimiento_si_para_todos: 'Sí, para todos'
                },
                dilatacion_manual: {
                    dilatacion_manual: 'Dilatación_Manual'
                },
                episiotomia: {
                    episiotomia: 'Episiotomía'
                },
                kristeller: {
                    kristeller: 'Kristeller'
                },
                maltratos: {
                    'maltratos_sobrenombres': 'Te llamaron por sobrenombres o diminutivos',
                    'maltratos_burlas': 'Se burlaron de ti',
                    'maltratos_voz_alta': 'Te hablaron en voz alta de modo grosero',
                    'maltratos_ignorar': 'Ignoraron algo que les pediste',
                    'maltratos_negacion': 'Te dijeron que no explícitamente a algo que pediste',
                    'maltratos_golpes': 'Te dieron golpes, sacudidas, empujones',
                    'maltratos_riesgo_hije': 'Te dijeron que estabas poniendo en riesgo a tu hijo/a',
                    'maltratos_culpa': 'Te culparon por situaciones ocurridas en el nacimiento',
                    'maltratos_amenaza': 'Te amenazaron',
                    'maltratos_otros': 'Otro tipo de maltrato',
                },
                secuelas: {
                    'secuelas_conexion': 'Dificultad para conectar emocionalmente con tu hijo/a',
                    'secuelas_lactancia': 'Problemas en la lactancia',
                    'secuelas_rechazo': 'Rechazo al contacto con tu hijo/a',
                    'secuelas_miedo_insuficiencia': 'Miedo a no ser "buena madre"',
                    'secuelas_miedo_salud': 'Miedo frente al estado de salud de tu hijo/a',
                    'secuelas_dificultad_conexion': 'Rechazo frente a las tareas de cuidado y crianza de tu hijo/a',
                    'secuelas_desgano': 'Desgano y tristeza en situaciones compartidas con tu hijo/a (lactancia, juegos, etc)',
                    'secuelas_temor_medico': 'Tener dudas o temores sobre volver a salir embarazada/parir',
                    'secuelas_negacion': 'Negarte rotundamente a volver a salir embarazada/parir',
                    'secuelas_desconfianza': 'Desconfianza en el sistema médico y los/as profesionales de la medicina',
                    'secuelas_miedo_bienestar': 'Miedo por tu bienestar y/o de tu hijo/a',
                }
            },
            columnas: Array,
            data_seleccionada_grafica:Array

        }
    },
    mounted(){
        this.mapa = L.map(this.id,{scrollWheelZoom:true,zoomSnap:.25})
            .fitBounds(this.fronteras_cuba)
            .setMaxBounds(this.fronteras_cuba)
        let myFilter = ['invert:95%',"contrast:105%","opacity:40%","hue:270deg","bright:150%",'sepia:10%']
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
                this.escala_circulos = this.mapa.getZoom() *.9;
            }
            else if(this.mapa.getZoom()<12 && this.mapa.getZoom()>=10){
                this.escala_circulos = this.mapa.getZoom() *.6;
            }
            else if(this.mapa.getZoom()<10 && this.mapa.getZoom()>=8){
                this.escala_circulos = this.mapa.getZoom() *.4;
            }
            else{
                this.escala_circulos = this.mapa.getZoom() *.2;
            }
        });
        d3.select(this.mapa.getPanes().overlayPane).select("svg").remove()
        L.svg({clickable:true}).addTo(this.mapa);
        this.svg = d3.select("#"+this.id).select("svg").attr("pointer-events", "auto"),
        d3.json("data/hospitales_completos.geojson")
            .then((data) => {
                data.features.forEach((d, i)=>{
                    d.properties.id = i +1
                })
                this.lista_hospitales = this.lista_hospitales.concat(data.features.map(d=> [d.properties.hospital, d.properties.id]))
                this.datos_completos=data.features;
                this.circulos = this.svg
                    .selectAll("circulos")
                    .data(this.datos_completos)
                    .enter()
                    .append("circle")
                    .attr("cx", (d)=>{ return this.mapa.latLngToLayerPoint([d.properties.lon, d.properties.lat]).x })
                    .attr("cy", (d)=>{ return this.mapa.latLngToLayerPoint([d.properties.lon, d.properties.lat]).y })
                    .attr("r", (d)=>this.escala_circulos * Math.sqrt(d.properties.episiotomia))
                    .style("fill", "#feb812")
                    .style("stroke-width", 1)
                    .style("stroke-opacity", .4)
                    .style("stroke","#4a129c")
                    .style("fill-opacity", .4)
                    .style("cursor", "pointer")
                    .on("click",(e,d)=>{
                        this.hospital_seleccionado = d.properties.id
                    })
                    
                this.mapa.on("moveend", this.update)
                this.seleccionDeDatos()
            })
    },
    methods:{
        update(){
            this.circulos
                .attr("cx", (d)=>{ return this.mapa.latLngToLayerPoint([d.properties.lon, d.properties.lat]).x })
                .attr("cy", (d)=>{ return this.mapa.latLngToLayerPoint([d.properties.lon, d.properties.lat]).y })
        },
        seleccionDeDatos(){
            this.columnas = Object.keys(this.diccionario_total[this.afeccion_seleccionada]);
            var data_seleccionada_desagregada = this.datos_completos.map((datum) => {
                let datum_selec = {
                    "hospital": datum.properties.hospital,
                    "id": datum.properties.id,
                    "lat": datum.properties.lat,
                    "lon": datum.properties.lon,
                }
                this.columnas.map((d) => {
                    datum_selec[d] = datum.properties[d]
                })
                return datum_selec
            })
            if(this.hospital_seleccionado == 0){
                var ef = {"hospital": "Todos los hospitales", "id": 0}
                this.columnas.map((d) => {
                    ef[d] = d3.sum(data_seleccionada_desagregada.map(dd=>dd[d]))
                })
                this.data_seleccionada_grafica = ef;
            }
            else{
                this.data_seleccionada_grafica = data_seleccionada_desagregada.filter(d=>d.id == this.hospital_seleccionado)[0]
            }
            this.seleccionDeAfeccion();
            if(this.no_seleccion != 0){
                /*setTimeout(()=>{
                    document.querySelector("#contenedores-pictos").scrollIntoView({
                    behavior: 'smooth'
                });
                },3000)*/
            }
            this.no_seleccion += 1
            
        },
        zoomAHospitales(){
            if(this.hospital_seleccionado!=0){
                this.mapa.flyTo(
                    [this.data_seleccionada_grafica.lon,this.data_seleccionada_grafica.lat],
                    12) 
            }
            else{
                this.mapa.flyToBounds(this.fronteras_cuba)
            }
        },
        seleccionDeAfeccion(){
            if(this.afeccion_seleccionada == "consentimiento"){
                let visualizables_discos = ["consentimiento_no_para_ninguno"]
                this.circulos
                    .transition()
                    .duration(200)
                    .attr("r", (d)=>{
                        return this.escala_circulos * Math.sqrt(d3.sum(visualizables_discos.map(dd=>d.properties[dd])))})
            }
            else{
                this.circulos
                    .transition()
                    .duration(200)
                    .attr("r", (d)=>{
                        return this.escala_circulos * Math.sqrt(d3.sum(this.columnas.map(dd=>d.properties[dd])))})
            }
            
        }
    },
    watch: {
        escala_circulos(){
            if(this.afeccion_seleccionada == "consentimiento"){
                let visualizables_discos = ["consentimiento_no_para_ninguno"]
                this.circulos
                    .attr("r", (d)=>{
                        return this.escala_circulos * Math.sqrt(d3.sum(visualizables_discos.map(dd=>d.properties[dd])))})
            }
            else{
                this.circulos

                    .attr("r", (d)=>{
                        return this.escala_circulos * Math.sqrt(d3.sum(this.columnas.map(dd=>d.properties[dd])))})
            }
        },
        afeccion_seleccionada(){
            this.seleccionDeDatos();
            
        },
        hospital_seleccionado(nv,ov){
            this.seleccionDeDatos();
            this.zoomAHospitales();
            if(nv == 0 ){
                this.circulos
                    .transition()
                    .duration(200)
                    .style("fill-opacity", .4)
            }
            else{
                if(ov == 0){
                    this.circulos.transition()
                        .duration(2500)
                        .style("fill-opacity", .1)
                        .transition()
                        .duration(50)
                        .style("fill-opacity", .4)
                    this.circulos.filter((d) => d.properties.id == nv)
                        .transition()
                        .delay(2600)
                        .style("fill-opacity", 1)
                }
                else{
                    this.circulos.transition()
                        .filter((d)=>d.properties.id==ov)
                        .duration(500)
                        .style("fill-opacity", .4)
                    this.circulos.filter((d) => d.properties.id == nv)
                        .transition()
                        .delay(500)
                        .style("fill-opacity", 1)
                }
                
            }
        }
        

        
    
    }

}
</script>
<style scoped lang="scss">
@import "~leaflet/dist/leaflet.css";


.contenedor-vis-consulta{
    margin-top: 200px;
    .contenedor-selectores{
        display: flex;
        gap:30px;
        
        
        .selector{
            flex:1;
            &> *{
                display: block;
            } 
            color: #fff;
            select{
                width: 100%;
                font-size: 20px;
                font-weight: 700;
                display: block;
                font-size: 20px;
                color: #fff;
                background-color:#4A2582;
                font-weight: 600;
                padding: 7px 30px 7px 0;
                width: 100%;
                border:none;
                margin-bottom: 10px;
                &:focus, &:hover {
                    border-color: #eee;
                }
                option{
                    background-color: #4A2582;
                    font-size: 14px;

                }
            }
        }
    }
    
    div.contenedor-mapa{
        width:calc(100% - 30px);
        height: calc(100vh - 200px);
        max-height: 500px;
        background-color:#4a129c;
        
    }
    div.contenedor-graficos{
        margin-top: 50px;
    }
}

</style>
