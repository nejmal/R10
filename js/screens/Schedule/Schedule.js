import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: '#CED0CE',
        // marginTop: 10,
        // marginBottom: 10
        marginVertical: 10
      }}
    />
  );
};

// (Stateless) Markup only
const Schedule = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data.allConducts}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={item => item.id + ''}
        style={styles.list}
      />
    </View>
  );
};

export default Schedule;
