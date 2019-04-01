import { expect } from 'chai';
import cloneObject from '../../utils/cloneObject';

describe('cloneObject func tests', () => {
  test('should clone object properly', () => {
    // given
    const object = {
      test: 2,
      a: 3,
      c: {
        d: 5,
      },
    };

    // when
    const clonedObject = cloneObject(object);

    // then
    expect(clonedObject).to.deep.equal(object);
  });
});
