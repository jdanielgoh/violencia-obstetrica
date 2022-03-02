<template>
  <div>
    <section id="scrolly-portada">
      <div class="container main">
        <!--Bajante poner el texto alineado el centro -->
        <h1 class="blanco">
          Cientos de mujeres confirman haber vivido violencia obstétrica en Cuba
        </h1>
        <p>Por: Claudia Padrón Cueto</p>
        <p>
          Durante el último año, Partos Rotos, una coalición de periodistas
          independientes cubanas, estuvo investigando las experiencias de parto
          en la isla de las últimas décadas. Una de las conclusiones del
          proyecto es que muchas madres recuerdan el día en que dieron a luz
          como un episodio traumático, donde fueron violentadas, ignoradas y
          maltratadas
        </p>
      </div>
      <div class="mapa-texto">
        <div id="fondo-portada">
          <StoryTellingMapa :paso_inicial="paso" :id="'contenedor-mapa'" />
          <iframe
            :src="'../graficas/informacion_atencion.html'"
            id="iframe_informacion_atencion"
            frameborder="0"
            width="100%"
          ></iframe>
		      <iframe
            src="../graficas/consentimiento_parto.html"
            id="iframe_consentimiento_parto"
            frameborder="0"
            width="100%"
          ></iframe>
          <iframe
            src="../graficas/count_maltratos.html"
            id="iframe_count_maltratos"
            frameborder="0"
            width="100%"
          ></iframe>
          <iframe
            src="../graficas/maltratos_naturalizados.html"
            id="iframe_maltratos_naturalizados"
            frameborder="0"
            width="100%"
          ></iframe>
          <iframe
            src="../graficas/kristeller_fecha.html"
            id="iframe_kristeller_fecha"
            frameborder="0"
            width="100%"
          ></iframe>
          <iframe
            src="../graficas/episiotomia_parto.html"
            id="iframe_epistomia_parto"
            frameborder="0"
            width="100%"
          ></iframe>
          <iframe
            src="../graficas/acompanadas_hospital2.html"
            id="iframe_acompanadas_hospital2"
            frameborder="0"
            width="100%"
          ></iframe>
        </div>
        <article class="container text">
           <div class="step step--1" data-step="-1">
            
          </div>
          <div class="step step-0" data-step="0">
            <!-- Luego de ese texto se despliega el mapa de Cuba queda una columna de texto a la derecha donde irán saliendo los párrafos y gráficos(Fer los hizo pero puede mejorarse la visualidad y colores). A la izquierda permanece el mapa ocupando la mayor parte de la pantalla.-->
            <p>
              Por primera vez, una investigación en Cuba agrupó 514
              cuestionarios, que detallan partos en la isla desde los años 60
              hasta el año 2021 (el 82% de las respuestas son de los últimos 21
              años). Los formularios fueron respondidos por madres cubanas
              (algunas, con varias experiencias de parto, llenaron más de un
              formulario) de todo el país que dieron a luz en la isla. El 80% de
              las encuestadas se concentraron en tres provincias: La Habana,
              Camagüey y Pinar del Río.
            </p>
            <!--.( Ampliar el mapa y que se enfoque primero en La Habana, haga Zoom y luego lo mismo en Camaguey y Pinar). -->
          </div>
          <div class="step step-1" data-step="1">
            <!--ACÁ pueden hacer un gráfico de pastel, con los siguientes datos: Cesárea de urgencia(59), cesárea luego de fallar la inducción del parto(72), cesárea programada(61), parto vaginal (322).-->
            <p>De los 514 partos, el 60% fueron naturales y el 40% cesáreas.</p>
          </div>
          <div class="step step-2" data-step="2">
            <p>
              Los resultados de este proyecto no son una muestra representativa
              a nivel estadístico de la población de mujeres cubanas. Hay una
              sobrerrepresentación de La Habana y menor número de respuestas de
              otras provincias. Por tanto, los resultados que aquí expondremos
              no se pueden extrapolar ni generalizar como un reflejo de todas
              las experiencias de parto en el país.
            </p>
            <p>
              Sin embargo, aclaramos que la muestra es aleatoria. No se
              seleccionaron mujeres que expresamente hubiesen tenido un parto
              traumático, sino madres que dieron a luz en Cuba con experiencias
              positivas o negativas y que tuvieran la disposición de responder.
              Partos Rotos trabajó con 13 encuestadoras que compartieron el
              cuestionario entre sus redes de contactos, y estas con otras
              mujeres hasta sobrepasar las 500. Aunque puede existir una
              predisposición de las embarazadas que vivieron violencia a
              responder el cuestionario, tanto periodistas como encuestadoras
              eligieron libremente a quién preguntar.
            </p>
            <p>
              Para su tesis doctoral, uno de los pocos estudios sobre violencia
              obstétrica en Cuba, Daylis García Jordá abordó esta temática y
              concluyó, al igual que Partos Rotos, que en Cuba “rutinariamente”
              las embarazadas son sometidas a prácticas y a políticas que son
              “violencia física y de género”. Para su estudio la doctora
              entrevistó a 36 mujeres. Partos Rotos ha multiplicado por 14 esa
              cifra.
            </p>
            <p>
              El análisis de los datos muestra que la violencia obstétrica en
              los salones es sistemática. Las mujeres suelen ser concebidas como
              cuerpos sin autonomía y sin derecho a decidir nada, y no reciben
              información sobre su estado o los procedimientos que les van a
              realizar. Tampoco pueden elegir en qué posición parir ni se les
              permite caminar. Además muchas son maltratadas física, psicológica
              y verbalmente.
            </p>
            <p>
              La violencia obstétrica no es un fenómeno propiamente de Cuba,
              sino mundial, y que ocurre incluso en países con muchos más
              recursos. Al igual que otras violencias contra las mujeres, tiene
              su origen en el machismo. En los últimos años, y cada vez con más
              frecuencia, estas prácticas han sido denunciadas por la
              Organización Mundial de la Salud (OMS) y UNICEF. Sin embargo,
              sigue siendo un tema ausente en el discurso oficial cubano que
              prefiere centrarse en ostentar una tasa baja de mortalidad
              infantil pero no le da la misma relevancia a la tasa de mortalidad
              materna o a otros indicadores que reflejen el grado de
              satisfacción de las madres con el trato recibido.
            </p>
            <cite class="cita">
              “No me informaron o pidieron consentimiento para ningún
              procedimiento: sueros, medicamentos, dilatación manual,
              espéculos... Solo me decían : ‘Niña coopera’”, relata una madre
              que dio a luz en el Hospital Materno Infantil Manuel Piti Fajardo.
              Otras dos mujeres que dieron a luz en Camagüey y La Habana
              agregan: “En ocasiones preguntaba o llamaba a las enfermeras y no
              me contestaban. No levantaban ni la mirada para verte a los ojos”;
              “En el momento del parto le tomé la mano a un doctor y me la
              rechazó con desdén y asco”.
            </cite>
            <p>
              Muchas madres encuestadas coinciden en que la falta de información
              y ser ignoradas fueron las muestras de violencia que más
              padecieron. Un 69% dijo que no recibió psicoprofilaxis, o sea, que
              no les explicaron cómo sería el proceso de embarazo, parto y la
              etapa posterior al alumbramiento. Y una vez ingresadas, casi el
              80% de los cuestionarios recopilados apuntan a que las madres no
              fueron informadas sobre su estado de salud durante el parto.
            </p>
            <!--INSERTAR GRÁFICO DE FALTA DE INFORMACIÓN-->
          </div>
          <div class="step step-3" data-step="3">
            <p>
              Solo el 52% confirmó que le pidieron consentimiento para todos los
              procedimientos que realizaron a ellas y a sus bebés durante el
              parto.
            </p>
            <!--INSERTAR GRÁFICO DE CONSENTIMIENTO SEGÚN TIPO DE  PARTO
					Podemos probar darle una visibilidad distinta al resto del texto, los fragmentos de los testimonios de las madres. Cambiar el formato, poner dentro de un recuadro, etc. lo dejo a su consideración
					-->
          </div>
          <div class="step step-4" data-step="4">
            <h2>¿Qué nos contaron las madres?</h2>
            <cite class="cita">
              “Trataron de dilatarme a la fuerza y ​​estaba con dolor. Me
              culparon por no poder parir. Me dijeron ‘cochina’. Le dijeron a mi
              familia que no quería cooperar. Me pegaron en la cara. Me sentí
              humillada. No quería repetir esa experiencia. Lo consideré el peor
              momento de mi vida” respondió a nuestro cuestionario una madre que
              dio a luz en el Hospital General Docente Universitario Martín
              Chang Puga de Nuevitas, Camagüey.
            </cite>
            <p>
              Cientos de mujeres confirmaron que hay un panorama de violencia
              hacia ellas dentro del sistema de salud. Un 41% afirmó haber
              sufrido algún episodio de violencia verbal o psicológica, mientras
              que otro 17% no se consideró víctima de este tipo de violencia
              aunque describió haber padecido prácticas que sí son consideradas
              violencia obstétrica. Esto es una evidencia que apunta a que las
              mujeres han naturalizado ser maltratadas como un proceso
              indisoluble del acto de dar a luz y que no reciben la información
              sobre qué es un parto humanizado y/o cuáles son sus derechos. La
              obstétrica no solo es una de las violencias más invisibilizadas,
              sino también una de las más naturalizadas.
            </p>
            <!--AGREGAR GRÁFICA DE MALTRATOS NATURALIZADOS-->
          </div>
          <div class="step step-5" data-step="5">
            <p>
              Según pudimos confirmar con los testimonios, las manifestaciones
              más comunes de maltratos fueron: ignorar a las embarazadas y no
              atender a sus pedidos, negarles servicios como el uso de
              analgésicos, y no llamarlas por su nombre sino por calificativos
              que ellas consideraban ofensivos o irrespetuosos (negra, gorda,
              etc). Gritarles, culparlas por algún inconveniente y hablarles de
              modo grosero también son episodios frecuentes.
            </p>
            <!--Agregar gráfico de maltratos frecuentes .-->
          </div>
          <div class="step step-6" data-step="6">
            <p>
              En el país, con hospitales carentes y que no satisfacen la
              demanda, los médicos/as suelen acelerar los partos para facilitar
              su trabajo en detrimento del curso natural de un proceso
              fisiológico. Al menos en los testimonios recogidos por esta
              investigación, el uso de la episiotomía, un corte en el perineo
              que facilita el parto, parece ser indiscriminado en los hospitales
              cubanos, a la par que se realizan procedimientos obsoletos que
              pueden afectar la salud de la madre y su bebé. La prioridad parece
              ser que la gestante dé a luz rápido, aunque sea violentada en el
              proceso.
            </p>
            <cite class="cita">
              “No tenían que picarme porque tenía espacio y lo hicieron. Yo sé
              que tenía espacio porque escuché cuando el jefe del equipo médico
              los regañaba”, corrobora una madre que dio a luz en el Hospital
              Universitario Ginecobstétrico Eusebio Hernández Pérez
            </cite>
            <p>
              Un 76% de las encuestadas que tuvieron un parto vaginal afirmó que
              se les practicó una episiotomía. De ellas a solo el 21 % le
              pidieron consentimiento y al 73% no le aplicaron anestesia para
              cortarlas.
            </p>
            <!--Agregar gráfico de episiotomía pero solo en partos vaginales. No incluir cesáreas-->
          </div>
          <div class="step step-7" data-step="7">
            <p>
              Por otra parte, un 44% sufrió la maniobra de Kristeller, un
              procedimiento que consiste en apretar a la embarazada por las
              costillas y exprimirla para conducir al bebé al canal de parto,
              incluso se pueden llegar a subir sobre ellas. Tal maniobra es
              desaconsejada por la OMS desde 2014, pero en Cuba se sigue
              practicando.
            </p>
            <!--AGREGAR GRÁFICO-->
          </div>
          <div class="step step-8" data-step="8">
            <p>
              Además, la mayoría de embarazadas (el 86%) aseguró que se le
              negaron analgésicos cuando los necesitó. Las madres cubanas deben
              atravesar la agonía que puede representar un parto sin que se les
              ayude a aliviar el dolor o reciban muestras de empatía. Incluso lo
              deben padecer solas. Un 83% de las mujeres que respondieron
              nuestro cuestionario no pudo estar acompañada durante el parto.
            </p>
            <p>
              Aproximadamente al 61% de las gestantes no les permitió tener
              contacto con su hijo o hija al nacer y al 58% no le permitieron
              caminar para facilitar su labor de parto. Esto también es
              violencia obstétrica.
            </p>
            <!--AGREGAR gráfico por hospital de acompañamiento durante parto o cesárea-->
          </div>
          <div class="step step-9" data-step="9">
            <p>
              Tras el proceso del parto, algunas aseguraron haber sufrido anemia
              (16%), infecciones (10%), e incontinencia urinaria (7%). Sin
              embargo, fueron más frecuentes las secuelas emocionales como miedo
              a un nuevo embarazo (30%), visualizar imágenes repetitivas de su
              parto (30%), cambios de humor (25%), dificultad para dormir (24%),
              miedo a volver a enfrentarse al sistema de salud cubano (23%) y
              depresión posparto (14%).
            </p>
            <cite class="cita"
              >“Me tuvieron 28 horas en trabajo de parto. Me correspondía una
              cesárea de antemano programada, pero me obligaron a parir. Me
              quedé con seis de hemoglobina, casi muerta. Pasé tres meses en
              silla de ruedas, sin contar que mi bebé nació cianótica. Solo
              puedo decir que tuve más embarazos y ninguno lo tuve por miedo a
              vivir de nuevo lo mismo”, respondió a nuestro cuestionario una
              madre que dio a luz en 1998 en el Hospital Maternidad de
              Línea.</cite
            >
            <p>
              Casi 20 años después, en 2017, otra mujer cubana salió del
              hospital Ramón González Coro con pánico a tener nuevos embarazos.
              “No quería tener más hijos: veía el embarazo como la peor
              enfermedad que me podía ocurrir. Durante mucho tiempo me daba
              terror un embarazo; veía a los niños en la calle y solo pensaba en
              el dolor de sus madres. Nunca más vi el embarazo de una forma
              linda, romántica, sino como una pesadilla, una bomba de tiempo que
              explota durante el parto”.
            </p>
            <!--Mover en el mapa A las capas secuelas y que vaya ilustrando varias provincias D mientras se lee esto-->
          </div>
          <div class="step step-10" data-step="10">
            <h2>¿Por qué esta investigación?</h2>
            <p>
              Los medios de propaganda cubanos suelen resaltar la baja tasa de
              mortalidad infantil y los logros del programa materno infantil
              (PAMI), pero no se publicitan otros indicadores de calidad de la
              atención y/o bienestar de las madres. Esta falta de información
              precisamente da pie a que se cuestione si existe o no el fenómeno
              de la violencia obstétrica en Cuba.
            </p>
            <p>
              Esto es relevante si contemplamos que la propia Revista Cubana de
              Obstetricia y Ginecología reconoció en un artículo de 2018 que,
              dada la poca información que existe, no podía asegurarse que no
              haya partos humanizados, ni crueldad durante el proceso. “La
              insuficiencia de estudios en Cuba respecto al tema imposibilita
              proporcionar datos reales o aproximados del manejo del parto
              humanizado. Sigue siendo necesario el desarrollo de
              investigaciones de corte cualitativo y trabajos de campo que
              estimen las características de la atención”, apuntó el artículo.
            </p>
            <p>
              La base de datos que hemos construido, -y esperamos seguir
              ampliando- puede ser un primer paso para suplir ese vacío de
              información y mostrar, que, en efecto, han sido violentadas, al
              menos, cientos de mujeres en los hospitales cubanos. El sistema de
              salud de la isla, si bien se preocupa por la tasa de mortalidad
              infantil, no tiene en cuenta a las mujeres, sus experiencias y sus
              necesidades.
            </p>
            <p>
              **Para explorar cuáles fueron las principales manifestaciones de
              violencia sufridas por las madres, los invitamos a interactuar con
              el mapa y explorar cada hospital. En la visualización también
              pueden analizar las secuelas psicológicas que tuvieron estas
              cubanas tras sus partos.
            </p>
            <p>
              **Nota: Como parte de la aplicación de este cuestionario
              procesamos las respuestas abiertas de las madres. Casi 200
              relataron con más detalle sus experiencias durante el parto y el
              embarazo. Algunos fragmentos fueron utilizados en esta
              visualización. Si quieres leer los testimonios completos puedes
              pinchar en este enlace.
            </p>
            <p>
              ** Si has dado a luz Cuba y quieres compartirnos tu experiencia,
              puedes acceder a nuestro cuestionario
            </p>
          </div>
        </article>
      </div>
      <div class="container main">
        <p>
              **Para explorar cuáles fueron las principales manifestaciones de
              violencia sufridas por las madres, los invitamos a interactuar con
              el mapa y explorar cada hospital. En la visualización también
              pueden analizar las secuelas psicológicas que tuvieron estas
              cubanas tras sus partos.
            </p>
            <p>
              **Nota: Como parte de la aplicación de este cuestionario
              procesamos las respuestas abiertas de las madres. Casi 200
              relataron con más detalle sus experiencias durante el parto y el
              embarazo. Algunos fragmentos fueron utilizados en esta
              visualización. Si quieres leer los testimonios completos puedes
              pinchar en este enlace.
            </p>
            <p>
              ** Si has dado a luz Cuba y quieres compartirnos tu experiencia,
              puedes acceder a nuestro cuestionario
            </p>
      </div>
    </section>
  </div>
