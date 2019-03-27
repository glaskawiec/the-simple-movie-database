import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

const Movie = ({ match }) => {
  const { id } = match.params;
  console.log(id);

  return (
    <div />
  );
};

Movie.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Movie;
