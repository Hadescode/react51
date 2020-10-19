import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";
// import thư viện kết nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={50} />
          </td>
          <td>
              <button onClick={() =>{this.props.tangGiamSoLuong(spGioHang.maSP,true)}} className="btn btn-success">+</button>{spGioHang.soLuong}

              <button onClick={() =>{this.props.tangGiamSoLuong(spGioHang.maSP,false)}} className="btn btn-success">-</button>

          </td>
          <td>{spGioHang.soLuong}</td>
          <td>{spGioHang.giaBan}</td>
          <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sp</th>
            <th>Tên sp</th>
            <th>Hình Ảnh</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
          {this.renderGioHang()}
        </thead>
      </table>
    );
  }
}

//lấy state từ redux store biền thành props của component
//tham số state: Đại diện cho rootReducer

const mapStateToProps = (state) => {
  return {
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};

// Hàm Xóa Giỏ Hàng 
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      console.log(maSPClick);

      //Tạo ra action gửi lên reducer
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      // Dùng hàm dispatch lên reducer
      dispatch(action);
    },
    tangGiamSoLuong :(maSP,tangGiam) => {
        // Tạo ra action
        const action ={
            type: 'TANG_GIAM_SOLUONG',
            maSP,
            tangGiam
        }

        dispatch(action)
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); // kết nối giữa gioHangReduxComponent và redux store
