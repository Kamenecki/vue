<template>
 <div id="backgrnd">
  <div id="nav">
    | <router-link to="/">Home</router-link> |
    <router-link to="/Cart">Cart</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/Reg">Reg</router-link> |
    <router-link to="/about">About</router-link> |
  </div>
  <router-view/>
 </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #8d29aa;

}
</style>
