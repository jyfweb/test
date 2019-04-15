import Vue from 'vue';
import Vuex from 'vuex';
import loginListData from "./modules/login/loginListData";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        list: [],
        loginData: {
            PermissionList: []
        },
        jwtToken:'',
        isLogin: false
    },
    mutations: {
        updatePermissionList: (state, payload) => {
            state.list = payload
        },
        getList: (state, payload) => {
            state.loginData = payload
        }

    },
    actions: {
        LoginDataList: async ({ state, commit }) => {
            localStorage.removeItem('loginData');
            // 发送请求获取权限列表
            const data = { PermissionList: ['p_1', 'p_1_1', 'p_2','p_2_2', 'p_3', 'p_3_1','p_no', 'p_page'] };
            sessionStorage.setItem("jwtToken", 'jwtToken');
            localStorage.setItem('loginData', JSON.stringify(data));
            commit('updatePermissionList', data.PermissionList);
        },
        getPermissionList: async ({ state, commit }) => {
            // 防止重复获取
            if (state.list.length) return
            const list = localStorage.getItem('loginData') != null ? JSON.parse(localStorage.getItem('loginData')).PermissionList : [];
            commit('updatePermissionList', list)
        }

    },
    modules: {
        loginListData
    }
});

export default store;
