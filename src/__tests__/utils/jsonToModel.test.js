import { expect } from 'chai';
import jsonToModel from '../../utils/jsonToModel';

describe('jsonToModel func tests', () => {
  test('should parse prop properly with given key', () => {
    // given
    const json = {
      variable_: 'testValue',
    };

    const model = {
      var: {
        key: 'variable_',
        type: 'string',
      },
    };

    const expectedResult = {
      var: 'testValue',
    };

    // when
    const normalizedData = jsonToModel(json, model);

    // then
    expect(normalizedData).to.deep.equal(expectedResult);
  });

  test('should parse array properly with given keys', () => {
    // given
    const json = {
      _movies: [
        { id: 1, title: 'testTitle' },
      ],
    };

    const model = {
      movies: {
        key: '_movies',
        type: 'array',
        model: {
          id: {
            key: 'id',
            type: 'number',
          },
          movieTitle: {
            key: 'title',
            type: 'string',
          },
        },
      },
    };

    const expectedResult = {
      movies: [{
        id: 1,
        movieTitle: 'testTitle',
      }],
    };

    // when
    const normalizedData = jsonToModel(json, model);

    // then
    expect(normalizedData).to.deep.equal(expectedResult);
  });

  test('should use defaultValue when value is null', () => {
    // given
    const json = {
      _var: null,
    };

    const model = {
      variable: {
        key: '_var',
        type: 'string',
        default: 'defaultValue',
      },
    };

    const expectedResult = {
      variable: 'defaultValue',
    };

    // when
    const normalizedData = jsonToModel(json, model);

    // then
    expect(normalizedData).to.deep.equal(expectedResult);
  });

  test('should use defaultValue when value is undefined', () => {
    // given
    const json = {
      _var: undefined,
    };

    const model = {
      variable: {
        key: '_var',
        type: 'string',
        default: 'defaultValue',
      },
    };

    const expectedResult = {
      variable: 'defaultValue',
    };

    // when
    const normalizedData = jsonToModel(json, model);

    // then
    expect(normalizedData).to.deep.equal(expectedResult);
  });

  test('should properly use transform func', () => {
    // given
    const json = {
      _var: 'Value',
    };

    const model = {
      variable: {
        key: '_var',
        type: 'string',
        transform: value => `transformed${value}`,
      },
    };

    const expectedResult = {
      variable: 'transformedValue',
    };

    // when
    const normalizedData = jsonToModel(json, model);

    // then
    expect(normalizedData).to.deep.equal(expectedResult);
  });
});
