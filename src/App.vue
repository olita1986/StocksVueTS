<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import { Action } from "vuex-class";
import { StockModel } from "./models/Stock";

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

.slide-enter-active {
  animation: slide-in 0.2s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.2s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
