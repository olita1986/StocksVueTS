export const loadData = ({ commit }) => {
    fetch('https://vuejs-stocks-2629c.firebaseio.com/data.json')
        .then( res => {
            console.log(res);
            return res.json()
        })
        .then( data => {
            console.log(data);
            if (data) {
                const portfolio = {
                    stockPortfolio: data.stockPortfolio,
                    funds: data.funds
                }

                commit('SET_STOCKS', data.stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
}
    