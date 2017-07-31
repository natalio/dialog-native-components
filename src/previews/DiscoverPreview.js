/**
 * @flow
 */

import type { DiscoverCard } from '../types';
import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { group, user, channel, bot } from "../fixtures/peerInfo";
import ContextProvider from '../components/ContextProvider/ContextProvider';
import Discover from "../components/Discover/Discover";

class DiscoverPreview extends PureComponent {
  handleCardTap = (card: DiscoverCard) => {
    Alert.alert(card.title);
  };

  render() {
    const items = [];

    for (let i = 0; i < 4; i++) {
      items.push({
        ...group,
        description: group.about,
        members: 23,
        creator: user.title
      });
      items.push({
        ...channel,
        description: channel.about,
        shortname: channel.userName,
        members: 420,
        avatar: null
      });
      items.push({
        ...user,
        description: user.about,
        shortname: user.userName
      });
      items.push({
        ...bot,
        description: bot.about,
        shortname: bot.userName
      });
    };

    const theme = {
      color: {
        primary: '#e4002b'
      }
    };
    const style = {
      Discover: {
        cards: {
          backgroundColor: 'rgb(100, 45, 167)'
        }
      },
      DiscoverCard: {
        container: {
          backgroundColor: '#20d51d'
        }
      }
    };

    return (
      <ContextProvider theme={theme} style={style}>
        <View style={styles.container}>
          <Discover
            data={items}
            onGoToCard={this.handleCardTap}
          />
        </View>
      </ContextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default DiscoverPreview;
