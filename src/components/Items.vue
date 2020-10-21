<template>
  <div id="items">
    <ul v-bind:key="item">
      <li v-for="item in items" :key="item">
        <v-hover v-slot="{ hover }">
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-img
          :aspect-ratio="16/9"
          src="item.url"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              {{item.precio}}
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text
          class="pt-6"
          style="position: relative;"
        >
          <v-btn
            absolute
            color="orange"
            class="white--text"
            fab
            large
            right
            top
          >
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <router-link :to="{ name: 'items', params: {item: item_id} }">
          <h3 class="display-1 font-weight-light orange--text mb-2">
            {{item.name}}
          </h3>
          </router-link>
          <div class="font-weight-light title mb-2">
            {{item.description}}
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
  props:
    ['items'],
    data(){
      return {

        }
      }

  }
  </script>

<style scoped>
#items{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap:wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 2px;
}

</style>
