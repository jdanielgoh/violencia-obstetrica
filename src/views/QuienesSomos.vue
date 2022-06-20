<template>
  <div class="creditos">
    <div class="container text">
      <h1 class="blanco">
        ¿Quiénes somos?
        <hr />
      </h1>
      <p>
        El equipo de Partos Rotos cuenta con mujeres periodistas que viven en
        Cuba y que han realizado un trabajo fundamental para este proyecto. Sin
        embargo, en este momento no pueden revelar su identidad por haber
        recibido amenazas por parte del Gobierno por su labor periodística.
      </p>
      <p>
        Además, queremos agradecer su trabajo a las mujeres que aplicaron los cuestionarios y otras
        colaboradoras que también han participado de manera anónima desde dentro
        de Cuba.
      </p>
      <p>
        También le agradecemos a la periodista Carla Gloria Colomé Santiago su
        apoyo en una de las entrevistas centrales del reporte Parir en Cuba:
        cómo un sistema autoritario permite la violencia obstétrica.
      </p>
    </div>
    <div class="container main equipos">
      <div class="equipo-titulo">
        <h5>PERIODISTAS</h5>
      </div>
      <div class="equipo-integrantes">
        <a href="https://twitter.com/padroncueto" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/CLAUDIA.jpeg')"
            :pie="'Claudia Padrón Cueto'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Claudia Padrón Cueto</p>
              </div>
            </template>
          </ImagenPie>
        </a>
        <a href="https://twitter.com/Isamila28" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/ISABEL.jpeg')"
            :pie="'Isabel Milagro Echemendía Pérez'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Isabel Milagro Echemendía Pérez</p>
              </div>
            </template>
          </ImagenPie>
        </a>

        <a href="https://twitter.com/cabezamestiza" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/Darcy.jpeg')"
            :pie="'Darcy Borrero Batista'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Darcy Borrero Batista</p>
              </div>
            </template>
          </ImagenPie>
        </a>
      </div>
    </div>
    <div class="container main equipos">
      <div class="equipo-titulo">
        <h5>ANÁLISIS DE DATOS</h5>
      </div>
      <div class="equipo-integrantes">
        <a href="https://datacritica.org/" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/datacritica.jpg')"
            :pie="'Proyecto Data Crítica'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Proyecto Data Crítica</p>
              </div>
            </template>
          </ImagenPie>
        </a>
      </div>
    </div>
    <div class="container main equipos">
      <div class="equipo-titulo">
        <h5>DISEÑO, DESARROLLO Y VISUALIZACIÓN DE DATOS</h5>
      </div>
      <div class="equipo-integrantes">
        <a href="https://marianalopezo.myportfolio.com" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/mars_marian.jpeg')"
            :pie="'Mariana López Ortiz'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Mariana López Ortiz</p>
              </div>
            </template>
          </ImagenPie>
        </a>
        <a href="https://twitter.com/jdanielgoh" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/dangoh.jpeg')"
            :pie="'Daniel Gómez Hernández'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Daniel Gómez Hernández</p>
              </div>
            </template>
          </ImagenPie>
        </a>
      </div>
    </div>

    <div class="container main equipos">
      <div class="equipo-titulo">
        <h5>ILUSTRADORES</h5>
      </div>
      <div class="equipo-integrantes">
        <a href="https://www.facebook.com/helman.avelle" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/Hellman .jpeg')"
            :pie="'Hellman'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Helman Avelle</p>
              </div>
            </template>
          </ImagenPie>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006172846620"
          target="_blank"
        >
          <ImagenPie
            :link="require('@/assets/img/creditos/Mary Esther.jpg')"
            :pie="'Andy Ruiz'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Mary Esther Lemus</p>
              </div>
            </template>
          </ImagenPie>
        </a>
        <a href="https://www.facebook.com/hackndy" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/Andy.jpeg')"
            :pie="'Mary Esther Lemus'"
            class="ficha"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">Andy Ruiz</p>
              </div>
            </template>
          </ImagenPie>
        </a>
      </div>
    </div>
    <div class="container main equipos">
      <div class="equipo-titulo">
        <h5>IWPR</h5>
      </div>
      <div class="equipo-integrantes">
        <a href="https://twitter.com/IWPR_AL" target="_blank">
          <ImagenPie
            :link="require('@/assets/img/creditos/wipr.jpg')"
            :pie="'IWPR'"
            class="ficha iwpr"
          >
            <template slot="pie-foto">
              <div class="pie-foto-template">
                <p class="autorxs">
                  Este sitio se realizó gracias al apoyo del Institute for War &
                  Peace Reporting
                </p>
              </div>
            </template>
          </ImagenPie>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImagenPie from "@/components/utils/ImagenPie.vue";

export default {
  name: "QuienesSomos",
  components: {
    ImagenPie,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Créditos",
    // all titles will be injected into this template
    titleTemplate: "%s | Partos Rotos",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Acerca del equipo que realizó la investigación",
      },
    ],
  },
};
</script>
<style  lang="scss">
@import "../scss/_variables";

.creditos {
  background: #4a2582;
  h1.blanco,
  h2.blanco {
    font-size: 48px;
    color: #fff;
    line-height: 0.3;
    @media screen and (max-width: map-get($media-queries-limit, "mobile")) {
      line-height: 1;
    }
  }
  p {
    color: #fff;
  }
  div.equipos {
    display: flex;
    margin-top: 100px;
    gap: 0px 30px;
    flex-wrap: nowrap;
    justify-content: space-between;

    .equipo-titulo {
      flex: 0 1 25%;
      h5 {
        margin-top: 0;
        font-size: 24px;
        font-weight: 800;

        letter-spacing: 1.2px;
        color: #fda1c9;
      }
    }
    .equipo-integrantes {
      flex: 0 1 75%;
      display: flex;
      flex-wrap: wrap;
      gap: 30px 30px;
      a {
        flex: 0 1 30%;
        text-decoration: none;
        .ficha.iwpr {
          .cover {
            background-color: transparent;
          }
        }
        .cover {
          height: 350px !important;
          min-height: 350px !important;
        }
      }
    }
    @media screen and (max-width: map-get($media-queries-limit, "mobile")) {
      display: block;
      margin-top: 100px;
      //gap: 0px 30px;
      //flex-wrap: nowrap;
      //justify-content: space-between;
      .equipo-integrantes {
        display: flex;
        flex-wrap: wrap;
        gap: 30px 30px;
        a {
          flex: 0 1 calc(50% - 15px);
          text-decoration: none;
          .ficha.iwpr {
            .cover {
              background-color: transparent;
            }
          }
          .cover {
            height: 200px !important;
            min-height: 200px !important;
          }
        }
      }
    }
  }
}
</style>