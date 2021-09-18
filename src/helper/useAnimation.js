import {useEffect, useState} from 'react';
import {Animated} from 'react-native';

export const setAnimation = ({Animation, key, output}) => ({
  [key]: Animation.interpolate({
    inputRange: [0, 1],
    outputRange: output,
  }),
});

const useAnimation = ({doAnimation, duration}) => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: doAnimation ? 1 : 0,
      duration,
    }).start();
  }, [doAnimation]);
  return animation;
};

export default useAnimation;
