import React from 'react';

export const DeleteButton = ({deleteFunction}) => {
  return (
    <svg onClick={() => deleteFunction()} className='deleteButton'>
      <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2" fill="white" />
      <path stroke="black" strokeWidth="4" fill="none" d="M6.25,6.25,17.75,17.75" />
      <path stroke="black" strokeWidth="4" fill="none" d="M6.25,17.75,17.75,6.25" />
    </svg>

  );
};
