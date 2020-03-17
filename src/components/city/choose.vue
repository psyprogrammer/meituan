<template>
  <div class="choose">
    <div class="top">
      <span class="title">按拼音首字母选择：</span>
      <ul class="alphabet">
        <li v-for="item in alphabet" :key="item" class="item"><a class="letter" :href="'#city-'+item">{{item}}</a></li>
      </ul>
    </div>
    <div class="alphabet-city-area">
      <div class="city-area" v-for="(item,key) in allCity" :key="key">
        <a class="letter" :name="'city-' + key">{{key}}</a>
        <div class="list">
          <span class="item" v-for="item in item" :key="item.id" @click="handleClick(item.name)">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["allCity"],
  data() {
    return {
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityData: []
    };
  },
  methods: {
    handleClick(val) {
      this.$store.dispatch("change", val);
      this.$router.push("/home");
      window.scrollTo(0,0);
    }
  }
};
</script>
<style lang="less" scoped>
.choose {
  .top {
    padding: 30px 0;
    height: 30px;
    line-height: 30px;
    .title {
      font-weight: 500;
      color: #333;
    }
    ul.alphabet {
      display: inline-block;
      li.item{
        display: inline-block;
        margin: 0 6px;
        a.letter {
          display: inline-block;
          font-size: 15px;
          width: 25px;
          height: 25px;
          cursor: pointer;
          box-sizing: border-box;
          text-align: center;
          border-radius: 50%;
          &:hover {
            font-weight: 500;
            background: #f8f8f8;
          }
          &:hover{
            color: #222;
          }
      }
      }
    }
  }
  .alphabet-city-area {
    .city-area {
      padding: 13px 30px 13px 10px;
      border-radius: 10px;
      transition: background-color 500ms;
      &:hover{
        background: #F8F8F8;
      }
      .letter {
        box-sizing: border-box;
        vertical-align: top;
        padding-top: 10px;
        display: inline-block;
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #222222;
        background: #ffd000;
      }
      .list {
        display: inline-block;
        max-width: 1065px;
        .item {
          margin: 10px 20px;
          color: #666;
          display: inline-block;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>