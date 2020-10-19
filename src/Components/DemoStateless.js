//state less component là component function(react function component)

//cú pháp tạo :rfc =>enter
import React from 'react'
export default function DemoStateless() {

    //Bên trong lệnh return của function component là nội dung giao diện của thẻ này. Lưu ý : nội dung component phải được bao phủ bởi 1 thẻ bất kỳ
    return (
        <>

            <div className="card text-white bg-dark w-25 container">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>


        </>
    )
}
