import { Post, Get, Patch, Put, Delete, ax } from '../../../http/http'

const loginListData = {
    namespaced: true,
    state: {
        List: [],
        data:''
    },
    actions: {
        getListData({commit},data) {
            new Promise((resolve, reject) => {
                commit('ListData',data);

            })
        },


    },
    mutations: {
        ListData(state, paylod) {
            state.data = paylod;
            // state.List = paylod.listDatas
        }
    },
    getters: {

    }
}

export default loginListData;