import React, {Component} from 'react';
// import './Home.css';
import Product from './components/products.jsx';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [
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
            ],
            isActive : true
        }
    }
    onClick =() =>{
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render(){
       // moi lan map se nhan duoc product va index
       //key phải duy nhất: index
        let items = this.state.products.map((product, index) =>{
            let result = '';
            if(product.status){
                result = <tr key={index}>
                    <td> { index}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            }
            return result;
            
        })
        return(
            <div>
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                    {items}
                    </table>
                </div>
                <div>
                    <button type="button" className="btn btn-primary"
                    onClick={this.onClick}
                    >Click</button>
                </div>
            </div>
        </div>
        )
    }
}
