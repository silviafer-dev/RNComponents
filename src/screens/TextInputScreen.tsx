import React, { useContext } from 'react';
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
import { ThemeContext } from '../context/themeContext/ThemeContext';
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
  const {
    theme: { colors, dividerColor },
  } = useContext(ThemeContext);

  return (
    //? KeyboardAvoidingView ya no es necesario, scrollView maneja bien el formulario
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Input" />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: dividerColor,
            }}
            onChangeText={value => onChange(value, 'name')}
            placeholder="name"
            autoCapitalize="words"
            placeholderTextColor={colors.notification}
          />

          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: dividerColor,
            }}
            onChangeText={value => onChange(value, 'email')}
            autoCorrect={false}
            placeholder="email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor={colors.notification}
          />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: dividerColor,
            }}
            onChangeText={value => onChange(value, 'phone')}
            placeholder="phone"
            keyboardType="number-pad"
            placeholderTextColor={colors.notification}
          />
          <View style={stylesScreen.switchRow}>
            <Text style={{ ...stylesScreen.switchText, color: colors.text }}>
              Subscribe
            </Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>

          <View style={{ height: 100 }} />
          <Text style={{ color: colors.text }}>
            {JSON.stringify(form, null, 4)}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};
const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
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
