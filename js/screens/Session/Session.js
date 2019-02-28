import React from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { renderSeparator } from '../../lib/helpers/separator';
import Text from '../../components/MyAppText.js';
import FavesContext from '../../context';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FaveButton from '../../components/Button';
import { colors } from '../../config/styles';
import styles from './styles';

// (Stateless) Markup only
const Session = ({ navigation, data, faveIds, setFaveId, removeFaveId }) => {
  const faveSession = faveIds.find(fave => fave === data.id);
  // console.log('DATA--------------', data);
  // console.log('faveSession', faveSession);

  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        <Text style={styles.subtitle}>{data.location}</Text>
        {faveIds.includes(data.id) && (
          <Ionicons
            name='ios-heart'
            size={18}
            style={{ paddingVertical: 8 }}
            color={colors.brandPrimary}
          />
        )}
      </View>
      <Text style={styles.heading}>{data.title}</Text>
      <Text style={[styles.subtitle, styles.red]}>
        {moment(data.startTime).format('LT')}
      </Text>
      <Text style={styles.paragraph}>{data.description}</Text>
      <Text style={styles.subtitle}>Presented by:</Text>
      <TouchableHighlight
        underlayColor='#e6e6e6'
        onPress={() => navigation.navigate('Speaker', { speakerData: data })}
      >
        <View style={styles.speaker}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginRight: 10
            }}
            source={{ uri: data.speaker.image }}
          />
          <Text style={[styles.subtitle, styles.black]}>
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
        {/* <LinearGradient
          colors={['#8797d6', '#9963ea']}
          start={{ x: 1.0, y: 0.0 }}
          end={{ x: 0.0, y: 1.0 }}
          style={styles.linearGradient}
        >
          <Text style={styles.button}>
            {faveSession ? 'Remove from Faves' : 'Add to Faves'}
          </Text>
        </LinearGradient> */}
        <FaveButton>
          {faveSession ? 'Remove from Faves' : 'Add to Faves'}
        </FaveButton>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
