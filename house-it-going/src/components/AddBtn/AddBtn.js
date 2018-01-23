import React from 'react';

const AddBtn = props => (
  <button
    onClick={props.handleBtnClick}
    className={`add-btn ${props["data-value"]}`}
    {...props}>
  Save
  </button>
);

export default AddBtn;