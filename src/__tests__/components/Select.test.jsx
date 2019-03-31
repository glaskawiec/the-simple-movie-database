import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Select from '../../common/select/Select';
import SelectStyled from '../../common/select/SelectStyled';

describe('Select component tests', () => {
  it('should call proper onChange handler after select changed', () => {
    const props = {
      label: 'test',
      value: 'test',
      onChange: jest.fn(),
      options: [{ label: 'a', value: 'a' }],
    };

    const wrapper = shallow(<Select {...props} />);

    const input = wrapper.find(SelectStyled);

    const callParam = { value: 'Test' };

    input.simulate('change', callParam);

    expect(props.onChange.mock.calls.length).to.equal(1);
    expect(props.onChange.mock.calls[0][0]).to.equal(callParam);
  });
});
