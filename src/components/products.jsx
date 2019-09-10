import React, {Component} from 'react';

export default class Product extends Component {
    constructor(props){
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this)
    }
    onAddToCart(text){
        console.log(text)
    }
    render(){
        return (
            <div>
                <div className="thumbnail">
                    <img />
                    <div className="caption">
                        <h3>{this.props.children}</h3>
                        <p>{this.props.price}</p>
                        <button href="#" onClick={()=>{this.onAddToCart(this.props.children)}}>mua</button>
                    </div>
                </div>
            </div>
        )
    }
}