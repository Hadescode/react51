import React,{useState,useEffect} from 'react'

export default function DemoHookUseEffect() {

    const [number,setNumber] = useState(1);
    // const [object]
        
    // useEffect(() =>{
    //     // Hàm này sẽ chạy khi lần dầu component render và các lần render lại
    //     console.log('componentDidMount');
    // })
    
    // useEffect(() =>{
    //     // Tham số 2 mảng rổng => chỉ thay thế cho componentDidMount
    //     console.log('componentDidMount');
    // },[])


    useEffect(() =>{
        return () =>{
            //Hùy thì component sẽ gọi hàm này
            console.log('Thay cho ComponentWillUnMount')
        }
    })

        
    useEffect(() =>{
        // Tham số 2 mảng là giá trị đó thay đổi thì hàm này sẽ thưc thi
        console.log('componentDidMount');
    },[number])

    return (
        <div>
               <h1>{number}</h1>
               <button onClick={()=>{
                  setNumber(number +1)
              }}>setNumber</button>
        </div>
    )
}
