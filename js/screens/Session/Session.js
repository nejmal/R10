import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import moment from 'moment';
import { renderSeparator } from '../../lib/helpers/separator';
import Text from '../../components/MyAppText.js';
import styles from './styles';

// (Stateless) Markup only
const Session = ({ navigation, data }) => {
  // console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        <Text style={styles.subtitle}>{data.location}</Text>
      </View>
      <Text style={styles.heading}>{data.title}</Text>
      <Text style={[styles.subtitle, styles.red]}>
        {moment(data.startTime).format('LT')}
      </Text>
      <Text style={styles.paragraph}>{data.description}</Text>
      <Text style={styles.subtitle}>Presented by:</Text>
      <TouchableHighlight
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
    </View>
  );
};

export default Session;
