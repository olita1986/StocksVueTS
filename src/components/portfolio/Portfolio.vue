<template>
    <div class="row">
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </div>
</template>  

<script lang="ts">
import Stock from './Stock.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({
    components: {
        Stock
    }
})
export default class Portfolio extends Vue {
    @Getter('stockPortfolio') stocks: any;

    created() {
     console.log(this.stocks);   
    }
}
</script>

<style scoped>

</style>
