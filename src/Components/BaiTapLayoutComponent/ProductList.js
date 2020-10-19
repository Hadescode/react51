import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ProductList extends Component {
    render() {
        return (
            <>
                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <ProductComponent />
                        <ProductComponent />
                        <ProductComponent />
                        <ProductComponent />
                    </div>
                </section>
            </>
        )
    }
}
