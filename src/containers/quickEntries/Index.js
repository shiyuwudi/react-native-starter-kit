import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import { List, Grid, Flex, Badge } from 'antd-mobile';

import entries from './entries';
import variables from '../../styles/default';

const styles = StyleSheet.create({
  grayBorderBox: {
    borderColor: variables.border_color_base,
  },
  icon: {
    width: variables.icon_size_md,
    height: variables.icon_size_md,
  },
  text: {
    fontSize: variables.font_size_caption_sm,
    color: variables.color_text_base,
    marginTop: variables.v_spacing_md,
  },
});

const renderItem = ((dataItem, index) => (
  <Flex
    direction="column"
    justify="center"
    style={{ flex: 1 }}
    onPress={() => onClick(dataItem, index)}
  >
    <Badge text={9}>
      <Image source={{ uri: dataItem.icon }} style={styles.icon} />
    </Badge>
    <Text style={styles.text}>{dataItem.text}</Text>
  </Flex>
    ));


const GoodsEdit = () => (
  <ScrollView
    style={{ flex: 1, backgroundColor: '#f5f5f9' }}
    automaticallyAdjustContentInsets={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
  >
    {
    entries.map(data => <List key={data.groupname} renderHeader={() => (data.groupname)}>
      <Grid
        data={data.entries}
        hasLine={false}
        onClick={(el) => {
          el.onClick();
        }}
        renderItem={renderItem}
      />
    </List>)
  }
  </ScrollView>
);

GoodsEdit.propTypes = {

};

export default GoodsEdit;
