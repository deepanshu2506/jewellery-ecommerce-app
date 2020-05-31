import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class WishListScreen extends React.Component {
  render() {
    console.log(this.props.wishlist);
    return (
      <View>
        <Text>Wish List screen</Text>
        {this.props.wishlist.map((item) => (
          <Text>{item._id}</Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ wishlist: state.wishList });

export default connect(mapStateToProps)(WishListScreen);
