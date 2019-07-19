import { OrderModel } from './../../models/OrderModel';
import { StockModel } from './../../models/Stock';
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';


interface PortfolioState {
    funds: number
    stocks: OrderModel[]
}

const state: PortfolioState = {
    funds: 10000,
    stocks: []
}

const mutations: MutationTree<PortfolioState> = {
    'BUY_STOCK'(state, stock: OrderModel) {
        const record = state.stocks.find( e => e.id == stock.id)
        if (record) {
            record.quantity += stock.quantity
        } else {
            state.stocks.push(stock);
        }
        state.funds -= stock.price * stock.quantity
    },
    'SELL_STOCK'(state, stock: OrderModel) {
        const record = state.stocks.find( e => e.id == stock.id)
        if (record) {
            if (record.quantity > stock.quantity) {
                record.quantity -= stock.quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }
            state.funds += stock.price * stock.quantity
        }
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
}

const actions: ActionTree<PortfolioState, any> = {
    sellStock({commit}, order: OrderModel) {
        commit('SELL_STOCK', order)
    }
}

const getters: GetterTree<PortfolioState, any> = {
    stockPortfolio(state, getters) {
        return state.stocks.map( stock => {
            const record = getters.stocks.find( (element: any) => {
                return element.id == stock.id
            })
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds;
    }
}

const portfolio: Module<PortfolioState, any> = {
    state,
    mutations,
    actions,
    getters
}

export default portfolio;