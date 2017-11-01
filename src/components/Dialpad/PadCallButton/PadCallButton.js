/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, Image } from "react-native";
import getStyles from './styles';
import { Color } from '../../../styles';
import call from '../../../assets/icons/call.png';

type Props = {};

type State = {};

class PadCallButton extends PureComponent {
  props: Props;
  state: State;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props: Props, context) {
    super(props, context);

    this.state = {};

    this.styles = getStyles(context.theme, context.style.PadCallButton);
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Image source={call} style={this.styles.icon} />
      </View>
    );
  }
}

export default PadCallButton;
