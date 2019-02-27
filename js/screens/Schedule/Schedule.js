import React from 'react';
import { View, Text, SectionList, TouchableHighlight } from 'react-native';
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
              navigation.navigate('Session', { title: item.title })
            }
          >
            <View style={styles.section}>
              <Text style={styles.title}>{item.title}</Text>
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
