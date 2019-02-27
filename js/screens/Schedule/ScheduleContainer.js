import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Schedule from './Schedule';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import { colors, fonts } from '../../config/styles';

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
              location
              startTime
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size='large' />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          // console.log(data);
          return (
            <Schedule
              data={formatSessionData(data.allSessions)}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

//make this component available to the app
export default ScheduleContainer;
