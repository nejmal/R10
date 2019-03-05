import React, { Component } from 'react';
import { View, ActivityIndicator, UIManager, Platform } from 'react-native';
import Text from '../../components/Text';
import About from './About';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './styles';

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

          return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
