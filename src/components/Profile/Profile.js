/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import type { ProfileProps as Props } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import Icon from '../Icon/Icon';
import ProfileHeader from './ProfileHeader';
import ProfileActions from './ProfileActions';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileCustomInfo from '../ProfileCustomInfo/ProfileCustomInfo';
import getStyles from './styles';
import { Color } from '../../styles';

class Profile extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Profile);
  }

  renderError() {
    const { data: { error }} = this.props;

    if (!error) {
      return null;
    }

    return (
      <View style={this.styles.errorWrapper}>
        <Icon
          glyph="error"
          style={this.styles.errorIcon}
          width={64}
          height={64}
        />
        <Text style={this.styles.errorText}>{typeof error === 'string' ? error : error.message}</Text>
      </View>
    );
  }

  renderPending() {
    return (
      <View style={this.styles.fill}>
        <ActivityIndicator
          size="large"
          color={this.context.theme.color.primary || Color.primary}
        />
      </View>
    );
  }

  renderHeader() {
    const { data: { value: { profile: { avatar, id, name, online } } } } = this.props;

    return (
      <ProfileHeader
        id={id}
        avatar={avatar}
        title={name}
        online={online}
        onMessagePress={this.props.onMessagePress}
        onCallPress={this.props.onCallPress}
      />
    );
  }

  renderInfo() {
    const { data: { value: { profile: { about, nick, phones, emails } } } } = this.props;

    return (
      <ProfileInfo about={about} nick={nick} phones={phones} emails={emails} />
    );
  }

  renderCustomInfo() {
    const { data: { value: { custom } } } = this.props;

    return <ProfileCustomInfo schema={custom.schema} value={custom.value} />;
  }

  renderActions() {
    const {
      data: { value: { isNotificationsEnabled, isFavourite } }
    } = this.props;

    return (
      <ProfileActions
        onNotificationsChange={this.props.onNotificationsChange}
        isNotificationsEnabled={isNotificationsEnabled}
        onFavouriteToggle={this.props.onFavouriteToggle}
        isFavourite={isFavourite}
        onUserBlock={this.props.onUserBlock}
      />
    );
  }

  render() {
    const { data } = this.props;

    if (data.error) {
      return this.renderError();
    }

    if (data.pending) {
      return this.renderPending();
    }

    return (
      <ScrollView style={this.styles.container}>
        {this.renderHeader()}
        {this.renderInfo()}
        {this.renderCustomInfo()}
        {this.renderActions()}
      </ScrollView>
    );
  }
}

export default Profile;
