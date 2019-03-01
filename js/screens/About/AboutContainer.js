// stateful component
// downloaded React Native Snippet
// use shorthand rnc to get the following below:

// import liraries
import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  UIManager,
  Platform,
  LayoutAnimation
} from 'react-native';
import Text from '../../components/MyAppText.js';
import About from './About';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { colors, fonts } from '../../config/styles';
import styles from './styles';

// create a component
// (Stateful) Logic and state
class AboutContainer extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  static navigationOptions = {
    title: 'About'
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
          if (loading)
            return (
              <View style={styles.loader}>
                <ActivityIndicator size='large' />
              </View>
            );
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log(data);
          return <About data={data} />;
        }}
      </Query>
    );
  }
}

//make this component available to the app
export default AboutContainer;
