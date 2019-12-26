// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  changeBitrate = () => {
    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        bitrate: 12
      }
    }));

  };

  changeResolution = () => {
    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        video: {
          ...prevState.settings.video,
          resolution: "720p"
        }
      }
    }));
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate} >Bitrate</button> <br></br>
        <button className="resolution" onClick={this.changeResolution}>Resolution</button>
      </div>
    );
  }
}
