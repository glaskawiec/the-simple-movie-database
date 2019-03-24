import React from 'react';
import ErrorMessageText from './ErrorMessageText';
import WarningIcon from './WarningIcon';
import ErrorMessageWrapper from './ErrorMessageWrapper';

const ErrorMessage = () => (
  <ErrorMessageWrapper>
    <WarningIcon>⚠</WarningIcon>
    <ErrorMessageText>Sorry, something went wrong.</ErrorMessageText>
    <ErrorMessageText>Please try again leter.</ErrorMessageText>
  </ErrorMessageWrapper>
);

ErrorMessage.propTypes = {
};

export default ErrorMessage;
