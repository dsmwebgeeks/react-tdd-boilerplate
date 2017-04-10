import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Foo from '../src/Foo';

describe('Foo', () => {
  let element;

  beforeEach('set up', () => {
    element = shallow(<Foo label="hotdog" />);
  });

  it('should render as a div', () => {
    expect(element.type()).to.equal('div');
  });
});
