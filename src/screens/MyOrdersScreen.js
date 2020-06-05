import React, { Component } from "react";
import { View, FlatList, SectionList } from "react-native";
import { Surface, Text } from "react-native-paper";
import OrderItem from "../Components/OrderScreen/OrderItem";
import { getAllOrdersApi } from "../resources/endpoints";
import { connect } from "react-redux";
import _ from "lodash";
import Loader from "../Components/utility/LoaderDialog";

const DELIVERED = "Delivered";

class MyOrdersScreen extends Component {
  state = { orders: [], error: false, loading: true };
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        Authorization: this.props.authToken,
        "Content-type": "application/json",
      },
    };
    fetch(getAllOrdersApi, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 1) {
          this._segregateOrders(res.data);
          this.setState({ loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
      })
      .catch((err) => this.setState({ error: true, loading: false }));
  }

  _segregateOrders = (orders) => {
    let sections = [
      { title: "Current Orders", data: [] },
      { title: "Past Orders", data: [] },
    ];
    orders.forEach((order) => {
      if (order.status == DELIVERED) {
        sections[1].data = [...sections[1].data, order];
      } else {
        sections[0].data = [...sections[0].data, order];
      }
    });
    this.setState({ orders: sections });
  };
  getCurrentOrders = () => {
    return _.filter(this.state.orders, (order) => order.status != REJECTED);
  };
  renderOrders = ({ item }) => <OrderItem item={item} />;

  render() {
    return (
      <View style={{ flex: 1, padding: 5, paddingHorizontal: 10 }}>
        {this.state.loading ? (
          <Loader visible={this.state.loading} />
        ) : (
          <SectionList
            sections={this.state.orders}
            renderItem={this.renderOrders}
            renderSectionHeader={({ section }) => (
              <Text style={{ fontSize: 20, marginVertical: 10 }}>
                {section.title}
              </Text>
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({ authToken: state.user.token });
export default connect(mapStateToProps)(MyOrdersScreen);
