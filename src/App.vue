<template>
  <div id="app">
    <myHeader/>
    <router-view/>
    <myFooter/>
  </div>
</template>

<style>

#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  letter-spacing: 0.1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style-type: none;
}

li.font-awesome {
  display: inline-block;

}

</style>

<script>
  import myHeader from './components/myHeader.vue'
  import myFooter from './components/myFooter.vue'
  export default {
    name: 'App',
    components: {
      myHeader,
      myFooter
    }
  }
</script>