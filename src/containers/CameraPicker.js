import {PermissionsAndroid, Platform} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    console.log('Its working here fine!!!!!');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera ',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('PRoblem!! ', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  } else {
    console.log('Not working!!!!!');

    return true;
  }
};

export default async function handleCameraLaunch(setSelectedImage) {
  let isCameraPermitted = await requestCameraPermission();
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  if (isCameraPermitted) {
    launchCamera(options, response => {
      console.log('Response: ', response);

      if (response.didCancel) {
        console.log('USer cancelled Camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log('imageUri: ', imageUri);
      }
    });
  }
}
