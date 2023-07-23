import { View, Text, Button } from "react-native";
import React from "react";
import * as Speech from "expo-speech";
import Voice, { SpeechResultsEvent } from "@react-native-voice/voice";

export default function Cuestionarios() {
  const [result, setResult] = React.useState<string>("");
  const [error, setError] = React.useState<SpeechResultsEvent>();
  const [isListening, setIsListening] = React.useState(false);

  Voice.onSpeechStart = () => {
    setIsListening(true);
  };
  Voice.onSpeechEnd = () => {
    setIsListening(false);
  };
  Voice.onSpeechResults = (result) => {
    setResult(result?.value[0]);
  };
  Voice.onSpeechError = (e) => {
    setError(e.error);
  };

  const startListening = async () => {
    try {
      await Voice.start("es-ES");
      console.log("start listening");
    } catch (e) {
      setError(e);
      console.log("error", e);
    }
  };

  const stopListening = async () => {
    console.log("stop listening");
    try {
      await Voice.stop();
    } catch (e) {
      setError(e);
    }
  };

  const speak = () => {
    const thingToSay = "hola Izzat";
    Speech.speak(thingToSay, { language: "es" });
  };
  return (
    <View>
      <Button title="Press to hear some words" onPress={speak} />
      <Button title="Press to speech some words" onPress={startListening} />
      <Text>{`resultado: ${result}`}</Text>
      <Button title="stop recording" onPress={stopListening} />
    </View>
  );
}
