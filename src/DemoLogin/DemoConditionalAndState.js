import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    // isLogin là thuộc tính của class
    // true: đã login => hiện tên người dùng
    // false: chưa Login => hiện nút Login
    //Khởi tạo 1 State
    // kế thừa từ thằng React
    //state lưu lại những giá trị thay đổi của React
    state ={
        isLogin: false, //Object
    };

    // isLogin =false; => cách này sai vì render không chạy lại

    // Phương thức của Class
    handleLogin = () => {
        console.log("run");
        // this.isLogin = true;
        // this.state.isLogin = true; // => cách này sai vì render không chạy lại
        // phương thức
        this.setState({
            isLogin:true,
        });
    };
    renderLogin = () =>{
            if(this.state.isLogin){
                // hiện tên người dùng
                return <p>Thanh Thanh Thúy Thúy</p>
            }else{
                // hiện nút Login
                return <button onClick={this.handleLogin}>Login</button>
            }
    };

    //render là phương thức cập nhật lại giao diện của mình
    render() {
        console.log("run render");
        return (
            <div>
                <h2>DemoConditionalAndState</h2>
                {/* DataBinding */}
                {this.renderLogin()} 
              
            </div>
        )
    }
}
