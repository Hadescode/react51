import React, { Component } from 'react'

export default class SanPhamGHRedux extends Component {
    render() {
        return (
          <tr>
          <td>{this.props.spGioHang.maSP}</td>
          <td>{this.props.spGioHang.tenSP}</td>
          <td><img src="https://picsum.photos/50" /></td>
          <td>1</td>
          <td>1000</td>
          <td>1000</td>
          <td><button className="btn btn-danger">Xóa</button></td>
      </tr>   
        )
    }
}
