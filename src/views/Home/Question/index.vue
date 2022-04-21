<template>
  <div class="text-container">
    <div class="slideshow">
      <el-carousel :interval="4000" type="card" height="250px">
        <el-carousel-item v-for="item in imagebox" :key="item.id">
          <img :src="item.idView" class="image" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagebox: [
        { id: 0, idView: require("@/assets/imagebox/6.jpg") },
        { id: 1, idView: require("@/assets/imagebox/7.jpg") },
        { id: 2, idView: require("@/assets/imagebox/8.jpg") },
        { id: 3, idView: require("@/assets/imagebox/9.jpg") },
        { id: 4, idView: require("@/assets/imagebox/10.jpg") },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.text-container {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
}
</style>