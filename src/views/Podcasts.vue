<template>
  <div class="podcasts">
    <div class="container text">
      <h1 class="blanco">
        Podcasts
        <hr />
      </h1>
      <p>
        Estamos trabajando en la grabación de Isla Violeta, un podcast en el que
        hablaremos de violencia obstétrica y de otras violencias contra las
        mujeres en Cuba. ¡Podrás escucharlo muy pronto!
      </p>
      <!--<div class="ficha-podcast">
        <h3 class="titulo-texto">¿Cómo se hizo Partos Rotos?</h3>
        <p>
          En este primer episodio de Isla Violeta conocerán al equipo de
          periodistas de la coalición de Partos Rotos, que trabajó durante todo
          un año en esta investigación sobre violencia obstétrica en Cuba.
          Acompáñanos en esta primera temporada para escuchar muy de cerca las
          historias sobre violencia obstétrica en las voces de sus
          protagonistas. Encuentra todos nuestros episodios
          <a href="https://anchor.fm/isla-violeta" target="_blank">aquí</a>.
        </p>
        <iframe
          src=""
          height="102px"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>-->
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
  color: #fff;

  .container.text {
    .ficha-podcast {
      color: #fff;
      .titulo-texto {
        font-size: 24px;
      }
      
    }
    iframe {
      width: 100%;
    }
    p {
        color: #fff;
        a {
          color: #fda1c9;
        }
      }
  }
}
</style>