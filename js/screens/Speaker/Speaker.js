import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView
} from 'react-native';
import Text from '../../components/MyAppText.js';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

// (Stateless) Markup only
const Speaker = ({ data, navigation }) => {
  // console.log(data);
  onPress = () => {
    console.log(data);
  };

  return (
    <View style={styles.modalWrapper}>
      <View style={styles.titleWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()} title='X'>
          <Ionicons
            name='ios-close'
            size={40}
            color='#fff'
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
        <View style={styles.grow} />
        <Text style={styles.subtitle}>About the Speaker</Text>
        <View style={styles.grow} />
      </View>
      <ScrollView>
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
          <TouchableOpacity
            onPress={() => Linking.openURL(`${data.speaker.url}`)}
            title='Learn More on Wikipedia'
            accessibilityLabel='Learn more about this speaker on Wikipedia'
          >
            {/* <LinearGradient
              colors={['#8797d6', '#9963ea']}
              start={{ x: 1.0, y: 0.0 }}
              end={{ x: 0.0, y: 1.0 }}
              style={styles.linearGradient}
            >
              <Text style={styles.button}>Read More on Wikipedia</Text>
            </LinearGradient> */}
            <Button>Read More on Wikipedia</Button>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Speaker;
