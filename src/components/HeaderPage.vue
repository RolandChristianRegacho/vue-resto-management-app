<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/add_restaurant">Add Restaurant</router-link>
        <a @click="logout" href="#">Logout</a>
        <a class="a_name">{{ name }}</a>
    </div>
</template>

<script>
export default {
    name: "HeaderPage",
    data() {
        return {
            name: ""
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({name: "LoginPage"})
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        this.name = JSON.parse(user)[0].name

        if (!user) {
            this.$router.push({ name: "LoginPage" });
        }
    }
}
</script>

<style scoped>
    a {
        float: left;
        color: white;
        padding: 14px 16px;
        text-align: center;
        font-size: 17px;
        text-decoration: none;
        margin-right: 5px;
    }

    a:hover {
        background: rgb(52, 73, 94);
        color: white;
    }
    .a_name {
        float: right;
        margin-right: 0;
    }

    .a_name:hover {
        background: fixed;
    }
</style>