import React, { Component } from 'react'

export default class Databinding extends Component {

    hocVien = {
        //Thuộc tính của lớp đối tượng  =>sử dụng được ở nhiều phương thức trong lớp đối tượng
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Thanh Thúy',
    }
     //Phương thức  => phương thức có thể gọi trong các phương thức khác của lớp đối tượng
     renderHocVien = () => {
        return <div className="card border-dark">
            <img className="card-img-top" src="{this.hocVien.avatar}" alt />
            <div className="card-body">
                <h4 className="card-title">{'{'}this.hocVien.tenHocVien{'}'}</h4>
                <p className="card-text">{'{'}this.hocVien.ma{'}'}</p>
            </div>
        </div>

    }

    render() {
        let title = 'CYBERSOFT';
        let imgSrc = 'https://picsum.photos/200/200';

        //binding data là hàm
        const renderImg = () => {
            //Giá trị hàm muốn render ra giao diện phải trả về chuổi, số , hoặc jsx
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>

                </div>
            </div>

        }

        return (
            <div>
                <div id="title">
                    {title}
                </div>
                <div className="w-25">
                    <img src={imgSrc} />
                </div>

                <input className="w-50 from-control" value={title} />
                {renderImg()}
                Databinding
                <ul>
                    <li>Mã Hoc Viên:{this.hocVien.ma}</li>
                    <li>Tên Hoc Viên:{this.hocVien.tenHocVien}</li>
                    <li>Hình Ảnh:<img src={this.hocVien.avatar} width="200" height="200" /></li>
                </ul>

                {this.renderHocVien()}
            </div>
        )
    }
}
