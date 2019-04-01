import parseDate from '../utils/parseDate';

const moviesListModel = {
  totalPages: {
    key: 'total_pages',
    type: 'number',
  },
  movies: {
    key: 'results',
    type: 'array',
    model: {
      id: {
        key: 'id',
        type: 'number',
      },
      posterPath: {
        key: 'poster_path',
        type: 'string',
        default: null,
      },
      releaseDate: {
        key: 'release_date',
        type: 'string',
        default: 'Unknown release date',
        transform: value => (parseDate(value) === 'Invalid Date' ? 'Unknown release date' : parseDate(value)),
      },
      title: {
        key: 'title',
        type: 'string',
        default: '',
      },
      description: {
        key: 'overview',
        type: 'string',
        default: '',
      },
    },
  },
};

export default moviesListModel;
