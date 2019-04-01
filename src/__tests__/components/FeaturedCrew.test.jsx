import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FeaturedCrew from '../../routes/movie/featuredCrew/FeaturedCrew';
import ProfileNoImage from '../../routes/movie/featuredCrew/ProfileNoImage';

describe('FeaturedCrew component tests', () => {
  it('should return nothing when data is null', () => {
    const props = {
      data: null,
    };

    const wrapper = shallow(<FeaturedCrew {...props} />);
    const profiles = wrapper.find(ProfileNoImage);

    expect(profiles).to.have.lengthOf(0);
  });

  it('should return nothing when data is empty', () => {
    const props = {
      data: [],
    };

    const wrapper = shallow(<FeaturedCrew {...props} />);
    const profiles = wrapper.find(ProfileNoImage);

    expect(profiles).to.have.lengthOf(0);
  });

  it('should return proper crew profiles when data is not empty', () => {
    const props = {
      data: [
        {
          id: 1,
          name: 'John',
          job: 'Actor',
        },
        {
          id: 2,
          name: 'James',
          job: 'Wick',
        },
      ],
    };

    const wrapper = shallow(<FeaturedCrew {...props} />);
    const profiles = wrapper.find(ProfileNoImage);

    expect(profiles).to.have.lengthOf(2);
  });
});
