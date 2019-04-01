import { expect } from 'chai';
import parseDate from '../../utils/parseDate';

describe('parseDate func tests', () => {
  test('should parse date properly when date is valid', () => {
    // given
    const dateToParse = '2019-10-10';
    const expectedDateString = 'October 10, 2019';

    // when
    const parsedDate = parseDate(dateToParse);

    // then
    expect(parsedDate).to.equal(expectedDateString);
  });

  test('should return  \'Invalid Date\' when date is invalid', () => {
    // given
    const dateToParse = '2019-10--n0';
    const expectedDateString = 'Invalid Date';

    // when
    const parsedDate = parseDate(dateToParse);

    // then
    expect(parsedDate).to.equal(expectedDateString);
  });
});
