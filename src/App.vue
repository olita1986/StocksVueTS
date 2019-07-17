<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import {
  Action
} from 'vuex-class';
import { StockModel } from './models/Stock';

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {
  @Action initStocks: any;

  created() {
    this.initStocks();
  }

  
}
</script>

<style>
  body {
    padding: 2rem;
  }
</style>
