import React, {Component} from 'react';

class Foo extends Component {
  render() {
    let {message} = this.props;

    return <div>{message}</div>;
  }
}

export default Foo;
