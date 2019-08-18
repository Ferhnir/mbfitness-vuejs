    
const state = {
    navdrawer: false,
    mapDialog: false
};

const getters = {
    getNavDrawerState: (state) => state.navdrawer,
    getMapDialogState: (state) => state.mapDialog
};

const actions = {
    async setNavDrawerState({ commit }, boolean) {
        commit('setNavDrawerState', boolean);
    },
    async setMapDialogState({ commit }, boolean) {
        commit('setMapDialogState', boolean)
    }
};

const mutations = {
    setNavDrawerState: (state, boolean) => (state.navdrawer = boolean),
    setMapDialogState: (state, boolean) => (state.mapDialog = boolean)
};

export default {
    state,
    getters,
    actions,
    mutations
}