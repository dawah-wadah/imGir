import values from 'lodash/values';

export const selectAllPosts = (posts) => (
  values(posts).sort((a, b) => (b.id - a.id))
);

export const selectAllComments = ({ comment }, commentIds ) => {
    if(Object.keys(comment.entities).length && commentIds) {
      return commentIds.map( id => comment.entities[id]);
    }
};

export const selectAllResults = (results) => (
  values(results)
);
