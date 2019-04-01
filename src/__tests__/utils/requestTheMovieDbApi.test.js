import { expect } from 'chai';
import { fetchMock } from 'fetch-mock';
import apiKey from '../../apiKey';
import config from '../../config';
import requestTheMovieDbApi from '../../utils/requestTheMovieDbApi';

const { apiUrl } = config;
describe('requestTheMovieDbApi func tests', () => {
  test('should request properly without query params', () => {
    // given
    fetchMock.restore();
    fetchMock.mock('*', 200);
    const request = {
      endpoint: '/discover',
    };

    // when
    requestTheMovieDbApi(request);

    // then
    expect(fetchMock.done(`${apiUrl}/discover?api_key=${apiKey}&`)).to.equal(true);
  });

  test('should request properly without with params', () => {
    // given
    fetchMock.restore();
    fetchMock.mock('*', 200);
    const request = {
      endpoint: '/discover',
      queryParameters: {
        test: 'testValue',
      },
    };

    // when
    requestTheMovieDbApi(request);

    // then
    expect(fetchMock.done(`${apiUrl}/discover?api_key=${apiKey}&test=testValue&`)).to.equal(true);
  });
});
