import React from 'react';
import { View, Button, TouchableHighlight, Image } from 'react-native';
import Text from '../../components/MyAppText.js';
// import GradientButton from '../../components/Button.js';
import styles from './styles';

// (Stateless) Markup only
const Speaker = ({ data, navigation }) => {
  console.log(data);
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

        <View>
          {/* <GradientButton /> */}
          {/* <TouchableHighlight>Read More on Wikipedia</TouchableHighlight> */}
        </View>
      </View>
    </View>
  );
};

export default Speaker;
