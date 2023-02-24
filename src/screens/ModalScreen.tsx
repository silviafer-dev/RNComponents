import React from 'react';
import { View, Text, Modal, Button } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      {/* <Pressable onPress={() => setIsVisible(true)}>
        <Text>Open </Text>
      </Pressable> */}
      <Button title="Open Modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        {/* Background del modal */}
        <View
          style={{
            flex: 1,
            // width: 100,
            // height: 100,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* Contenido del Modal */}
          <View
            style={{
              backgroundColor: 'white',
              width: 250,
              height: 150,
            }}>
            <Text style={{ textAlign: 'center' }}>
              <HeaderTitle title="Modal" />
            </Text>
            <Text style={{ textAlign: 'center' }}>Cuerpo del modal</Text>
            <View style={{ flex: 1 }} />
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
            {/* <Pressable onPress={() => setIsVisible(false)}>
              <Text>Close</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};
