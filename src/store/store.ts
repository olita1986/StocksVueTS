import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
})
