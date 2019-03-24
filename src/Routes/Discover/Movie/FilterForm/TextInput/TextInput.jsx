import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Select/Label';
import InputStyled from './InputStyled';
import TextInputWrapper from './TextInputWrapper';

const TextInput = ({
  label, placeholder, value, onChange,
}) => (
  <TextInputWrapper>
    <Label>{label}</Label>
    <InputStyled
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </TextInputWrapper>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
