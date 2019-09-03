import React, { Component } from "react";
import jsonData from "../JsonFiles/test1.json";
import "./Test1.css";

export default class Test1 extends Component {
    constructor(props) {
        super(props);
        console.log('react-lifecycle : initialization')
        this.state = {
            data: {
                columns: [],
                originalRows: [],
                rows: [],
                //search
                // filtered: [],
            },
            search: "",
            type: "",
            question: "",
            error: false,
            successfull: false
        };
        //search
        this.updateSearch = this.updateSearch.bind(this)

    }

    updateSearch(event) {

        let search = event.target.value

        let filteredItem2 = this.state.data.rows.filter(item => (
            item.order.toString().includes(search)
            || item.type.includes(search)
            || item.question.includes(search)))

        //cap nhat lai state de update GUI
        let data = this.state.data
        data.rows = filteredItem2

        console.log("search", search)
        console.log("filter", filteredItem2)
        this.setState({ search: search, data: data })
    }
    componentWillMount() {
        console.log('react-lifecycle : mounting: willmount')

    }
    componentDidMount() {
        console.log('react-lifecycle : mounting: didmount')
        const newData = {
            columns: [...jsonData.columns],
            rows: [...jsonData.rows],
        };
        this.setState({
            data: newData,
            //search
            //filteredItem2: this.data.rows
        });
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         filtered: nextProps.items
    //     })
    // }

    rows() {
        return this.state.data || [];
    }

    // handleChange(e) {
    //     let currentList = [];
    //     let newList = [];

    //     if (e.target.value !== "") {
    //         currentList = this.props.items;
    //         newList = currentList.filter(item => {
    //             const lc = item.toLowerCase();
    //             const filter = e.target.value.toLowerCase();
    //         });

    //     } else {
    //         // If the search bar is empty, set newList to original task list
    //         newList = this.props.items;
    //     }
    //     // Set the filtered state based on what our rules added to newList
    //     this.setState({
    //         filtered: newList
    //     })
    // }
    // let getdata=(e)=>{
    //   return <div>{e.question}</div>
    // }
    render() {
        console.log('react-lifecycle : mounting: render')
        // let filteredItem = this.state.data.rows.filter((item) => {
        //     console.log("item",item)
        //     let isContain = item.order.toString().includes(this.state.search) || item.type.includes(this.state.search) || item.question.includes(this.state.search);
        //     if(isContain){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // })

        const columns =
            this.state.data.columns &&
            this.state.data.columns.map((col, index) => {
                return (<th scope="col" key={col.field}> {col.label} </th>
                );
            });
        let add = { "order": 9, "type": "product", question: "" }
        this.state.data.rows.push(add)
        let rows =
            this.state.data.rows &&
            this.state.data.rows.map(item => {
                return <tr key={item.order}>
                    <td> {item.order} </td>
                    <td> {item.type} </td>
                    <td> {item.question} </td>
                </tr>
            })

        //  let a = {ngaysinh: "0109"}
        //  a.tuoi=20
        //  a.isMarried = true
        return (<div className="table-wrap coltype"
            style={
                { width: "50%", margin: "0 auto" }} >
            <h4 > Render a datatable using test1.json </h4>
            <p > Note: the amount of Column can be changed dynamically. </p >
            <div className="form-group">
                <label> Type </label>
                <input type="text" className="" />
                <label> Q & A </label>
                <input type="name" className="" />
                <button type="submit" className="btn btn-primary" >Add </button> </div> <br />
            <div className="form-group" >
                <input type="text"
                    value={this.state.search}
                    onChange={(e) => this.updateSearch(e)}
                    className="input"
                    placeholder="Search..."
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
                </colgroup>
                <thead>
                    <tr> {columns} </tr>
                </thead>
                <tbody> {rows} </tbody>
            </table>
        </div>
        );
    }
}