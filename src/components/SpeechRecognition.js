import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  console.log(transcript);

  
  return (
    <div>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={resetTranscript}>Speak</button>
      <span>{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;
const options = {
  autoStart: false
}

export default SpeechRecognition(options)(Dictaphone);