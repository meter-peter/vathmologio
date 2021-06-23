import axios from 'axios';

const serverAdress ="http://localhost:5000/";


const admin = {
    namespaced:false,
    state:{
        users:[],
        msg:""
    },
    mutations:{
        SET_USERS(state,data){
            state.users = data;
        },
        make_teacher(state,data){
            state.msg = data
        }
    },
    actions:{
        loadusers({commit}){
            axios.get(serverAdress+'admin/userList').then(res=>{
                commit('SET_USERS',res.data)
            }).catch(err=> console.log(err));
        },
        makeTeacher({commit},data){
            console.log(data)
            axios.post(serverAdress+'api/teacher/addTeacher',data).then(res=>{
                commit('make_teacher');
                return res

            }).catch(err=> console.log(err));
        
        }

    },
    getters:{
        users : state => state.users
    }
}

export default admin