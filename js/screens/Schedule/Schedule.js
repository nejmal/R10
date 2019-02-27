import React from 'react';
import { View, SectionList, TouchableHighlight } from 'react-native';
import Text from '../../components/MyAppText.js';
import moment from 'moment';
import { renderSeparator } from '../../lib/helpers/separator';
import styles from './styles';

// (Stateless) Markup only
const Schedule = ({ navigation, data }) => {
  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({ item, index, section }) => (
          <TouchableHighlight
            onPress={() =>
              navigation.navigate('Session', { sessionData: item })
            }
          >
            <View style={styles.section}>
              <Text style={[styles.subtitle, styles.black, styles.pb]}>
                {item.title}
              </Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{moment(title).format('LT')}</Text>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default Schedule;
