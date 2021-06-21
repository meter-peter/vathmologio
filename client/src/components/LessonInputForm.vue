<template>
<div>
    <form @submit="submit($event)">
        <div class="field">
            <label class="label">{{editAddText}} Title</label>
            <div class="control">
                <input class="input" v-model="lesson.name" type="text" placeholder="First Name" required>
            </div>
        </div>
        <div class="field">
            <label class="label">{{editAddText}} Description</label>
            <div class="control">
                <input class="input" v-model="lesson.desc" type="text" placeholder="Last Name" required>
            </div>
        </div>
        
        <div class="field-body">
            <div class="field is-narrow">
            <label class="label">{{editAddText}} semester</label>    
            <div class="control">
                <label class="radio">
                <input type="radio" v-model="lesson.semester" value="Male" name='semester' required>
                Male
                </label>
                <label class="radio">
                <input type="radio" v-model="lesson.semester" value="Female" name='semester'>
                Female
                </label>
            </div>
            </div>
        </div>

        <div class="field is-grouped" style="margin-top:20px">
            <div class="control">
                <button class="button is-link">{{editAddText}} lesson</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>

import{mapGetters , mapActions} from 'vuex'

export default {
    props:['editId'],
    data(){
        return {
            lesson:{
                name:'',
                desc:'',
                semester:'',
            }
        }
    },
    watch:{
        editId(val){
            if(val){
                let current = this.$store.state.lessons.filter(i => {
                    if(i.id==val) return true;
                    else false;
                })[0]
                this.lesson.name = current.name;
                this.lesson.desc = current.desc;
                this.lesson.semester = current.semester;
            }else{
                this.resetFormData()
            }
        }
    },
    computed:{
        ...mapGetters(['lessons']),

        currentDate(){
            return new Date().toString();
        },
        editAddText(){
            return this.editId ? "Edit":"Insert";
        }
    },

    mounted() {
        this.loadlessons();
    },
    methods:{
        ...mapActions(["loadlessons","addLesson"]),

        resetFormData() {
                this.lesson = {
                name:'',
                desc:'',
                semester:'',
                }
        },
        submit(event){
            event.preventDefault();  
            var payload = this.lesson;
            payload['date'] = this.currentDate;
            
            if(!this.editId){
                payload['id'] =  this.$store.state.lessons.length!=0? Math.max(...this.$store.state.lessons.map(i => i.id)) + 1 : 0;
                const lesson = {...payload};
                this.$store.dispatch('addlesson',lesson);
                this.resetFormData()
            }else{
                payload['id'] =   this.editId;
                const lesson = {...payload}
                this.$store.dispatch('editlesson',lesson);                
            }
        }
    }
}
</script>