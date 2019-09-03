import React, { Component } from "react";
import jsonData from "../JsonFiles/test1.json";
import "./Test1.css";


export default class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                columns: [],
                originalRows: [],
                rows: [],
            },
            query: "",
            type: "",
            question: "",
            error: false,
            successfull: false,
            // step 1: khoi tao gia tri de luu gia tri nhap trong o search
            search: "" // luc dau, search bang "" khi e start chuong trinh
        };
        //search
    }
    addItem(e){
        e.preventDefault();
        let newList=[];
        let list = this.state.list;
        const newItem = document.getElementById("addInput");
        const form = document.getElementById("addItemForm");

        if(newItem.value !=""){
            list.push(newItem.value);
            list.rows = newList;
            this.setState({
                list:list
            });
        }
    }
    componentDidMount() {
        const newData = {
            columns: [...jsonData.columns],
            rows: [...jsonData.rows],
            originalRows: [...jsonData.rows],
        };
        this.setState({
            data: newData,
        });
    }
    rows() {
        return this.state.data || [];
    }
    //step 2: ham Search de handle input tu o Searchbox
    search(text) {
        let newData = this.state.data
        let listAfterSearch = []
         // neu e nhap gi do vao o search
        if (text) {
            // list sau khi search
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
                return (<th scope="col" key={col.field}> {col.label} </th>
                );
            });
            // tam thoi bo di cho e do roi
        // let add = { "order": 9, "type": "product", "question": "How do I use the mobile remote control service?" }
        // this.state.data.rows.push(add)
        let rows =
            this.state.data.rows &&
            this.state.data.rows.map(item => {
                return <tr key={item.order}>
                    <td> {item.order} </td>
                    <td> {item.type} </td>
                    <td> {item.question} </td>
                </tr>
            })

        
        return (<div className="table-wrap coltype"
            style={
                { width: "50%", margin: "0 auto" }} >
            <h4 > Render a datatable using test1.json </h4>
            <p > Note: the amount of Column can be changed dynamically. </p >
            <form className="form-group">
                <label> Type </label>
                <input type="text" className="" />
                <label> Q & A </label>
                <input type="name" className=""  id="addInput" />
                <button type="submit" className="btn btn-primary" onClick ={this.addItem}>Add </button> </form> <br />
            <div className="form-group" >
                <input type="text"
                    // step 3: gan cai ham search vs variable search: this.state.search cua e vao day
                    onChange={e => this.search(e.target.value)} // gan su kien search
                    value={this.state.search} // gan bien search
                    className="input"
                    placeholder="Search..."
                    defaultValue=""// them cho khoi warning
                    style={
                        { width: '500' }
                    }
                />
                <button type="submit" className="btn btn-primary" >Search </button>
            </div > { /* <input type="text" className="form-control m-0" /> */}
            <table className="table ui-accordion" >
                <caption />
                <colgroup>
                    <col style={{ width: 10 }} />
                    <col style={{ width: 50 }} />
                    <col style={{ width: 30 }} />
                </colgroup >
                <thead>
                    <tr> {columns} </tr>
                </thead >
                <tbody> {rows} </tbody>
            </table >
        </div>
        );
    }
}