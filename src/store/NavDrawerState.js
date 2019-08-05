    
const state = {
    navdrawer: false
};

const getters = {
    getNavDrawerState: (state) => state.navdrawer
};

const actions = {
    async setNavDrawerState({ commit }, boolean) {
        commit('setNavDrawerState', boolean);
    }
};

const mutations = {
    setNavDrawerState: (state, boolean) => (state.navdrawer = boolean)
};

export default {
    state,
    getters,
    actions,
    mutations
}