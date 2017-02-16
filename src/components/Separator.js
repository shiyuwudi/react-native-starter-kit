import React from 'react';
import { View } from 'react-native';

export default separator = (sectionID, rowID) => (<View
  key={`${sectionID}-${rowID}`}
  style={{
    backgroundColor: '#ddd',
    height: 0.5,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  }}
/>
);
