import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import CustomText from '../../components/CustomText';
import Speaker from './Speaker';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Speaker'
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

          const speakerData = this.props.navigation.getParam('speakerData');
          return <Speaker data={speakerData} navigation={navigation} />;
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;
