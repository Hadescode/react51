import React from 'react'
import{connect,useSelector} from 'react-redux'
// import { connect } from 'react-redux'

export default function XucXacF(props) {
    //useSelector là hook thay thế cho phương thức mapSateToProps của react-redux
    //useSelector  dùng để kết nối đến reducer lấy về state
    //const mangXucXac = useSelector(state => state.stateBaiTapGameXucXac.mangXucXac)

    const{mangXucXac,} = useSelector(state => state.stateBaiTapGameXucXac);

    const renderXucXac = () =>{
        return mangXucXac.map((xucXac,index) =>{
            return <img src={xucXac.hinhAnh} key={index} className="m-3"  style={{width:"25%",height:"56%"}}/>
        })

    }

    
    return (
        <div>

            <div className="row text-center">
                <div className="col-4">
                    <button className="btn btn-success p-5">
                        <span className="display-4">TÀI</span>
                    </button>
                </div>
                <div className="col-4">
                    {renderXucXac()}
                </div>
                <div className="col-4">
                <button className="btn btn-danger p-5">
                        <span className="display-4">XỈU</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

//  const mapStateToProps = state =>{
//      mangXucXac: state.stateBaiTapGameXucXac.mangXucXac
//  }


// export default connect(mapStateToProps)(XucXacF);
