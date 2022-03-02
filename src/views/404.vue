<template>
  <div>
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  name: '404',
  mounted() {
    if (document.getElementById("initial-loader")) {
      document.getElementById("initial-loader").remove();
      document.getElementsByTagName("body")[0].style.overflow = 'visible';
    }
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 99px;
  color: #eee;
  text-align: center;
  margin: 20vh 0;
}
</style>
