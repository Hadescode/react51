import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycle extends Component {

constructor(props){
    super(props);
    this.state ={
        number: {
            index:1
        }
    };
    console.log('constructor');
}
static getDerivedStateFromProps(newProps,currentState){
    console.log('getDerivedStateFromProps')
    return null;
}

    render() {
        console.log('render')
        return (
            <div>
                <header>
                    HeaderComponent
                </header>
        <h1>LifeCycle number:{this.state.number.index}</h1>
        <button onClick={() => {

            let newNumder ={...this.state.number};
            newNumder.index += 1;


            this.setState({
                number: newNumder
            })
        }}>+</button>
                {/* {this.state.number < 3 ?<ChildComponent/> : ''} */}
                <ChildComponent number={this.state.number}/>
            </div>
        )
    }

    componentDidMount(){
        //Gọi API tai Dismount
        console.log('componentDidMount')
    }

    // Hàm này chay khi setate hoặc khi thay đổi props
    componentDidUpdate () {
        console.log('componentDidUpdate')
    }
}
