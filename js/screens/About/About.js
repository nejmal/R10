import React, { Component } from 'react';
import {
  View,
  FlatList,
  Image,
  ScrollView,
  Platform,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';
import Text from '../../components/MyAppText.js';
import { renderSeparator } from '../../lib/helpers/separator';
import Icon from '../../components/Icon';
import { colors } from '../../config/styles';
import styles from './styles';

class CodeOfConduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  toggleConduct = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    const { item } = this.props;
    return (
      <View>
        <TouchableHighlight onPress={() => this.toggleConduct()}>
          <Text style={styles.subheading}>
            <Icon
              name={this.state.collapse ? 'remove' : 'add'}
              size={18}
              style={styles.heart}
              color={colors.brandSecondary}
            />
            {item.title}
          </Text>
        </TouchableHighlight>
        {this.state.collapse ? (
          <View>
            <Text>{item.description}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

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
        <Text style={styles.heading}>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.heading}>Code of Conduct</Text>
        <FlatList
          data={data.allConducts}
          renderItem={({ item }) => (
            // <View>
            //   <TouchableHighlight onPress={() => this.toggleConduct()}>
            //     <Text style={styles.subheading}>{item.title}</Text>
            //   </TouchableHighlight>
            //   {this.state.collapse ? (
            //     <View>
            //       <Text>{item.description}</Text>
            //     </View>
            //   ) : null}
            // </View>
            <CodeOfConduct item={item} />
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
