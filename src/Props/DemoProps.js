import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "Phạm Duy Nhân",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>DemoProps Đi Phỏng Vấn</h2>
        <FunctionProps
          // Cách Truyền props trong Reactjs
          hoVaTen={this.state.ten}
          lopcuaT={this.state.lop}
        />
        <ClassProps
          // Cách truyền props trong reactjs
          hoVaTen={this.state.ten}
          lopcuaT={this.state.lop}
        />
      </div>
    );
  }
}
