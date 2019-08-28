import React, { Component } from "react";
import data from '../JsonFiles/test4.json'

export default class Test4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }

    total() {
        return;
    }


  render() {
    return (
      <div>
        <h4>Render a datatable using test4.json</h4>
        <p>Note: Calculate Average value, Total value </p>
      </div>
    );
  }
}
