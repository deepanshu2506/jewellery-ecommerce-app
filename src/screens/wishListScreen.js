import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import WishListItem from "../Components/WishListScreen/WishListItem";
import { FlatList } from "react-native-gesture-handler";
import EmptyWishList from "../Components/WishListScreen/EmptyWishList";

class WishListScreen extends React.Component {
  renderWishListItem = ({ item }) => <WishListItem item={item} />;
  render() {
    return (
      <View style={{ flex: 1, width: "100%", paddingHorizontal: 10 }}>
        {this.props.wishlist.length != 0 ? (
          <FlatList
            data={this.props.wishlist}
            renderItem={this.renderWishListItem}
            keyExtractor={(item) => item._id}
          />
        ) : (
          <EmptyWishList />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ wishlist: state.wishList });

export default connect(mapStateToProps)(WishListScreen);
