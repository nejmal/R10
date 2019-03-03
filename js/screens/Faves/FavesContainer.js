import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
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
  }

  static navigationOptions = {
    title: 'Faves'
  };

  render() {
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
                      <Icon
                        name='heart'
                        size={66}
                        color={colors.brandPrimary}
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
