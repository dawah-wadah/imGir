import React from 'react';

export const fetchSearch = query => (
  $.ajax({
    method: 'get',
    url: '/api/search',
    data: { query }
  })
);
