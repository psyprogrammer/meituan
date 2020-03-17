import axios from '@/axios'

export default {
  // 用户登录接口
  login(params) {
    return axios.get('/api/meituan/login', {params})
  },
  // 用户注册接口
  register(params) {
    console.log(params)
    return axios.get('/api/meituan/register', {params})
  },
  // 搜索框列表数据获取
  getSearchList: axios.get('/api/meituan/header/search.json'),
  // 查询最近热门搜索
  getSearchHotWords: axios.get('/api/meituan/header/searchHotWords.json'),
  // 首页左侧导航条
  getMenuData: axios.get('/api/meituan/index/nav.json'),
  // 首页下方（有格调内容区数据获取）
  getHomeData: axios.get('/api/meituan/index/resultsByKeywords.json'),
  // 获取城市列表接口
  getCityData: axios.get('/api/meituan/city/cityList.json'),
  // 获取热门城市
  getHotCityData: axios.get('/api/meituan/city/hot.json'),
  // 获取省份列表
  getAllCityData: axios.get('/api/meituan/city/province.json'),
  // 最近搜索城市
  getRecentCityData: axios.get('/api/meituan/city/recents.json'),
  // 当前位置信息
  getCurPosition: axios.get('/api/meituan/city/getPosition.json'),
  // 产品展示列表数据获取
  getGoodsList: axios.get('/api/meituan/list/goodsList.json'),
  // 推荐产品列表
  getRecommend: axios.get('/api/meituan/list/recommend.json'),
  // 获取分类列表
  getClassify: axios.get('/api/meituan/list/classify.json'),
  // 获取区域列表
  // getAreaList: axios.get(' /api/meituan/list/areaList.json'),
  // 获取当前位置信息
  getPosition: axios.get('/api/meituan/city/getPosition.json'),
  // 获取当前产品细节
  getProductDetail: axios.get('/api/meituan/product/detail.json'),
}
  