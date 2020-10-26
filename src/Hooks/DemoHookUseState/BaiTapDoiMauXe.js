import React,{useState} from "react";
//const  arr =[]; các giá trị không phải state, không cần render lại khi setState => để ở ngoài component


export default function BaiTapDoiMauXe() {


const[stateHinh,setStateHinh] = useState('./img/car/products/black-car.jpg');
console.log(stateHinh)

const thayDoiHinhAnh = (color) =>{
    const duongDanMoi =`./img/car/products/${color}-car.jpg`;

    setStateHinh(duongDanMoi);
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>Please choose your favorite about car's color</h2>
          <img
            src={stateHinh}
            alt="hinh"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <span style={{ cursor: "pointer" }} onClick={() =>{thayDoiHinhAnh('black')}}>
                <img src="./img/car/icons/icon-black.jpg" className="w-25" />
                Black Car
              </span>
            </div>
            <div  className="col-3">
              <span style={{ cursor: "pointer" }} onClick={() =>{thayDoiHinhAnh('red')}}>
                <img src="./img/car/icons/icon-red.jpg" className="w-25" />
                Red Car
              </span>
            </div>
            <div className="col-3">
              <span style={{ cursor: "pointer" }} onClick={() =>{thayDoiHinhAnh('silver')}}>
                <img src="./img/car/icons/icon-silver.jpg" className="w-25" />
                Silver Car
              </span>
            </div>
            <div className="col-3">
              <span style={{ cursor: "pointer" }} onClick={() =>{thayDoiHinhAnh('steel')}}>
                <img src="./img/car/icons/icon-steel.jpg" className="w-25" />
                Steel Car
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
