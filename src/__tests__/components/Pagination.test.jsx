import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Pagination from '../../common/pagination/Pagination';
import Button from '../../common/pagination/Button';

describe('Pagination component tests', () => {
  it('should render previous button and next button when current page is smaller than total pages and total pages number is bigger then current page', () => {
    const props = {
      total: 10,
      current: 2,
      onPageChange: jest.fn(),
    };

    const wrapper = shallow(<Pagination {...props} />);

    const buttons = wrapper.find(Button);

    expect(buttons).to.have.lengthOf(2);
    expect(buttons.at(0).text()).to.be.equal('← Previous');
    expect(buttons.at(1).text()).to.be.equal('Next →');
  });

  it('should not render previous button when current page smaller or equal to 1', () => {
    const props = {
      total: 10,
      current: 1,
      onPageChange: jest.fn(),
    };

    const wrapper = shallow(<Pagination {...props} />);

    const buttons = wrapper.find(Button);

    expect(buttons).to.have.lengthOf(1);
    expect(buttons.at(0).text()).to.be.equal('Next →');
  });

  it('should not render next button when current page is equal to total pages number', () => {
    const props = {
      total: 10,
      current: 110,
      onPageChange: jest.fn(),
    };

    const wrapper = shallow(<Pagination {...props} />);

    const buttons = wrapper.find(Button);

    expect(buttons).to.have.lengthOf(1);
    expect(buttons.at(0).text()).to.be.equal('← Previous');
  });
});
