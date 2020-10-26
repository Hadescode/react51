import React from 'react'
import {useDispatch} from 'react-redux'

export default function KetQuaTrochoiF(props) {
    const dispatch = useDispatch();
    return (
        <div className="text-center m-5">
            <button className="btn btn-success">
                <span className="display-4" onClick={()=>{
                    let action = {
                        type:'RANDOM_XUC_XAC'
                    }
                    dispatch(action);
                }}>PLAY GAME</span>
            </button>
        </div>
    )
}
