import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return <Text style={styles.textItem}>{item}</Text>;
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => (item + index).toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
    color: 'black',
  },
});
