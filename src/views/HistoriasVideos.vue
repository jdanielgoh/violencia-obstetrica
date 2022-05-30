<template>
  <div class="videos">
    <div class="container text">
      <h1 class="blanco">
        Historias en video
        <hr />
      </h1>
      <p>
        Estamos trabajando en el rodaje de testimonios de parto de otras madres
        que te mostraremos muy pronto.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoriasVideos",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Historias en video",
    // all titles will be injected into this template
    titleTemplate: "%s | Partos Rotos",
  },
};
</script>

<style scoped lang="scss">
.videos {
  background: #4a2582;
  .container.text {
    iframe {
      width: 100%;

      height: 400px;
    }
  }
}
</style>