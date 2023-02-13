import React, { useState } from 'react';
import { View, Switch, Platform } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />
      <Switch
        trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
        thumbColor={Platform.OS === 'android' ? '#8de4ff' : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
