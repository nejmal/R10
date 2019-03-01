import React, { Component } from 'react';
import {
  View,
  FlatList,
  Image,
  ScrollView,
  Platform,
  TouchableHighlight,
  LayoutAnimation,
  Animated
} from 'react-native';
import Text from '../../components/MyAppText.js';
import Icon from '../../components/Icon';
import CodeOfConduct from '../../components/CodeOfConduct';
import { colors } from '../../config/styles';
import styles from './styles';

// class CodeOfConduct extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapse: false,
//       rotateValue: new Animated.Value()
//     };
//   }

//   toggleConduct = () => {
//     LayoutAnimation.easeInEaseOut();
//     this.setState({
//       collapse: !this.state.collapse,
//       rotateValue: this.state.rotateValue
//     });
//   };

//   animateIcon = () => {
//     this.state.rotateValue.setValue(0);

//     Animated.timing(this.state.rotateValue, {
//       toValue: 360,
//       duration: 300
//     }).start();
//   };

//   onPress = () => {
//     this.animateIcon();
//     this.toggleConduct();
//   };

//   render() {
//     const { item } = this.props;
//     const { rotateValue } = this.state;
//     const spin = rotateValue.interpolate({
//       inputRange: [0, 360],
//       outputRange: ['0deg', '360deg']
//     });

//     const plusAnimatedStyles = { transform: [{ rotate: spin }] };

//     return (
//       <View>
//         <TouchableHighlight
//           underlayColor={colors.neutralLight}
//           onPress={() => this.onPress()}
//         >
//           <View style={styles.conduct}>
//             <Animated.View style={plusAnimatedStyles}>
//               <Icon
//                 name={this.state.collapse ? 'remove' : 'add'}
//                 size={18}
//                 // style={{ marginRight: 10 }}
//                 color={colors.brandSecondary}
//               />
//             </Animated.View>
//             <Text style={styles.subheading}>{item.title}</Text>
//           </View>
//         </TouchableHighlight>
//         {this.state.collapse ? (
//           <View>
//             <Text style={styles.paragraph}>{item.description}</Text>
//           </View>
//         ) : null}
//       </View>
//     );
//   }
// }

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
        <Text style={styles.h2}>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.h2}>Code of Conduct</Text>
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
          keyExtractor={item => item.id + ''}
          style={styles.list}
        />
        <View style={styles.hr} />
        <Text>&copy; RED Academy 2019</Text>
      </ScrollView>
    </View>
  );
};

export default About;
