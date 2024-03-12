<template>
  <img
    alt="Vue logo"
    class="logo"
    src="@/assets/logo.svg"
    width="100"
    height="100"
  />
  <br />
  <h1>Login page</h1>
  <br />
  <div class="login">
    <input type="email" v-model="email" placeholder="Enter your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your Password"
    />
    <button @click="login">Login</button>
    <br />
    <p>
      <router-link to="/signup">Go to Signup</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
        let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)

        if(result.status == 200 && result.data.length > 0) {
            localStorage.setItem("user-info", JSON.stringify(result.data));
            this.$router.push({ name: "HomePage" });
        }
        else {
            alert("Invalid Credentials")
        }
    }
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

.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.login button {
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>
