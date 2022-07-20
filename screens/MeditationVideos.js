import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
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
    <View style={{
      backgroundColor: COLORS.black,
      width: 0 * SIZES.width - 230,
      margin:0,
      height: 1000,
      borderRadius: 10,
      padding: 30,
      shadowColor: '#9e9898',
      elevation: 5,
    }}>
      <YoutubePlayer
        height={220}
        play={playing}
        videoId={"O-6f5wQXSu8"}
        onChangeState={onStateChange}
      />
      
      <Button color="#817DC0" title={playing ? "pause" : "play"} onPress={togglePlaying} />
 
      
    </View>
  );
}