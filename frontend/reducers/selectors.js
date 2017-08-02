import values from 'lodash/values';

export const selectAllPosts = (posts) => (
  values(posts).sort((a, b) => (b.id - a.id))
);

export const selectAllComments = ({ comment }, commentIds ) => {
    if( comment.entities && values(comment.entities).length && commentIds) {
      return commentIds.map( id => comment.entities[id]);
    } else { return null ;}
};

export const selectAllResults = (search) => {
  
  return (
  values(search)
)};
