import React, { Component } from "react";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { xoaNguoiDungAction } from "../redux/actions/QuanLyNguoiDungAction";

class NewFromCompnent extends Component {
  handleChangeInput = (event) => {
    //Lấy ra name và value
    // let name =event.target.name;
    // let value =event.target.value;
    let { name, value } = event.target;
    //lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");

    // console.log(types)
    // xử lý value
    let newValues = { ...this.props.stateFrom.value }; //Tạo ra value mới giá trị = value cũ
    newValues[name] = value; // Thay đối giá trị bên trong values

    //xứ lý error
    let newErrors = { ...this.props.stateFrom.errors };
    newErrors[name] = value.trim() === "" ? "Đừng hiếp em" : "";

    //Validation các trường hợp đặt biệt
    if (types === "phoneNumber") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số!";
      }
    }

    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Email không hợp lệ";
      }
    }

    // this.setState(
    //   {
    //     value: newValues, // Gán Values =value mối
    //     errors: newErrors,
    //   },
    //   () => {
    //     console.log(this.props.stateFrom);
    //   }
    // );

    let action ={
        type:'HANDLE_CHANGE_INPUT',newState:{
            value:newValues, //gán value = value mới
            errors:newErrors
        }
    }

    //Gứi lên reducer stateFrom mới
    this.props.dispatch(action);
  };

  render() {
    //Lấy giá trị từ QuanLyNguoiDungReducer.nguoiDungChinhSua

    let { maNguoiDung, tenNguoiDung, soDienThoai, email } = this.props.stateFrom.value;

    return (
      <form
        className="card"
        onSubmit={(event) => {
          // cản sự kiện submit lại trang của browser
          event.preventDefault();

          let valid = true;
          //Duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for (let tenThuocTinh in this.props.stateFrom.value) {
            if (this.props.stateFrom.value[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          for (let tenThuocTinh in this.props.stateFrom.errors) {
            if (this.props.stateFrom.errors[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }
          console.log(123);
          if (!valid) {
            //   alert('Dử liệu không hợp lệ!');
            Swal.fire({
              title: "Error!",
              text: "Do you want to continue",
              icon: "error",
              confirmButtonText: "Cool",
            });
            return; // chặn sự kien submit
          }

          console.log("submit");
          let action ={
              type:'THEM_NGUOI_DUNG',
              nguoiDung:this.props.stateFrom.value
          }
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span>THÔNG TIN NGƯỜI DÙNG</span>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <span>Mã người dùng</span>
                <input
                  value={maNguoiDung}
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.props.stateFrom.errors.maNguoiDung}</p>
              </div>

              <div className="form-group">
                <span>Tên người dùng</span>
                <input
                  value={tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.props.stateFrom.errors.tenNguoiDung}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <span>Số điện thoại</span>
                <input
                  types="phoneNumber"
                  value={soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.props.stateFrom.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  types="email"
                  value={email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.props.stateFrom.errors.email}</p>
              </div>
            </div>
            <div className="col-12 text-right">
              <button className="btn btn-success">Thêm Người Dùng</button>
            </div>

            <button type="button" className="btn btn-primary" onClick={() =>{
                let action ={
                    type:'CAP_NHAT_THONG_TIN',
                    nguoiDungCapNhat:this.props.stateFrom.value
                }
                this.props.dispatch(action);
            }}>Cập nhật thông tin</button>

            <div className="col-12">
              <input
                name="maNguoiDungxXoa"
                placeholder="nhập vào mã người dùng cần xóa"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    maNguoiDungXoa: e.target.value,
                  });
                }}
              ></input>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  //dispatch mã người dùng lên reducer XOA_NGUOI_DUNG
                  let action = xoaNguoiDungAction(this.props.stateFrom.maNguoiDungXoa);
                  this.props.dispatch(action);
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua,
    stateFrom: state.QuanLyNguoiDungReducer.stateFrom, 
    //lấy state from từ redux về => binding lên hàm render
  };
};

export default connect(mapStateToProps)(NewFromCompnent);
