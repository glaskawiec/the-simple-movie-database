import React from 'react';
import PropTypes from 'prop-types';
import SelectStyled from './SelectStyled';
import Label from './Label';
import SelectWrapper from './SelectWrapper';

const Select = ({ label, options }) => (
  <SelectWrapper>
    <Label>{label}</Label>
    <SelectStyled>
      {options.map(option => (<option key={option}>{option}</option>))}
    </SelectStyled>
  </SelectWrapper>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
