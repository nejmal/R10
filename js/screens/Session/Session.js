import React from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Text from '../../components/MyAppText';
import Icon from '../../components/Icon';
import FaveButton from '../../components/Button';
import { colors } from '../../config/styles';
import styles from './styles';

const Session = ({ navigation, data, faveIds, setFaveId, removeFaveId }) => {
  const faveSession = faveIds.find(fave => fave === data.id);

  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        <Text style={[styles.subtitle, styles.pt0]}>{data.location}</Text>
        {faveIds.includes(data.id) && (
          <Icon
            name='heart'
            size={18}
            style={styles.heart}
            color={colors.brandPrimary}
          />
        )}
      </View>
      <Text style={styles.h1}>{data.title}</Text>
      <Text style={[styles.subtitle, styles.red]}>
        {moment(data.startTime).format('LT')}
      </Text>
      <Text style={styles.paragraph}>{data.description}</Text>
      <Text style={[styles.subtitle, styles.pt1, styles.pb0]}>
        Presented by:
      </Text>
      <TouchableHighlight
        underlayColor='#e6e6e6'
        onPress={() => navigation.navigate('Speaker', { speakerData: data })}
      >
        <View style={styles.speaker}>
          <Image
            style={{
              width: Platform.OS === 'ios' ? 60 : 50,
              height: Platform.OS === 'ios' ? 60 : 50,
              borderRadius: 30,
              marginRight: 10
            }}
            source={{ uri: data.speaker.image }}
          />
          <Text style={[styles.subtitle, styles.speakerName]}>
            {data.speaker.name}
          </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.separator} />

      <TouchableOpacity
        onPress={() => {
          if (faveSession) {
            removeFaveId(data.id);
          } else {
            setFaveId(data.id);
          }
        }}
      >
        <FaveButton>
          {faveSession ? 'Remove from Faves' : 'Add to Faves'}
        </FaveButton>
      </TouchableOpacity>
    </View>
  );
};

Session.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    speaker: PropTypes.objectOf(PropTypes.string).isRequired
  }),
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired,
  setFaveId: PropTypes.func.isRequired,
  removeFaveId: PropTypes.func.isRequired
};

export default Session;
