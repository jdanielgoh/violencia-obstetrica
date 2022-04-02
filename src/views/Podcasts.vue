<template>
  <div class="podcasts">
    <div class="container text">
      <h1 class="blanco">
        Podcasts
        <hr/>
      </h1>
      <div class="ficha-podcast">
        <h3 class="titulo-texto">¿Cómo se hizo Partos Rotos?</h3>
        <p>
          En este primer episodio de Isla Violeta conocerán al equipo de
          periodistas de la coalición de Partos Rotos, que trabajó durante todo
          un año en esta investigación sobre violencia obstétrica en Cuba.
          Acompáñanos en esta primera temporada para escuchar muy de cerca las
          historias sobre violencia obstétrica en las voces de sus
          protagonistas. Encuentra todos nuestros episodios <a href="https://anchor.fm/isla-violeta" target="_blank">aquí</a>.
        </p>
        <iframe
          src="https://anchor.fm/isla-violeta/embed/episodes/Cmo-se-hizo-Partos-Rotos-e1g5cju"
          height="102px"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Podcasts",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Podcasts",
    // all titles will be injected into this template
    titleTemplate: "%s | Partos Rotos",
  },
};
</script>

<style scoped lang="scss">
.podcasts {
  background: #4a2582;
  .container.text {
    .ficha-podcast {
      color: #fff;
      .titulo-texto {
        font-size: 24px;
      }
      p {
        color: #fff;
        a{
          color:#FDA1C9
        }
      }
    }
    iframe {
      width: 100%;
    }
  }
}
</style>