import React from 'react';
import { View, Image } from 'react-native';
import moment from 'moment';
import { renderSeparator } from '../../lib/helpers/separator';
import Text from '../../components/MyAppText.js';
import styles from './styles';

// (Stateless) Markup only
const Session = ({ navigation, data }) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        <Text style={styles.subtitle}>{data.location}</Text>
      </View>
      <Text style={styles.heading}>{data.title}</Text>
      <Text style={styles.header}>{moment(data.startTime).format('LT')}</Text>
      <Text style={styles.paragraph}>{data.description}</Text>
      <Text style={styles.subtitle}>Presented by:</Text>
      <View>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10
          }}
          source={{ uri: data.speaker.image }}
        />
        <Text>{data.speaker.name}</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default Session;
