import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  getSearchSort,
  getUserInfo,
  getLogout,
  getCartsGoods,

} from '../api/index'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  SEARCH_SORT,
  USER_INFO,
  RESET_USER_INFO,
  CART_GOODS_LIST,
  ADD_GOODS_COUNT,
  REDUCE_GOODS_COUNT,
  SELECTED_ALL_GOODS,
  SELECTED_SINGLE_GOODS,
  DEL_SINGLE_GOODS
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
  async reqRecommendShopList({commit},params){
    const result = await getRecommendShopList(params);
    commit(RECOMMEND_SHOP_LIST,{recommendshoplist:result.message});
    params.callback && params.callback();
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
  },

  //7.同步用户信息
  syncUserInfo({commit},userInfo){
    commit(USER_INFO,{userInfo});
  },

  //8.异步获取用户信息
  async getUserInfo({commit}){
    const result = await getUserInfo();

    if(result.success_code === 200){
      commit(USER_INFO,{userInfo:result.message});
    }
  },

  //9.退出登录
  async logOut({commit}){
    const result = await getLogout();

    if(result.success_code === 200){
      commit(RESET_USER_INFO);
    }
  },

  //10.请求购物车数据
  async reqCartsGoods({commit}){
    const result = await getCartsGoods();
    if(result.success_code === 200){
      commit(CART_GOODS_LIST,{cartgoods:result.message})
    }

  },

  //11.单个商品的增加和减少
  updateGoodsCount({commit},{goods,isAdd}){
    if(isAdd){//增加
      commit(ADD_GOODS_COUNT,{goods})
    }else{//减少
      commit(REDUCE_GOODS_COUNT,{goods})
    }
  },
  //11.是否选中所有商品
  selectedAll({commit},{isSelected}){
    commit(SELECTED_ALL_GOODS,{isSelected})
  },
  //12.单个商品的选中和取消
  singleGoodsSelected({commit},{goods}){
    commit(SELECTED_SINGLE_GOODS,{goods})
  },

  //13.删除购物车里面的商品
  delSingleGoods({commit},{goods}){
    commit(DEL_SINGLE_GOODS,{goods})
  },
}
