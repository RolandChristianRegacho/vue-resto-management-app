<template>
  <img
    alt="Vue logo"
    class="logo"
    src="@/assets/logo.svg"
    width="100"
    height="100"
  />
  <br />
  <h1>Sign up</h1>
  <br />
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter your Name" />
    <input type="email" v-model="email" placeholder="Enter your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your Password"
    />
    <button @click="signUp">Sign up</button>
    <br />
    <p>
      <router-link to="/login">Go to login</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUpPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let data = {
        name: this.name,
        password: this.password,
        email: this.email,
      };

      let result = await axios.post("http://localhost:3000/user", data);

      if (result.status === 201) {
        alert("Sign up successful!");
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");

    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style scoped>
h1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

p {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
