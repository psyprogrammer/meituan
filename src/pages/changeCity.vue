<template>
  <div class="page-city">
    <div class="content">
      <!-- 选择与搜索 -->
      <div class="item choose">
        <h3 class="title">按省份选择：</h3>
        <div class="choose-wrapper clearfix">
          <my-select
            :value="selectArea.province"
            title="省份"
            :list="selectArea.provinceList"
            :isActive="selectArea.provinceActive"
            @change_show="changeProviceActive"
            @change_value="changeProvince"
          />
          <my-select
            :value="selectArea.city"
            title="城市"
            :list="selectArea.cityList"
            :isActive="selectArea.cityActive"
            :disabled="selectArea.cityDisabled"
            @change_value="changeCity"
            @change_show="changeCityActive"
          />
        </div>
        <div class="search">
          <span class="title">直接搜索：</span>
          <el-select v-model="search" filterable placeholder="请输入城市中文或拼音" @change="handleClick">
            <el-option
              v-for="item in searchList"
              :key="item.id"
              :value="item.name"
              :label="item.name"
              :filter-method="filterSearch"
            ></el-option>
          </el-select>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="item hot-city">
        <h3 class="title">热门城市：</h3>
        <span
          class="city"
          v-for="item in hotCity"
          :key="item.id"
          @click="handleClick(item.name)"
        >{{item.name}}</span>
      </div>
      <!-- 最近访问城市 -->
      <div class="item recent">
        <h3 class="title">最近访问：</h3>
        <span
          class="city"
          v-for="item in recentList"
          :key="item.id"
          @click="handleClick(item)"
        >{{item.name}}</span>
      </div>
      <!-- 字母表选择城市 -->
      <Choose :allCity="allCity" />
    </div>
  </div>
</template>
<script>
import MySelect from "@/components/city/select";
import Choose from "@/components/city/choose";
import api from "@/api/index";
export default {
  name: "changeCity",
  components: {
    MySelect,
    Choose
  },
  data() {
    return {
      selectArea: {
        province: "省份",
        city: "城市",
        provinceList: [],
        cityList: [],
        cityActive: false,
        provinceActive: false,
        cityDisabled: true
      },
      search: "",
      searchList: [],
      hotCity: [],
      recentList: [],
      loading: false,
      allCity: {}
    };
  },
  created() {
    api.getAllCityData.then(res => {
      // 省份选择
      this.selectArea.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        item.id = item.provinceCode;
        return item;
      });

      // 所有城市（给字母表区域用）
      const allCity = res.data.data.map(item => item.cityInfoList);
      // 把所有城市铺开放在一个数组里
      let result = [];
      allCity.forEach(item => {
        result.push(...item);
      });
      this.searchList = result
      // 把所有城市按照字母分类到组
      let obj = {};
      result.forEach(item => {
        if (!obj[item.firstChar]) {
          //某个字母属性不存在的情况
          obj[item.firstChar] = [item];
        } else {
          obj[item.firstChar].push(item);
        }
      });
      // 把obj按照字母顺序排序
      let newObj = {};
      const newKeys = Object.keys(obj).sort();
      for (let i = 0; i < newKeys.length; i++) {
        newObj[newKeys[i]] = obj[newKeys[i]];
      }

      this.allCity = newObj;
      // console.log(newObj);
    });
    // 热门城市
    api.getHotCityData.then(res => {
      this.hotCity = res.data.data;
    });
    // 最近访问城市
    api.getRecentCityData.then(res => {
      this.recentList = res.data.data;
    });
  },
  methods: {
    changeProviceActive(flag) {
      // console.log("Provice", flag);
      //flag本组件的下拉列表的显示状态
      this.selectArea.provinceActive = flag;
      if (flag) {
        this.selectArea.cityActive = false;
      }
    },
    changeCityActive(flag) {
      // console.log("city", flag);

      this.selectArea.cityActive = flag;
      if (flag) {
        this.selectArea.provinceActive = false;
      }
    },
    changeProvince(val) {
      this.selectArea.province = val.name;
      this.selectArea.cityDisabled = false;
      this.selectArea.provinceActive = false;
      this.selectArea.cityList = val.cityInfoList;
    },
    changeCity(val) {
      this.$store.dispatch("change", val.name);
      this.$router.push("/home");
    },
    handleClick(val) {
      console.log(val);
      this.$store.dispatch("change", val);
      this.$router.push("/home");
    },
    filterSearch(){
      // const list = this.searchList;
      console.log(11)
      // if(list.name.includes(val) || list.acronym.includes(val) || list.pinyin.includes(val)){
      //   return list.name;
      // }
    }
  }
};
</script>
<style lang="less" scoped>
.page-city {
  margin-top: 20px;
  width: 100%;
  border: 1px solid rgb(201, 199, 199);
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
  .content {
    padding: 0 20px;
    .item {
      border-bottom: 1px solid rgb(201, 199, 199);
      .title {
        line-height: 40px;
        font-weight: 500;
        color: #333;
        display: inline;
        font-size: 16px;
      }
      .city {
        color: #666;
        margin-left: 30px;
        cursor: pointer;
      }
      // 第一栏
      &.choose {
        padding: 30px 0;
        display: flex;
        // 选择框
        .choose-wrapper {
        }
        // 输入框
        .search {
          margin-left: 50px;
        }
      }
      // 第二栏
      &.hot-city {
        padding: 30px 0;
        a {
          color: #666;
          margin-left: 30px;
          font-size: 14px;
        }
      }
      // 第三栏
      &.recent {
        padding: 30px 0;
      }
    }
  }
}
</style>