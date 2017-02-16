import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBar } from 'antd-mobile';
import { Actions } from 'react-native-router-flux';

import SettingContainer from '../setting/Container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const renderContent = () => (
  <View
    style={{ flex: 1, backgroundColor: '#f5f5f9' }}
  />);


const Tab = ({ currentTab, changeCurrentTab }) => (
  <View style={styles.container}>
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
    >
      <TabBar.Item
        title="首页"
        icon={require('../../../images/alipay.png')}
        selectedIcon={require('../../../images/alipay_sel.png')}
        selected={currentTab === 'index'}
        onPress={() => {
          changeCurrentTab('index');
          Actions.refresh({ title: '首页' });
        }}
      >
        <SettingContainer />
      </TabBar.Item>
      <TabBar.Item
        title="销售"
        icon={require('../../../images/koubei.png')}
        selectedIcon={require('../../../images/koubei_sel.png')}
        selected={currentTab === 'sell'}
        onPress={() => {
          changeCurrentTab('sell');
          Actions.refresh({ title: '销售' });
        }}
      >
        {renderContent('生活 Tab')}
      </TabBar.Item>
      <TabBar.Item
        title="库存"
        icon={require('../../../images/friend.png')}
        selectedIcon={require('../../../images/friend_sel.png')}
        selected={currentTab === 'wh'}
        onPress={() => {
          changeCurrentTab('wh');
          Actions.refresh({ title: '库存' });
        }}
      >
        {renderContent('生活 Tab')}
      </TabBar.Item>
      <TabBar.Item
        icon={require('../../../images/busi.png')}
        selectedIcon={require('../../../images/busi_sel.png')}
        title="报表"
        selected={currentTab === 'sheet'}
        onPress={() => {
          changeCurrentTab('sheet');
          Actions.refresh({ title: '报表' });
        }}
      >
        {renderContent('生活 Tab')}
      </TabBar.Item>
      <TabBar.Item
        title="财务"
        icon={require('../../../images/alipay.png')}
        selectedIcon={require('../../../images/alipay_sel.png')}
        selected={currentTab === 'fan'}
        onPress={() => {
          changeCurrentTab('fan');
          Actions.refresh({ title: '财务' });
        }}
      >
        {renderContent('生活 Tab')}
      </TabBar.Item>
    </TabBar>
  </View>
);

Tab.propTypes = {
  currentTab: React.PropTypes.string.isRequired,
  changeCurrentTab: React.PropTypes.func.isRequired,
};

export default (Tab);
