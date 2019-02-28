import React from 'react';
import { View, Button, TouchableHighlight, Image, Linking } from 'react-native';
import Text from '../../components/MyAppText.js';
// import GradientButton from '../../components/Button.js';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import FaveButton from '../../components/FaveButton';

// (Stateless) Markup only
const Speaker = ({ data, navigation }) => {
  // console.log(data);
  onPress = () => {
    console.log(data);
  };

  return (
    <View style={styles.modalWrapper}>
      <View style={styles.titleWrapper}>
        <Button onPress={() => navigation.goBack()} title='X' />
        <Text style={styles.subtitle}>About the Speaker</Text>
      </View>
      <View style={styles.modal}>
        <View style={styles.center}>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60
            }}
            source={{ uri: data.speaker.image }}
          />
          <Text style={styles.heading}>{data.speaker.name}</Text>
        </View>
        <Text style={styles.paragraph}>{data.speaker.bio}</Text>
        <TouchableHighlight
          onPress={() => Linking.openURL(`${data.speaker.url}`)}
          title='Learn More on Wikipedia'
          accessibilityLabel='Learn more about this speaker on Wikipedia'
        >
          <LinearGradient
            colors={['#8797d6', '#9963ea']}
            start={{ x: 1.0, y: 0.0 }}
            end={{ x: 0.0, y: 1.0 }}
            style={styles.linearGradient}
          >
            <Text style={styles.button}>Read More on Wikipedia</Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Speaker;
