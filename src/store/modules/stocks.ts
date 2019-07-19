import { OrderModel } from './../../models/OrderModel';
import { StockModel } from './../../models/Stock';
import {Module, ActionTree, MutationTree, GetterTree} from 'vuex';


interface StocksState {
    stocks: StockModel[]
}

const state: StocksState = {
    stocks: []
}

const mutations: MutationTree<StocksState> = {
    'SET_STOCKS'(state, stocks: StockModel[]) {
        state.stocks = stocks
    },
    'RANDOM_STOCKS'(state) {
        state.stocks.forEach( stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        })
    }
}

const actions: ActionTree<StocksState, any> = {
    buyStock({commit}, order: OrderModel) {
        commit('BUY_STOCK', order)
    },
    initStocks({ commit }) {
        commit('SET_STOCKS', initialStocks);
    },
    randomizeStocks({commit}) {
        commit('RANDOM_STOCKS')
    }
}

const getters: GetterTree<StocksState, any> = {
    stocks(state) {
        return state.stocks
    }
}

const stocks: Module<StocksState, any> = {
    state,
    mutations,
    actions,
    getters
}

export default stocks;

const initialStocks: StockModel[] = [
    {id: 1, name: 'Mercedes', price: 130},
    {id: 2, name: 'Google', price: 600},
    {id: 3, name: 'Apple', price: 550},
    {id: 4, name: 'Twitter', price: 230},
]