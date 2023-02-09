import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={23} />
        <Text style={styles.itemText}>
          {menuItem.name} - {menuItem.icon}
        </Text>
        {/* spacer */}
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" color="gray" size={23} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    color: 'black',
  },
  itemText: {
    marginLeft: 19,
    color: 'black',
  },
});
