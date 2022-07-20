import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {COLORS, SIZES} from '../constants';
export default function () {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor: COLORS.background,
      width: 0.5 * SIZES.width - 230,
      margin:0,
      height: 1500,
      borderRadius: 10,
      padding: 170,

      shadowColor: '#9e9898',
      elevation: 5,
    }}>
      <YoutubePlayer 
        height={200}
        play={playing}
        videoId={"ml6cT4AZdqI"}
        onChangeState={onStateChange}
        width={350}
      />
      <Button color="#817DC0" title={playing ? "pause" : "play"} onPress={togglePlaying} />

      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -400,
  },
  modalContainer: {
    padding: 20,
    backgroundColor: 'grey',
    width: '100%', // IMPORTANT if modal container has alignItems: 'center'
  },
});