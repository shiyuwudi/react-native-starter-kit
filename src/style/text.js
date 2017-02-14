import { StyleSheet } from 'react-native';
import variables from './default';

export default StyleSheet.create({
  mainHead: {
    fontSize: variables.font_size_heading,
    color: variables.color_text_base,
  },
  subHead: {
    fontSize: variables.font_size_subhead,
    color: variables.color_text_base,
  },
  text: {
    fontSize: variables.font_size_base,
    color: variables.color_text_base,
  },
  help: {
    fontSize: variables.font_size_base,
    color: variables.color_text_secondary,
  },
  disabled: {
    fontSize: variables.font_size_base,
    color: variables.color_text_disabled,
  },
});
