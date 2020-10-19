import React, { Component } from 'react'
import {connect} from 'react-redux';
 class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;

        return (
                <div classname="card text-left">
                    <img style={{width:'100%',height:300}} classname="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div classname="card-body">
                        <h4 classname="card-title">{sanPham.tenSP}</h4>
                        <p classname="card-text">{sanPham.giaBan}</p>
                        <button onClick={() => {
                          //Gọi hàm dc tạo ra từ mapDispatchToProps
                          this.props.themGioHang(sanPham);
                        }} className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                </div>
        )
    }
}
// Hàm lấy state từ redux biến thành props component
const mapStateToProps = (state) =>{
  return{

  }
}


// hàm tạo ra 1 hàm xử lý đẻ đưa ra giá trị lên redux
const mapDispatchToProps = (dispatch) => {
  return{
    themGioHang:(sanPhamClick) => {
      // từ san phẩm được click = tạo ra sp giỏ hàng
      let spGH = { ... sanPhamClick,soLuong:1};


      // Để gửi giá trị lên reducer cấn 1 object có thuộc tính type để phân biệt state nào thay đổi
      // console.log(sanPhamClick);
      let action ={
        type: 'THEM_GIO_HANG',// Thuộc tính bắt buộc
        spGH:spGH //giá trị gửi đi payload
      }

      // Dùng hàm dispatch mà redux cung cấp lên reducer
      dispatch(action);
    }
  }
}

/**
 * Tham số 1 hàm connect là 1 hàm (callbackFunction): lấy giá trị từ reducer về
 * Tham số 2 hàm connect là 1 hàm (callbackFunction): đưa các giá trị lên reducer
 */

export default connect(null,mapDispatchToProps)(SanPhamRedux);