import React, {Component} from 'react';
import './colorPicker.css';

 export default class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            colors :['red', 'green', 'blue']
        }
    }
    //hàm có đầu vào là color
    showColor(color){
        
       return {
           backgroundColor : color
       }
       
    }

    render(){
        let listColors = this.state.colors.map((color,index)=>{
            // nơi show ra các list color đề chọn
            //truyền vào color
            return <span className="box-color" key={index} style={this.showColor(color)}></span>
        })
        console.log('listcolor', this.state.colors)
        return(
            <div className="col-md-6">
                <div className="panel panel-primary">
                    <div className="panel panel-heading">
                        Choose color
                    </div>
                    <div className="list-color panel panel-body">
                        {listColors}
                    </div>
                </div>
            </div>
        )
    }
 }