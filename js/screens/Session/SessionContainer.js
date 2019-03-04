// stateful component
// downloaded React Native Snippet
// use shorthand rnc to get the following below:

// import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Text from '../../components/MyAppText';
import Session from './Session';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FavesContext from '../../context';
import { colors, fonts } from '../../config/styles';
import styles from './styles';
// create a component
// (Stateful) Logic and state
class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      // headerLeft: (
      //   <Button
      //     onPress={() => navigation.navigate('Speaker', { speakerData: item })}
      //     title='Info'
      //     color='#fff'
      //   />
      // ),
      // /* the rest of this config is unchanged */
      title: 'Session'
    };
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
          if (loading)
            return (
              <View style={styles.loader}>
                <ActivityIndicator size='large' />
              </View>
            );
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          const sessionData = this.props.navigation.getParam('sessionData');

          return (
            <FavesContext.Consumer>
              {({ faveIds, setFaveId, removeFaveId }) => (
                <Session
                  data={sessionData}
                  navigation={navigation}
                  faveIds={faveIds}
                  setFaveId={setFaveId}
                  removeFaveId={removeFaveId}
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
export default SessionContainer;
