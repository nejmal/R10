// import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Map from './Map';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// create a component
// (Stateful) Logic and state
class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Map'
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
          return <Map data={data} />;
        }}
      </Query>
    );
  }
}

//make this component available to the app
export default MapContainer;
