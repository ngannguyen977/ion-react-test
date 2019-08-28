import React, { Component } from "react";

export default class Test3 extends Component {
  /********
 * Render a form with the following requirements:
    - Use data from this end point localhost:8080/structure as the structure of this form. Keep in mind that this structure can be changed dynamically.
    - Use data from this end point localhost:8080/data as initial data.
    - Add validation (for fields those marked 'required' in structure)
 * API explaination:
  -
*******/
  render() {
    return (
      <div style={{ width: '800', margin: '0 auto' }}>
    <div>
      <p>Render a dynamic form.</p>
      <p>More detailed in <strong>readme.md</strong> file</p>
    </div>
    {/* <!--Your code goes here!--> */}
  </div>
    );
  }
}
