import React from 'react';
import { ScrollView } from 'react-native';
import { List, Grid } from 'antd-mobile';
import { Actions } from 'react-native-router-flux';

const entries = [{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '全部功能',
  onClick: () => Actions.QuickEntriesContainer(),
}];

const GoodsEdit = () => (
  <ScrollView
    style={{ flex: 1, backgroundColor: '#f5f5f9' }}
    automaticallyAdjustContentInsets={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
  >
    <List>
      <Grid
        data={entries}
        hasLine={false}
        onClick={(el) => {
          el.onClick();
        }}
      />
    </List>
  </ScrollView>
);

GoodsEdit.propTypes = {

};

export default GoodsEdit;
