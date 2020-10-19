import React, { Component } from "react";
import Swal from 'sweetalert2';

export default class FromCompnent extends Component {
  state = {
    value: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors:{
        maNguoiDung: "",
        tenNguoiDung: "",
        soDienThoai: "",
        email: "",
    }
  };

  handleChangeInput = (event) => {
    //Lấy ra name và value
    // let name =event.target.name;
    // let value =event.target.value;
    let { name, value } = event.target;
    //lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute('types');

    // console.log(types)
    // xử lý value
    let newValues ={... this.state.value};//Tạo ra value mới giá trị = value cũ
    newValues[name] = value; // Thay đối giá trị bên trong values

    //xứ lý error
    let newErrors ={... this.state.errors};
    newErrors[name] = value.trim() === '' ? 'Đừng hiếp em' :'';

    //Validation các trường hợp đặt biệt
    if(types === 'phoneNumber'){
        const regexNumber = /^[0-9]+$/;
        if(!regexNumber.test(value.trim())){
            newErrors[name] ='Dữ liệu phải là số!';
        }
    }

    if (types === 'email'){
        const regexEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regexEmail.test(value.trim())){
            newErrors[name] = 'Email không hợp lệ';
        }
    }



    this.setState(
      {
        value:newValues, // Gán Values =value mối
        errors:newErrors,
      },() => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <form className="card" onSubmit ={(event) => {
          // cản sự kiện submit lại trang của browser
          event.preventDefault();

          let valid =true;
          //Duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for(let tenThuocTinh in this.state.value){
              if(this.state.value[tenThuocTinh].trim() === ''){
                  valid = false;
              }
          }
          for(let tenThuocTinh in this.state.errors){
            if(this.state.errors[tenThuocTinh].trim() !== ''){
                valid = false;
            }
          }
          console.log(123);
          if(!valid){
            //   alert('Dử liệu không hợp lệ!');
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
              return; // chặn sự kien submit
          }

          console.log('submit');
      }}>
        <div className="card-header bg-dark text-light font-weight-bold">
          <span>THÔNG TIN NGƯỜI DÙNG</span>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <span>Mã người dùng</span>
                <input value={this.state.value.maNguoiDung}
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
              </div>

              <div className="form-group">
                <span>Tên người dùng</span>
                <input value={this.state.value.tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <span>Số điện thoại</span>
                <input types="phoneNumber" value={this.state.value.soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input types="email" value={this.state.value.email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-success">Thêm Người Dùng</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
