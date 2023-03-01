import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
          backgroundColor: '#5856d6',
        }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
