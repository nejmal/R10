import React from 'react';
import { View, FlatList, Image, ScrollView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '../../components/CustomText';
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
        <CustomText>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </CustomText>
        <CustomText style={styles.h2}>Date & Venue</CustomText>
        <CustomText>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </CustomText>
        <CustomText style={styles.h2}>Code of Conduct</CustomText>
        <FlatList
          data={data.allConducts}
          renderItem={({ item }) => <CodeOfConduct item={item} />}
          keyExtractor={item => item.id + ''}
          style={styles.list}
        />
        <View style={styles.hr} />
        <CustomText>&copy; RED Academy 2019</CustomText>
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
