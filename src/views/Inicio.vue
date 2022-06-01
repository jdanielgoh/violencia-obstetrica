<template>
  <div class="inicio">
    <div class="container main">
      <BotonAudio />
    </div>
    <div class="container text introduccion">
      <div class="centrado">
        <h1 class="titulo-especial blanco">PARTOS ROTOS</h1>
        <h2 class="blanco">Especial sobre violencia obstétrica en Cuba</h2>
        <p>
          En el parto no solo duelen las contracciones. También los malos tratos
          o la falta de empatía que las mujeres reciben de un sistema de salud
          que tiende a ignorar sus necesidades durante un momento en el que son
          vulnerables. Durante décadas, muchas cubanas han vivido sus partos
          como un evento contradictorio, feliz por la nueva vida que llega, pero
          traumático por la atención médica que recibieron. Esta investigación
          periodística es la primera que aborda este problema de manera
          sistemática en el país.
        </p>
        <div>
          <span class="flecha"></span>
        </div>
      </div>
    </div>
	<GridSeccion
      id="principales"
      titulo=""
      :data="enlaces_principales"
    />

   

    
  </div>
</template>

<script>
// @ is an alias to /src
import Portada from "@/components/inicio/Portada.vue";

import ImagenPie from "@/components/utils/ImagenPie.vue";
import GridSeccion from "@/components/inicio/GridSeccion.vue";

import BotonAudio from "@/components/utils/BotonAudio.vue";



import enlaces_principales from "@/assets/data/enlaces_principales.json";

export default {
  name: "Inicio",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Inicio",
    // all titles will be injected into this template
    titleTemplate: "%s | Partos Rotos",
  },
  components: {
    Portada,
    ImagenPie,
    GridSeccion,
    BotonAudio,
  },
  beforeMount() {
    this.te_puede_interesar.forEach((d) => {
      d.img = require(`@/assets/${d.img}`);
    });
  },
  data() {
    return {
	    enlaces_principales: enlaces_principales
    };
  },
  mounted() {},

  methods: {},
};
</script>
<style scoped lang="scss">
$margen-especiales: 70px;
.inicio {
  div.container.text.introduccion {
    .centrado {
      max-width: 685px;
      h1 {
        text-align: center;
        font-size: 56px;
        font-weight: 800;
		margin-bottom:10px;
      }
	  h2{
		text-transform: uppercase;
		color: #fff;
        text-align: center;
	  }
      p {
        text-align: center;
        color: #fff;
      }
      div {
        text-align: center;

        span.flecha {
          position: relative;
          display: inline-block;
          width: 35px;
          height: 35px;
          border-left: solid 3px #fda1c9;
          border-bottom: solid 3px #fda1c9;
          transform: rotate(-45deg);
        }
      }
    }
  }
  background: #4a2582;
  #especiales {
    padding-top: 40px;
    h3 {
      font-size: 56px;
      line-height: 1;
      &.blanco {
        color: #fff;
      }
    }
    .contenedor-escroleable {
      flex: 1;
      display: flex;
      overflow: auto;
      .contenedor-secciones {
        display: flex;
        flex-wrap: nowrap;
        div.ficha {
          width: 400px;
          &:nth-child(even) {
            margin: 0 0.5 * $margen-especiales $margen-especiales auto;
          }
          &:nth-child(odd) {
            margin: $margen-especiales 0.5 * $margen-especiales 0 auto;
          }
          a.link-ficha {
            text-decoration: none;
            color: #fff;
            p {
              color: #fff;
              &.titulo {
                strong {
                  font-size: 24px;
                  line-height: 1.1;
                  font-weight: 500;
                }
                margin-bottom: 0;
              }
              &.autorxs {
                font-size: 14px;
                margin-top: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>