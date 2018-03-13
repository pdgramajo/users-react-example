import React from 'react';
//import PropTypes from 'prop-types';

const selectControl = ({ input, label, meta: { asyncValidating, touched, error }, ...custom }) => {

  return (
    <select
      className='select'
      {...input}
      {...custom}
      value={custom.defaultValue || input.value}
      style={{ width: '100%' }}
      onChange={value => input.onChange([value])}
      disabled={custom.disabled}>
      {GetOptions(custom.options, custom.dataindex)}
    </select>
  );
};

function GetOptions(data, dataindex = { id: 'id', name: 'name' }) {
  const options = [];
  if (data && data.length > 0) {
    options.push(data.map(option =>
      <option key={option[dataindex.id]} value={option[dataindex.id].toString()} text={option[dataindex.name]}>
        {option[dataindex.name]}
      </option>
    ));
  }
  return options;
}

export default selectControl;
