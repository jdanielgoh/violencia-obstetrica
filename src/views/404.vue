<template>
  <div>
    <h1>No encontrado</h1>
  </div>
</template>

<script>
export default {
  name: '404',
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: '404',
      // all titles will be injected into this template
      titleTemplate: '%s | Partos Rotos'
    },
  mounted() {
    if (document.getElementById("initial-loader")) {
      document.getElementById("initial-loader").remove();
      document.getElementsByTagName("body")[0].style.overflow = 'visible';
    }
  },
};
</script>

<style scoped lang="scss">
  h1{
    font-size: 99px;
    color: #eee;
    text-align: center;
    margin: 20vh 0
  };
</style>
