import React, { Component } from "react";
import { connect } from "react-redux";
import {
  suaNguoiDungAction,
  xoaNguoiDungAction,
} from "../redux/actions/QuanLyNguoiDungAction";
import FromCompnent from "./FromCompnent";
import NewFromComponent from "./NewFromComponent";

class DanhSachNguoiDung extends Component {
  renderNguoiDung = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <th>{nguoiDung.maNguoiDung}</th>
          <th>{nguoiDung.tenNguoiDung}</th>
          <th>{nguoiDung.soDienThoai}</th>
          <th>{nguoiDung.email}</th>
          <th>
            <button
              className="btn btn-primary"
              onClick={() => {
                // tạo ra action từ Người dùng được click
                let action = suaNguoiDungAction(nguoiDung);
                //Dispatch action nguoiDungChinhSua lên reducer
                this.props.dispatch(action);
              }}
            >
              Sửa
            </button>
            ||
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                //Gọi hàm trong mapdispatchtoprops
                //hàm này khi sử dụng connect với redux sẽ tự có props này
                // let action ={
                //   type:'XOA_NGUOI_DUNG',
                //   maNguoiDung:nguoiDung.maNguoiDung
                // }
                this.props.dispatch(xoaNguoiDungAction(nguoiDung.maNguoiDung));
              }}
            >
              Xóa
            </button>
          </th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        {/* <FromCompnent /> */}
        <NewFromComponent/>
        <table className="table">
          <thead>
            <tr>
              <th>Mã người dùng</th>
              <th>Tên người dùng</th>
              <th>Số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.renderNguoiDung()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(DanhSachNguoiDung);
