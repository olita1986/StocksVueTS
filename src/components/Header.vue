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
      <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown" :class="{show: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" :class="{show: isDropdownOpen}">
            <a class="dropdown-item" href="#" @click="saveData">Save</a>
            <a class="dropdown-item" href="#" @click="loadData">Load</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | displayCurrency }}</strong>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class';
import { StockModel } from '../models/Stock';

@Component
export default class Header extends Vue {
    @Getter funds!:number
    @Getter stockPortfolio: any;
    @Getter stocks!: StockModel[];
    @Action randomizeStocks: any;
    @Action('loadData') getData: any;


    isDropdownOpen: boolean = false;

    endDay() {
        console.log('end day');
        this.randomizeStocks();
    }

    saveData() {
        const data = {
            funds: this.funds,
            stockPortfolio:  this.stockPortfolio,
            stocks: this.stocks
        }

        fetch('https://vuejs-stocks-2629c.firebaseio.com/data.json', {
            method: 'PUT',
            body: JSON.stringify(data)
        }).then( res => {
            console.log(res);
        }).catch( err => {
            console.log(err);
        })
    }

    loadData() {    
        this.getData();
    }
}
</script>

<style scoped>
.navbar {
    width: 100%;
}
</style>



