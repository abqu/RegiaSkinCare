<template>
    <div class="fill-height">
      <h1> {{item.name}}</h1>
      <container>
        <v-img max-height="300" max-width="500" src="item.url"></v-img>
      </container>
      <h3>{{item.precio}}</h3>
      <p>{{item.description}}</p>
      <div class="addToCart">
        <v-btn absolute large class="white--text" color="primary" fab @click="addCarrito(item_id)"> <v-icon>mdi-cart </v-icon></v-btn>
      </div>
      <router-link class="caption" to='/'>Volver</router-link>
    </div>
</template>

<script>
  export default{
  props:
    'item',
    data(){
      return {

        }
      }

  }
  </script>
