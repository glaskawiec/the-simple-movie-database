import parseDate from '../utils/parseDate';

const movieDetailsModel = {
  title: {
    key: 'title',
    type: 'string',
    default: 'Unknown title',
  },
  description: {
    key: 'overview',
    type: 'string',
    default: '',
  },
  posterPath: {
    key: 'poster_path',
    type: 'string',
    default: null,
  },
  releaseDate: {
    key: 'release_date',
    type: 'string',
    transform: value => (parseDate(value) === 'Invalid Date' ? 'Unknown release date' : parseDate(value)),
    default: 'Unknown release date',
  },
  runtime: {
    key: 'runtime',
    type: 'number',
    default: 'Unknown runtime',
    transform: value => `${value} min`,
  },
  genres: {
    key: 'genres',
    type: 'array',
    default: 'Unknown genres',
    transform: value => value.map(x => x.name).join(', '),
    model: {
      name: {
        key: 'name',
        type: 'string',
      },
    },
  },
};

export default movieDetailsModel;
