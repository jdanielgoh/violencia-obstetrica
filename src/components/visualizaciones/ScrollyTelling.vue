<template>
  <div class="reportaje container reportaje-text">
    <!--Bajante poner el texto alineado el centro -->
    <h1>
      Cientos de mujeres confirman haber vivido violencia obstétrica en Cuba
    </h1>
    <p>Por: Claudia Padrón Cueto</p>
    <p>
      Durante el último año, Partos Rotos, una colaboración de periodistas
      independientes cubanas, estuvo investigando las experiencias de parto en
      la isla de las últimas décadas. Una de las conclusiones del proyecto es
      que muchas madres recuerdan el día en que dieron a luz como un episodio
      traumático, donde fueron violentadas, ignoradas y maltratadas.
    </p>

    <div class="step step--1" data-step="-1"></div>
    <div class="step step-0" data-step="0">
      <!-- Luego de ese texto se despliega el mapa de Cuba queda una columna de texto a la derecha donde irán saliendo los párrafos y gráficos(Fer los hizo pero puede mejorarse la visualidad y colores). A la izquierda permanece el mapa ocupando la mayor parte de la pantalla.-->
      <p>
        Por primera vez, una investigación en Cuba agrupó 514 cuestionarios, que
        detallan partos en la isla desde los años 60 hasta el año 2021 (el 82%
        de las respuestas son de los últimos 21 años). Los formularios fueron
        respondidos por madres cubanas (algunas, con varias experiencias de
        parto, llenaron más de un formulario) de todo el país que dieron a luz
        en la isla. El 80% de las mujeres preguntadas se concentraron en tres
        provincias: La Habana, Camagüey y Pinar del Río.
      </p>
      <!--.( Ampliar el mapa y que se enfoque primero en La Habana, haga Zoom y luego lo mismo en Camaguey y Pinar). -->
      <!---<StoryTellingMapa v-if="!pantalla_grande" :paso_inicial="paso" :id="'contenedor-mapa'" />-->
    </div>
    <div class="step step-1" data-step="1">
      <!--ACÁ pueden hacer un gráfico de pastel, con los siguientes datos: Cesárea de urgencia(59), cesárea luego de fallar la inducción del parto(72), cesárea programada(61), parto vaginal (322).-->
      <p>
        De los 514 partos, el 60% fueron partos vaginales y el 40% cesáreas.
      </p>
      <div class="contenedor-iframe">
        <Dona
          :dona_id="'dona_mov'"
          :datos="[
            { nombre: 'Partos naturales', cantidad: 60, color: '#B987FF' },
            { nombre: 'Cesáreas', cantidad: 40, color: '#F792CC' },
          ]"
          :radio_interno="0.23"
          :radio_externo="0.39"
          :radio_texto="0.4"
          :titulo="'PORCENTAJES DE PARTOS NATURALES Y POR CESÁREA'"
        ></Dona>
      </div>
    </div>
    <div class="step step-2" data-step="2">
      <p>
        Los resultados de este proyecto no son una muestra representativa a
        nivel estadístico de la población de mujeres cubanas. Hay una
        sobrerrepresentación de La Habana y menor número de respuestas de otras
        provincias. Por tanto, los resultados que aquí expondremos no se pueden
        extrapolar ni generalizar como un reflejo de todas las experiencias de
        parto en el país.
      </p>
      <p>
        Sin embargo, aclaramos que la muestra es aleatoria. No se seleccionaron
        mujeres que expresamente hubiesen tenido un parto traumático, sino
        madres que dieron a luz en Cuba y que tuvieran la disposición de
        responder. Partos Rotos trabajó con 13 mujeres que compartieron el
        cuestionario entre sus redes de contactos, y estas con otras mujeres
        hasta sobrepasar los 500 cuestionarios. Aunque puede existir una
        predisposición de las embarazadas que vivieron violencia a responder el
        cuestionario, tanto periodistas como mujeres que aplicaron cuestionarios eligieron libremente
        a quién preguntar.
      </p>
      <p>
        Para su tesis doctoral, uno de los pocos estudios sobre violencia
        obstétrica en Cuba, Daylis García Jordá abordó esta temática y concluyó,
        al igual que Partos Rotos, que en Cuba “rutinariamente” las embarazadas
        son sometidas a prácticas y a políticas que son “violencia física y de
        género”. Para su estudio la doctora entrevistó a 36 mujeres. Partos
        Rotos ha multiplicado por 14 esa cifra.
      </p>
      <p>
        El análisis de los datos muestra que la violencia obstétrica en los
        salones es sistemática. Las mujeres suelen ser concebidas como cuerpos
        sin autonomía y sin derecho a decidir nada, y no reciben información
        sobre su estado o los procedimientos que les van a realizar. Tampoco
        pueden elegir en qué posición parir ni se les permite caminar. Además
        muchas son maltratadas física, psicológica y verbalmente.
      </p>
      <p>
        La violencia obstétrica no es un fenómeno propiamente de Cuba, sino
        mundial, y que ocurre incluso en países con muchos más recursos. Al
        igual que otras violencias contra las mujeres, tiene su origen en el
        machismo. En los últimos años, y cada vez con más frecuencia, estas
        prácticas han sido denunciadas por la Organización Mundial de la Salud
        (OMS) y UNICEF. Sin embargo, sigue siendo un tema ausente en el discurso
        oficial cubano que prefiere centrarse en ostentar una tasa baja de
        mortalidad infantil pero no le da la misma relevancia a la tasa de
        mortalidad materna o a otros indicadores que reflejen el grado de
        satisfacción de las madres con el trato recibido.
      </p>
      <cite class="cita">
        “No me informaron o pidieron consentimiento para ningún procedimiento:
        sueros, medicamentos, dilatación manual, espéculos... Solo me decían :
        ‘Niña coopera’”, relata una madre que dio a luz en el Hospital Materno
        Infantil Manuel Piti Fajardo. Otras dos mujeres que dieron a luz en
        Camagüey y La Habana agregan: “En ocasiones preguntaba o llamaba a las
        enfermeras y no me contestaban. No levantaban ni la mirada para verte a
        los ojos”; “En el momento del parto le tomé la mano a un doctor y me la
        rechazó con desdén y asco”.
      </cite>
      <p>
        Muchas madres coinciden en que la falta de información y ser
        ignoradas fueron las muestras de violencia que más padecieron. Un 69%
        dijo que no recibió psicoprofilaxis, o sea, que no les explicaron cómo
        sería el proceso de embarazo, parto y la etapa posterior al
        alumbramiento. Y una vez ingresadas, casi el 80% de los cuestionarios
        recopilados apuntan a que las madres no fueron informadas sobre su
        estado de salud durante el parto. Solo el 52% confirmó que le pidieron
        consentimiento para todos los procedimientos que realizaron a ellas y a
        sus bebés durante el parto.
      </p>

      <div class="contenedor-iframe">
        <BarrasApiladas
          :barras_apiladas_id="'bar-apiladas'"
          :datos="data_informacion_atencion.datos"
          :nombre_barra="data_informacion_atencion.nombre_barra"
          :nombre_color="data_informacion_atencion.nombre_color"
          :variables="data_informacion_atencion.variables"
          :margen="data_informacion_atencion.margen"
          :alto_vis="data_informacion_atencion.alto_vis"
          :ancho_tooltip="180"
          :titulo_eje_x="data_informacion_atencion.titulo_eje_x"
          :titulo_eje_y="data_informacion_atencion.titulo_eje_y"
          ref="bar-apiladas"
          class="contenedor-barras-apiladas-elaboradas"
        >
          <template slot="encabezado">
            <div class="encabezado">
              <h5 class="titulo-visualizacion">
                {{ data_informacion_atencion.titulo }}
              </h5>
            </div>
          </template>
          <template slot="pie">
            <div class="pie">
              <div
                class="nomenclatura"
                v-if="data_informacion_atencion.variables.length > 1"
              >
                <div
                  class="nombre-categoria"
                  v-for="variable in data_informacion_atencion.variables"
                  :key="variable.id"
                >
                  <span
                    class="color"
                    v-bind:style="{ background: variable.color }"
                  ></span>
                  <span class="nombre">{{ variable.nombre_subcategoria }}</span>
                </div>
              </div>
            </div>
          </template>
        </BarrasApiladas>
      </div>
    </div>
    <div class="step step-3" data-step="3">
      <div class="contenedor-iframe">
        <BarrasApiladas
          :barras_apiladas_id="'bar-data_consentimiento'"
          :datos="data_consentimiento.datos"
          :nombre_barra="data_consentimiento.nombre_barra"
          :nombre_color="data_consentimiento.nombre_color"
          :variables="data_consentimiento.variables"
          :margen="data_consentimiento.margen"
          :alto_vis="data_consentimiento.alto_vis"
          :ancho_tooltip="180"
          :titulo_eje_x="data_consentimiento.titulo_eje_x"
          :titulo_eje_y="data_consentimiento.titulo_eje_y"
          ref="bar-apiladas"
          class="contenedor-barras-apiladas-elaboradas"
        >
          <template slot="encabezado">
            <div class="encabezado">
              <h5 class="titulo-visualizacion">
                {{ data_consentimiento.titulo }}
              </h5>
            </div>
          </template>
          <template slot="pie">
            <div class="pie">
              <div
                class="nomenclatura"
                v-if="data_consentimiento.variables.length > 1"
              >
                <div
                  class="nombre-categoria"
                  v-for="variable in data_consentimiento.variables"
                  :key="variable.id"
                >
                  <span
                    class="color"
                    v-bind:style="{ background: variable.color }"
                  ></span>
                  <span class="nombre">{{ variable.nombre_subcategoria }}</span>
                </div>
              </div>
            </div>
          </template>
        </BarrasApiladas>
      </div>
      <!--INSERTAR GRÁFICO DE CONSENTIMIENTO SEGÚN TIPO DE  PARTO
					Podemos probar darle una visibilidad distinta al resto del texto, los fragmentos de los testimonios de las madres. Cambiar el formato, poner dentro de un recuadro, etc. lo dejo a su consideración
					-->
    </div>
    <div class="step step-4" data-step="4">
      <h2>¿Qué nos contaron las madres?</h2>
      <cite class="cita">
        “Trataron de dilatarme a la fuerza y ​​estaba con dolor. Me culparon por
        no poder parir. Me dijeron ‘cochina’. Le dijeron a mi familia que no
        quería cooperar. Me pegaron en la cara. Me sentí humillada. No quería
        repetir esa experiencia. Lo consideré el peor momento de mi vida”
        respondió a nuestro cuestionario una madre que dio a luz en el Hospital
        General Docente Universitario Martín Chang Puga de Nuevitas, Camagüey.
      </cite>
      <p>
        Cientos de mujeres confirmaron que hay un panorama de violencia hacia
        ellas dentro del sistema de salud. Un 41% afirmó haber sufrido algún
        episodio de violencia verbal o psicológica, mientras que otro 17% no se
        consideró víctima de este tipo de violencia aunque describió haber
        padecido prácticas que sí son consideradas violencia obstétrica. Esto es
        una evidencia que apunta a que las mujeres han naturalizado ser
        maltratadas como un proceso indisoluble del acto de dar a luz y que no
        reciben la información sobre qué es un parto humanizado y/o cuáles son
        sus derechos. La obstétrica no solo es una de las violencias más
        invisibilizadas, sino también una de las más naturalizadas.
      </p>
      <p>
        Según pudimos confirmar con los testimonios, las manifestaciones más
        comunes de maltratos fueron: ignorar a las embarazadas y no atender a
        sus pedidos, negarles servicios como el uso de analgésicos, y no
        llamarlas por su nombre sino por calificativos que ellas consideraban
        ofensivos o irrespetuosos (negra, gorda, etc). Gritarles, culparlas por
        algún inconveniente y hablarles de modo grosero también son episodios
        frecuentes.
      </p>
      <div class="contenedor-iframe">
        <BarrasApiladas
          :barras_apiladas_id="'bar-data_maltratos_count'"
          :datos="data_maltratos_count.datos"
          :nombre_barra="data_maltratos_count.nombre_barra"
          :nombre_color="data_maltratos_count.nombre_color"
          :variables="data_maltratos_count.variables"
          :margen="data_maltratos_count.margen"
          :alto_vis="data_maltratos_count.alto_vis"
          :ancho_tooltip="180"
          :titulo_eje_x="data_maltratos_count.titulo_eje_x"
          :titulo_eje_y="data_maltratos_count.titulo_eje_y"
          ref="bar-apiladas"
          class="contenedor-barras-apiladas-elaboradas"
        >
          <template slot="encabezado">
            <div class="encabezado">
              <h5 class="titulo-visualizacion">
                {{ data_maltratos_count.titulo }}
              </h5>
            </div>
          </template>
          <template slot="pie">
            <div class="pie">
              <div
                class="nomenclatura"
                v-if="data_maltratos_count.variables.length > 1"
              >
                <div
                  class="nombre-categoria"
                  v-for="variable in data_maltratos_count.variables"
                  :key="variable.id"
                >
                  <span
                    class="color"
                    v-bind:style="{ background: variable.color }"
                  ></span>
                  <span class="nombre">{{ variable.nombre_subcategoria }}</span>
                </div>
              </div>
            </div>
          </template>
        </BarrasApiladas>
      </div>
      <!--AGREGAR GRÁFICA DE MALTRATOS NATURALIZADOS-->
    </div>
    <div class="step step-5" data-step="5">
      <div class="contenedor-iframe">
        <BarrasApiladas
          :barras_apiladas_id="'bar-data_maltratos_naturalizados'"
          :datos="data_maltratos_naturalizados.datos"
          :nombre_barra="data_maltratos_naturalizados.nombre_barra"
          :nombre_color="data_maltratos_naturalizados.nombre_color"
          :variables="data_maltratos_naturalizados.variables"
          :margen="data_maltratos_naturalizados.margen"
          :alto_vis="data_maltratos_naturalizados.alto_vis"
          :ancho_tooltip="180"
          :titulo_eje_x="data_maltratos_naturalizados.titulo_eje_x"
          :titulo_eje_y="data_maltratos_naturalizados.titulo_eje_y"
          ref="bar-apiladas"
          class="contenedor-barras-apiladas-elaboradas"
        >
          <template slot="encabezado">
            <div class="encabezado">
              <h5 class="titulo-visualizacion">
                {{ data_maltratos_naturalizados.titulo }}
              </h5>
            </div>
          </template>
          <template slot="pie">
            <div class="pie">
              <div
                class="nomenclatura"
                v-if="data_maltratos_naturalizados.variables.length > 1"
              >
                <div
                  class="nombre-categoria"
                  v-for="variable in data_maltratos_naturalizados.variables"
                  :key="variable.id"
                >
                  <span
                    class="color"
                    v-bind:style="{ background: variable.color }"
                  ></span>
                  <span class="nombre">{{ variable.nombre_subcategoria }}</span>
                </div>
              </div>
            </div>
          </template>
        </BarrasApiladas>
      </div>
      <!--Agregar gráfico de maltratos frecuentes .-->
    </div>
    <div class="step step-6" data-step="6">
      <p>
        En el país, con hospitales carentes y que no satisfacen la demanda, los
        médicos/as suelen acelerar los partos para facilitar su trabajo en
        detrimento del curso natural de un proceso fisiológico. Al menos en los
        testimonios recogidos por esta investigación, el uso de la episiotomía,
        un corte en el perineo que facilita el parto, parece ser indiscriminado
        en los hospitales cubanos, a la par que se realizan procedimientos
        obsoletos que pueden afectar la salud de la madre y su bebé. La
        prioridad parece ser que la gestante dé a luz rápido, aunque sea
        violentada en el proceso.
      </p>
      <cite class="cita">
        “No tenían que picarme porque tenía espacio y lo hicieron. Yo sé que
        tenía espacio porque escuché cuando el jefe del equipo médico los
        regañaba”, corrobora una madre que dio a luz en el Hospital
        Universitario Ginecobstétrico Eusebio Hernández Pérez
      </cite>
      <p>
        Un 76% de las madres que tuvieron un parto vaginal afirmó que se
        les practicó una episiotomía. De ellas a solo el 21 % le pidieron
        consentimiento y al 73% no le aplicaron anestesia para cortarlas.
      </p>
      <p>
        Por otra parte, un 44% sufrió la maniobra de Kristeller, un
        procedimiento que consiste en apretar a la embarazada por las costillas
        y exprimirla para conducir al bebé al canal de parto, incluso se pueden
        llegar a subir sobre ellas. Tal maniobra es desaconsejada por la OMS
        desde 2014, pero en Cuba se sigue practicando.
      </p>
      <!---<div class="contenedor-iframe" v-if="!pantalla_grande">
        <BarrasApiladas
          :barras_apiladas_id="'bar-data_episiotomia'"
          :datos="data_episiotomia.datos"
          :nombre_barra="data_episiotomia.nombre_barra"
          :nombre_color="data_episiotomia.nombre_color"
          :variables="data_episiotomia.variables"
          :margen="data_episiotomia.margen"
          :alto_vis="data_episiotomia.alto_vis"
          :ancho_tooltip="180"
          :titulo_eje_x="data_episiotomia.titulo_eje_x"
          :titulo_eje_y="data_episiotomia.titulo_eje_y"
          ref="bar-apiladas"
          class="contenedor-barras-apiladas-elaboradas"
        >
          <template slot="encabezado">
            <div class="encabezado">
              <h5 class="titulo-visualizacion">
                {{ data_episiotomia.titulo }}
              </h5>
            </div>
          </template>
          <template slot="pie">
            <div class="pie">
              <div
                class="nomenclatura"
                v-if="data_episiotomia.variables.length > 1"
              >
                <div
                  class="nombre-categoria"
                  v-for="variable in data_episiotomia.variables"
                  :key="variable.id"
                >
                  <span
                    class="color"
                    v-bind:style="{ background: variable.color }"
                  ></span>
                  <span class="nombre">{{ variable.nombre_subcategoria }}</span>
                </div>
              </div>
            </div>
          </template>
        </BarrasApiladas>
      </div>
      -->
      <!--Agregar gráfico de episiotomía pero solo en partos vaginales. No incluir cesáreas-->
    </div>
    <div class="step step-7" data-step="7">
      <div class="contenedor-iframe">
        <BarrasApiladas
          :barras_apiladas_id="'bar-data_kristeller'"
          :datos="data_kristeller.datos"
          :nombre_barra="data_kristeller.nombre_barra"
          :nombre_color="data_kristeller.nombre_color"
          :variables="data_kristeller.variables"
          :margen="data_kristeller.margen"
          :alto_vis="data_kristeller.alto_vis"
          :ancho_tooltip="180"
          :titulo_eje_x="data_kristeller.titulo_eje_x"
          :titulo_eje_y="data_kristeller.titulo_eje_y"
          ref="bar-apiladas"
          class="contenedor-barras-apiladas-elaboradas"
        >
          <template slot="encabezado">
            <div class="encabezado">
              <h5 class="titulo-visualizacion">{{ data_kristeller.titulo }}</h5>
            </div>
          </template>
          <template slot="pie">
            <div class="pie">
              <div
                class="nomenclatura"
                v-if="data_kristeller.variables.length > 1"
              >
                <div
                  class="nombre-categoria"
                  v-for="variable in data_kristeller.variables"
                  :key="variable.id"
                >
                  <span
                    class="color"
                    v-bind:style="{ background: variable.color }"
                  ></span>
                  <span class="nombre">{{ variable.nombre_subcategoria }}</span>
                </div>
              </div>
            </div>
          </template>
        </BarrasApiladas>
      </div>
      <!--AGREGAR GRÁFICO-->
    </div>
    <div class="step step-8" data-step="8">
      <p>
        Además, la mayoría de las madres (el 86%) aseguró que se le negaron
        analgésicos cuando los pidieron. Las madres cubanas deben atravesar la
        agonía que puede representar un parto sin que se les ayude a aliviar el
        dolor o reciban muestras de empatía. Incluso lo deben padecer solas. Un
        83% de las mujeres que respondieron nuestro cuestionario no pudo estar
        acompañada durante el parto.
      </p>
      <p>
        Aproximadamente al 61% de las gestantes no les permitió tener contacto
        con su hijo o hija al nacer y al 58% no le permitieron caminar para
        facilitar su labor de parto. Esto también es violencia obstétrica.
      </p>
      <div class="contenedor-iframe">
        <BarrasApiladas
          :barras_apiladas_id="'bar-data_acompaniadas'"
          :datos="data_acompaniadas.datos"
          :nombre_barra="data_acompaniadas.nombre_barra"
          :nombre_color="data_acompaniadas.nombre_color"
          :variables="data_acompaniadas.variables"
          :margen="data_acompaniadas.margen"
          :alto_vis="data_acompaniadas.alto_vis"
          :ancho_tooltip="180"
          :titulo_eje_x="data_acompaniadas.titulo_eje_x"
          :titulo_eje_y="data_acompaniadas.titulo_eje_y"
          ref="bar-apiladas"
          class="contenedor-barras-apiladas-elaboradas"
        >
          <template slot="encabezado">
            <div class="encabezado">
              <h5 class="titulo-visualizacion">
                {{ data_acompaniadas.titulo }}
              </h5>
            </div>
          </template>
          <template slot="pie">
            <div class="pie">
              <div
                class="nomenclatura"
                v-if="data_acompaniadas.variables.length > 1"
              >
                <div
                  class="nombre-categoria"
                  v-for="variable in data_acompaniadas.variables"
                  :key="variable.id"
                >
                  <span
                    class="color"
                    v-bind:style="{ background: variable.color }"
                  ></span>
                  <span class="nombre">{{ variable.nombre_subcategoria }}</span>
                </div>
              </div>
            </div>
          </template>
        </BarrasApiladas>
      </div>
      <!--AGREGAR gráfico por hospital de acompañamiento durante parto o cesárea-->
    </div>
    <div class="step step-9" data-step="9">
      <p>
        Tras el proceso del parto, algunas aseguraron haber sufrido anemia
        (16%), infecciones (10%), e incontinencia urinaria (7%). Sin embargo,
        fueron más frecuentes las secuelas emocionales como miedo a un nuevo
        embarazo (30%), visualizar imágenes repetitivas de su parto (30%),
        cambios de humor (25%), dificultad para dormir (24%), miedo a volver a
        enfrentarse al sistema de salud cubano (23%) y depresión posparto (14%).
      </p>
      <cite class="cita"
        >“Me tuvieron 28 horas en trabajo de parto. Me correspondía una cesárea
        de antemano programada, pero me obligaron a parir. Me quedé con seis de
        hemoglobina, casi muerta. Pasé tres meses en silla de ruedas, sin contar
        que mi bebé nació cianótica. Solo puedo decir que tuve más embarazos y
        ninguno lo tuve por miedo a vivir de nuevo lo mismo”, respondió a
        nuestro cuestionario una madre que dio a luz en 1998 en el Hospital
        Maternidad de Línea.
      </cite>
      <p>
        Casi 20 años después, en 2017, otra mujer cubana salió del hospital
        Ramón González Coro con pánico a tener nuevos embarazos. “No quería
        tener más hijos: veía el embarazo como la peor enfermedad que me podía
        ocurrir. Durante mucho tiempo me daba terror un embarazo; veía a los
        niños en la calle y solo pensaba en el dolor de sus madres. Nunca más vi
        el embarazo de una forma linda, romántica, sino como una pesadilla, una
        bomba de tiempo que explota durante el parto”.
      </p>
      <!--Mover en el mapa A las capas secuelas y que vaya ilustrando varias provincias D mientras se lee esto-->
    </div>
    <div class="step step-10" data-step="10">
      <h2>¿Por qué esta investigación?</h2>
      <p>
        Los medios de propaganda cubanos suelen resaltar la baja tasa de
        mortalidad infantil y los logros del programa materno infantil (PAMI),
        pero no se publicitan otros indicadores de calidad de la atención y/o
        bienestar de las madres. Esta falta de información precisamente da pie a
        que se cuestione si existe o no el fenómeno de la violencia obstétrica
        en Cuba.
      </p>
      <p>
        Esto es relevante si contemplamos que la propia Revista Cubana de
        Obstetricia y Ginecología reconoció en un
        <a
          class="link-text"
          href="https://www.medigraphic.com/pdfs/revcubobsgin/cog-2018/cog183b.pdf"
          target="_blank"
        >
          un artículo de 2018
        </a>
        que, dada la poca información que existe, no podía asegurarse que no
        haya partos humanizados, ni crueldad durante el proceso. “La
        insuficiencia de estudios en Cuba respecto al tema imposibilita
        proporcionar datos reales o aproximados del manejo del parto humanizado.
        Sigue siendo necesario el desarrollo de investigaciones de corte
        cualitativo y trabajos de campo que estimen las características de la
        atención”, apuntó el artículo.
      </p>
      <p>
        La base de datos que hemos construido, -y esperamos seguir ampliando-
        puede ser un primer paso para suplir ese vacío de información y mostrar,
        que, en efecto, han sido violentadas, al menos, cientos de mujeres en
        los hospitales cubanos. El sistema de salud de la isla, si bien se
        preocupa por la tasa de mortalidad infantil, no tiene en cuenta a las
        mujeres, sus experiencias y sus necesidades.
      </p>
    </div>

    <p>
      **Para explorar cuáles fueron las principales manifestaciones de violencia
      sufridas por las madres, los invitamos a interactuar con el mapa y
      explorar cada hospital. En la visualización también pueden analizar las
      secuelas psicológicas que tuvieron estas cubanas tras sus partos.
    </p>
    <p>
      **Nota: Como parte de la aplicación de este cuestionario procesamos las
      respuestas abiertas de las madres. Casi 200 relataron con más detalle sus
      experiencias durante el parto y el embarazo. Algunos fragmentos fueron
      utilizados en esta visualización. Si quieres leer los testimonios
      completos puedes pinchar en este

      <router-link class="link-text" :to="{ name: 'Testimonios' }"
        >enlace</router-link
      >
    </p>
    <p>
      ** Si has dado a luz en Cuba y quieres compartirnos tu experiencia, puedes
      acceder a nuestros
      <router-link class="link-text" :to="{ name: 'Cuestionarios' }"
        >cuestionarios</router-link
      >
    </p>
  </div>
