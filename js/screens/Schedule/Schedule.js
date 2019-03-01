import React from 'react';
import { View, SectionList, TouchableHighlight } from 'react-native';
import Text from '../../components/MyAppText.js';
import moment from 'moment';
import { renderSeparator } from '../../lib/helpers/separator';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from '../../components/Icon';
import { colors } from '../../config/styles';
import styles from './styles';
import ConferenceSessions from '../../components/ConferenceSessions';

// (Stateless) Markup only
const Schedule = ({ navigation, data, faveIds }) => {
  // console.log(data);

  return (
    // <View style={styles.container}>
    //   <SectionList
    //     sections={data}
    //     renderSectionHeader={({ section: { title } }) => (
    //       <Text style={styles.header}>{moment(title).format('LT')}</Text>
    //     )}
    //     renderItem={({ item, index, section }) => (
    //       <TouchableHighlight
    //         underlayColor={colors.neutralLight}
    //         onPress={() => {
    //           if (!item.speaker) {
    //             navigation.navigate('');
    //           } else {
    //             navigation.navigate('Session', { sessionData: item });
    //           }
    //         }}
    //       >
    //         <View style={styles.section}>
    //           <Text style={[styles.subtitle, styles.black, styles.pb]}>
    //             {item.title}
    //           </Text>
    //           <View style={styles.locationWrapper}>
    //             <Text style={styles.location}>{item.location}</Text>
    //             {faveIds.includes(item.id) && (
    //               <Icon name='heart' size={16} color={colors.brandPrimary} />
    //             )}
    //           </View>
    //         </View>
    //       </TouchableHighlight>
    //     )}
    //     keyExtractor={(item, index) => item + index}
    //     ItemSeparatorComponent={renderSeparator}
    //   />
    // </View>
    <ConferenceSessions data={data} navigation={navigation} faveIds={faveIds} />
  );
};

export default Schedule;
