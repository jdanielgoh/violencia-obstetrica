<template>
  <div class="tus-derechos">
    <div class="container text">
      <h1 class="blanco">
        Qué es la violencia obstétrica
        <hr />
      </h1>
    </div>
      <div class="container text">
        <img
          class="ilustracion"
          :src="require('@/assets/img/que_es_la_violencia_obstetrica/INFIGRAFIA.jpg')"
        />
      </div>
      <div class="container text">
      <div class="descargables">
        <DescargaDocumento
            titulo="Modelos de cuidados humanizados a la mujer durante el trabajo de parto y el parto"
            autorxs="LIC. LAREISY BORGES DAMAS, MSC"
            ruta="descargables/Borges Damas.pdf"
            formato="pdf"
        />
        <DescargaDocumento
            titulo="Una concepción integral del parto humanizado en Cuba"
            autorxs="Lareisy Borges Damas, Rolando Sánchez Machado, Hernández, Arahi Sixto Pérez, Roberto Domínguez"
            ruta="descargables/cog183e.pdf"
            formato="pdf"
        />
        <DescargaDocumento
            titulo="El nacimiento en Cuba: análisis de la experiencia del parto medicalizado desde una perspectiva antropológica*"
            autorxs="Dr. C. Dailys García Jordá, Dr. C. Zoe Díaz Bernal, Lic. Marlen Acosta Álamo I"
            ruta="descargables/partos cuba investigacion antropologica.pdf"
            formato="pdf"
        />
        <DescargaDocumento
            titulo="Representaciones y prácticas sobre el nacimiento: un análisis desde la perspectiva antropológica."
            autorxs="MSc. Dailys García Jordá"
            ruta="descargables/tesis garcia jorda.pdf"
            formato="pdf"
        />
      </div>
     
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import DescargaDocumento from "@/components/utils/DescargaDocumento.vue";

export default {
  name: "QueEsLaViolenciaObstetrica",
  components: {
    DescargaDocumento,
  },
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Qué es la violencia obstétrica',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos',
      htmlAttrs: {
        lang: 'es'
        },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Información, infografía y material bibliográfico sobre la violencia obstétrica' },
      ]
    },
};
</script>
<style  lang="scss">
.tus-derechos {
    background: #4a2582;
    h1.blanco {
        line-height: 1.1;
        position:relative;
        hr{
            position: relative;
            top: -10px;
        }
    }

  img.ilustracion{
    max-width: 100%;
  }
  .descargables{
    margin-top: 120px;
  }
  
}
</style>