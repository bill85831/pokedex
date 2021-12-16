<template>
  <div class="container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg">
    <pokelist :imageUrl="imageUrl" :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl"/>
    <pokedetail
      v-if="showDetail"
      :pokemonUrl="pokemonUrl"
      :imageUrl="imageUrl"
      @closeDetail="closeDetail"
    />
  </div>
</template>


<script>
import pokelist from "../components/pokelist.vue";
import Pokedetail from '../components/pokedetail.vue';

export default {
  data() {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false
    };
  },
  components: {
    pokelist,
    Pokedetail,
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.showDetail = false;
    }
  }

};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  text-align: center;
  background: #fff7ae;

  img {
    margin: 20px 0;
  }
}
</style>