import axios from 'axios';
import store from '@/store'
const serverAdress ="http://localhost:5000/api/lessons";

const state = {
    
   lessons : [],
   lessonsteaching : [],
   currentlesson:"",
   filteredlessons:null,
   error : null
};

const getters = {
   lessons: state => state.lessons,
   currentlesson :state =>state.currentlesson,
   lessonsteaching :state => state.lessonsteaching

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

    async loadlessonsteaching({commit}){
        axios
        .get(serverAdress+'/getLessonTeaching')
        .then(res =>{
            commit('got_lessonsteaching' , res.data)
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

    async assignLesson({
        commit
    }, lessonID,teacherID) {
            
            const req ={lessonID,teacherID};
    
            let res = await axios.post(serverAdress+'/addLessonTeaching', req);
            if (res.data.success !== undefined) {
                commit("addRequest",res.data.msg);
           
            }
    
    },
    async beStudent({commit},body) {
            
       
            let res = await axios.post('http://localhost:5000/api/student/addStudent', body);
            if (res.data.success !== undefined) {
                commit("addRequest",res.data.msg);
           
            }
    
    },

    async loadlessonsteaching({commit}){
        axios
        .get(serverAdress)
        .then(res =>{
            commit('got_lessons' , res.data)
        })
        .catch(err => console.log(err))
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
    },
    got_lessonsteaching(state,lessonsteaching){
        state.lessonsteaching = lessonsteaching;
    }
   
};

export default {
    state,
    actions,
    mutations,
    getters
};