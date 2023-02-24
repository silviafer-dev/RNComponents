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
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* Contenido del Modal */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              width: 250,
              height: 250,
              alignItems: 'center',
              justifyContent: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              opacity: 10,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
              Modal
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                color: 'black',
                marginBottom: 20,
              }}>
              Cuerpo del modal
            </Text>

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
