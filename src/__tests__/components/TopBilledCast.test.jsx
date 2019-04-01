import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FeaturedCrew from '../../routes/movie/featuredCrew/FeaturedCrew';
import ProfileNoImage from '../../routes/movie/featuredCrew/ProfileNoImage';
import TopBilledCast from '../../routes/movie/topBilledCast/TopBilledCast';

describe('TopBilledCast component tests', () => {
  it('should return nothing when data is null', () => {
    const props = {
      data: null,
    };

    const wrapper = shallow(<TopBilledCast {...props} />);
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

  it('should return proper cast profiles when data is not empty', () => {
    const props = {
      data: [
        {
          id: 1,
          name: 'Johny',
          job: 'Deep',
        },
        {
          id: 2,
          name: 'Robert',
          job: 'De Niro',
        },
      ],
    };

    const wrapper = shallow(<FeaturedCrew {...props} />);
    const profiles = wrapper.find(ProfileNoImage);

    expect(profiles).to.have.lengthOf(2);
  });
});
