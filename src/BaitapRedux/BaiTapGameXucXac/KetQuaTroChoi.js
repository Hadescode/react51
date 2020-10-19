import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  renderKetQua = () => {
    // Sử dụng thuộc tính this.props.mangXucXac để hiển thị kết quả
    let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
      return (tongDiemXX += xucXac.so);
    }, 0);

    let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";
    return (
      <div>
        <span className="display-4 text-dark">
          {tongDiem}-{ketQua}
        </span>
      </div>
    );
  };

  render() {
    return (
      <div className="container text-center mt-5">
        <div className="display-4">
            {this.renderKetQua()}
        </div>
        <div className="display-4">
          Bạn Chọn: <span className="text-danger">{this.props.banChon}</span>
        </div>

        <div className="display-4">
          Số Bàn Thắng:
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>

        <div className="display-4">
          Tổng Số Bàn Chơi:
          <span className="text-primary">{this.props.tongSobanChoi}</span>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 mt-2"
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;

      //setInterval là hàm thực thi liên tục theo thời gian quy định => thực thi cho đến khi ta gọi clearInterval
      let randomXucXac = setInterval(() => {
        const action = {
          type: "RANDOM_XUC_XAC",
        };
        dispatch(action);
        n++;
        if (n === 10) {
          //dừng hàm
          clearInterval(randomXucXac);

          //dispatch action xử lý kết quả
          const actionXLKQ = {
            type: "END_GAME",
          };
          dispatch(actionXLKQ);
        }
      }, 200);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    banChon: state.stateBaiTapGameXucXac.banChon,
    soBanThang: state.stateBaiTapGameXucXac.soBanThang,
    tongSobanChoi: state.stateBaiTapGameXucXac.tongSobanChoi,
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
