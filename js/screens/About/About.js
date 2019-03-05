import React from 'react';
import { View, FlatList, Image, ScrollView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../components/Text';
import CodeOfConduct from '../../components/CodeOfConduct';
import styles from './styles';

const About = props => {
  const { data } = props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={[styles.center, styles.pb]}>
          <Image
            style={{
              width: Platform.OS === 'ios' ? 250 : 200,
              height: Platform.OS === 'ios' ? 55 : 45
            }}
            resizeMode='contain'
            source={require('../../assets/images/r10_logo2x.png')}
          />
        </View>

        <View style={styles.hr} />
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.h2}>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.h2}>Code of Conduct</Text>
        <FlatList
          data={data.allConducts}
          renderItem={({ item }) => <CodeOfConduct item={item} />}
          keyExtractor={item => item.id + ''}
          style={styles.list}
        />
        <View style={styles.hr} />
        <Text>&copy; RED Academy 2019</Text>
      </ScrollView>
    </View>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    allConducts: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

export default About;
