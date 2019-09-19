import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Test1 from './src/components/Test1/Test1.jsx';
import Test2 from './src/components/Test2/Test2';
import Test3 from './src/components/Test3/Test3';
import Test4 from './src/components/Test4/Test4';
import Home from './src/home.jsx';
import ColorPicker from './src/components/colorPicker.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <div className="text-center">
            <h1>I-ON Communications Code Test</h1> 
            <p>
              This challenge contains 3 tests. Complete the tests and share us
              your GIT repository.
            </p>
            <h4>Test Pages Links</h4>
            <ul className="test-list">
              <li>
              <Link to="/test1">Test - 1</Link>
              </li>
              <li>
              <Link to="/test2">Test - 2</Link>
              </li>
              <li>
              <Link to="/test3">Test - 3</Link>
              </li>
              <li>
              <Link to="/test4">Test - 4</Link>
              </li>
              <li>
              <Link to="/home">Home</Link>
              </li>
              <li>
              <Link to="/colorPicker">Color</Link>
              </li>
            </ul>
          </div>
          
          <Route path="/test1" component={Test1} />
          <Route path="/test2" component={Test2} />
          <Route path="/test3" component={Test3} />
          <Route path="/test4" component={Test4} />
          <Route path="/home" component={Home} />
          <Route path="/colorPicker" component={ColorPicker} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
