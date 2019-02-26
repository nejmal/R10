import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: '#CED0CE',
        marginTop: 10,
        marginBottom: 10
      }}
    />
  );
};

// (Stateless) Markup only
const About = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data.allConducts}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            {/* <Image
              style={{
                width: 30,
                height: 30,
                marginLeft: 10,
                marginRight: 10
              }}
              source={{ uri: item.avatar }}
            /> */}
            <Text>{item.title}</Text>
            {/* <ListItem
                //   title={`${item.first_name} ${item.last_name}`}
                //   subtitle={item.email}
                //   avatar={{ uri: item.avatar }}
                // /> */}
          </View>
        )}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={item => item.id + ''}
        style={styles.list}
      />
    </View>
  );
};

export default About;
