import React, { useState } from 'react';
import {
  View,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>; // es un Objecto, mas expecifico un StyleProp, mirando el tipo de cualquier style dará ese tipado
}

// pasamos también el Style como props y la expandimos en la linea 33, en InfiniteScrollScreen damos los valores en FadeInImage

export const FadeInImage = ({ uri, style = {} }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color="#5856D6"
          size={30}
        />
      )}

      <Animated.Image
        source={{ uri }}
        onLoadEnd={finishLoading}
        style={{ ...(style as any), opacity }}
      />
    </View>
  );
};