</template>
<script>
import StoryTellingMapa from "@/components/visualizaciones/StoryTellingMapa.vue";
import BarrasApiladas from "@/components/visualizaciones/GraficaBarras.vue";
import Dona from "@/components/visualizaciones/GraficaDona.vue";

export default {
  name: "ScrollyTelling",
  components: {
    StoryTellingMapa,
    BarrasApiladas,
    Dona,
  },
  data() {
    return {
      paso: -1,
      informados: String,
      datos_barras: {
        margen: { arriba: 20, abajo: 70, izquierda: 40, derecha: 20 },
        alto_vis: 400,
        datos: [
          { nombre: "Alto riesgo", si: 120, no: 32 },
          { nombre: "Bajo riesgo", si: 249, no: 78 },
          { nombre: "Otro", si: 26, no: 9 },
        ],
        variables: [
          { id: "si", nombre_subcategoria: "Sí", color: "#B987FF" },
          { id: "no", nombre_subcategoria: "No", color: "#F792CC" },
        ],
        nombre_barra: "nombre",
        nombre_color: "nombre_subcategoria",
        titulo_eje_x: "Atención materna",
        titulo_eje_y: "Mujeres",
        titulo:
          "Recibió información por parte del personal médico sobre su estado de salud antes del parto",
      },
      data_informacion_atencion: {
        margen: { arriba: 20, abajo: 70, izquierda: 40, derecha: 20 },
        alto_vis: 400,
        datos: [
          { nombre: "Alto riesgo", si: 120, no: 32 },
          { nombre: "Bajo riesgo", si: 249, no: 78 },
          { nombre: "Otro", si: 26, no: 9 },
        ],
        variables: [
          { id: "si", nombre_subcategoria: "Sí", color: "#B987FF" },
          { id: "no", nombre_subcategoria: "No", color: "#F792CC" },
        ],
        nombre_barra: "nombre",
        nombre_color: "nombre_subcategoria",
        titulo_eje_x: "Atención materna",
        titulo_eje_y: "Mujeres",
        titulo:
          "NÚMERO DE MUJERES QUE RECIBIERON POR PARTE DEL PERSONAL MÉDICO INFORMACIÓN SOBRE SU ESTADO DE SALUD DURANTE EL PARTO",
      },
      data_consentimiento: {
        margen: { arriba: 20, abajo: 170, izquierda: 30, derecha: 20 },
        alto_vis: 400,
        datos: [
          {
            nombre: "Cesárea de urgencia",
            no_ninguno: 28.0,
            si_algunos: 4.0,
            si_todos: 27.0,
          },
          {
            nombre: "Cesárea después de fallar parto",
            no_ninguno: 21.0,
            si_algunos: 0,
            si_todos: 51.0,
          },
          {
            nombre: "Cesárea programada",
            no_ninguno: 10.0,
            si_algunos: 5.0,
            si_todos: 46.0,
          },
          {
            nombre: "Parto vaginal",
            no_ninguno: 174.0,
            si_algunos: 26.0,
            si_todos: 122.0,
          },
        ],
        variables: [
          {
            id: "no_ninguno",
            nombre_subcategoria: "No, para ninguno",
            color: "#78ACFF",
          },
          {
            id: "si_algunos",
            nombre_subcategoria: "Sí, para algunos",
            color: "#B987FF",
          },
          {
            id: "si_todos",
            nombre_subcategoria: "Sí, para todos",
            color: "#F792CC",
          },
        ],
        nombre_barra: "nombre",
        nombre_color: "nombre_subcategoria",
        titulo_eje_x: "Tipo de parto",
        titulo_eje_y: "Mujeres",
        titulo:
          "NÚMERO DE MUJERES A QUIENES SOLICITARON CONSENTIMIENTO PARA LOS PROCEDIMIENTOS PRACTICADOS",
      },
      data_maltratos_count: {
        margen: { arriba: 20, abajo: 270, izquierda: 30, derecha: 20 },
        alto_vis: 600,
        datos: [
          {
            nombre_largo: "Te llamaron por sobrenombres o diminutivos",
            nombre: "Maltrato 1",
            cantidad: 104,
          },
          {
            nombre_largo: "Se burlaron de ti",
            nombre: "Maltrato 2",
            cantidad: 42,
          },
          {
            nombre_largo: "Te hablaron en voz alta de modo grosero",
            nombre: "Maltrato 3",
            cantidad: 987,
          },
          {
            nombre_largo: "Ignoraron algo que les pediste",
            nombre: "Maltrato 4",
            cantidad: 133,
          },
          {
            nombre_largo: "Te dijeron que no explícitamente a algo que pediste",
            nombre: "Maltrato 5",
            cantidad: 101,
          },
          {
            nombre_largo: "Te dieron golpes, sacudidas, empujones",
            nombre: "Maltrato 6",
            cantidad: 13,
          },
          {
            nombre_largo:
              "Te dijeron que estabas poniendo en riesgo a tu hijo/a",
            nombre: "Maltrato 7",
            cantidad: 69,
          },
          {
            nombre_largo:
              "Te culparon por situaciones ocurridas en el nacimiento",
            nombre: "Maltrato 8",
            cantidad: 19,
          },
          {
            nombre_largo: "Te amenazaron",
            nombre: "Maltrato 9",
            cantidad: 13,
          },
          {
            nombre_largo: "Otro tipo de maltrato",
            nombre: "Maltrato 10",
            cantidad: 70,
          },
        ],
        variables: [
          { id: "cantidad", nombre_subcategoria: "Maltrato", color: "#FDA1C9" },
        ],
        nombre_barra: "nombre_largo",
        nombre_color: "nombre_subcategoria",
        titulo_eje_x: "Tipo de maltrato",
        titulo_eje_y: "Mujeres",
        titulo:
          "CANTIDAD TOTAL DE MALTRATOS FÍSICOS Y/O VERBALES QUE SUFRIERON LAS MUJERES",
      },
      data_maltratos_naturalizados: {
        margen: { arriba: 20, abajo: 270, izquierda: 30, derecha: 20 },
        alto_vis: 600,
        datos: [
          {
            nombre_largo: "Te llamaron por sobrenombres o diminutivos",
            nombre: "Maltrato 1",
            cantidad: 43,
          },
          {
            nombre_largo: "Se burlaron de ti",
            nombre: "Maltrato 2",
            cantidad: 1,
          },
          {
            nombre_largo: "Te hablaron en voz alta de modo grosero",
            nombre: "Maltrato 3",
            cantidad: 11,
          },
          {
            nombre_largo: "Ignoraron algo que les pediste",
            nombre: "Maltrato 4",
            cantidad: 44,
          },
          {
            nombre_largo: "Te dijeron que no explícitamente a algo que pediste",
            nombre: "Maltrato 5",
            cantidad: 27,
          },
          {
            nombre_largo: "Te dieron golpes, sacudidas, empujones",
            nombre: "Maltrato 6",
            cantidad: 0,
          },
          {
            nombre_largo:
              "Te dijeron que estabas poniendo en riesgo a tu hijo/a",
            nombre: "Maltrato 7",
            cantidad: 17,
          },
          {
            nombre_largo:
              "Te culparon por situaciones ocurridas en el nacimiento",
            nombre: "Maltrato 8",
            cantidad: 4,
          },
          {
            nombre_largo: "Te amenazaron",
            nombre: "Maltrato 9",
            cantidad: 1,
          },
          {
            nombre_largo: "Otro tipo de maltrato",
            nombre: "Maltrato 10",
            cantidad: 16,
          },
        ],
        variables: [
          { id: "cantidad", nombre_subcategoria: "Maltrato", color: "#FDA1C9" },
        ],
        nombre_barra: "nombre_largo",
        nombre_color: "nombre_subcategoria",
        titulo_eje_x: "Tipo de maltrato",
        titulo_eje_y: "Mujeres",
        titulo:
          "NÚMERO DE MUJERES QUE NEGARON HABER SUFRIDO MALTRATO PERO LUEGO MARCARON ALGÚN TIPO",
      },
      data_episiotomia: {
        margen: { arriba: 20, abajo: 170, izquierda: 30, derecha: 20 },
        alto_vis: 400,
        datos: [
          { nombre: "Cesárea de urgencia", no: 58, si: 1 },
          { nombre: "Cesárea después de fallar parto", no: 71, si: 1 },
          { nombre: "Cesárea programada", no: 60, si: 1 },
          { nombre: "Parto vaginal", no: 81, si: 241 },
        ],
        variables: [
          { id: "si", nombre_subcategoria: "Sí", color: "#B987FF" },
          { id: "no", nombre_subcategoria: "No", color: "#F792CC" },
        ],
        nombre_barra: "nombre",
        nombre_color: "nombre_subcategoria",
        titulo_eje_x: "Tipo de parto",
        titulo_eje_y: "Mujeres",
        titulo: "Mujeres a las que les practicaron episiotomía",
      },
      data_kristeller: {
        margen: { arriba: 20, abajo: 40, izquierda: 30, derecha: 20 },
        alto_vis: 400,
        datos: [
          { fecha: "1952", si: 1.0, no: 0.0 },
          { fecha: "1953", si: 1.0, no: 0.0 },
          { fecha: "1954", si: 0.0, no: 0.0 },
          { fecha: "1955", si: 0.0, no: 3.0 },
          { fecha: "1956", si: 1.0, no: 0.0 },
          { fecha: "1957", si: 1.0, no: 1.0 },
          { fecha: "1958", si: 0.0, no: 0.0 },
          { fecha: "1959", si: 1.0, no: 1.0 },
          { fecha: "1960", si: 0.0, no: 3.0 },
          { fecha: "1961", si: 3.0, no: 3.0 },
          { fecha: "1962", si: 1.0, no: 3.0 },
          { fecha: "1963", si: 3.0, no: 6.0 },
          { fecha: "1964", si: 3.0, no: 2.0 },
          { fecha: "1965", si: 3.0, no: 6.0 },
          { fecha: "1966", si: 3.0, no: 3.0 },
          { fecha: "1967", si: 2.0, no: 4.0 },
          { fecha: "1968", si: 3.0, no: 1.0 },
          { fecha: "1969", si: 2.0, no: 9.0 },
          { fecha: "1970", si: 2.0, no: 4.0 },
          { fecha: "1971", si: 4.0, no: 11.0 },
          { fecha: "1972", si: 1.0, no: 5.0 },
          { fecha: "1973", si: 2.0, no: 4.0 },
          { fecha: "1974", si: 7.0, no: 7.0 },
          { fecha: "1975", si: 6.0, no: 7.0 },
          { fecha: "1976", si: 2.0, no: 7.0 },
          { fecha: "1977", si: 5.0, no: 5.0 },
          { fecha: "1978", si: 5.0, no: 12.0 },
          { fecha: "1979", si: 5.0, no: 5.0 },
          { fecha: "1980", si: 4.0, no: 8.0 },
          { fecha: "1981", si: 2.0, no: 5.0 },
          { fecha: "1982", si: 6.0, no: 17.0 },
          { fecha: "1983", si: 13.0, no: 14.0 },
          { fecha: "1984", si: 8.0, no: 10.0 },
          { fecha: "1985", si: 9.0, no: 13.0 },
          { fecha: "1986", si: 3.0, no: 8.0 },
          { fecha: "1987", si: 13.0, no: 11.0 },
          { fecha: "1988", si: 18.0, no: 10.0 },
          { fecha: "1989", si: 13.0, no: 16.0 },
          { fecha: "1990", si: 12.0, no: 11.0 },
          { fecha: "1991", si: 10.0, no: 8.0 },
          { fecha: "1992", si: 10.0, no: 10.0 },
          { fecha: "1993", si: 14.0, no: 9.0 },
          { fecha: "1994", si: 2.0, no: 3.0 },
          { fecha: "1995", si: 7.0, no: 2.0 },
          { fecha: "1996", si: 1.0, no: 3.0 },
          { fecha: "1997", si: 0.0, no: 1.0 },
          { fecha: "1998", si: 3.0, no: 3.0 },
          { fecha: "1999", si: 0.0, no: 0.0 },
          { fecha: "2000", si: 2.0, no: 1.0 },
          { fecha: "2001", si: 0.0, no: 1.0 },
          { fecha: "2002", si: 0.0, no: 1.0 },
          { fecha: "2003", si: 0.0, no: 1.0 },
          { fecha: "2004", si: 0.0, no: 0.0 },
          { fecha: "2005", si: 0.0, no: 0.0 },
          { fecha: "2006", si: 0.0, no: 0.0 },
          { fecha: "2007", si: 0.0, no: 0.0 },
          { fecha: "2008", si: 0.0, no: 0.0 },
          { fecha: "2009", si: 0.0, no: 0.0 },
          { fecha: "2010", si: 0.0, no: 0.0 },
          { fecha: "2011", si: 0.0, no: 0.0 },
          { fecha: "2012", si: 0.0, no: 0.0 },
          { fecha: "2013", si: 0.0, no: 0.0 },
          { fecha: "2014", si: 0.0, no: 0.0 },
          { fecha: "2015", si: 0.0, no: 0.0 },
          { fecha: "2016", si: 0.0, no: 0.0 },
          { fecha: "2017", si: 0.0, no: 0.0 },
          { fecha: "2018", si: 0.0, no: 0.0 },
          { fecha: "2019", si: 0.0, no: 0.0 },
          { fecha: "2020", si: 0.0, no: 0.0 },
          { fecha: "2021", si: 3.0, no: 1.0 },
        ],
        variables: [
          { id: "si", nombre_subcategoria: "Sí", color: "#B987FF" },
          { id: "no", nombre_subcategoria: "No", color: "#F792CC" },
        ],
        nombre_barra: "fecha",
        nombre_color: "nombre_subcategoria",
        titulo_eje_x: "Año del parto",
        titulo_eje_y: "Mujeres",
        titulo:
          "NÚMERO DE MUJERES A LAS QUE SE LES PRACTICÓ LA MANIOBRA DE KRISTELLER",
      },
      data_acompaniadas: {
        margen: { arriba: 20, abajo: 0, izquierda: 30, derecha: 20 },
        alto_vis: 400,
        datos: [
          {
            nombre: "Hospital Clínico Quirúrgico Amalia Simoni ",
            si: 0.0,
            no: 1.0,
          },
          {
            nombre: "Hospital Clínico Quirúrgico Docente Julio Trigo López",
            si: 1.0,
            no: 0.0,
          },
          {
            nombre: "Hospital Clínico Quirúrgico Dr. Luis Aldama Palomino",
            si: 0.0,
            no: 2.0,
          },
          {
            nombre:
              "Hospital Clínico Quirúrgico Hermanos Ameijeiras (La Habana)",
            si: 0.0,
            no: 1.0,
          },
          {
            nombre: "Hospital Clínico Quirúrgico Juan Bruno Zayas",
            si: 0.0,
            no: 2.0,
          },
          {
            nombre: "Hospital Clínico Quirúrgico León Cuervo Rubío",
            si: 2.0,
            no: 2.0,
          },
          {
            nombre: "Hospital Docente Ginecobstétrico Justo Legón Padilla",
            si: 1.0,
            no: 0.0,
          },
          {
            nombre:
              "Hospital Docente Ginecobstétrico de Guanabacoa (La Fátima)",
            si: 1.0,
            no: 8.0,
          },
          {
            nombre: "Hospital General Docente 26 de Diciembre de Remedios",
            si: 0.0,
            no: 1.0,
          },
          {
            nombre: "Hospital General Docente Comandante Ciro Redondo García",
            si: 1.0,
            no: 0.0,
          },
          {
            nombre: "Hospital General Docente Comandante Pinares",
            si: 0.0,
            no: 4.0,
          },
          {
            nombre: "Hospital General Docente Dr. Agostinho Neto",
            si: 1.0,
            no: 1.0,
          },
          {
            nombre:
              "Hospital General Docente Dr. Antonio Luaces Iraola (Hospital General Provincial Docente de Ciego de Avila)",
            si: 0.0,
            no: 2.0,
          },
          {
            nombre: "Hospital General Docente Enrique Cabrera (Nacional)",
            si: 1.0,
            no: 17.0,
          },
          {
            nombre: "Hospital General Docente Héroes de Baire",
            si: 0.0,
            no: 4.0,
          },
          {
            nombre: "Hospital General Docente Iván Portuondo",
            si: 1.0,
            no: 3.0,
          },
          {
            nombre:
              "Hospital General Docente Julio Aristegui Villamil (Cárdenas, Matanzas)",
            si: 3.0,
            no: 7.0,
          },
          {
            nombre: "Hospital General Docente Leopoldito Martínez",
            si: 0.0,
            no: 1.0,
          },
          {
            nombre: "Hospital General Docente Mártires de Mayarí",
            si: 0.0,
            no: 1.0,
          },
          {
            nombre: "Hospital General Docente Provincial\xa0Roberto Rodríguez",
            si: 1.0,
            no: 1.0,
          },
          {
            nombre:
              "Hospital General Docente Universitario\xa0Martin Chang Puga",
            si: 1.0,
            no: 2.0,
          },
          {
            nombre: "Hospital General Docente Vladimir Ilich Lenin",
            si: 0.0,
            no: 2.0,
          },
          {
            nombre: "Hospital General Municipal 27 de Noviembre",
            si: 0.0,
            no: 6.0,
          },
          {
            nombre:
              "Hospital General Universitario Dr. Gustavo Aldereguía Lima (Cienfuegos)",
            si: 0.0,
            no: 3.0,
          },
          {
            nombre:
              "Hospital Ginecobstétrico América Arias (Maternidad de Línea)",
            si: 3.0,
            no: 23.0,
          },
          {
            nombre: "Hospital Ginecobstétrico Clodomira Acosta",
            si: 1.0,
            no: 4.0,
          },
          {
            nombre:
              "Hospital Ginecobstétrico Docente Dra. Nelia I. Delfín Ripoll",
            si: 0.0,
            no: 2.0,
          },
          {
            nombre:
              "Hospital Ginecobstétrico Materno Sur Mariana Grajales (Clínica Los Ángeles)",
            si: 2.0,
            no: 18.0,
          },
          {
            nombre: "Hospital Ginecobstétrico Ramón González Coro",
            si: 3.0,
            no: 73.0,
          },
          {
            nombre: "Hospital Guillermo Domínguez (Puerto Padre)",
            si: 1.0,
            no: 1.0,
          },
          {
            nombre:
              "Hospital Materno Hijas de Galicia (Hospital Materno Infantil Diez de Octubre)",
            si: 0.0,
            no: 30.0,
          },
          {
            nombre:
              "Hospital Materno Infantil Dr. Ángel Arturo Aballí (Arroyo Naranjo, La Habana)",
            si: 1.0,
            no: 6.0,
          },
          {
            nombre:
              "Hospital Materno Infantil Lebredo (Arroyo Naranjo, La Habana)",
            si: 0.0,
            no: 3.0,
          },
          {
            nombre: "Hospital Materno Infantil Manuel Piti Fajardo",
            si: 0.0,
            no: 2.0,
          },
          {
            nombre:
              "Hospital Materno Infantil provincial Isabel María de Valdivia y Salas ",
            si: 1.0,
            no: 2.0,
          },
          { nombre: "Hospital Materno Norte Tamara Bunke", si: 0.0, no: 2.0 },
          {
            nombre: "Hospital Materno Sur (Clínica Los Ángeles)",
            si: 1.0,
            no: 2.0,
          },
          {
            nombre: "Hospital Militar Luis Díaz Soto (Naval)",
            si: 2.0,
            no: 6.0,
          },
          {
            nombre: "Hospital Pediátrico Provincial Docente Pepé Portilla",
            si: 0.0,
            no: 1.0,
          },
          {
            nombre:
              "Hospital Provincial Docente Ginecobstétrico José Ramón López Tabranes",
            si: 0.0,
            no: 1.0,
          },
          {
            nombre:
              "Hospital Provincial Ginecobstétrico Julio Rafael Alfonso Medina (Antiguo Hospital Materno de Matanzas)",
            si: 1.0,
            no: 8.0,
          },
          {
            nombre:
              "Hospital Provincial Universitario Camilo Cienfuegos Gorriarán (Sancti Spíritus)",
            si: 0.0,
            no: 3.0,
          },
          { nombre: "Hospital Rural Isidro de Armas", si: 0.0, no: 1.0 },
          {
            nombre: "Hospital Universitario Abel Santamaría Cuadrado",
            si: 4.0,
            no: 31.0,
          },
          {
            nombre:
              "Hospital Universitario Ginecobstétrico Eusebio Hernández Pérez (Maternidad obrera)",
            si: 29.0,
            no: 91.0,
          },
          {
            nombre:
              "Hospital\xa0Ginecobstétrico Provincial\xa0Ana Betancourt\xa0de Mora",
            si: 20.0,
            no: 46.0,
          },
          { nombre: "Materno Celia Sánchez ", si: 0.0, no: 1.0 },
        ],
        variables: [
          { id: "si", nombre_subcategoria: "Sí", color: "#B987FF" },
          { id: "no", nombre_subcategoria: "No", color: "#F792CC" },
        ],
        nombre_barra: "nombre",
        nombre_color: "nombre_subcategoria",
        titulo_eje_x: "Hospital",
        titulo_eje_y: "Mujeres",
        titulo: "NÚMERO DE MUJERES ACOMPAÑADAS DURANTE EL PARTO",
      },
    };
  },
  beforeMount() {
    this.pantalla_grande = parseInt(window.innerWidth) > 769;
  },
  mounted() {
    this.informados = "graficas/informacion_atencion.html";
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables";

div.reportaje {
  //h1{}
  p.autorxs {
    text-transform: uppercase;
    color: #4a2582;
    font-size: 16px;
  }
  p.sumario {
    text-transform: uppercase;
    color: #4a2582;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    a {
      color: #4a2582;
      &:visited,
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .contenedor-iframe {
    margin: 40px 0;
  }
  .cita {
    color: #fda1c9;
    line-height: 1.1;
    font-size: 24px;
    opacity: 1;
    font-weight: 800;
    //text-transform: uppercase;
    @media screen and (max-width: map-get($media-queries-limit, "mobile")) {
      font-size: 18px;
    }
  }
  h2 {
    color: #4a2582;
  }

  img {
    width: 100%;
  }
}
</style>

