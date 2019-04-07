import ajax from './ajax'

// 1. 基础路径
// const BASE_URL = '/api';
const BASE_URL = 'http://localhost:3000';

//2.请求方法

//2.1 请求首页轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');

//2.2 请求首页导航
export const getHomeNav = ()=>ajax(BASE_URL + '/api/homenav');

//2.3 请求首页商品数据
export const getHomeShopList = ()=>ajax(BASE_URL + '/api/homeshoplist');

//2.4 请求推荐商品数据
export const getRecommendShopList = (params)=>ajax(BASE_URL + '/api/recommendshoplist',params);

//2.5 请求搜索商品数据
export const getSearchGoods = ()=>ajax(BASE_URL + '/api/searchgoods');

//2.6 请求搜索商品类别
export const getSearchSort = ()=>ajax(BASE_URL + '/api/sort');

//2.7 请求短信验证码
export const getPhoneCode = (phone)=>ajax(BASE_URL + '/api/send_code',{phone:phone});

//2.8 手机验证码登录
export const phoneCodeLogin = (phone,code)=>ajax(BASE_URL + '/api/login_code',{phone:phone,code:code},'POST');

//2.9 用户名密码登录
export const pwdLogin = (name,pwd,captcha)=>ajax(BASE_URL + '/api/login_pwd',{name,pwd,captcha},'POST');

//2.10 获取登陆的用户信息
export const getUserInfo = ()=>ajax(BASE_URL + '/api/user_info');

//2.11 退出登录
export const getLogout = ()=>ajax(BASE_URL + '/api/logout');

//2.12 修改用户信息
export const changeUserInfo = (user_id,user_name,user_sex,user_address,user_birthday,user_sign)=>ajax(BASE_URL + '/api/change_user_msg',{user_id,user_name,user_sex,user_address,user_birthday,user_sign},'POST');

//2.13 加入购物车
export const addGoodsToCart = (user_id,goods_id,goods_name,thumb_url,price)=>ajax(BASE_URL + '/api/add_shop_cart',{user_id,goods_id,goods_name,thumb_url,price},'POST');

//2.14 请求购物车数据
export const getCartsGoods = ()=>ajax(BASE_URL + '/api/cart_goods');
