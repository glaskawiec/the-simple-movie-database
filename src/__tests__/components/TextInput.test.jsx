import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TextInput from '../../common/textInput/TextInput';
import InputStyled from '../../common/textInput/InputStyled';

describe('TextInput component tests', () => {
  it('should call proper onChange handler after select changed', () => {
    const props = {
      label: 'test',
      value: 'test',
      placeholder: 'test',
      onChange: jest.fn(),
    };

    const wrapper = shallow(<TextInput {...props} />);

    const input = wrapper.find(InputStyled);

    const callParam = { value: 'Test' };

    input.simulate('change', callParam);

    expect(props.onChange.mock.calls.length).to.equal(1);
    expect(props.onChange.mock.calls[0][0]).to.equal(callParam);
  });
});
