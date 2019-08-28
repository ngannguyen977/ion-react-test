import React, { Component } from "react";
import "./Test2.css";

export default class Test2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: "",
      dateData: "",
      color: ""
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.inputData = "This is initial data.";
      this.dateData = "1551693570892";
      this.color = "#cdcdcd";
    }, 900);
  }

  handleChangeData(newValue) {
    console.log("new Value", newValue);
  }

  render() {
    return (
      <div style={{ width: 800, margin: "0 auto" }}>
        <div className="mb-1">
          <p>
            Implement input, and datepicker, color picker knowing that these
            component get initial data from server and be able to retrieve new
            data as user change it.
          </p>
          <p>
            Use{" "}
            <a
              href="http://element.eleme.io/?ref=madewithvuejs.com#/en-US"
              target="_blank"
            >
              this
            </a>{" "}
            library
          </p>
          {/* Your components goes here!
              
                <your-component
                :data="inputData"
                @change="handleChangeData"
                />
             */}
        </div>
        <div className="row mb-1" />
      </div>
    );
  }
}
