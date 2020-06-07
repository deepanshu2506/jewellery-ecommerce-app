import React from "react";
import { View, Dimensions, Animated, Text } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import { Provider, Portal, Modal } from "react-native-paper";

const { width } = Dimensions.get("window");

class ImageViewer extends React.Component {
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
    console.log(this.props.visible);
    return (
      <Provider>
        <Portal>
          <Modal visible={this.props.visible}>
            <Text>hello</Text>
            {/* <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            > */}
            <PinchGestureHandler
              onGestureEvent={this.onZoomEvent}
              onHandlerStateChange={this.onZoomStateChange}
            >
              <Animated.Image
                source={{
                  uri: this.props.image,
                }}
                style={{
                  width: width,
                  height: 300,
                  transform: [{ scale: this.scale }],
                }}
                resizeMode="contain"
              />
            </PinchGestureHandler>
            {/* </View> */}
          </Modal>
        </Portal>
      </Provider>
    );
  }
}

export default ImageViewer;
