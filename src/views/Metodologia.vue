<template>
  <div class="metodologia container main">
    <div class="container text">
      <h1>Metodología de trabajo</h1>
      <p>
        Partos Rotos es una investigación sobre la violencia obstétrica en Cuba. El proyecto, desde una visión integral, ha seguido una metodología en la que se emplearon métodos y técnicas de investigación periodística combinadas con algunos procedimientos de la investigación social como cuestionarios y entrevistas en profundidad. Uno de los principales aportes de esta investigación es la implementación de dos cuestionarios: uno destinado a recopilar información sobre las experiencias de partos (Parto Propio) y el otro enfocado en los casos de muerte materna durante el parto. 
      </p>
    </div>
    <div class="container text-cita">
      <p>LOS CUESTIONARIOS</p>
    </div>
    <div class="container text">
      <p>
        Se formó un equipo de 13 encuestadoras para aplicar los cuestionarios.  Antes de iniciar el proceso de recolección de datos, se realizó una prueba piloto de los mismos para saber cómo funcionaban. 
      </p>
      <p>
        Con un total de 74 preguntas, la primera versión del cuestionario Parto Propio se propuso recoger la mayor cantidad de datos referidos a las experiencias de parto en Cuba.  Se realizaron 514 cuestionarios, en un total de 14 provincias y el municipio especial: Artemisa, Camagüey, Ciego de Ávila, Cienfuegos, Guantánamo, Holguín, Isla de la Juventud, La Habana, Las Tunas, Matanzas, Mayabeque, Pinar del Río, Sancti Spíritus, Santiago de Cuba y Villa Clara. Las mujeres que participaron en este ejercicio lo hicieron de forma voluntaria. En ningún momento los cuestionarios representan una muestra estadística del problema en Cuba.
      </p>
      <p>
        De los 514 cuestionarios,  en 11 respuestas se omitieron las fechas de partos u otros datos referidos a los hospitales. Si bien se tomaron en cuenta sus respuestas, dejamos claro que este fue uno de los inconvenientes a los que nos enfrentamos durante la aplicación del cuestionario. Las mujeres con varios partos rellenaron un cuestionario distinto por parto. Por tanto, el total de cuestionarios no es igual que el total de mujeres que participaron.
      </p>
      <p>
        En cuanto a las estrategias de aplicación de los cuestionarios se recurrió a diversas técnicas. Las encuestadoras confeccionaron una amplia red de contactos de madres cubanas, dentro y fuera del país. Todas las mujeres tuvieron al menos una experiencia de parto en Cuba.  Teniendo en cuenta el contexto digital cubano, decidimos que la plataforma online más adecuada para programar los cuestionarios era Limesurvey; no obstante, creamos una versión offline, en formato Word, para quienes no pudieran conectarse tanto tiempo a la versión online. Por cuestiones derivadas de la pandemia de Covid-19, se accedió a la mayoría de las mujeres y redes de contactos de manera remota, vía aplicaciones de mensajería o por correo electrónico.
      </p>
    </div>
    <div class="container text-cita">
      <p>INVESTIGACIÓN PERIODÍSTICA</p>
    </div>
    <div class="container text">
      <p>
        Se realizaron entrevistas en profundidad a personal médico (hombres y mujeres) y especialistas en el tema de Cuba y América Latina.  Se recopilaron diversos testimonios de madres cubanas que se presentan en nuestra web en diferentes soportes y formatos. 
      </p>
      <p>
        Todos los datos, documentos y testimonios de nuestra investigación están amparados en el respeto a la privacidad y en el consentimiento de cada persona a la que accedimos para la investigación. Para la confección de los testimonios se les pidió a las madres que contaran sus experiencias ellas mismas. Es por ello que, en su mayoría, los testimonios en versión texto representan la oralidad de las propias mujeres. Esto explica el uso de la primera persona, además de la diversidad de estilos y de extensión de cada relato, ya que cada uno responde a una experiencia individual y particular de cada parto.
      </p>
      <p>
        Algunos testimonios, sin embargo, fueron escritos por el equipo de periodistas de la presente colaboración. En algunos testimonios las madres prefirieron no firmar con su nombre y apellidos porque temen que sus testimonios tengan algún tipo de consecuencia ante las autoridades cubanas. Esta es la razón por la que decidimos respetar la privacidad y cuidar la integridad de quienes accedieron gentilmente a compartirnos sus experiencias. En nuestra coalición ninguna persona fue discriminada por cuestiones de identidad de género, etnia, edad, discapacidad, orientación sexual, afinidad política o religión o creencia.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Metodologia",
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Cómo se hizo',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos'
    },
}
</script>
<style scoped lang="scss">
  .text-cita{
    max-width: 896px;
    p{
        text-align: left;
        font-weight: 800;
        font-size: 24px;
        letter-spacing: 1.2px;
        color: #FDA1C9;
    }
  };
</style>