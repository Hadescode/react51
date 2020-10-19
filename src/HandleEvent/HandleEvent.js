import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showTitle = () =>{
        alert('hello CƯng')
    }
    showMess =(mess) =>{
        alert(`Hello ${mess}`)
    }

    render() {
        return (
            <div>
                {/* xử lý sự kiện truyền callback */}
                <button className="btn-success" onClick={this.showTitle}>HEllO</button>

                {/* Xứ lý sự kiện dùng hàm trung gian */}
                <button onClick={() => {
                    this.showTitle();
                }}>Em Pé</button>

                <br>
                </br>

                <button onClick={this.showMess.bind(this,'Nhân')}>SHOW CƯNG</button>

                {/* Dùng hàm có tham số */}
                <button onClick={() =>{
                    this.showMess('Nhân')
                }}>LOV</button>
            </div>
        )
    }
}
