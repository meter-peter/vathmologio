<template>
<div>
    <form @submit="submit($event)">
        <div class="field">
            <label class="label">{{editAddText}} First Name</label>
            <div class="control">
                <input class="input" v-model="lesson.name" type="text" placeholder="First Name" required>
            </div>
        </div>
        <div class="field">
            <label class="label">{{editAddText}} Last Name</label>
            <div class="control">
                <input class="input" v-model="lesson.desc" type="text" placeholder="Last Name" required>
            </div>
       
        </div>

        <div class="field is-grouped" style="margin-top:20px">
            <div class="control">
                <button class="button is-link">{{editAddText}} Lesson</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
    
    name:'LessonInputForm',
    props:['editId'],

    data(){
        return {
            lesson:{
                name:'',
                desc:'',
                sem:'',
            }
        }
    },
    watch:{
        editId(val){
            if(val){
                let current = this.lessons.filter(i => {
                    if(i._id==val) return true;
                    else false;
                })[0]
                this.lesson.name = current.name;
                this.lesson.desc = current.desc;
                this.lesson.sem = current.sem;
            }else{
                this.resetFormData()
            }
        }
    },
    computed:{
        currentDate(){
            return new Date().toString();
        },
        editAddText(){
            return this.editId ? "Edit":"Insert";
            
        },
         ...mapGetters(['lessons'])
    },
    methods:{
        ...mapActions(["loadlessons","addlesson"])
,
        resetFormData() {
                this.lesson = {
                name:'',
                desc:'',
                sem:'',
                }
        },
        submit(event){
            event.preventDefault();  
            var payload = this.lesson;
            payload['date'] = this.currentDate;
            
            if(!this.editId){
                payload['id'] =  this.lessons.length!=0? Math.max(...this.lessons.map(i => i.id)) + 1 : 0;
                const lesson = {...payload};
                this.$store.dispatch('addLesson',lesson);
                this.resetFormData()
            }else{
                payload['id'] =   this.editId;
                const lesson = {...payload}
                this.$store.dispatch('editLesson',lesson);                
            }
        },
        created(){
            this.loadlessons();
        }
    }
}
</script>