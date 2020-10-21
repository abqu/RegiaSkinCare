<template>
    <div>
        <app-items v-bind:items="items"></app-items>
    </div>
</template>

<script>
import items from './Items.vue';
import axios from "axios";
const {baseURL} = require('../urlHelper');

export default{
  components:{
    'app-items': items
  },
  data(){
    return{
    items: [
      {name: 'Crema',description: "Es una crema", precio: 25.90, url: 'https://www.cetaphil.com.mx/sites/g/files/jcdfhc441/files/styles/cp_product_medium/public/Crema%20Humectante_453.png?itok=CDH3rXDH'},
      {name: 'Polvo',description: "Polvo para la cara", precio: 32.85, url: 'https://cdn.shopify.com/s/files/1/1365/5917/products/BIS-MC010_7e2d4acc-082a-463d-aef8-48b7479929a3_1024x1024.jpg?v=1588639528'},
      {name: 'Mascara',description: "Para cejas, resistente al agua", precio: 125.25, url: 'https://i.pinimg.com/564x/f0/41/bb/f041bb9322e9882dc981fd9608c92ab8.jpg'}
    ]

    }
  },
  created() {
      axios.get(baseURL + '/api/item')
      .then(response => this.items = response.data)
  }
}
</script>
