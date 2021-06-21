import axios from 'axios';

const serverAdress ="http://localhost:5000/api/lessons";

const state = {
   lessons : [],
   currentlesson:"",
   filteredlessons:null
};

const getters = {
   lessons: state => state.lessons,
   currentlesson :state =>state.currentlesson
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
    

            let res = await axios.post(serverAdress+'/api/lessons/addLesson', lessondata);
            if (res.data.success !== undefined) {
               commit("got_lessons",res.data)   
            }
    
    },
    getLessonById({commit},lessonid){
       axios.get(serverAdress+"/getLesson/"+lessonid).then(res=>{
        commit('loadcurrentlesson',res.data)

       })
       .catch(err => console.log("ERROR"+err))
   }

};

const mutations = {

    loadcurrentlesson(state,lesson){
        state.currentlesson = lesson;
    },
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