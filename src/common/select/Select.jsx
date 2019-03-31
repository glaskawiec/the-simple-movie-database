import React from 'react';
import PropTypes from 'prop-types';
import SelectStyled from './SelectStyled';
import Label from './Label';
import SelectWrapper from './SelectWrapper';

const Select = ({
  label, options, onChange, value,
}) => (
  <SelectWrapper>
    <Label>{label}</Label>
    <SelectStyled value={value} onChange={onChange}>
      {options.map(({ value: optionValue, label: optionLabel }) => (
        <option value={optionValue} key={optionLabel}>{optionLabel}</option>
      ))}
    </SelectStyled>
  </SelectWrapper>
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
