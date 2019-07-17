<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/portfolio" activeClass="active" class="nav-item">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link tag="li" to="/stocks" activeClass="active" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds }}</strong>
      <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link" href="#">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from 'vuex-class';

@Component
export default class Header extends Vue {
    @Getter funds!:number
}
</script>

<style scoped>
.navbar {
    width: 100%;
}
</style>



