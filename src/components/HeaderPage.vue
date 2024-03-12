<template>
    <div>
        <a @click="home" id="test" href="#">Home</a>
        <a @click="add" href="#">Add Restaurant</a>
        <a @click="update" href="#">Update Restaurant</a>
        <a @click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: "HeaderPage",
    methods: {
        home() {
            this.$router.push({name: "HomePage"})
        },
        add() {
            this.$router.push({name: "AddPage"})
        },
        update() {
            this.$router.push({name: "UpdatePage"})
        },
        logout() {
            localStorage.clear()
            this.$router.push({name: "LoginPage"})
        }
    }
}
</script>

<style scoped>
    a {
        float: left;
        color: #f2f2f2;
        padding: 14px 16px;
        text-align: center;
        font-size: 17px;
        text-decoration: none;
        margin-right: 5px;
    }

    a:hover {
        background-color: #ddd;
        color: #333;
    }
</style>