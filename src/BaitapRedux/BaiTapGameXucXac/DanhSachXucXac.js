import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachXucXac extends Component {
    renderXucXac= () =>{
        return this.props.mangXucXac.map((xucXac,index)=>{
            return <img key={index} className="m-3" src={xucXac.hinhAnh} style={{width:"22%", height:"56%",}}></img>
        })
    }
    render() {
        return (
            <div className="row mt-5 text-center">
                <div className="col-4">
                    <button className="p-5 btn btn-success" onClick ={() =>{this.props.datCuoc('Tài');
                }}>
                        <span className="display-4"> Tài</span>
                    </button>
                </div>

                <div className="col-4 d-flex">                
                    {this.renderXucXac()}                    
                </div>

                <div className="col-4">
                    <button className="p-5 btn btn-primary">
                        <span className="display-4" onClick ={() =>{this.props.datCuoc('Xỉu');}}>Xỉu</span>
                    </button>
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    //dispatch là phương thức đưa dữ liệu lên redux store
    return{
        datCuoc:(taiXiu) =>{
            //Tạo ra action
            const action ={
                type:'DAT_CUOC',
                taiXiu
            }
            dispatch(action);
        }
    }
}

// Định Nghĩa Hàm lấy dữ liệu từ state từ redux store về component
const mapStateToProps = state =>{
    return{
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (DanhSachXucXac)