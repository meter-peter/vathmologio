import axios from 'axios';

const serverAdress ="http://localhost:5000/api/lessons";

const state = {
   lessons : [],
   currentlesson:null,
   filteredlessons:null
};

const getters = {
   lessons: state => state.lessons,
};

const actions = {
    loadlessons({commit}){
        axios
        .get(serverAdress)
        .then(res =>{
            commit('got_lessons' , res.data)
        })
        .catch(err => console.log(err))
    },

    async addLesson({
        commit
    }, lessondata) {
    

            let res = await axios.post(serverAdress+'/api/lessons', lessondata);
            if (res.data.success !== undefined) {
               commit("got_lessons",res.data)   
            }
    
    },
    // Get the user Profile

};

const mutations = {


    got_lessons(state,lessons){
        state.lessons = lessons;
    }
   
};

export default {
    state,
    actions,
    mutations,
    getters
};