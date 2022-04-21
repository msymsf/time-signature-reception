<template>
  <div class="start">
    <img src="./images/1.png" alt="" />
    <router-link to="/home"><button>ENTER INTO</button></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.start {
  img {
    width: 118.5em;
    height: 63.57em;
  }
  button {
    position: absolute;
    top: 47em;
    left: 14em;
    height: 3.5em;
    width: 9em;
    color: white;
    border: none;
    font-family: "楷书";
    border-radius: 18px;
    background-image: -moz-linear-gradient(
      0deg,
      rgb(92, 64, 205),
      rgb(33, 15, 193)
    );

    background-image: -webkit-linear-gradient(
      0deg,
      rgb(92, 64, 205),
      rgb(33, 15, 193)
    );

    background-image: linear-gradient(0deg, rgb(92, 64, 205), rgb(33, 15, 193));
  }
}
</style>