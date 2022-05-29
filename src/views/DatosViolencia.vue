<template>
  <div class="datos-violencia">
    <div class="container main">
      <h1 class="blanco">
        Datos de la violencia
        <hr/>
      </h1>
      <GridSeccion
      id="visualizaciones"
      titulo=""
      :data="visualizaciones"
    />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GridSeccion from "@/components/inicio/GridSeccion.vue";
import visualizaciones from "@/assets/data/visualizaciones.json";

export default {
  name: "DatosViolencia",
    components:{
        GridSeccion,
    },
    data() {
    return {
      visualizaciones: visualizaciones,
    };
  },
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Datos de la violencia',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos'
    },
};
</script>
<style  lang="scss">
.datos-violencia {
    background: #4a2582;
    h1.blanco {
        line-height: 1.1;
        position:relative;
        hr{
            position: relative;
            top: -10px;
        }
    }
  
}
</style>