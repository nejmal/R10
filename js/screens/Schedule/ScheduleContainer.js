import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Text from '../../components/MyAppText.js';
import Schedule from './Schedule';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FavesContext from '../../context';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import { colors, fonts } from '../../config/styles';
import styles from './styles';

// create a component
// (Stateful) Logic and state
class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Schedule',
    headerTintColor: colors.bgLight,
    headerTitleStyle: {
      fontSize: fonts.md
    }
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

          // console.log(data);
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => (
                <Schedule
                  data={formatSessionData(data.allSessions)}
                  navigation={this.props.navigation}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

//make this component available to the app
export default ScheduleContainer;
