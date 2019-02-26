import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import About from './About';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// create a component
// (Stateful) Logic and state
class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Schedule'
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
              order
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          // if (loading) return <ActivityIndicator size='large' />;
          // if (error) return <Text>{`Error! ${error.message}`}</Text>;
          // console.log(data);
          console.log(data);
          return <Schedule data={data} />;
        }}
      </Query>
    );
  }
}

//make this component available to the app
export default ScheduleContainer;
