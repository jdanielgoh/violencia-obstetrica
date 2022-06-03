<template>
  <div class="cuestionarios">
    <div class="container text">
      <h1 class="blanco">
        Cuestionarios
        <hr/>
      </h1>
      <a href="https://capir.limequery.org/571399" target="_blank">CUÉNTANOS TU PARTO</a>
      <a href="https://capir.limequery.org/145636" target="_blank">ENCUESTA DE MUERTE MATERNA</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cuestionarios",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Cuestionarios",
    // all titles will be injected into this template
    titleTemplate: "%s | Partos Rotos",
    htmlAttrs: {
			lang: 'es'
			},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'Si quieres contribuir compartiendo tu caso, este es el lugar' },
		]
  },
};
</script>

<style scoped lang="scss">
.cuestionarios {
  background: #4a2582;
  .container.text {
    
    a{
      margin: 15px 0 ;
        display: block;
        color: #fda1c9;

        &:visited, &:hover{
            opacity: .7;
          color:  #fda1c9;
        }
    }
  }
}
</style>