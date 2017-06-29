
export const editVote = vote => (
  $.ajax({
    method: 'PATCH',
    url: `/api/votes/${vote.id}`,
    data: vote
  })
);

export const createVote = vote => (
  $.ajax({
    method: 'POST',
    url: '/api/votes',
    data: vote
  })
);

export const deleteVote = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/votes'
  })
);
