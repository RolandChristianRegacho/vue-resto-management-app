<template>
  <div>
    <h1>This is the home page</h1>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "LoginPage" });
    }
  },
};
</script>
