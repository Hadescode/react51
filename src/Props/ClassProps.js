import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>ClassProps</h3>
        <p>ten : {this.props.hoVaTen}</p>
        <p>lớp : {this.props.lopcuaT}</p>
      </div>
    );
  }
}
