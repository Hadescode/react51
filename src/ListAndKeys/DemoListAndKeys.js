import React, { Component } from "react";

export default class DemoListAndKeys extends Component {
  danhSachKhoaHoc = ["Node JS", "React JS", "VUE JS"];

  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      // map trả vế cái mảng, foreach không trả về gì hết
      return <li>{khoaHoc}</li>;
    });
  };

  render() {
    return (
      <div>
        <h2>LIST AND KEYS</h2>
        <h3>Danh Sách Khóa Học</h3>
        <ul>{this.danhSachKhoaHoc()}</ul>
        {/* //binding */}
      </div>
    );
  }
}
