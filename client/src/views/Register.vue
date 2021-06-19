<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header">
          <h4>Register User</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                v-model="username"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="name">First Name</label>
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                name="name"
                v-model="firstname"
                class="form-control"
              ></div>
               <div class="form-group">
              <label for="name">Last Name</label>
              <input
                id="name"
                type="text"
                placeholder="Last Name"
                name="name"
                v-model="lastname"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                v-model="email"
                class="form-control"
              >
            </div>
            <div class="form-group">
                    <label>Select what best describes you <span class="require">*</span></label>
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                   
                </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
              >
            </div>
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                name="confirm_password"
                id="confirm_password"
                v-model="confirm_password"
              >
            </div>
            <button class="btn btn-dark">Register</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link">Already have an account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";


export default {
  data() {
    return {
      username: "",
      firstname:"",
      lastname:"",
      password: "",
      confirm_password: "",
      name: "",
      email: "",
    selected:"null",
    options: [
             { value: 1, text: 'Student' },
          { value: 2, text: 'Academic personnel' },
         
      
        ],

    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        type:this.selected
      };
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("login");
        }
      });
    }
  }
};
</script>

<style>
.card {
    margin-top: 50px;
  width: 60%;
  border-radius: 0;
}
.btn {
    margin-top: 7px;
  border-radius: 2;
}
.form-control {
  border-radius: 0;
}
</style>