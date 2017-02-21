import React from 'react';
import { Image } from 'react-native';

import arrowStyle from '../styles/arrow';

export default Arrow = () => (
  <Image source={require('../../node_modules/antd-mobile/lib/style/images/arrow.png')} style={arrowStyle.Arrow} />
);
