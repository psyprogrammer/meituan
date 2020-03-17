<template>
  <div
    class="m-select"
    :class="{disabled: disabled}"
    @click="showContainer"
    v-documentClick="documentClick"
  >
    <!-- 框 -->
    <span>{{value}}</span>
    <i class="el-icon-caret-bottom"></i>
    <!-- 下拉列表 -->
    <div class="container" :class="{active: isActive}">
      <p class="title">{{title}}</p>
      <div class="col-wrapper" ref="colWrapper">
        <div class="col" v-for="(item, index) in cols" :key="index">
          <span
            class="col-item"
            :class="{active: current == item.id}"
            v-for="item in item"
            :key="item.id"
            @click="changeValue($event, item, item.id)"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value", "title", "list", "isActive", "disabled"],
  data() {
    return {
      current: -1 //用于添加删除active类名
    };
  },
  computed: {
    cols() {
      const cols = Math.ceil(this.list.length / 12);
      let result = [];
      for (let i = 0; i < cols; i++) {
        result.push(this.list.slice(i * 12, i * 12 + 12));
      }
      return result;
    }
  },
  methods: {
    showContainer(e) {
      e.stopPropagation();
      if (!this.disabled || this.disabled == undefined) {
        this.$emit("change_show", true);
      }
    },
    documentClick() {
      if (this.isActive) {
        //只有当下拉列表显示的时候才能绑定document的点击事件，其他时候没有
        console.log("提交");
        this.$emit("change_show", false);
      }
    },
    changeValue(e, item, id) {
      e.stopPropagation();
      this.$emit("change_value", item);
      this.current = id;
      // 改变active
      // console.log(this.$refs.colWrapper.getElementsByTagName('SPAN'));
    }
  }
};
</script>
<style lang="less" scoped>
.m-select {
  border: 1px solid rgb(201, 199, 199);
  width: 150px;
  height: 38px;
  line-height: 38px;
  padding-left: 10px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  float: left;
  margin-right: 10px;
  &.disabled {
    cursor: not-allowed;
  }
  i {
    float: right;
    line-height: 38px;
    margin-right: 10px;
  }
  .container {
    display: none;
    // width: 230px;
    border: 1px solid rgb(216, 216, 216);
    border-radius: 4px;
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 1;
    background-color: #fff;
    padding: 10px 20px;
    cursor: default;
    .title {
      color: #ccc;
    }
    &.active {
      display: block;
    }
    &::before {
      content: "";
      position: absolute;
      top: -7px;
      left: 26px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #e5e5e5;
      border-top: 0;
    }
    &::after {
      content: "";
      position: absolute;
      top: -5px;
      left: 26px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #fff;
      border-top: 0;
    }
    .col-wrapper {
      display: table-row;
      .col {
        display: table-cell;
        padding: 1px 8px;
        .col-item {
          margin: 10px 20px 0px 0px;
          display: block;
          font-size: 12px;
          padding: 0 5px;
          height: 20px;
          line-height: 20px;
          box-sizing: border-box;
          white-space: nowrap;
          cursor: pointer;
          &:hover {
            border-radius: 10px;
            background-color: #f4f4f4;
          }
          &.active {
            border-radius: 10px;
            background-color: #ffd000;
          }
        }
      }
    }
  }
}
</style>