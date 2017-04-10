import React, { Component } from 'react';

class Foo extends Component {
  render() {
    let { message, whenClicked } = this.props;

    return <div onClick={whenClicked}>{message}</div>;
  }
}

export default Foo;
