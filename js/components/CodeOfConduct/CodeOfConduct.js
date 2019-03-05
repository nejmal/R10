import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  LayoutAnimation,
  Animated,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import { colors } from '../../config/styles';
import styles from './styles';

class CodeOfConduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      rotateValue: new Animated.Value(0.03)
    };
  }

  toggleConduct = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      collapse: !this.state.collapse,
      rotateValue: this.state.rotateValue
    });
  };

  animateIcon = () => {
    this.state.rotateValue.setValue(0);

    Animated.timing(this.state.rotateValue, {
      toValue: 360,
      duration: 300
    }).start();
  };

  onPress = () => {
    this.animateIcon();
    this.toggleConduct();
  };

  render() {
    const { item } = this.props;
    const { rotateValue } = this.state;
    const spin = rotateValue.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    });

    const plusAnimatedStyles = { transform: [{ rotate: spin }] };

    return (
      <View>
        <TouchableHighlight
          underlayColor={colors.neutralLight}
          onPress={() => this.onPress()}
        >
          <View style={styles.conduct}>
            <Animated.View style={plusAnimatedStyles}>
              <Icon
                name={this.state.collapse ? 'remove' : 'add'}
                size={Platform.OS === 'ios' ? 18 : 12}
                color={colors.brandSecondary}
              />
            </Animated.View>
            <Text style={styles.subheading}>{item.title}</Text>
          </View>
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

CodeOfConduct.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default CodeOfConduct;
