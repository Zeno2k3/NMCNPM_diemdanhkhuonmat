import React, { useEffect } from "react"
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { Alert, StyleSheet, View } from "react-native";
const DiemDanhScreen = () => {
  useEffect(() => {
    const requestCameraPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();

      if (cameraPermission !== "granted" || microphonePermission !== "granted") {
        Alert.alert('Quyền bị từ chối', 'Ứng dụng cần quyền để sử dụng camera.');
      }
    };
    requestCameraPermission();
  }, []);

  const device = useCameraDevice('front')  
  const { hasPermission, requestPermission } = useCameraPermission()

  if (!hasPermission) return <></>
  if (device == null) return <></>
  return (
    <>
      <View style = {{
        flex: 1,
      }}>
        <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
    </>
  )
}

export default DiemDanhScreen