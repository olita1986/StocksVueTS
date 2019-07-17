<template>
    <div class="row">
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Stock from './Stock.vue';
import { StockModel } from '../../models/Stock';
import {
  Getter
} from 'vuex-class';

@Component({
    components: {
        Stock
    }
})
export default class Stocks extends Vue {
    @Getter stocks!: StockModel[];
}
</script>

<style>

</style>
