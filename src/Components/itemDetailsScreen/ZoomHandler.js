import React, { Component } from "react";
import { Animated, Dimensions } from "react-native";
import {} from "react-native-paper";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");

export default class ZoomHandler extends Component {
  scale = new Animated.Value(1);

  onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale: this.scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  onZoomStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };
  render() {
    return (
      <PinchGestureHandler
        onGestureEvent={this.onZoomEvent}
        onHandlerStateChange={this.onZoomStateChange}
      >
        <Animated.Image
          source={this.props.source}
          style={{
            width: "100%",
            height: "100%",
            transform: [{ scale: this.scale }],
          }}
          resizeMode="contain"
        />
      </PinchGestureHandler>
    );
  }
}
