<template>
  <div class="edit container">
    <h1 class="page-header">Edit Post</h1>
    <form>
        <div class="well">
            <h4>Info</h4>
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="currentpost.title" value="currentpost.title">
            </div>
            <div class="form-group">
                <label>Url</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="currentpost.url"><input>
            </div>
        </div>
        <div class="well">
            <div class="form-group">
                <label>Year</label>
                <input type="text" class="form-control" placeholder="Email" v-model="currentpost.year">
            </div>
            <div class="form-group">
                <label>Url</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="currentpost.url">
            </div>
        </div>

        <div class="well">
            <div class="form-group">
                <label>Authors</label>
            </div>
            <div class="form-group">
                <label>Type</label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters ,mapActions} from 'vuex'
    export default {
       props: ['postid'],
    name: 'edit',
    computed:mapGetters("posts",["currentpost"]),
 
    methods: {
      ...mapActions("posts",["getArticleById"])
    
    },
    created(){
      this.getArticleById();
      console.log(this.currentpost)
    },
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>