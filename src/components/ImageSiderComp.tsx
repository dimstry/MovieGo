/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';

const ImageSliderComp = ({ImagesBanner}: any) => {
  return (
    <View>
      <ImageSlider
        data={
          [
            {
              img: ImagesBanner.imageUrl[0],
            },
            {
              img: ImagesBanner.imageUrl[1],
            },
          ] as any
        }
        closeIconColor="#fff"
        caroselImageStyle={{
          resizeMode: 'stretch',
        }}
        showIndicator={false}
      />
    </View>
  );
};

export default ImageSliderComp;
