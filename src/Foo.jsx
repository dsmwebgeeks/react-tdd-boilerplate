import React, {Component} from 'react';

class Foo extends Component {
  render() {
    return <div onClick={this.props.whenClicking} />;
  }
}

export default Foo;
