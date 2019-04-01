
const movieCreditsModel = {
  cast: {
    key: 'cast',
    type: 'array',
    transform: value => value.slice(0, 6),
    model: {
      id: {
        key: 'id',
        type: 'number',
      },
      profilePath: {
        key: 'profile_path',
        type: 'string',
      },
      job: {
        key: 'job',
        type: 'string',
      },
      name: {
        key: 'name',
        type: 'string',
      },
      character: {
        key: 'character',
        type: 'string',
      },
    },
  },
  crew: {
    key: 'crew',
    type: 'array',
    transform: value => value.slice(0, 6),
    model: {
      job: {
        key: 'job',
        type: 'string',
      },
      name: {
        key: 'name',
        type: 'string',
      },
      id: {
        key: 'credit_id',
        type: 'string',
      },
    },
  },
};

export default movieCreditsModel;
