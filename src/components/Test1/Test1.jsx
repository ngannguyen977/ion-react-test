import React, { Component } from "react";
import jsonData from "../JsonFiles/test1.json";
import "./Test1.css";


export default class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            //1
            data: {
                columns: [],
                originalRows: [],
                rows: [],
            },
            query: "",
            type: "",
            qa:"",
            question: "",
            error: false,
            successfull: false,
            // step 1: khoi tao gia tri de luu gia tri nhap trong o search
            search: "" // luc dau, search bang "" khi e start chuong trinh
        };
        //search
    }
    getType(val){
       this.setState({
           type: val
       })
    }
    getQA(val){
        this.setState({
            qa:val
        })
    }
    addItem(){
        let max = Math.max(...this.state.data.rows.map(x=>x.order))
        let newRow={
            order:max + 1,
            type:this.state.type,
            question: this.state.qa
        }
        let newData = this.state.data;
        newData.rows.push(newRow)
        newData.originalRows.push(newRow)
        this.setState({
            //cap nhat cho data 1
            data: newData
        })

    }
    updateItem(item){
        console.log("updat:", item)
    }
    deleteItem(order){
        console.log("delete", item)
      let newData = this.state.data
      newData.rows = newData.rows.filter(x=>x.order != order)
    //   const list = this.state.data.rows.slice();
    //    // Check to see if item passed in matches item in array
    //     list.some((el, i) => {
    //         if (el === item) {
    //         // If item matches, remove it from array
    //         list.splice(i, 1);
    //         return true;
    //     }
    //     });
        // Set state to list
        this.setState({
            data: newData
        });
    }

    componentWillMount() {
        const newData = {
            columns: [...jsonData.columns],
            rows: [...jsonData.rows],
            originalRows: [...jsonData.rows],
        };
        this.setState({
            data: newData,
        });
    }

    //step 2: ham Search de handle input tu o Searchbox
    search(text) {
        let newData = this.state.data
        let listAfterSearch = []
         // neu e nhap gi do vao o search
        if (text) {
            // list sau khi search
            // includes : bao gom
            listAfterSearch = this.state.data.rows.filter(item => (
                item.order.toString().includes(text)
                || item.type.includes(text)
                || item.question.includes(text)
            ))
        } else {
            // neu o search rong, tra lai list ban dau
            listAfterSearch = this.state.data.originalRows
        }
        // cap nhat lai state
        newData.rows = listAfterSearch
        this.setState({
            search: text,
            data: newData
        })
    }

    render() {

        const columns =
            this.state.data.columns &&
            this.state.data.columns.map((col, index) => {
                return (<th scope="col" key={col.field}> {col.label} </th>);
            });
            // tam thoi bo di cho e do roi
        // let add = { "order": 9, "type": "product", "question": "How do I use the mobile remote control service?" }
        // this.state.data.rows.push(add)
        let rows =
            this.state.data.rows &&
            this.state.data.rows.map(item => {
                return <tr key={item.order}>
                    <td>{item.order}</td>
                    <td> <input defaultValue={item.type}/></td>
                    <td> <input value={item.question}/> </td>
                    <td><button onClick={() => this.updateItem(item)}>Update</button></td>
                    <td><button onClick={() => this.deleteItem(item.order)}>Delete</button></td>
                </tr>
            })


        return (<div className="table-wrap coltype"
            style={
                { width: "50%", margin: "0 auto" }} >
            <h4 > Render a datatable using test1.json </h4>
            <p > Note: the amount of Column can be changed dynamically. </p >
            <div className="form-group">
                <label> Type </label>
                <input
                onChange ={e=>this.getType(e.target.value)}
                value={this.state.type}
                type="text"
                className=""
                />
                <label> Q & A </label>
                <input
                onChange={e=>this.getQA(e.target.value)}
                value={this.state.qa}
                 type="name"
                 className=""
                 />
                <button className="btn btn-primary" onClick ={e=>this.addItem()}>Add </button> </div> <br />
            <div className="form-group" >
                <input type="text"
                    // step 3: gan cai ham search vs variable search: this.state.search cua e vao day
                    onChange={e => this.search(e.target.value)} // gan su kien search
                    value={this.state.search} // gan bien search
                    className="input"
                    placeholder="Search..."
                    defaultValue=""// them cho khoi warning

                />
                <button type="submit" className="btn btn-primary" >Search </button>
            </div >
            <table className="table ui-accordion" >
                <thead>
                    <tr>{columns}<td>Action</td></tr>
                </thead >
                <tbody> {rows} </tbody>
            </table >
        </div>
        );
    }
}