import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const { top } = useSafeAreaInsets(); // add space on top in IOS

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setData('Hola mundo');
      console.log('Terminado');
    }, 3500);
  };
  return (
    <ScrollView
      style={{
        marginTop: isRefreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          progressViewOffset={150} //works in android and ios
          progressBackgroundColor="lightblue" //background spinner android
          colors={['white', 'red', 'orange']} // spinner colors android
          style={{ backgroundColor: 'lightblue' }} //ios
          tintColor="white" // ios
          title="Refreshing" //ios
          titleColor="black" //ios
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
