import { createStore } from "vuex";

interface State {
    count: number;
}

const state: State = {
    count: 0,
};

export default createStore({
    state,
    getters: {
        getCount(state: State): number {
            return state.count;
        },
    },
    mutations: {
        increment(state: State) {
            state.count++;
        },
    },
    actions: {
        increment({ commit }) {
            commit("increment");
        },
    },
});
