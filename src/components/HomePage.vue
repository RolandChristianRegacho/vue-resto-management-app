<template>
  <br>
  <div>
    <h1>Welcome to the home page!</h1>
    <br>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in restaurant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.contact }}</td>
          <td><button @click="updateRestaurant(item.id)" class="update">Update</button><button @click="deleteRestaurant(item.id)" class="delete">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      restaurant: []
    }
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/restaurant")
    this.restaurant = result.data
  },
  methods: {
    updateRestaurant(id) {
      this.$router.push({ path: `/update_restaurant/${id}` });
    },
    async deleteRestaurant(id) {
      let result = await axios.delete(`http://localhost:3000/restaurant/${id}`)

      if (result.status === 200) {
        let result = await axios.get("http://localhost:3000/restaurant")
        this.restaurant = result.data
      }
    }
  }
};
</script>

<style scoped>
  .update{
    width: 100px;
    margin-left: 5px;
    margin-right: 0;
    float: left;
  }

  .delete {
    background: rgb(200, 50, 50); 
    border: 1px solid rgb(200, 50, 50);
    width: 100px;
    margin-left: 5px;
    margin-right: 0;
    float: left;
  }

  .delete:hover {
    border: 1px solid rgb(52, 73, 94);
    background: rgb(52, 73, 94);
  }
</style>