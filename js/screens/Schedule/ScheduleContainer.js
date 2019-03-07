import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import CustomText from '../../components/CustomText';
import Schedule from './Schedule';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FavesContext from '../../context';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import styles from './styles';

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

          return (
            <FavesContext.Consumer>
              {({ faveIds, setFaveId, removeFaveId }) => (
                <Schedule
                  data={formatSessionData(data.allSessions)}
                  navigation={this.props.navigation}
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

export default ScheduleContainer;
