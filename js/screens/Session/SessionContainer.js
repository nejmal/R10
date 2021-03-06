import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import CustomText from '../../components/CustomText';
import Session from './Session';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FavesContext from '../../context';
import styles from './styles';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
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
          if (error)
            return <CustomText>{`Error! ${error.message}`}</CustomText>;

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

export default SessionContainer;
