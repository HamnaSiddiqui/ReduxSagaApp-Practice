import {PermissionsAndroid, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const requestImagePickerPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'External Read Permission',
          message: 'App needs Read permission',
          buttonNegative: 'Cancel',
          buttonPositive: 'Ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission granted!');
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        console.log('Permission denied part 1');
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log('Permission denied!');
    return true;
  }
};

export default async function openImagePicker(setSelectedImage) {
  let pickerPermitted = await requestImagePickerPermission();
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };
  if (pickerPermitted) {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log(
          'User cancelled the image picker option that just appeared!',
        );
      } else if (response.error) {
        console.log('Image picker error has occured: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  }
}
