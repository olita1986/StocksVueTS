<template>
    <div>
        <h1>Trade or view your portfolio</h1>
        <h6>You may Save & Load yout data</h6>
        <h6>Click end day to start a new day</h6>
        <hr>
        <p>Your funds: {{ funds | displayCurrency }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter} from 'vuex-class';

@Component
export default class Home extends Vue {
    @Getter funds!: number;
}
</script>

<style scoped>

</style>
