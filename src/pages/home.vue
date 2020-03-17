<template>
  <div class="home">
    <div class="center">
      <!-- 左侧菜单栏 -->
      <my-menu />
      <!-- 右侧 -->
      <Right />
    </div>
    <Cards />
  </div>
</template>

<script>
import MyMenu from "@/components/main/menu";
import Right from "@/components/main/right";
import Cards from "@/components/main/cards";
export default {
  name: "home",
  components: {
    MyMenu,
    Right,
    Cards
  }
};
</script>

<style lang="less" scoped>
.home {
  .center{
    display: flex;
  }
}
</style>