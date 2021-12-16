<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pokedex">pokedex</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

* {
  box-sizing: border-box;
}

#nav {
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  font-size: 24px;
  background: #91F9E5;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-active {
      color: #EF6F6C;
    }
  }
}
</style>
