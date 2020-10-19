/**
 * các bước thực hiện :
 * 1.dàn Layout (html.css)
 * 2.xác định dũ liệu thay đổi và lưu state
 * 3.lấy data trong state đi binding ra jsx
 * 4.render ra danh sách sản phẩm
 * 5.xây dựng chứ năng xem chi tiết
 * 6.xây dựng chức năng thêm vào giỏ hàng
 * 7.xây dựng chức năng tăng giảm số lượng
 * 8.xây dựng chức năng xóa sản phẩm khỏi giỏ hàng
 * 9.xây dựng chức năng hiển thị tổng số sản phẩm trong giỏ hàng
 */

import React, { Component } from "react";
import danhSachSanPham from "./data.json";
import Modal from "./Modal";
import SanPham from "./SanPham";

export default class BaiTapGioHang extends Component {
  //tạo Object Thay Đổi
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [], // cái mảng khi xỏa để hứng thông tin sản Phẩm
  };

  handleCardList = (sanPham) => {
    //tìm vi tri
    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === sanPham.maSP;
    });
    let cardList = [...this.state.cardList]
    if (index !== -1) {
      //tìm thấy => tăng số lượng
      cardList[index].soLuong += 1;
    } else {
      //ko tìm thay  => thêm vào mảng
      const newCard = { ...sanPham, soLuong: 1 };
      cardList = [...cardList, newCard];
    }

    this.setState({
      cardList,
    });
  };

  //sate nằm đâu thì settate nằm đó
  handleSanPhamChiTiet = (sanPhamChiTiet) => {
    this.setState({
      // sanPhamChiTiet: sanPhamChiTiet,
      sanPhamChiTiet,
    });
  };

  renderDanhSachSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            propduct={sanPham}
            xuLyChiTiet={this.handleSanPhamChiTiet}
            handleCardList={this.handleCardList}
          />
        </div>
      );
    });
  };

  deleteItem = (maSP) => {
    // xứ lý giỏ hàng
      console.log('maSP',maSP);
      let gioHangUpdate = [... this.state.cardList];
      const indexSP = gioHangUpdate.findIndex(spGH =>spGH.maSP === maSP);
      if(indexSP !== -1){
        gioHangUpdate.splice(indexSP,1);
      }

    // xét lại state giỏ hàng
    this.setState({
      cardList:gioHangUpdate
    })
  }

  tangGiamSoLuong = (maSP,tangGiam) =>{ //tangGiam =true =>tăng
    console.log('maSP', maSP);
    console.log('tangGiam',tangGiam);
      // set lại state giỏ hàng
      let gioHangUpdate = [... this.state.cardList];
    //Tim sản phẩm trong giỏ hàng
    let spGH = gioHangUpdate.find(sp => sp.maSP === maSP);
    if(spGH){
      //Nếu tìm thấy sản pham63g giỏ hàng đó  != underfine
      if(tangGiam){
        spGH.soLuong += 1;
      }else{
        if(spGH.soLuong > 1){
          spGH.soLuong -= 1;
        }
      }
    }
    //set state giỏ hàng
    this.setState({
      cardList:gioHangUpdate
    })
  }  

  tongSoLuong = () =>{
    let tongSoLuong = this.state.cardList.reduce((soLuong,spGH,index)=>{
      return soLuong += spGH.soLuong;
    },0)
    return tongSoLuong;
  }

  tongTien = () =>{
    let tongTien = this.state.cardList.reduce((tongSoTien,spGH,index)=>{
      return tongSoTien += spGH.soLuong * spGH.giaBan;
    },0)
    return tongTien;
  }


  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({this.tongSoLuong()} - {this.tongTien().toLocaleString()})
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">{this.renderDanhSachSanPham()}</div>
          </div>
          <Modal tangGiamSoLuong={this.tangGiamSoLuong} deleteItem={this.deleteItem} cardList={this.state.cardList} />
          <div className="row">
            <div className="col-sm-5">
              {/*binding */}
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.hinhAnh}
                alt
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>4 GB</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>6 GB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
