import React, { Component } from 'react';
import { View, ActivityIndicator, Animated, Easing, Image } from 'react-native';
import Text from '../../components/MyAppText.js';
import Icon from '../../components/Icon';
import Faves from './Faves';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FavesContext from '../../context';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import { colors } from '../../config/styles';
import styles from './styles';

class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  static navigationOptions = {
    title: 'Faves'
  };

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  render() {
    const opacity = this.animatedValue.interpolate({
      // inputRange: [0, 0.25, 0.5, 0.75, 1],
      // outputRange: [100, 120, 150, 120, 100]
      // outputRange: [0, 0.5, 1, 0.5, 0]
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              title
              description
              location
              startTime
              speaker {
                bio
                id
                image
                name
                url
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={styles.loader}>
                <ActivityIndicator size='large' />
              </View>
            );
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          return (
            <FavesContext.Consumer>
              {/* {({ faveIds }) => (
                <Faves
                  data={formatSessionData(data.allSessions)}
                  navigation={this.props.navigation}
                  faveIds={faveIds}
                />
              )} */}
              {({ faveIds, setFaveId, removeFaveId }) => {
                let filterSessions = data.allSessions.filter(session => {
                  console.log(session);
                  return faveIds.includes(session.id);
                });
                if (!this.filterSessions)
                  return (
                    <View style={styles.container}>
                      <Animated.Image
                        style={{
                          // width: pulse,
                          // height: pulse
                          opacity,
                          width: 100,
                          height: 100
                        }}
                        source={require('../../assets/images/heart.png')}
                      />
                      <Text style={styles.h1}>
                        Hey, it looks like you don't have any favourites yet.
                      </Text>
                    </View>
                  );

                return (
                  <Faves
                    data={formatSessionData(filterSessions)}
                    faveIds={faveIds}
                    navigation={this.props.navigation}
                    setFaveId={setFaveId}
                    removeFaveId={removeFaveId}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default FavesContainer;
