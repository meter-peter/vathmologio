import axios from 'axios';
import store from '@/store'
const serverAdress ="http://localhost:5000/api/lessons";

const state = {
   lessons : [],
   currentlesson:"",
   filteredlessons:null,
   error : null
};

const getters = {
   lessons: state => state.lessons,
   currentlesson :state =>state.currentlesson
};

const actions = {
    async loadlessons({commit}){
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
    

            let res = await axios.post(serverAdress+'/addLesson', lessondata);
            if (res.data.success !== undefined) {
                commit("addRequest",res.data.msg);
               store.dispatch("loadlessons")
           
            }
    
    },
   async getLessonById({commit},lessonid){
       axios.get(serverAdress+"/getLesson/"+lessonid).then(res=>{
        commit('loadcurrentlesson',res.data)

       })
       .catch(err => console.log("ERROR"+err))
   },

   removeLesson({commit},lessonid){
        console.log(lessonid)
        const res = axios.delete(serverAdress+"/deleteLesson/"+lessonid);
        commit("got_lessons",this.lessons)
        return res
    },
}
const mutations = {

    addRequest(state,lesson){
        state.error=lesson;
    },

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