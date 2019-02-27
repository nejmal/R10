// import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Faves from './Faves';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FavesContext from '../../context';
import { colors, fonts } from '../../config/styles';

// create a component
// (Stateful) Logic and state
class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Faves',
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
          if (loading) return <ActivityIndicator size='large' />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          console.log(data);
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => <Faves data={data} />}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

//make this component available to the app
export default FavesContainer;
