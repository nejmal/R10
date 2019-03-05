import React from 'react';
import { View, SectionList, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../components/Text';
import moment from 'moment';
import { renderSeparator } from '../../lib/helpers/separator';
import Icon from '../../components/Icon';
import { colors } from '../../config/styles';
import styles from './styles';

const ConferenceSessions = ({ data, navigation, faveIds }) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{moment(title).format('LT')}</Text>
        )}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={colors.neutralLight}
            onPress={() => {
              if (!item.speaker) {
                navigation.navigate('');
              } else {
                navigation.navigate('Session', { sessionData: item });
              }
            }}
          >
            <View style={styles.section}>
              <Text style={[styles.subtitle, styles.greyAblackI, styles.pb]}>
                {item.title}
              </Text>
              <View style={styles.locationWrapper}>
                <Text style={styles.location}>{item.location}</Text>
                {faveIds.includes(item.id) && (
                  <Icon name='heart' size={16} color={colors.brandPrimary} />
                )}
              </View>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

ConferenceSessions.propTypes = {
  item: PropTypes.shape({
    speaker: PropTypes.objectOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default ConferenceSessions;