</template>
<script>
import scrollama from "scrollama";
import StoryTellingMapa from "@/components/visualizaciones/StoryTellingMapa.vue";
import * as d3 from "d3";

export default {
  name: "ScrollyTelling",
  components: {
    StoryTellingMapa,
  },
  data() {
    return {
      paso: -1,
      informados: String
    };
  },
  mounted() {
    this.informados= "graficas/informacion_atencion.html"
    this.inizializandoScrollama();
  },
  methods: {
    inizializandoScrollama() {
      this.scrolly = d3.select("#scrolly-portada");
      this.fondo_portada = this.scrolly.select("div#fondo-portada");
      this.step = this.scrolly.select("article").selectAll(".step");

      this.scroller = scrollama();
      this.scroller
        .setup({
          step: "#scrolly-portada article .step",
          offset: 0.5,
          debug: false,
        })
        .onStepEnter(this.cambiandoPaso);

      this.reescalandoPantalla();

      window.addEventListener("resize", this.reescalandoPantalla);
    },
    reescalandoPantalla() {
      var stepH = Math.floor(window.innerHeight * 0.95);
      this.step.style("min-height", stepH + "px");

      this.scroller.resize();
    },
    cambiandoPaso(response) {
      this.paso = response.index -1  ;
      this.step.classed("activo", (d, i) => {
        return i === response.index;
      });
      console.log(this.paso);
      this.fondo_portada.select("p").text(response.index + 1);
      if (this.paso == 0) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0")
        d3.select("div#fondo-portada .contenedor-mapa ")
			.transition()
			.duration(200)
			.style("opacity", "1")
			.transition()
			.delay(201)
			.transition()
			.duration(200)
			.style("opacity", "1")
			.transition()
			.delay(201)
			.style(
			"z-index",
			"1"
			);
      } else if (this.paso == 1) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0")
        d3.select("div#fondo-portada .contenedor-mapa ")
			.transition()
			.duration(200)
			.style("opacity", "1")
			.transition()
			.delay(201)
			.style(
			"z-index",
			"1"
			);
	  } else if (this.paso == 2) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0");
        d3.select("div#fondo-portada #iframe_informacion_atencion")
		.transition()
		.duration(200)
		.style("opacity", "1")
		.transition()
		.delay(201)
		.style(
          "z-index",
          "1"
        );
      } else if (this.paso == 3) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0");
        d3.select("div#fondo-portada #iframe_consentimiento_parto")
		.transition()
		.duration(200)
		.style("opacity", "1")
		.transition()
		.delay(201)
		.style(
          "z-index",
          "1"
        );
      }else if (this.paso == 4) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0");
        d3.select("div#fondo-portada #iframe_maltratos_naturalizados").transition()
		.duration(200)
		.style("opacity", "1")
		.transition()
		.delay(201)
		.style(
          "z-index",
          "1"
        );
      } else if (this.paso == 5) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0");
        d3.select("div#fondo-portada #iframe_count_maltratos").transition()
		.duration(200)
		.style("opacity", "1")
		.transition()
		.delay(201)
		.style(
          "z-index",
          "1"
        );
      } else if (this.paso == 6) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0");
        d3.select("div#fondo-portada #iframe_epistomia_parto").transition()
		.duration(200)
		.style("opacity", "1")
		.transition()
		.delay(201)
		.style(
          "z-index",
          "1"
        );
      } else if (this.paso == 7) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0");
        d3.select("div#fondo-portada #iframe_kristeller_fecha").transition()
		.duration(200)
		.style("opacity", "1")
		.transition()
		.delay(201)
		.style(
          "z-index",
          "1"
        );
      } else if (this.paso == 8) {
        d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0");
        d3.select("div#fondo-portada #iframe_acompanadas_hospital2").transition()
		.duration(200)
		.style("opacity", "1")
		.transition()
		.delay(201)
		.style(
          "z-index",
          "1"
        );
      } else if (this.paso == 9) {
       d3.selectAll("div#fondo-portada > * ")
			.style("z-index", "-1")
			.transition()
			.duration(199)
			.style("opacity","0")
        d3.select("div#fondo-portada .contenedor-mapa ")
			.transition()
			.duration(200)
			.style("opacity", "1")
			.transition()
			.delay(201)
			.transition()
			.duration(200)
			.style("opacity", "1")
			.transition()
			.delay(201)
			.style(
			"z-index",
			"1"
			);
      }
    },
  },
};
</script>

