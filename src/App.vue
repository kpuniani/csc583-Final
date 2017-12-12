<template>
  <div id="app" style="margin:50px;">
    <div class="main-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'app',
        components:{}
    }
</script>

<style>
  #heading {
    color : #90ff83;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #801c39;
    margin-top: 65px;
  }

  html {
    height: 100%;
    box-sizing: border-box;
  }
  body {
    position: relative;
    margin: 0;
    padding-bottom: 6rem;
    min-height: 100%;
  }
  .main-body {
    margin-bottom: 20px;
  }

</style>
