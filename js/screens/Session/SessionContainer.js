// stateful component
// downloaded React Native Snippet
// use shorthand rnc to get the following below:

// import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Session from './Session';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { colors, fonts } from '../../config/styles';
// create a component
// (Stateful) Logic and state
class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Session',
    headerTintColor: colors.bgLight,
    headerTitleStyle: {
      fontSize: fonts.md
    }
  };

  render() {
    const { navigation } = this.props;

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
          if (loading) return <ActivityIndicator size='large' />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          // console.log(data);
          return <Session data={data} navigation={navigation} />;
        }}
      </Query>
    );
  }
}

//make this component available to the app
export default SessionContainer;
