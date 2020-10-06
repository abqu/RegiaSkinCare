<template>
  <div id="items">
    <ul v-bind:key="items">
      <li v-for="item in items" :key="item">
        <v-img max-height="150" max-width="250" src="item.url"></v-img>
        <h3>{{item.name}}</h3>
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
}

</style>
