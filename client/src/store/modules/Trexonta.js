import axios from 'axios';
import store from '@/store'
const serverAdress ="http://localhost:5000/api/";




const state = {
   trexonta : []
}

const getters ={
    trexonta : state => state.trexonta,
}


const actions =  {
    async addTrexwn({commit},teacherid ,lessonid){
        const req = {lessonid , teacherid};
        const res = await axios.post('/didaskalies/addLessonAssignment',req).catch(error=>
            {
                this.$swal(error);
            })
      

    }
}

const mutations = {}

module.exports = {state ,getters,actions,mutations}