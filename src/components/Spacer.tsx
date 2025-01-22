import React from 'react';
import {FlexStyle, StyleSheet, View} from 'react-native';

interface SpacerProps {
  height?: number | `${number}%`;
  width?: number | `${number}%`;
}

const Spacer: React.FC<SpacerProps> = ({height = 0, width = '100%'}) => {
  return (
    <View
      style={[
        styles.spacer,
        {
          height: height as FlexStyle['height'],
          width: width as FlexStyle['width'],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  spacer: {
    height: 0,
    width: 0,
  },
});

export default Spacer;
