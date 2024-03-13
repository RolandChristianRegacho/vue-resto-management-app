<template>
    <br>
    <div class="form_div">
        <h1>Update Restaurant</h1>
        <br>
        <form>
            <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
            <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
            <input type="text" name="contact" placeholder="Enter Contact Number" v-model="restaurant.contact" />
            <button type="button" @click="updateRestaurant">Add New Restaurant</button>
        </form>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  export default {
    name: "UpdatePage",
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    async mounted() {
        let result = await axios.get(`http://localhost:3000/restaurant/${this.$route.params.id}`)
        this.restaurant = result.data
    },
    methods: {
        async updateRestaurant() {
            let data = {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            };

            let result = await axios.put(`http://localhost:3000/restaurant/${this.$route.params.id}`, data)

            if (result.status === 200) {
                this.$router.push({ name: "HomePage" });
            }
        }
    }
  };
  </script>
  