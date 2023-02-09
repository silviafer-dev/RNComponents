/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, Text, View } from 'react-native';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
