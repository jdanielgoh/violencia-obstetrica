<template>
  <div class="tus-derechos-parto">
    <div class="container text">
      <h1 class="blanco">
        Tus derechos en el parto
        <hr/>
      </h1>
    <iframe height="400" src="https://www.youtube.com/embed/wKA_gpsrSBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "TusDerechosParto",
  metaInfo: {
    title: "Tus derechos en el parto",
    titleTemplate: "%s | Partos Rotos",
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Video que explica los derechos en el parto, creado por el equipo de Parto Rotos' },
    ]
  },
};
</script>

<style scoped lang="scss">
.tus-derechos-parto {
  background: #4a2582;
  .container.text {
    
    iframe {
      width: 100%;

      height: 400px;
    }
  }
}
</style>