/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      flex: 0,
      height: 70,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    number: {
      fontSize: 26,
      color: Color.gray,
      letterSpacing: 5
    },
    backspace: {
      position: 'absolute',
      width: 32,
      height: 32,
      top: 20,
      right: 20
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
