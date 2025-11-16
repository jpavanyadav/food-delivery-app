import React, { Component } from 'react';

class Userclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child constructor");
  }

  componentDidMount(){
    console.log("child mounted");
  }
  render() {
    const { name, role } = this.props;
    const { count } = this.state;
     console.log("child render");

    return (
      <div>
       
        count: {count} <br />
        <button onClick={() => this.setState({ count: count + 1 })}>
          count
        </button>
        name: {name} <br />
        role: {role}
      </div>
    );
  }
}

export default Userclass;

