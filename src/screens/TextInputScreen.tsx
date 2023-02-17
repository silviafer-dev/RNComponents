import React from 'react';
import {
  // KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';

import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';
// import { Platform, Text, Button } from 'react-native';

export const TextInputScreen = () => {
  const { onChange, form, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    //? KeyboardAvoidingView ya no es necesario, scrollView maneja bien el formulario
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
          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}> Subscribe</Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>

          <View style={{ height: 100 }} />
          <Text>{JSON.stringify(form, null, 4)}</Text>
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
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
