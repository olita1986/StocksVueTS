<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header">{{ stock.name }}</div>
      <div class="card-body">
        <h5 class="card-title">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</h5>
        <div>
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientQuantity }"
          />
        </div>
        <div>
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="disableButton || insufficientQuantity"
          >{{ insufficientQuantity ? "No Enough" : "Sell"}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { OrderModel } from "../../models/OrderModel";
import { Action, Getter } from "vuex-class";

@Component
export default class Stock extends Vue {
  @Prop({ type: Object as () => OrderModel }) stock!: OrderModel;
  //   @Prop() stock;
  @Action("sellStock") sellAction: any;

  private quantity = 0;

  get disableButton(): boolean {
    return this.quantity <= 0;
  }

  get insufficientQuantity() {
    return this.quantity > this.stock.quantity;
  }

  sellStock() {
    const order: OrderModel = {
      id: this.stock.id,
      price: this.stock.price,
      quantity: this.quantity
    };
    console.log(order);
    this.sellAction(order);
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
