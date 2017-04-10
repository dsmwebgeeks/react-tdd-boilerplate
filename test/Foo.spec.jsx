import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { stub, assert as stubAssert } from 'sinon';

import Foo from '../src/Foo';

describe('Foo', () => {
  let clickStub,

    props,
    element;

  beforeEach('set up - build stubs and mocks', () => {
    clickStub = stub();
  });

  beforeEach('set up - render element', () => {
    props = {
      message: 'This is a message',
      whenClicked: clickStub
    };

    element = shallow(<Foo {...props} />);
  });

  it('should render as a div', () => {
    expect(element.type()).to.equal('div');
  });

  it('should have its contents equal to props.message', () => {
    expect(element.text()).to.equal(props.message);
  });

  describe('clicking on it', () => {
    it('should call props.whenClicked', () => {
      stubAssert.notCalled(clickStub);

      element.simulate('click');

      stubAssert.calledOnce(clickStub);
    });
  });
});
