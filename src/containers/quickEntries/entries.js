import {
    Actions,
} from 'react-native-router-flux';

export default entries = [{
  groupname: '销售',
  entries: [{
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '商品管理',
    key: 'GoodsContainer',
    onClick: () => Actions.GoodsContainer(),
  },
  {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '品牌管理',
    key: 'GoodsBrandListContainer',
    onClick: () => Actions.GoodsBrandListContainer(),
  },
  ],
},
{
  groupname: '库存',
  entries: [{
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '其他管理',
    key: 'other1',
    onClick: () => Actions.GoodsContainer(),
  },
  {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '其他管理',
    key: 'other2',
    onClick: () => Actions.GoodsContainer(),
  },
  ],
},
];
