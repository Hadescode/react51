import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {
    constructor(props){
        super(props);
        this.state ={

        };
        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps child')
        // return null;
    }

    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate Child')
    //     return true;
    // }
    render() {
        return (
            <div>
                <h3>
                    Child number:{this.props.number.index}
                </h3>
                Component Child
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount Child')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Child')
    }
    componentWillUnmount(){
        //Life cycle chạy trước khi component mất khỏi giao diện
        console.log('componentWillUnmount');
    }
}
