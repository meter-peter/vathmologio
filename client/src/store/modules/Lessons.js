import axios from 'axios';

const serverAdress ="http://localhost:5000/api/lessons";

const state = {
   lessons : [],
   currentlesson:"",
   filteredlessons:null
};

const getters = {
<<<<<<< Updated upstream
   lessons: state => state.lessons,
   currentlesson :state =>state.currentlesson
=======
  lessons: state => state.lessons,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    

            let res = await axios.post(serverAdress+'/api/lessons/addLesson', lessondata);
=======
            let res = await axios.post(serverAdress+'/new', lessondata);
>>>>>>> Stashed changes
            if (res.data.success !== undefined) {
               commit("got_lessons",res.data)   
            }
    
    },
<<<<<<< Updated upstream
    getLessonById({commit},lessonid){
       axios.get(serverAdress+"/getLesson/"+lessonid).then(res=>{
        commit('loadcurrentlesson',res.data)

       })
       .catch(err => console.log("ERROR"+err))
   }
=======
    async getLessonbyid({commit}){
        await axios.get()
    }

    // Get the user Profile
>>>>>>> Stashed changes

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