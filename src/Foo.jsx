import React, {Component} from 'react';

class Foo extends Component {
  render() {
    let label = this.props.label || "Awesome";

    return <div>{label}</div>;
  }
}

export default Foo;
