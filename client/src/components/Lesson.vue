<template> 
<div class="columns">
    <div class="column is-three-fifths">
        <table v-if="data.length!=0" class="table">
            <thead>
                <tr>
                    <th v-for="(column,index) in columns" :key="index">{{column}}</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row,index_row) in data" :key="index_row" v-bind:class="{ editing: editId === row.id }" >
                    <td v-for="(column,index) in columns" :key="index"> {{row[column]}} </td>    
                    <td>
                        <p class="buttons">
                            <a class="button is-small is-primary" @click="editLesson(row)">Edit</a>
                            <a class="button is-small is-danger" @click="deleteLesson(row.id)">Delete</a>
                        </p>
                    </td>   
                </tr>
            </tbody>
        </table> 
        <div v-else class="notification is-danger">
            Warning !<strong> No Data to Show</strong>
        </div>
    </div>
    <div class="column">
        <a href="#" v-show="showAdd == false" @click="addLesson()" class="button is-small is-danger" style="float:right;margin-top:-20px" >X</a>
        <LessonInputForm :editId="editId"></LessonInputForm>
    </div>
</div>    
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import LessonInputForm from '../components/LessonInputForm.vue';
export default {
    name:'Lesson',
    components:{
        LessonInputForm,
    },
    created(){
        this.loadlessons();
    }
   
,
    data() {
            return {
                showAdd:true,
                editId:'',
            }
        },
        computed: {
       ...mapGetters(["lessons"]),
            data(){
                return this.lessons
            },
            columns(){
                return this.lessons.length>0 ?
                       Object.keys(this.lessons[0]) : []
            }
        },
    methods:{
        ...mapActions(["loadlessons"]),
            editLesson(lesson){
                this.editId = lesson.id;
                this.showAdd = false;
            },
            addLesson(){
                this.editId = "";
                this.showAdd = true;
            },
            deleteLesson(lesson){
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                    if (result.value) {
                        
                        this.$store.dispatch('removeLesson',lesson).then((res)=>{
                            if(res) this.$swal(
                                    'Deleted!',
                                    'Record has been deleted.',
                                    'success'
                                    )
                            else this.$swal(
                                    'Fail!',
                                    'Fail to delete record.',
                                    'error'
                                    )                                 
                        });
                        
                    }
                    })
            }
        }
        
}
</script>

<style>
.editing {
    background-color: #fff8db;
}
</style>
