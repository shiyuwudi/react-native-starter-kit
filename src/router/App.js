import React from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

import WelcomeContainer from '../containers/welcome/Container';
import LoginContainer from '../containers/login/Container';
import IndexContainer from '../containers/tab/Container';
import OrderContainer from '../containers/order/Container'
import GoodsContainer from '../containers/goodsList/Container';
import GoodsEditContainer from '../containers/goodsEdit/Container';

const RouterWithRedux = connect()(Router);

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    const deviceTop = Platform.OS === 'android' ? 54 : 64;
    style.marginTop = computedProps.hideNavBar ? 0 : deviceTop;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const App = () =>
  <RouterWithRedux getSceneStyle={getSceneStyle}>
    <Scene key="root">
      <Scene
        key="WelcomeContainer"
        component={WelcomeContainer}
        title="欢迎"
        hideNavBar
        hideTabBar
      />
      <Scene
        key="LoginContainer"
        component={LoginContainer}
        title="登录"
        hideNavBar={false}
        type={ActionConst.REPLACE}
        hideTabBar
      />
      <Scene
        key="IndexContainer"
        component={IndexContainer}
        title="首页"
        hideNavBar={false}
        type={ActionConst.REPLACE}
        hideTabBar
      />
      <Scene
        key="GoodsContainer"
        component={GoodsContainer}
        title="商品"
        onRight={() => { Actions.GoodsEditContainer({ title: '商品新增' }); }}
        rightTitle="新增"
        hideNavBar={false}
        type={ActionConst.PUSH}
        hideTabBar
        initial
      />
      <Scene
        key="OrderContainer"
        component={OrderContainer}
        title="订单"
        hideNavBar={false}
        type={ActionConst.PUSH}
        hideTabBar
      />
      <Scene
        key="GoodsEditContainer"
        component={GoodsEditContainer}
        title="商品新增"
        hideNavBar={false}
        type={ActionConst.PUSH}
        hideTabBar
      />

    </Scene>

  </RouterWithRedux>;

export default App;
