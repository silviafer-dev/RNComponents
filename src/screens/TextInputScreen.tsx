import React, { useState } from 'react';
import {
  // KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
// import { Platform } from 'react-native';

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
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Input" />
          <TextInput
            style={stylesScreen.inputStyle}
            onChangeText={value => onChange(value, 'name')}
            placeholder="name"
            autoCapitalize="words"
          />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <HeaderTitle title={JSON.stringify(form, null, 3)} />
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
          <View style={{ height: 100 }} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
    // </KeyboardAvoidingView>
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
