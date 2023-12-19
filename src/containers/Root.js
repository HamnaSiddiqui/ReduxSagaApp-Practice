import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useState} from 'react';
import Counter from '../containers/counter';
import openImagePicker from '../containers/imagePicker';
import handleCameraLaunch from './CameraPicker';

export const Root = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCameraImage, setSelectedCameraImage] = useState(null);

  return (
    <View styles={styles.container}>
      <Counter />
      <View>
        <TouchableOpacity
          onPress={() => handleCameraLaunch(setSelectedCameraImage)}>
          <Text style={{color: 'white'}}>Camera Opener</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openImagePicker(setSelectedImage)}>
          <Text style={{color: 'white'}}>Image Picker</Text>
        </TouchableOpacity>
      </View>
      <View>
        {!selectedImage ? (
          <Image
            source={{uri: selectedCameraImage}}
            style={{width: '70%', height: '70%'}}
          />
        ) : (
          <Image
            source={{uri: selectedImage}}
            style={{width: '70%', height: '70%'}}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '50%',
    height: '50%',
  },
});
