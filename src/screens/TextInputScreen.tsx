import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const onChange = (value: string, field: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Text Input" />
      <TextInput
        style={stylesScreen.inputStyle}
        onChangeText={value => onChange(value, 'name')}
        placeholder="name"
        autoCapitalize="words"
      />

      <TextInput
        style={stylesScreen.inputStyle}
        onChangeText={value => onChange(value, 'email')}
        autoCorrect={false}
        placeholder="email"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={stylesScreen.inputStyle}
        onChangeText={value => onChange(value, 'phone')}
        placeholder="phone"
        keyboardType="number-pad"
      />
      <HeaderTitle title={JSON.stringify(form, null, 3)} />
    </View>
  );
};
const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
