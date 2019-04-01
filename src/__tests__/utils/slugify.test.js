import { expect } from 'chai';
import slugify from '../../utils/slugify';

describe('slugify func tests', () => {
  test('should slugify url properly when url is valid', () => {
    // given
    const urlToParse = 'How To Train Your Dragon';
    const expectedSlugifyUrl = 'how-to-train-your-dragon';

    // when
    const slugifyUrl = slugify(urlToParse);

    // then
    expect(slugifyUrl).to.equal(expectedSlugifyUrl);
  });

  test('should slugify url properly when url is valid with some special characters', () => {
    // given
    const urlToParse = 'How2352:Spi derZz';
    const expectedSlugifyUrl = 'how2352spi-derzz';

    // when
    const slugifyUrl = slugify(urlToParse);

    // then
    expect(slugifyUrl).to.equal(expectedSlugifyUrl);
  });
});
