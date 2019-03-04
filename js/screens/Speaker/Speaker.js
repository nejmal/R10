import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  Platform
} from 'react-native';
import Text from '../../components/MyAppText';
import Button from '../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/styles';
import styles from './styles';

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
            color={colors.bgLight}
            style={styles.close}
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
                width: Platform.OS === 'ios' ? 120 : 100,
                height: Platform.OS === 'ios' ? 120 : 100,
                borderRadius: 60
              }}
              source={{ uri: data.speaker.image }}
            />
            <Text style={styles.h1}>{data.speaker.name}</Text>
          </View>
          <Text style={styles.paragraph}>{data.speaker.bio}</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${data.speaker.url}`)}
            title='Read More on Wikipedia'
            accessibilityLabel='Read more about the speaker on Wikipedia'
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
