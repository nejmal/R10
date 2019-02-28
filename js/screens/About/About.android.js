import React from 'react';
import { View, FlatList, Image, ScrollView } from 'react-native';
import Text from '../../components/MyAppText.js';
import { renderSeparator } from '../../lib/helpers/separator';
import styles from './styles';

// renderSeparator = () => {
//   return <View style={styles.separator} />;
// };

// (Stateless) Markup only
const About = props => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={[styles.center, styles.pb]}>
          <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
        <Text>----ANDROID-------</Text>
        <View style={styles.separator} />
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.heading}>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.heading}>Code of Conduct</Text>
        <FlatList
          data={props.data.allConducts}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.subheading}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={item => item.id + ''}
          style={styles.list}
        />
      </ScrollView>
    </View>
  );
};

export default About;
