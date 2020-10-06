<template>
    <div>
        <app-items v-bind:items="items"></app-items>
    </div>
</template>

<script>
import items from './Items.vue';

export default{
  components:{
    'app-items':items
  },
  data(){
    return{
    items: [
      {name: 'Crema', url: 'https://www.cetaphil.com.mx/sites/g/files/jcdfhc441/files/styles/cp_product_medium/public/Crema%20Humectante_453.png?itok=CDH3rXDH'},
      {name: 'Polvo', url: 'https://cdn.shopify.com/s/files/1/1365/5917/products/BIS-MC010_7e2d4acc-082a-463d-aef8-48b7479929a3_1024x1024.jpg?v=1588639528'}
    ]

    }
  }
}
</script>
