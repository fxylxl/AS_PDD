import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  getSearchSort
} from '../api/index'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  SEARCH_SORT,
} from './mutation-types'

export default {
  //1.获取首页轮播图
  async reqHomeCasual({commit}){
    const result = await getHomeCasual();
    commit(HOME_CASUAL,{homecasual:result.message})
  },

  //2.获取首页导航数据
  async reqHomeNav({commit}){
    const result = await getHomeNav();
    commit(HOME_NAV,{homenav:result.message})
  },

  //3.获取首页商品列表信息
  async reqHomeShopList({commit}){
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST,{homeshoplist:result.message})
  },

  //4.获取推荐商品列表信息
  async reqRecommendShopList({commit}){
    const result = await getRecommendShopList();
    commit(RECOMMEND_SHOP_LIST,{recommendshoplist:result.message})
  },
  //5.获取搜索商品列表信息
  async reqSearchGoods({commit}){
    const result = await getSearchGoods();
    commit(SEARCH_GOODS,{searchgoods:result.message})
  },

  //6.获取搜索商品类别
  async reqSearchSort({commit}){
    const result = await getSearchSort();
    commit(SEARCH_SORT,{searchsort:result.message});
  }



}
