<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header">{{ stock.name }}</div>
      <div class="card-body">
        <h5 class="card-title">(Price: {{ stock.price }})</h5>
        <div>
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientFunds }"
          />
        </div>
        <div>
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="disableButton || insufficientFunds"
          >{{ insufficientFunds ? "No Funds" : "Buy" }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { StockModel } from "../../models/Stock";
import { OrderModel } from "../../models/OrderModel";
import { Action, Getter } from "vuex-class";

@Component
export default class Stock extends Vue {
  @Prop({ type: Object as () => StockModel }) stock!: StockModel;
  @Action("buyStock") buyAction: any;
  @Getter funds!: number;

  private quantity = 0;

  get disableButton(): boolean {
    return this.quantity <= 0;
  }

  get insufficientFunds() {
    return this.quantity * this.stock.price > this.funds;
  }

  buyStock() {
    const order: OrderModel = {
      id: this.stock.id,
      price: this.stock.price,
      quantity: this.quantity
    };
    console.log(order);
    this.buyAction(order);
    this.quantity = 0;
  }
}
</script>

<style scoped>
.card {
  margin: 1rem 0;
}

.btn {
  margin-top: 1rem;
}

.danger {
  border: 1px solid red;
}
</style>