<style scoped lang="scss">
#scrolly-portada {
  position: relative;
  background-color: #4a2582;
  color: #fff;
  p {
    color: #fff;
  }
  div.mapa-texto {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    & > * {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    div#fondo-portada {
      position: -webkit-sticky;
      position: sticky;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      z-index: 0;
      height: 100vh;
      top: 80px;
      left: 0;
      & > * {
        position: absolute;
        top: 0;
      }
      iframe {
        width: 100%;
        height: calc(100vh - 200px);
      }
      p {
        margin: 0;
      }
    }
    article {
      padding: 0;
      color: #fff;
      max-width: 500px;
      position: relative;
      padding: 0 15px;
      margin: 0 auto;
      h1 {
        text-align: center;
        color: #fff;
        margin: 10px auto 10px auto;
        font-size: 52px;
        line-height: 60px;
      }
      div.step {
        margin-top: 300px;
        &.step--1{
          margin-top:0;
          height: 50vh;
        }
        &.step-0{
          margin-top:100px;
        }
        p {
          color: #fff;
        }
        cite {
          font-style: normal;
          font-size: 34px;
        }

        position: relative;
        display: block;

        &.portada,
        &.portada.activo {
          height: 100vh;
          position: relative;
          display: block;
        }
      }
    }
  }
}
</style>

