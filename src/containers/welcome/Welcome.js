import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';

let { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

// android要把状态栏的高度减去才是全屏高度
if (StatusBar.currentHeight) {
  height -= StatusBar.currentHeight;
}

const styles = StyleSheet.create({
  fullScreen: {
    width,
    height,
  },
  bottomBar: {
    width,
    backgroundColor: '#000000',
  },
  transparentBackgroud: {
    backgroundColor: '#00000000',
  },
  textCentre: {
    textAlign: 'center',
  },
  textLargeWhite: {
    fontSize: 22,
    textAlign: 'left',
    color: 'white',
  },
  textNormalWhite: {
    fontSize: 16,
    textAlign: 'left',
    color: 'white',
  },
});

const Welcome = ({ img, text }) =>
  <View
    style={{
      backgroundColor: '#000000',
    }}
  >
    <Image source={{ uri: img }}>
      <View
        style={[styles.fullScreen, {
          backgroundColor: '#00000033',
        }]}
      >
        <View
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <Text
            style={[styles.textCentre, styles.transparentBackgroud, {
              fontSize: 16,
              margin: 8,
              color: 'white',
            }]}
          >
            {text}
          </Text>

          <View
            style={[styles.bottomBar, {
              padding: 20,
            }]}
          >
            <Text
              style={styles.textLargeWhite}
            >
              知乎日报
            </Text>
            <Text
              style={[styles.textNormalWhite, {
                marginTop: 6,
              }]}
            >
              每日三次，每次七分钟
            </Text>
          </View>
        </View>
      </View>
    </Image>
  </View>;

Welcome.propTypes = {
  img: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Welcome;
