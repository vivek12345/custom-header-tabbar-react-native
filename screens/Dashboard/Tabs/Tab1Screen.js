import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

class Tab1Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Tab 1 Screen</Text>
        <Button
            raised
            onPress={() => this.props.navigation.navigate("Tab1Details",{ hideTabBar: true })}
          >
            <Text>Go to details screen</Text>
        </Button>
      </View>
    );
  }
}

export default Tab1Screen;
