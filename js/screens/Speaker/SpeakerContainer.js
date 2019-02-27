import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Speaker from './Speaker';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { colors, fonts } from '../../config/styles';

// create a component
// (Stateful) Logic and state
class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Speaker',
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
          if (loading) return <ActivityIndicator size='large' />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          // console.log(data);
          return <Speaker data={data} />;
        }}
      </Query>
    );
  }
}

//make this component available to the app
export default SpeakerContainer;
