import axios from 'axios';
const apiaddress = "http://localhost:5000/api/lessons/"


const lessons = {
    namespaced :true ,
    state:{
        lessons:[],
        error:null,
        currentlesson:null,
        filteredlessons:null

    },
    mutations: {
        SET_lessons(state,data){
            state.lessons = data;
        }, CREATE_LESSON(state, lesson) {
            state.lessons.unshift(lesson)
        },
        SET_CURRENT_LESSON(state,data){
            state.currentlesson=data;
        },
        IDENTIFY_AUTHORS(state,data){
            state.currentlesson.authors=data
        }


    },
    actions:{
        loadlessons({commit}){
            axios
            .get(apiaddress)
            .then(res =>{
                commit('SET_lessons' , res.data)
            })
            .catch(err => console.log(err))
        },
       addlesson({commit}, lesson) {
           console.log(lesson);
            axios.lesson(apiaddress, lesson)
                .then(res => {
                    commit('CREATE_LESSON', res.data)
                }).catch(err => {
                console.log(err)
            })

        },
   async getlessonById({commit},articleid){
         axios.get(apiaddress+articleid)
            .then(res=>{
                console.log(res)
                const article=res.data;
                axios.lesson('http://localhost:5000/api/authors/resolve',article.authors).then(res=>{
                    article.authors=res.data;
                    commit('SET_CURRENT_LESSON',article)
                })
               
            }).catch(err=>{
                console.log(err)
            });

        

        },
      
}  ,getters:{
    currentlesson: state => state.currentlesson,
    lessons:state =>state.lessons


} 
}

export default lessons