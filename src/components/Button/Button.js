/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { View, Text, TouchableNativeFeedback } from "react-native";
import getStyles from './styles';

type Props = {
  title: string,
  onPress: () => mixed
};

class Button extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Schedule);
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress} background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={this.styles.container}>
          <Text style={this.styles.text}>{this.props.title.toUpperCase()}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default Button;