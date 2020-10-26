import React, { useState } from "react";

export default function DemoHookUseState() {
  /**
   * VD1:
   */
  // useState thay thế thuộc tính this.state bên react class component
  // const[state,setState] = useState(1);
  // const tangSoLuong = () => {
  //     setState(state+1)
  // }
  //     return (
  //         <div>
  //             <h1>{state}</h1>
  //             <button onClick={()=>{
  //                 tangSoLuong()
  //             }}>+</button>
  //         </div>
  //     )
  /**
   * VD2:
   */
  const [state, setState] = useState({ like: 0 });
  //useState nhận vào input là stateDefault
  // Kết quả trả về là 1 tuple 2 tham số là state,và hàm setState tương tự react LifeCycle(ReactClassComponent)
  const [count, setCount] = useState(0);
  return (
    <div className="m-5" style={{ width: 200, height: 200 }}>
      <div className="card text-left">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="picture"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: "red" }}> {state.like} ♥</p>
        </div>
      </div>
      <span
        className="display-4"
        style={{ color: "pink", cursor: "pointer" }}
        onClick={() => {
          setState({ like: state.like + 1 });
        }}
      >
        ♥
      </span>
    </div>
  );
}
