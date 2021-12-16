<template>
  <div id="Home">
    <div class="content">
      <h2 class="first">You can cheak every pokemon's information like type, ability, ... and so on.</h2>
      <h2 class="second">Let me show you pokedex!</h2>
      <router-link :to="{ path: '/pokedex' }" class="link">Go To Pokedex</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>


<script>
export default {

};
</script>

<style lang="scss" scoped>

#Home {
  margin:0 auto;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 830px;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    background-image: url("../assets/pichu.jpg");
    background-size: cover;
    z-index: -1;
    opacity: .4;
  }

  .first {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 230px;
    left: 310px;
    max-width: 300px;
    letter-spacing: 1px;
    line-height: 1.5;
  }

  .second {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 390px;
    left: 310px;
    max-width: 300px;
    letter-spacing: 1px;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 450px;
    left: 300px;
    height: 50px;
    border-radius: 20px;
    margin: 0 10px 10px 0;
    padding: 10px 15px;
    font-weight: bold;
    font-size: 40px;
    text-transform: capitalize;
    cursor: pointer;
    color: #fff;
    background-color: rgb(245, 151, 57);
    border: 2px solid rgb(216, 132, 49);
    text-decoration: none;
    
  }
}
</style>
