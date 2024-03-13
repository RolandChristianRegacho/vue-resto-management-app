<template>
    <br>
    <div class="form_div">
        <h1>New Restaurant</h1>
        <br>
        <form>
            <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
            <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
            <input type="text" name="contact" placeholder="Enter Contact Number" v-model="restaurant.contact" />
            <button type="button" @click="addRestaurant">Add New Restaurant</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "AddPage",
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    methods: {
        async addRestaurant() {
            let data = {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            };

            let result = await axios.post("http://localhost:3000/restaurant", data)
            
            if (result.status === 201) {
                this.$router.push({ name: "HomePage" });
            }
        }
    },
};
</script>