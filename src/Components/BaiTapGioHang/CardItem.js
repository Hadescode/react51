import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
      let {card,tangGiamSoLuong,deleteItem} = this.props;
    return (
      <tr className="card-item">
        <td>{card.maSP}</td>
        <td>{card.tenSP}</td>
        <td>
          <img src={card.hinhAnh} width={50} alt />
        </td>
        <td>
          <button onClick={()=>{tangGiamSoLuong(card.maSP,false)}}>-</button>{card.soLuong}
          <button onClick={()=>{tangGiamSoLuong(card.maSP,true)}}>+</button>
        </td>
        <td>{card.giaBan.toLocaleString()}</td>
        <td>{(card.giaBan *  card.soLuong).toLocaleString()}</td>
        <td>
          <button onClick={() =>{deleteItem(card.maSP)}} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
