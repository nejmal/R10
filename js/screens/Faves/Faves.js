import React from 'react';
import { View, SectionList, TouchableHighlight } from 'react-native';
import Text from '../../components/MyAppText.js';
import moment from 'moment';
import { renderSeparator } from '../../lib/helpers/separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/styles';
import styles from './styles';

const Faves = ({ navigation, data, faveIds }) => {
  console.log('DATA', data);
  console.log('faveIds', faveIds);

  // const faveSessions = faveIds.length;
  const faveSessions = data.filter(fave => fave === data.id);
  console.log('faveSessions', faveSessions);
  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({ item, index, section }) => (
          // make sure to add an if stmt in touchablehighlight for when there is no speaker
          <TouchableHighlight
            underlayColor={colors.neutralLight}
            onPress={
              () => {
                // if (!data.speaker == null) {
                navigation.navigate('Session', { sessionData: item });
                // }
              }
              // navigation.navigate('Session', { sessionData: item })
            }
          >
            <View style={styles.section}>
              <Text style={[styles.subtitle, styles.black, styles.pb]}>
                {item.title}
              </Text>
              <View style={styles.locationWrapper}>
                <Text style={styles.location}>{item.location}</Text>
                {faveIds.includes(item.id) && (
                  <Ionicons
                    name='ios-heart'
                    size={16}
                    color={colors.brandPrimary}
                  />
                )}
              </View>
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

export default Faves;
