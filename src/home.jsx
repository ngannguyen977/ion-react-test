import React, {Component} from 'react';
// import './Home.css';
import Product from './components/products.jsx';

export default class Home extends Component {
    
    onClick(){
        console.log("this is App")
    }
    render(){
        let products = [
            {
                id: 1,
                name: "iphone x",
                price: 10000,
                status: true

            },
            {
                id: 2,
                name: "iphone 9",
                price: 15000,
                status: true

            },
            {
                id: 3,
                name: "iphone 8",
                price: 12000,
                status: true

            }
        ]
        let items = products.map((product, index) =>{
            let result = '';
            if(product.status){
                return <Product 
                key={ product.id}
                price={product.price}>

                {product.name}
                </Product>
            }
            return result;
            
        })
        return(
            <div>
            <div className="container">
                <div className="row">
                    {items}
                </div>
                <div>
                    <button type="button"
                    onClick={this.onClick}
                    >Click</button>
                </div>
            </div>
        </div>
        )
    }
}
