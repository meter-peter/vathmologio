import axios from 'axios';
import router from '../../router/index';


const serverAdress ="http://localhost:5000";

const token = localStorage.getItem("token");
if(token)
axios.defaults.headers.common['Authorization'] = token

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    // Login Action
    async login({
        commit
    }, user) {
        commit('auth_request');
        try {
            let res = await axios.post(serverAdress+'/api/auth/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            console.log(res)
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },
    // Register User
    async register({
        commit
    }, userData) {
        try {
            commit('register_request');
            let res = await axios.post(serverAdress+'/api/auth/register', userData);
            if (res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
        } catch (err) {
            commit('register_error', err)
        }
    },
    // Get the user Profile
    async getProfile({
        commit
    }) {
        commit('profile_request');
        let res = await axios.get(serverAdress+'/api/auth/profile')
        commit('user_profile', res.data.user)
        return res;
    },
    // Logout the user
    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
};

const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
        state.error = err.response.msg
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};